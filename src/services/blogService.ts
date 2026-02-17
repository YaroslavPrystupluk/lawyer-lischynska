import { db, storage } from "../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  serverTimestamp,
  startAfter,
  updateDoc,
} from "firebase/firestore";

import {
  POSTS_COLLECTION,
  DATE_FIELD,
  PAGE_SIZE,
  IMAGE_COLLECTION,
} from "../constants/blog";
import type { Post } from "../types/types";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export type PageCursor = QueryDocumentSnapshot<DocumentData> | null;

const collRef = collection(db, POSTS_COLLECTION);

const id = crypto.randomUUID();
const imgRef = ref(storage, `${IMAGE_COLLECTION}/image-${Date.now()}-${id}`);

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

export const createPost = async (post: Omit<Post, "id">) => {
  return addDoc(collection(db, "posts"), {
    ...post,
    createDateAt: serverTimestamp(),
  });
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

export const addImage = async (image: Blob | Uint8Array | ArrayBuffer) => {
  await uploadBytes(imgRef, image);
  const imgUrl = await getDownloadURL(imgRef);
  return imgUrl;
};

export const deleteImage = async (imgUrl: string) => {
  const postImg = ref(storage, imgUrl);
  deleteObject(postImg);
};
