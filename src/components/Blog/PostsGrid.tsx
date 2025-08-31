import { FC } from "react";
import PostCard from "../../components/PostCard/PostCard";
import type { IPost } from "../../types/types";

export const PostsGrid: FC<{ posts: IPost[] }> = ({ posts }) => (
  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);
