import {useMutation} from "@tanstack/react-query";
import {createPost, deletePost, editPosts} from "../../services/blogService.ts";
import {IPost} from "../../types/types.ts";

export const useCreatePost = (data: IPost) => {
    return useMutation({
        mutationFn: () => createPost(data)
    })
}
export const useEditPost = (id: IPost['id'], data: IPost) => {
    return useMutation({
        mutationFn: () => editPosts(id, data),
    })
}
export const useDeletePost = (id: IPost['id']) => {
    return useMutation({
        mutationFn: () => deletePost(id),
    })
}