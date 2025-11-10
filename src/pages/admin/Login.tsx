import { FC, FormEvent } from "react";
import TitleChapter from "../../components/TitleChapter/TitleChapter";
import { useLogin, useLogout } from "../../api/auth";
import { auth } from "../../firebase/firebaseConfig";
import { COMMON_ROUTES } from "../../routes/routes.name";
import { useNavigate } from "react-router-dom";
import { data } from "framer-motion/client";

const Login: FC = () => {
  const navigate = useNavigate();
  const { mutate: mutateLogin } = useLogin(auth);
  const { mutate: mutateLogout } = useLogout(auth);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    mutateLogin(
      { email, password },

      {
        onSuccess: () => {
          navigate(COMMON_ROUTES.HOME);
        },
        onError: (error) => {
          throw new Error(error.message);
        },
      }
    );
  };

  const logout = () => {
    mutateLogout(undefined, {
      onSuccess: () => {
        navigate(COMMON_ROUTES.HOME);
      },
      onError: (error) => {
        throw new Error(error.message);
      },
    });
  };

  const inputBase =
    "mb-4 w-full rounded border border-primary px-3 py-1 text-base outline-none focus:ring-1 focus:ring-primary";

  const labelBase = "mb-1 text-sm text-slate-600";

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-primary rounded-lg shadow-sm sm:p-6 md:p-8">
      <form className="space-y-6" onSubmit={handleLogin}>
        <div className="relative my-4">
          <TitleChapter className="text-2xl text-center font-bold before:content-[''] before:bg-primary before:absolute before:bottom-[-30%] sm:before:bottom-[-50%] before:left-[50%] before:translate-x-[-50%] before:w-20 before:h-1">
            Вхід
          </TitleChapter>
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Електронна пошта
          </label>
          <input
            type="email"
            name="email"
            id="emailLogin"
            className={inputBase}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className={labelBase}>
            Пароль
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={inputBase}
            required
          />
        </div>

        <button
          type="submit"
          className="text-cyan-50 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg w-full"
        >
          Увійти
        </button>
      </form>
    </div>
  );
};

export default Login;
