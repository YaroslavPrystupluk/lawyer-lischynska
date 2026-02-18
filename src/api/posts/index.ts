import {useMutation, useQuery} from "@tanstack/react-query";
import {
    postsService,
    deleteImage,
    deletePost,
    editPosts,
    showPost,
} from "../../services/postsService.ts";
import {Post} from "../../types/types.ts";

export const useShowPost = (id: Post['id']) => {
    return useQuery({
        queryKey: ['post', id],
        queryFn: () => showPost(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    })
};

export const useCreatePostWithImage = () => {
    return useMutation({
        mutationFn: (post: Omit<Post, "id"> & {
            img: Blob | Uint8Array | ArrayBuffer
        }) => postsService.createPostWithImage(post),
    });
};

export const useEditPost = () => {
    return useMutation({
        mutationFn: ({id, data}: { id: Post["id"]; data: Partial<Post> }) =>
            editPosts(id, data),
    });
};

export const useDeletePost = () => {
    return useMutation({
        mutationFn: (id: Post["id"]) => deletePost(id),
    });
};


export const useDeleteImage = () => {
    return useMutation({
        mutationFn: (imgUrl: string) => deleteImage(imgUrl),
    });
};
