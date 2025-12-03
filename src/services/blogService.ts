import { db } from "../firebase/firebaseConfig";
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
  startAfter,
  updateDoc,
} from "firebase/firestore";
import { POSTS_COLLECTION, DATE_FIELD, PAGE_SIZE } from "../constants/blog";
import type { IPost } from "../types/types";

export type PageCursor = QueryDocumentSnapshot<DocumentData> | null;

const collRef = collection(db, POSTS_COLLECTION);

export const getTotalPostsCount = async (): Promise<number> => {
  const agg = await getCountFromServer(collRef);
  return agg.data().count;
};

export const snapshotToPosts = (
  docs: QueryDocumentSnapshot<DocumentData>[]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): IPost[] => docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as IPost[];

export const fetchPostsPage = async (
  page: number,
  cursor: PageCursor
): Promise<{ posts: IPost[]; nextCursor: PageCursor }> => {
  const collRef = collection(db, POSTS_COLLECTION);
  const qBase =
    page === 1
      ? query(collRef, orderBy(DATE_FIELD, "desc"), limit(PAGE_SIZE))
      : query(
          collRef,
          orderBy(DATE_FIELD, "desc"),
          startAfter(cursor!),
          limit(PAGE_SIZE)
        );

  const snap = await getDocs(qBase);
  const posts = snapshotToPosts(snap.docs);
  const nextCursor = snap.docs.length ? snap.docs[snap.docs.length - 1] : null;
  return { posts, nextCursor };
};

export const createPost = async (post: Omit<IPost, "id">): Promise<DocumentData> => {
  return addDoc(collRef, post);
};

export const editPosts = async (
  id: IPost["id"],
  edit: Partial<Omit<IPost, "id">>
): Promise<void> => {
  const postDoc = doc(collRef, id);
  await updateDoc(postDoc, edit);
};

export const deletePost = async (id: IPost["id"]): Promise<void> => {
  const postDoc = doc(collRef, id);
  await deleteDoc(postDoc);
};
