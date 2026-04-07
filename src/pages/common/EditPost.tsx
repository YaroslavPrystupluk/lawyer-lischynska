import { FC, useCallback, useMemo, useState } from "react";
import PostForm from "../../components/PostForm/PostForm";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useEditPostWithImage, useShowPost } from "../../api/posts";
import { useAuth } from "../../hooks/useAuth";
import { useNotifications } from "../../hooks/useNotifications";
import { COMMON_ROUTES } from "../../routes/routes.name";
import Spinner from "../../components/Spiner/Spinner";
import {
  EditPostFormData,
  editPostFormSchema,
  PostFormData,
} from "../../zod/validateSchemas";
import { Post } from "../../types/types";

type FormErrors = Partial<Record<keyof EditPostFormData, string>>;

const EditPost: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: Post["id"] }>();
  const queryClient = useQueryClient();
  const editPostWithImageMutation = useEditPostWithImage(id ?? "");
  const { data: existingPost } = useShowPost(id ?? "");
  const { user } = useAuth();
  const { showNotification } = useNotifications();
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!user || !existingPost) return;

      const form = e.currentTarget;

      const file = (form.elements.namedItem("img") as HTMLInputElement)
        ?.files?.[0];
      const title =
        (form.elements.namedItem("title") as HTMLInputElement)?.value.trim() ??
        "";
      const description =
        (
          form.elements.namedItem("description") as HTMLTextAreaElement
        )?.value.trim() ?? "";
      const category =
        (
          form.elements.namedItem("category") as HTMLSelectElement
        )?.value.trim() ?? "";

      const validation = editPostFormSchema.safeParse({
        title,
        description,
        category,
        file,
      });
      if (!validation.success) {
        const newErrors: FormErrors = {};
        validation.error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof PostFormData;
          newErrors[field] = issue.message;
        });
        setErrors(newErrors);
        return;
      }
      const fileBuffer = file ? await file.arrayBuffer() : undefined;

      const payload = {
        post: {
          title,
          description,
          img: fileBuffer ?? new ArrayBuffer(0), // або зроби img опціональним
          imgType: file?.type,
          userId: user.uid,
          category,
        },
        oldImgUrl: existingPost?.img,
        newImg: file,
      };

      await editPostWithImageMutation.mutateAsync(payload, {
        onSuccess: () => {
          showNotification("success", "Пост успішно збережено");
          queryClient.invalidateQueries({ queryKey: ["posts"] });
          navigate(`/${COMMON_ROUTES.BLOG}`);
        },
        onError: (error) => {
          showNotification(
            "danger",
            `Помилка збереження поста || ${error.message}`,
          );
        },
      });
    },
    [
      editPostWithImageMutation,
      existingPost,
      navigate,
      queryClient,
      showNotification,
      user,
    ],
  );
  const initialValues = useMemo(() => {
    if (!existingPost) return undefined;
    return {
      title: existingPost.title,
      description: existingPost.description,
      category: existingPost.category,
      img: existingPost.img,
    };
  }, [existingPost]);

  if (editPostWithImageMutation.isPending) {
    return <Spinner />;
  }

  return (
    <PostForm
      handleSubmit={handleSubmit}
      errors={errors}
      setErrors={setErrors}
      disabled={editPostWithImageMutation.isPending}
      initialValues={initialValues}
    />
  );
};

export default EditPost;
