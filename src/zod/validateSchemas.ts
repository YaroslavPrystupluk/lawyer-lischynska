import * as z from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(3, "Ім’я має містити мінімум 3 символи")
        .max(50, "Занадто довге ім’я").trim(),
    email: z.email("Електронна пошта вказана невірно").trim(),
    phone: z
        .string()
        .regex(/^\+?[0-9\s-]{10,16}$/, "Некоректний номер телефону").trim(),

    message: z
        .string()
        .min(10, "Повідомлення має містити мінімум 10 символів").trim(),

});

export const loginFormSchema = z.object({
    email: z.email("Електронна пошта або пароль вказано невірно").trim(),
    password: z.string().min(6, "Електронна пошта або пароль вказано невірно").trim(),
})

export const postFormSchema = z.object({
    // image: z.object({
    //     url: z.url()
    //
    // }),
    name: z
        .string()
        .min(3, "Заголовок має містити мінімум 3 символи").trim(),

    message: z
        .string()
        .min(3, "Повідомлення має містити мінімум 3 символа").trim(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type LoginFormData = z.infer<typeof loginFormSchema>;
export type PostFormData = z.infer<typeof postFormSchema>;