import { FC } from "react";
import TitleChapter from "../../components/TitleChapter/TitleChapter";

const Login: FC = () => {
  const login = () => {
    console.log("lofin");
  };

  const logout = () => {
    console.log("logout");
  };

  const inputBase =
    "mb-4 w-full rounded border border-primary px-3 py-1 text-base outline-none focus:ring-1 focus:ring-primary";

  const labelBase = "mb-1 text-sm text-slate-600";

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-primary rounded-lg shadow-sm sm:p-6 md:p-8">
      <form className="space-y-6">
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
