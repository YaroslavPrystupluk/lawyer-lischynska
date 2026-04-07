import { useMutation, useQuery } from "@tanstack/react-query";
import { postsService } from "../../services/postsService.ts";
import { Post, PostRequestDTO } from "../../types/types.ts";

export const useShowPost = (id: Post["id"]) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => postsService.showPost(id),
  });
};

export const useCreatePostWithImage = () => {
  return useMutation({
    mutationFn: (
      post: Omit<PostRequestDTO, "id"> & {
        img: Blob | Uint8Array | ArrayBuffer;
      },
    ) => postsService.createPostWithImage(post),
  });
};

export const useEditPostWithImage = (id: Post["id"]) => {
  return useMutation({
    mutationFn: ({
      post,
      oldImgUrl,
      newImg,
    }: {
      post: Omit<Post, "id" | "img"> & { img: Blob | Uint8Array | ArrayBuffer };
      oldImgUrl?: string;
      newImg?: File;
    }) => postsService.editPostsWithImage(id, post, oldImgUrl, newImg),
  });
};

export const useDeletePostWithImage = () => {
  return useMutation({
    mutationFn: ({ id, imgUrl }: { id: Post["id"]; imgUrl: string }) =>
      postsService.deletePostWithImage(id, imgUrl),
  });
};
