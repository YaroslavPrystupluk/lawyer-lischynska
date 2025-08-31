import { FC } from "react";
import { useParams } from "react-router-dom";

const Post: FC = () => {
  const { id } = useParams();
  // тут вже можна завантажити пост по id з API або з локального масиву
  return <div>Відкрито пост з id: {id}</div>;
};

export default Post;
