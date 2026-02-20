import { FC, useCallback, useState } from "react";
import PostForm from "../../components/PostForm/PostForm";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEditPostWithImage } from "../../api/posts";
import { useAuth } from "../../hooks/useAuth";
import { useNotifications } from "../../hooks/useNotifications";
import { COMMON_ROUTES } from "../../routes/routes.name";
import Spinner from "../../components/Spiner/Spinner";
import { PostFormData, postFormSchema } from "../../zod/validateSchemas";

const MAX_MB = 5 * 1024 * 1024;
type FormErrors = Partial<Record<keyof PostFormData, string>>;

const EditPost: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const editPostWithImageMutation = useEditPostWithImage();
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

      await editPostWithImageMutation.mutateAsync(payload, {
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
    [editPostWithImageMutation, navigate, queryClient, showNotification, user],
  );

  if (editPostWithImageMutation.isPending) {
    return <Spinner />;
  }

  return (
    <PostForm
      handleSubmit={handleSubmit}
      errors={errors}
      setErrors={setErrors}
      disabled={editPostWithImageMutation.isPending}
    />
  );
};

export default EditPost;
