import { FC } from "react";
import { Post } from "../../types/types.ts";
import { Link } from "react-router-dom";

type BlogPostProps = {
  post: Post;
};

const PostCard: FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col bg-slate-100 border border-primary rounded-lg shadow-sm h-full">
      <div className="overflow-hidden  w-full h-64 bg-slate-200 flex items-center justify-center rounded-lg">
        <img
          className="max-w-full max-h-full object-contain"
          src={post.img}
          alt={post.title}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h5 className="mb-2 text-xl font-bold text-slate-900 line-clamp-2">
          {post.title}
        </h5>

        <p className="mb-3 font-normal text-slate-900 whitespace-pre-line line-clamp-3">
          {post.description}
        </p>

        <Link
          to={`post/${post.id}`}
          className="inline-flex items-center py-2 text-sm font-medium text-primary hover:text-primary/50 mt-auto"
        >
          Читати більше
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
