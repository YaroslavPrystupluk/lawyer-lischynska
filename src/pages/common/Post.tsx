import { FC } from "react";
import { IPost } from "../../types/types.ts";
import { useParams } from "react-router-dom";

interface PostProps {
  post: IPost;
}
const Post: FC<PostProps> = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Post{id}</div>;
};

export default Post;
