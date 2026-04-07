import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePostWithImage } from "../../api/posts";
import { useAuth } from "../../hooks/useAuth.ts";
import { COMMON_ROUTES } from "../../routes/routes.name.ts";
import * as React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNotifications } from "../../hooks/useNotifications.ts";
import { PostFormData, postFormSchema } from "../../zod/validateSchemas.ts";
import Spinner from "../../components/Spiner/Spinner.tsx";
import PostForm from "../../components/PostForm/PostForm.tsx";

const MAX_MB = 5 * 1024 * 1024;
type FormErrors = Partial<Record<keyof PostFormData, string>>;

const CreatePost: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createPostWithImageMutation = useCreatePostWithImage();
  const { user } = useAuth();
  const { showNotification } = useNotifications();
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!user) return;

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

      const validation = postFormSchema.safeParse({
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

      if (!file) {
        showNotification("danger", "Поле є обов'язковим. Завантажте картинку");
        return;
      }
      if (file?.size > MAX_MB) {
        showNotification("danger", "Можна завантажувати зображення до 5Mb");
        return;
      }
      if (!file?.type.startsWith("image/")) {
        showNotification("danger", "Можна завантажувати лише зображення");
        return;
      }
      const payload = {
        title,
        description,
        img: file,
        userId: user.uid,
        category,
      };

      await createPostWithImageMutation.mutateAsync(payload, {
        onSuccess: () => {
          showNotification("success", "Пост успішно створений");
          queryClient.invalidateQueries({ queryKey: ["posts"] });
          navigate(`/${COMMON_ROUTES.BLOG}`);
        },
        onError: (error) => {
          showNotification(
            "danger",
            `Помилка створення поста || ${error.message}`,
          );
        },
      });
    },
    [
      createPostWithImageMutation,
      navigate,
      queryClient,
      showNotification,
      user,
    ],
  );

  if (createPostWithImageMutation.isPending) {
    return <Spinner />;
  }

  return (
    <PostForm
      handleSubmit={handleSubmit}
      errors={errors}
      setErrors={setErrors}
      disabled={createPostWithImageMutation.isPending}
    />
  );
};

export default CreatePost;
