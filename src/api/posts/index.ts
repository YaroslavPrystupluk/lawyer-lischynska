import { useMutation } from "@tanstack/react-query";
import {
  addImage,
  createPost,
  deleteImage,
  deletePost,
  editPosts,
} from "../../services/blogService.ts";
import { Post } from "../../types/types.ts";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (data: Omit<Post, "id">) => createPost(data),
  });
};

export const useEditPost = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: Post["id"]; data: Partial<Post> }) =>
      editPosts(id, data),
  });
};

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (id: Post["id"]) => deletePost(id),
  });
};

export const useAddImage = () => {
  return useMutation({
    mutationFn: (file: Blob | Uint8Array | ArrayBuffer) => addImage(file),
  });
};
export const useDeleteImage = () => {
  return useMutation({
    mutationFn: (imgUrl: string) => deleteImage(imgUrl),
  });
};
