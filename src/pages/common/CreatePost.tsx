import {FC, useCallback, useEffect, useRef, useState} from "react";
import Input from "../../components/Input/Input.tsx";
import TextArea from "../../components/TextArea/TextArea.tsx";
import {useNavigate} from "react-router-dom";
import {useCreatePostWithImage} from "../../api/posts";
import {useAuth} from "../../hooks/useAuth.ts";
import {COMMON_ROUTES} from "../../routes/routes.name.ts";
import * as React from "react";
import {useQueryClient} from "@tanstack/react-query";
import {useNotifications} from "../../hooks/useNotifications.ts";
import {PostFormData, postFormSchema} from "../../zod/validateSchemas.ts";


const MAX_MB = 5 * 1024 *1024;
type FormErrors = Partial<Record<keyof PostFormData, string>>;

const CreatePost: FC = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const createPostWithImageMutation = useCreatePostWithImage();
    const {user} = useAuth();
    const [preview, setPreview] = useState<string | null>(null);
    const {showNotification} = useNotifications()
    const [errors, setErrors] = useState<FormErrors>({});

    const refImage = useRef<HTMLInputElement>(null);
    const refTitle = useRef<HTMLInputElement>(null);
    const refDescription = useRef<HTMLTextAreaElement>(null);
    const refCategory = useRef<HTMLSelectElement>(null)

    const clearFieldError = (field: keyof PostFormData) => {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (!user) return;

            const file = refImage.current!.files?.[0];
            const title = refTitle.current?.value?.trim() ?? "";
            const description = refDescription.current?.value?.trim() ?? "";
            const category = refCategory.current?.value.trim() ?? "";
            if (!file ) {
                showNotification('danger', "Поле є обов'язковим. Завантажте картинку")
                return
            }
            if (file.size > MAX_MB) {
                showNotification('danger', 'Можна завантажувати зображення до 5Mb')
                return
            }
            if (!file.type.startsWith("image/")) {
                showNotification('danger', 'Можна завантажувати лише зображення')
                return;
            }
            const payload = {
                title,
                description,
                img: file,
                userId: user.uid,
                category: "business",
            }

            const validation = postFormSchema.safeParse({title, description, category, file});
            if (!validation.success) {
                const newErrors: FormErrors = {};
                console.log(newErrors)
                validation.error.issues.forEach((issue) => {
                    const field = issue.path[0] as keyof PostFormData;
                    newErrors[field] = issue.message;
                });

                setErrors(newErrors);
                return;
            }

            await createPostWithImageMutation.mutateAsync(payload, {
                onSuccess: () => {
                    showNotification('success', 'Пост успішно створений')
                    queryClient.invalidateQueries({queryKey: ["posts"]});
                    navigate(`/${COMMON_ROUTES.BLOG}`)
                },
                onError: (error) => {
                    showNotification('danger', `Помилка створення поста || ${error.message}`);
                }
            });
        },
        [createPostWithImageMutation, navigate, queryClient, showNotification, user],
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
        clearFieldError('file')
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
                <Input
                    hidden
                    id="img"
                    name="img"
                    type="file"
                     accept="image/*"
                    ref={refImage}
                    onChange={onImageChange}
                    error={errors.file}
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
                    onChange={() => clearFieldError("title")}
                    ref={refTitle}
                    error={errors.title}
                />
                <TextArea
                    label="Опис"
                    id="description"
                    name="description"
                    rows={5}
                    onChange={() => clearFieldError("description")}
                    ref={refDescription}
                    error={errors.description}
                />
                <button
                    type="submit"
                    className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg relative left-[50%] translate-x-[-50%]"
                    disabled={createPostWithImageMutation.isPending}
                >
                    Створити пост
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
