import { FC } from "react";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";
import Spiner from "../../components/Spiner/Spiner.tsx";
import { BlogHeader } from "../../components/Blog/BlogHeader";
import { PostsGrid } from "../../components/Blog/PostsGrid";
import { Pagination } from "../../components/Blog/Pagination";
import { useBlogPagination } from "../../hooks/useBlogPagination";
import { BLOG_SITE_URL } from "../../constants/blog";
import { useAuth } from "../../hooks/useAuth.ts";
import { Link } from "react-router-dom";
import { ADMIN_ROUTES } from "../../routes/routes.name.ts";

const Blog: FC = () => {
  const { isAuthenticated } = useAuth();
  const {
    posts,
    loading,
    totalCount,
    currentPage,
    pageCount,
    visiblePages,
    hasMore,
    showPagination,
    goPrev,
    goNext,
    goToPage,
  } = useBlogPagination();

  return (
    <>
      <SEOHelper
        title="Блог — Адвокат Ліщинська"
        description="Корисні статті та поради з права від адвоката Ліщинської."
        keywords="адвокат блог, юридичні статті, правова допомога"
        url={BLOG_SITE_URL}
        image={`${BLOG_SITE_URL}/images/og-image.png`}
      />

      <BlogHeader />

      {loading && <Spiner />}

      {!loading && totalCount === 0 && (
        <p className="text-slate-500 text-center mt-12">
          Наразі публікацій немає
        </p>
      )}

      {!loading && totalCount > 0 && (
        <>
          {isAuthenticated && (
            <Link to={`/${ADMIN_ROUTES.ROOT}/${ADMIN_ROUTES.CREATE_POST}`}>
              <button className="text-cyan-50 bg-primary border-0 mb-6 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg">
                Додати пост
              </button>
            </Link>
          )}
          <PostsGrid posts={posts} />

          {showPagination && (
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              visiblePages={visiblePages}
              hasMore={hasMore}
              loading={loading}
              onPrev={goPrev}
              onNext={goNext}
              onGoTo={goToPage}
            />
          )}
        </>
      )}
    </>
  );
};

export default Blog;
