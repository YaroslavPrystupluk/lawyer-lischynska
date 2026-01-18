import { FC } from "react";
import Input from "../../components/Input/Input.tsx";
import TextArea from "../../components/TextArea/TextArea.tsx";
import { useNavigate } from "react-router-dom";

const CreatePost: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-[1440px] px-2 sm:px-4 lg:px-8 py-4">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
      >
        ← Назад
      </button>
      <form className="w-2/3 m-auto">
        <Input label="Заголовок" id="title" name="title" type="text" required />
        <TextArea
          label="Опис"
          id="description"
          name="description"
          rows={5}
          required
        />
        <button type="submit">Створити пост</button>
      </form>
    </div>
  );
};

export default CreatePost;
