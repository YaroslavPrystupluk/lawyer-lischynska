import { FC, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { Post } from "../../types/types";
import Spinner from "../../components/Spiner/Spinner.tsx";
import { useAuth } from "../../hooks/useAuth";
import { useDeletePostWithImage, useShowPost } from "../../api/posts";
import { COMMON_ROUTES } from "../../routes/routes.name";
import { useQueryClient } from "@tanstack/react-query";
import { useNotifications } from "../../hooks/useNotifications.ts";

const Post: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const deletePostWithImageMutation = useDeletePostWithImage();
  const { data: post, isPending, isError } = useShowPost(id ?? "");
  const queryClient = useQueryClient();
  const { showNotification } = useNotifications();

  const handleDelete = useCallback(
    async (post: Post) => {
      if (!post) return;

      const payload = {
        id: post.id,
        imgUrl: post.img,
      };

      await deletePostWithImageMutation.mutateAsync(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["posts"] });
          showNotification("success", "Пост успішно видалений");
          navigate(`/${COMMON_ROUTES.BLOG}`);
        },
        onError(error) {
          showNotification(
            "danger",
            `При видаленні сталася помилка || ${error.message}`,
          );
        },
      });
    },
    [deletePostWithImageMutation, navigate, queryClient, showNotification],
  );

  if (deletePostWithImageMutation.isPending || isPending) {
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

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
          disabled={deletePostWithImageMutation.isPending}
        >
          ← Назад
        </button>
        {isAuthenticated && (
          <>
            <Link
              to={`/edit/${post.id}`}
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-500"
            >
              Редагувати
            </Link>
            <button
              onClick={() => handleDelete(post)}
              className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-500"
              disabled={deletePostWithImageMutation.isPending}
            >
              Видалити
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default Post;
