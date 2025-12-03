import {
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as z from "zod";
import Toast from "../../components/Taost/Toast.tsx";
import emailjs from "@emailjs/browser";
import Input from "../Input/Input.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import {ContactFormData, contactFormSchema} from "../../zod/validateSchemas.ts"

interface ContactFormProps {
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: Error) => void;
  showLoading?: boolean;
  autoReset?: boolean;
}

const ContactForm = forwardRef<HTMLFormElement, ContactFormProps>(
  ({ onSubmitSuccess, onSubmitError, autoReset = true }, ref) => {
    const [toast, setToast] = useState<{
      type: string;
      message: string;
    } | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const innerFormRef = useRef<HTMLFormElement>(null);
      const [errors, setErrors] = useState<z.infer<ContactFormData>>();

    useImperativeHandle(ref, () => innerFormRef.current!);

      const validateField = (name: string, value: string) => {
          const partial = contactFormSchema.pick({ [name]: true });

          const result = partial.safeParse({ [name]: value });

          setErrors((prev) => ({
              ...prev,
              [name]: result.success ? "" : result.error.issues[0].message,
          }));
      };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!innerFormRef.current) return;

      setIsLoading(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          innerFormRef.current,
          { publicKey: import.meta.env.VITE_PUBLIC_KEY }
        )
        .then(
          () => {
            setToast({
              type: "success",
              message: "Ваш запит успішно відправлений",
            });
            onSubmitSuccess?.();
            if (autoReset) innerFormRef.current?.reset();
          },
          (error) => {
            setToast({
              type: "danger",
              message: `Ваш запит не відправлений: ${String(error)}`,
            });
            onSubmitError?.(error);
          }
        )
        .finally(() => setIsLoading(false));
    };

    return (
      <>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
        <form
          ref={innerFormRef}
          onSubmit={sendEmail}
          className="flex flex-col w-full"
        >
          <h2 className="text-primary text-3xl mb-1 font-medium title-font text-center uppercase">
            контактна форма
          </h2>
          <p className="leading-relaxed mb-5 text-slate-600">
            Заповніть форму, щоб замовити консультацію
          </p>

          <Input
            id="name"
            type="text"
            label="Вкажіть ім'я і прізвищ"
            required
          />

          <Input
            id="email"
            type="email"
            name="email"
            label="Електронна пошта"
            required
          />

          <Input
            id="phone"
            type="tel"
            label="Ваш номер телефону"
            name="phone"
            required
          />

          <TextArea
            id="message"
            label="Ваше питання"
            name='message'
            rows={5}
            required
          />

          {isLoading ? (
            <div className="flex justify-center">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-8 h-8 me-3 text-primary animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          ) : (
            <button
              type="submit"
              className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg"
            >
              Замовити консультацію
            </button>
          )}

          <p className="mt-3 text-xs text-slate-500">
            *натискаючи «Замовити консультацію», Ви погоджуєтесь на обробку
            персональних даних.
          </p>
        </form>
      </>
    );
  }
);

export default ContactForm;
