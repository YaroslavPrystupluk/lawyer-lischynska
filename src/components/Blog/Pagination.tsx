import { FC } from "react";

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  visiblePages: number[];
  hasMore: boolean;
  loading: boolean;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (p: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  pageCount,
  visiblePages,
  hasMore,
  loading,
  onPrev,
  onNext,
  onGoTo,
}) => {
  const firstVisible = visiblePages[0];
  const lastVisible = visiblePages[visiblePages.length - 1];

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center mt-10 mb-20">
      <button
        onClick={onPrev}
        disabled={currentPage === 1 || loading}
        className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 disabled:opacity-60"
        aria-label="Previous page"
      >
        «
      </button>

      {firstVisible > 1 && (
        <>
          <button
            onClick={() => onGoTo(1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === 1
                ? "bg-primary text-white border-primary"
                : "border-slate-300 hover:bg-slate-50"
            }`}
          >
            1
          </button>
          <span className="px-2 text-slate-400">…</span>
        </>
      )}

      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => onGoTo(p)}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === p
              ? "bg-primary text-white border-primary"
              : "border-slate-300 hover:bg-slate-50"
          }`}
          aria-current={currentPage === p ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      {lastVisible < pageCount && (
        <>
          <span className="px-2 text-slate-400">…</span>
          <button
            onClick={() => onGoTo(pageCount)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === pageCount
                ? "bg-primary text-white border-primary"
                : "border-slate-300 hover:bg-slate-50"
            }`}
          >
            {pageCount}
          </button>
        </>
      )}

      <button
        onClick={onNext}
        disabled={!hasMore || loading}
        className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 disabled:opacity-60"
        aria-label="Next page"
      >
        »
      </button>

      <p className="ml-4 text-slate-500">
        Сторінка {currentPage} із {pageCount}
      </p>
    </div>
  );
};
