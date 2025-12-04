import {useMutation} from "@tanstack/react-query";
import {createPost, deletePost, editPosts} from "../../services/blogService.ts";
import {Post} from "../../types/types.ts";

export const useCreatePost = (data: Post) => {
    return useMutation({
        mutationFn: () => createPost(data)
    })
}
export const useEditPost = (id: Post['id'], data: Post) => {
    return useMutation({
        mutationFn: () => editPosts(id, data),
    })
}
export const useDeletePost = (id: Post['id']) => {
    return useMutation({
        mutationFn: () => deletePost(id),
    })
}