import { FC, FormEvent, useRef, useState } from "react";
import TitleChapter from "../../components/TitleChapter/TitleChapter";
import { useLogin } from "../../api/auth";
import { auth } from "../../firebase/firebaseConfig";
import { COMMON_ROUTES } from "../../routes/routes.name";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { LoginFormData, loginFormSchema } from "../../zod/validateSchemas.ts";
import { AuthError } from "firebase/auth";

type FormErrors = Partial<Record<keyof LoginFormData, string>>;

const Login: FC = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>({});
  const { mutate: mutateLogin } = useLogin(auth);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const clearFieldError = (field: keyof LoginFormData) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    const validation = loginFormSchema.safeParse({ email, password });
    if (!validation.success) {
      const newErrors: FormErrors = {};

      validation.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof LoginFormData;
        newErrors[field] = issue.message;
      });

      setErrors(newErrors);
      return;
    }

    mutateLogin(
      { email, password },
      {
        onSuccess: () => {
          navigate(COMMON_ROUTES.HOME);
        },
        onError: (error: AuthError) => {
          if (error.code === "auth/invalid-credential") {
            setServerError("Помилка авторизації");
          }
        },
      },
    );
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-primary rounded-lg shadow-sm sm:p-6 md:p-8">
      <form className="space-y-6" onSubmit={handleLogin}>
        <div className="relative my-4">
          <TitleChapter className="text-2xl text-center font-bold before:content-[''] before:bg-primary before:absolute before:bottom-[-30%] sm:before:bottom-[-50%] before:left-[50%] before:translate-x-[-50%] before:w-20 before:h-1">
            Вхід
          </TitleChapter>
        </div>
        <div>
          <Input
            id="email"
            type="email"
            name="email"
            label="Електронна пошта"
            error={errors.email}
            ref={emailRef}
            onChange={() => clearFieldError("email")}
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            label="Пароль"
            error={errors.password}
            ref={passwordRef}
            onChange={() => clearFieldError("password")}
          />
        </div>

        <button
          type="submit"
          className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg w-full"
        >
          Увійти
        </button>
        {serverError && (
          <p className="text-red-500 text-sm text-center">{serverError}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
