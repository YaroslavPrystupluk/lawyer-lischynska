import { FC, useCallback, useEffect, useRef, useState } from "react";
import Input from "../../components/Input/Input.tsx";
import TextArea from "../../components/TextArea/TextArea.tsx";
import { useNavigate } from "react-router-dom";
import { useAddImage, useCreatePost } from "../../api/posts/index.ts";
import { useAuth } from "../../hooks/useAuth.ts";

// const MAX_MB = 5;

const CreatePost: FC = () => {
  const navigate = useNavigate();
  const addImageMutation = useAddImage();
  const createPostMutation = useCreatePost();
  const { user } = useAuth();
  const [preview, setPreview] = useState<string | null>(null);

  const refImage = useRef<HTMLInputElement>(null);
  const refTitle = useRef<HTMLInputElement>(null);
  const refDescription = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!user) return;

      const file = refImage.current!.files?.[0];
      const title = refTitle.current?.value?.trim() ?? "";
      const description = refDescription.current?.value?.trim() ?? "";
      if (!file || !title || !description) return;
      if (!file.type.startsWith("image/")) {
        alert("Можна завантажувати лише зображення");
        return;
      }
      const imgUrl = await addImageMutation.mutateAsync(file);

      const payload = {
        title,
        description,
        img: imgUrl,
        userId: user.uid,
        category: "business",
      };

      await createPostMutation.mutateAsync(payload);
    },
    [addImageMutation, createPostMutation, user],
  );

  const onImageChange = () => {
    const file = refImage.current?.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Тільки картинки");
      refImage.current!.value = "";
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
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
        <input
          hidden
          id="img"
          name="image"
          type="file"
          required
          accept="image/*"
          ref={refImage}
          onChange={onImageChange}
        />
        <button
          type="button"
          className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg my-6"
          onClick={() => refImage.current?.click()}
        >
          Завантажити файл
        </button>
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="mt-4 max-h-24 rounded-lg object-cover"
          />
        )}
        <Input
          label="Заголовок"
          id="title"
          name="title"
          type="text"
          required
          ref={refTitle}
        />
        <TextArea
          label="Опис"
          id="description"
          name="description"
          rows={5}
          required
          ref={refDescription}
        />
        <button
          type="submit"
          className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg relative left-[50%] translate-x-[-50%]"
          disabled={createPostMutation.isPending}
        >
          Створити пост
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
