import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  PAGE_PARAM,
  STORAGE_KEY,
  PAGE_SIZE,
  PAGE_WINDOW,
} from "../constants/blog";
import {
  clamp,
  getPageFromStorage,
  getPageFromUrl,
  scrollUnderHeader,
  setPageInStorage,
  setPageInUrl,
} from "../utils/pagination";
import {
  fetchPostsPage,
  getTotalPostsCount,
  PageCursor,
} from "../services/blogService";
import type { Post } from "../types/types";

export const useBlogPagination = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const [currentPage, setCurrentPage] = useState<number>(() => {
    const urlPage = getPageFromUrl(PAGE_PARAM);
    if (urlPage && urlPage > 0) return urlPage;
    const stored = getPageFromStorage(STORAGE_KEY);
    return stored && stored > 0 ? stored : 1;
  });

  const cursorCache = useRef<Record<number, PageCursor>>({});

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(totalCount / PAGE_SIZE)),
    [totalCount]
  );

  const visiblePages = useMemo(() => {
    if (!pageCount) return [1];
    const half = Math.floor(PAGE_WINDOW / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(pageCount, start + PAGE_WINDOW - 1);
    start = Math.max(1, Math.min(start, end - PAGE_WINDOW + 1));
    const arr: number[] = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }, [currentPage, pageCount]);

  const hasMore = currentPage < pageCount;
  const showPagination = pageCount > 1;

  const loadPage = useCallback(
    async (
      targetPage: number,
      opts?: { alreadyLoading?: boolean; knownTotal?: number }
    ) => {
      if (targetPage < 1) targetPage = 1;

      const effectiveTotal =
        typeof opts?.knownTotal === "number" ? opts!.knownTotal : totalCount;

      if (effectiveTotal > 0) {
        const effectivePageCount = Math.max(
          1,
          Math.ceil(effectiveTotal / PAGE_SIZE)
        );
        targetPage = clamp(targetPage, 1, effectivePageCount);
      }

      if (!opts?.alreadyLoading) setLoading(true);
      try {
        let knownPage = 1;
        let cursor: PageCursor = null;

        if (cursorCache.current[targetPage] || targetPage === 1) {
          knownPage = targetPage;
          cursor = cursorCache.current[targetPage] ?? null;
        } else {
          const knownPages = Object.keys(cursorCache.current)
            .map((k) => parseInt(k, 10))
            .filter((p) => p < targetPage)
            .sort((a, b) => b - a);
          if (knownPages.length) {
            knownPage = knownPages[0];
            cursor = cursorCache.current[knownPage] ?? null;
          } else {
            knownPage = 1;
            cursor = null;
          }
        }

        for (let p = knownPage; p <= targetPage; p++) {
          // ensure page 1 exists in cache
          if (p === 1 && !(1 in cursorCache.current))
            cursorCache.current[1] = null;

          const { posts, nextCursor } = await fetchPostsPage(p, cursor);

          if (p === targetPage) {
            setPosts(posts);
            setCurrentPage(targetPage);
            if (nextCursor && !(targetPage + 1 in cursorCache.current)) {
              cursorCache.current[targetPage + 1] = nextCursor;
            }
          }
          // advance cursor for next loop iteration
          cursor = nextCursor;
          if (!(p + 1 in cursorCache.current))
            cursorCache.current[p + 1] = nextCursor;
        }
      } finally {
        if (!opts?.alreadyLoading) setLoading(false);
      }
    },
    [totalCount]
  );

  // bootstrap
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const total = await getTotalPostsCount();
        setTotalCount(total);
        const initialPage =
          getPageFromUrl(PAGE_PARAM) || getPageFromStorage(STORAGE_KEY) || 1;
        await loadPage(initialPage, {
          alreadyLoading: true,
          knownTotal: total,
        });
      } catch (e) {
        console.error("Failed to initialize blog:", e);
      } finally {
        setLoading(false);
      }
    })();

    const onPopState = () => {
      const p = getPageFromUrl(PAGE_PARAM) || 1;
      setCurrentPage(p);
      loadPage(p, { knownTotal: totalCount || undefined });
      scrollUnderHeader();
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // clamp current page when total changes
  useEffect(() => {
    if (!totalCount) return;
    const maxPage = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
    const clamped = clamp(currentPage, 1, maxPage);
    if (clamped !== currentPage) {
      setCurrentPage(clamped);
      setPageInUrl(PAGE_PARAM, clamped);
      setPageInStorage(STORAGE_KEY, clamped);
      loadPage(clamped, { knownTotal: totalCount });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCount]);

  // persist page in storage
  useEffect(() => {
    setPageInStorage(STORAGE_KEY, currentPage);
  }, [currentPage]);

  const goToPage = useCallback(
    (p: number) => {
      if (p === currentPage) return;
      setPageInUrl(PAGE_PARAM, p);
      setCurrentPage(p);
      loadPage(p, { knownTotal: totalCount || undefined });
      scrollUnderHeader();
    },
    [currentPage, loadPage, totalCount]
  );

  const goPrev = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };
  const goNext = () => {
    if (currentPage < pageCount) goToPage(currentPage + 1);
  };

  return {
    posts,
    loading,
    totalCount,
    currentPage,
    pageCount,
    visiblePages,
    hasMore,
    showPagination,
    goToPage,
    goPrev,
    goNext,
  } as const;
};
