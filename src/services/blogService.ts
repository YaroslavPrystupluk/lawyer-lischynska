import { db } from "../firebase/firebaseConfig";
import {
  collection,
  DocumentData,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";
import { POSTS_COLLECTION, DATE_FIELD, PAGE_SIZE } from "../constants/blog";
import type { IPost } from "../types/types";

export type PageCursor = QueryDocumentSnapshot<DocumentData> | null;

export const getTotalPostsCount = async (): Promise<number> => {
  const collRef = collection(db, POSTS_COLLECTION);
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
