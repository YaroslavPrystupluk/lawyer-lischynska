import { FC } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

import imageError from "/image/404-page.webp";

const ErrorPage: FC = () => {
  useRouteError();

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-[100vh] bg-gradient-to-r from-secondary to-secondary/30">
      <img className="w-1/5" src={imageError} alt="image page not found" />
      <h3 className="text-2xl font-bold my-5 text-cyan-900">Ой! Щось пішло не так. Сторінку не знайдена.</h3>
      <p className="text-lg mb-5 text-cyan-900">
          Сторінка, яку ви шукаєте, могла бути видалена, змінити назву або тимчасово недоступна.
      </p>
      <button
        className="bg-primary text-white px-4 py-2 rounded-lg"
        onClick={handleGoHome}
      >
        Повернутися на головну сторінку
      </button>
    </div>
  );
};

export default ErrorPage;
