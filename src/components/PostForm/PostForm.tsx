import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditPostFormData, PostFormData } from "../../zod/validateSchemas";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import { useNotifications } from "../../hooks/useNotifications";
import { PostDto } from "../../types/types";

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  errors: Partial<Record<"title" | "description" | "file", string>>;
  setErrors: React.Dispatch<
    React.SetStateAction<
      Partial<Record<"title" | "description" | "file", string>>
    >
  >;
  disabled: boolean;
  initialValues?: PostDto;
};

const PostForm: FC<Props> = ({
  handleSubmit,
  errors,
  setErrors,
  disabled,
  initialValues,
}) => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string | null>(
    initialValues?.img ?? null,
  );
  const { showNotification } = useNotifications();

  const clearFieldError = (
    field: keyof PostFormData | keyof EditPostFormData,
  ) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showNotification("danger", "Можна завантажувати лише зображення");
      e.target.value = "";
      setPreview(null);
      return;
    }

    if (preview) URL.revokeObjectURL(preview);
    const url = URL.createObjectURL(file);
    setPreview(url);
    clearFieldError("file");
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="mx-auto max-w-[1440px] px-2 sm:px-4 lg:px-8 py-4">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
      >
        ← Назад
      </button>
      <form className="w-2/3 m-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="img"
          className="inline-block cursor-pointer text-cyan-50 bg-primary border-0 py-2 px-6 hover:bg-primary/80 rounded text-lg my-2"
        >
          Завантажити файл
        </label>

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="mt-4 max-h-24 rounded-lg object-cover"
          />
        )}

        <Input
          hidden
          id="img"
          name="img"
          type="file"
          accept="image/*"
          onChange={onImageChange}
          error={errors.file}
        />

        <Input
          label="Заголовок"
          id="title"
          name="title"
          type="text"
          onChange={() => clearFieldError("title")}
          defaultValue={initialValues?.title}
          error={errors.title}
        />
        <TextArea
          label="Опис"
          id="description"
          name="description"
          rows={15}
          onChange={() => clearFieldError("description")}
          defaultValue={initialValues?.description}
          error={errors.description}
        />
        <select name="category">
          <option label="Бізнес" value="business" />
        </select>
        <button
          type="submit"
          className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg relative left-[50%] translate-x-[-50%]"
          disabled={disabled}
        >
          Зберегти
        </button>
      </form>
    </div>
  );
};

export default PostForm;
