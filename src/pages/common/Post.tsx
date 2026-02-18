import { FC, useCallback} from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Post } from "../../types/types";
import Spinner from "../../components/Spiner/Spinner.tsx";
import { useAuth } from "../../hooks/useAuth";
import {useDeleteImage, useDeletePost, useShowPost} from "../../api/posts";
import { COMMON_ROUTES } from "../../routes/routes.name";

const Post: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const deleteImageMutation = useDeleteImage();
  const deletePostMutation = useDeletePost();
  const { data: post, isPending, isError} = useShowPost(id ?? '')

  const handleDelete = useCallback(
    async (post: Post) => {
      if (!post) return;
      await deleteImageMutation.mutateAsync(post.img);
      await deletePostMutation.mutateAsync(post.id);
      navigate(`/${COMMON_ROUTES.BLOG}`);
    },
    [deleteImageMutation, deletePostMutation, navigate],
  );

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="max-w-3xl mx-auto text-center text-slate-600 mt-10">
        {isError ?? "Помилка завантаження"}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
          >
            ← Назад
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="mb-4">
        <img
          src={post.img}
          alt={post.title}
          className="float-right w-full h-full object-cover ml-4 mb-2 rounded-lg"
        />
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{post.title}</h1>
        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
          {post.description}
        </p>
      </div>

      <p className="pt-4">З повагою, Адвокат Ліщинська Тетяна</p>
      <span>моб. тел. </span>
      <a href="tel:+380982592599">0982592599</a>

      {/* Кнопка назад */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
          disabled={deleteImageMutation.isPending || deletePostMutation.isPending }
        >
          ← Назад
        </button>
        {isAuthenticated && (
          <button
            onClick={() => handleDelete(post)}
            className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-500"
            disabled={deleteImageMutation.isPending || deletePostMutation.isPending }
          >
            Видалити
          </button>
        )}
      </div>
    </article>
  );
};

export default Post;
