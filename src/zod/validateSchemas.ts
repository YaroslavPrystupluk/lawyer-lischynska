import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Ім’я має містити мінімум 3 символи")
    .max(50, "Занадто довге ім’я")
    .trim(),
  email: z.email("Електронна пошта вказана невірно").trim(),
  phone: z
    .string()
    .regex(/^\+?[0-9\s-]{10,16}$/, "Некоректний номер телефону")
    .trim(),

  message: z
    .string()
    .min(10, "Повідомлення має містити мінімум 10 символів")
    .trim(),
});

export const loginFormSchema = z.object({
  email: z.email("Електронна пошта або пароль вказано невірно").trim(),
  password: z
    .string()
    .min(6, "Електронна пошта або пароль вказано невірно")
    .trim(),
});

const fileSchema = z
  .instanceof(File, { message: "Файл обов'язковий" })
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "Максимальний розмір файлу 5MB",
  })
  .refine(
    (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
    {
      message: "Дозволені тільки зображення (jpg, png, webp)",
    },
  );

export const basePostSchema = z.object({
  title: z.string().min(3, "Заголовок має містити мінімум 3 символи").trim(),

  description: z
    .string()
    .min(3, "Повідомлення має містити мінімум 3 символа")
    .trim(),

  // category: z
  //     .string()
  //     .min(3, "Виберіть категорію").trim(),
});

export const postFormSchema = basePostSchema.extend({
  file: fileSchema, // обов'язковий для створення
});

export const editPostFormSchema = basePostSchema.extend({
  file: fileSchema.optional(), // опціональний для редагування
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type LoginFormData = z.infer<typeof loginFormSchema>;
export type PostFormData = z.infer<typeof postFormSchema>;
export type EditPostFormData = z.infer<typeof editPostFormSchema>;
