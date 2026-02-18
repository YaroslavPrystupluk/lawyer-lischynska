import {db, storage} from "../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  serverTimestamp,
  startAfter,
  updateDoc,
} from "firebase/firestore";

import {DATE_FIELD, IMAGE_COLLECTION, PAGE_SIZE, POSTS_COLLECTION,} from "../constants/blog";
import type {Post} from "../types/types";
import {deleteObject, getDownloadURL, ref, uploadBytes,} from "firebase/storage";

export type PageCursor = QueryDocumentSnapshot<DocumentData> | null;

const collRef = collection(db, POSTS_COLLECTION);


export const getTotalPostsCount = async (): Promise<number> => {
  const agg = await getCountFromServer(collRef);
  return agg.data().count;
};

export const snapshotToPosts = (
  docs: QueryDocumentSnapshot<DocumentData>[],

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Post[] => docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as Post[];

export const fetchPostsPage = async (
  page: number,
  cursor: PageCursor,
): Promise<{ posts: Post[]; nextCursor: PageCursor }> => {
  const collRef = collection(db, POSTS_COLLECTION);
  const qBase =
    page === 1
      ? query(collRef, orderBy(DATE_FIELD, "desc"), limit(PAGE_SIZE))
      : query(
          collRef,
          orderBy(DATE_FIELD, "desc"),
          startAfter(cursor!),
          limit(PAGE_SIZE),
        );

  const snap = await getDocs(qBase);
  const posts = snapshotToPosts(snap.docs);
  const nextCursor = snap.docs.length ? snap.docs[snap.docs.length - 1] : null;
  return { posts, nextCursor };
};

export const showPost = async (id: Post['id']): Promise<Post & { id: string }> => {
  const postRef = doc(collRef, id);
  const snap = await getDoc(postRef);

  if (!snap.exists()) throw new Error("Пост не знайдено");

  const data = snap.data() as Omit<Post, 'id'>;

  return { id: snap.id, ...data };
}

export const postsService = {
  createPostWithImage: async (post: Omit<Post, "id"> & { img: Blob | Uint8Array | ArrayBuffer }) => {
    let imageUrl: string | undefined = undefined;

    if (post.img) {
      const id = crypto.randomUUID();
      const imgRef = ref(storage, `${IMAGE_COLLECTION}/image-${Date.now()}-${id}`);
      await uploadBytes(imgRef, post.img);
      imageUrl = await getDownloadURL(imgRef);
    }

    return await addDoc(collRef, {
      ...post,
      img: imageUrl,
      createDateAt: serverTimestamp(),
    });
  },
};

export const editPosts = async (
  id: Post["id"],
  edit: Partial<Omit<Post, "id">>,
): Promise<void> => {
  const postDoc = doc(collRef, id);
  await updateDoc(postDoc, edit);
};

export const deletePost = async (id: Post["id"]): Promise<void> => {
  const postDoc = doc(collRef, id);
  await deleteDoc(postDoc);
};



export const deleteImage = async (imgUrl: string) => {
  const deleteImgRef = ref(storage, imgUrl);
  return await deleteObject(deleteImgRef);
};
