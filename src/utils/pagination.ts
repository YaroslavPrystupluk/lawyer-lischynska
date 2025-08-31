export const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export const getPageFromUrl = (pageParam: string): number => {
  try {
    const sp = new URLSearchParams(window.location.search);
    const raw = sp.get(pageParam);
    const parsed = raw ? parseInt(raw, 10) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  } catch {
    return 1;
  }
};

export const setPageInUrl = (pageParam: string, page: number) => {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set(pageParam, String(page));
    window.history.pushState({}, "", url.toString());
  } catch {
    throw Error("щось пішло не так");
  }
};

export const getPageFromStorage = (key: string): number => {
  try {
    const raw = sessionStorage.getItem(key);
    const parsed = raw ? parseInt(raw, 10) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  } catch {
    return 1;
  }
};

export const setPageInStorage = (key: string, page: number) => {
  try {
    sessionStorage.setItem(key, String(page));
  } catch {
    throw Error("щось пішло не так");
  }
};

export const scrollUnderHeader = (headerId = "blog-header") => {
  const headerEl = document.getElementById(headerId);
  if (!headerEl) return;
  const headerBottom = headerEl.offsetTop + headerEl.offsetHeight;
  requestAnimationFrame(() => {
    window.scrollTo({ top: headerBottom, behavior: "smooth" });
  });
};
