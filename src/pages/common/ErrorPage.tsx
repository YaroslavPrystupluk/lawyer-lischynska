import { FC } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

import imageErorr from "/image/404-pages.webp";

const ErrorPage: FC = () => {
  useRouteError();

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-[100vh] bg-gradient-to-r from-secondary to-secondary/30">
      <img className="w-1/2" src={imageErorr} alt="image page not found" />
      <h3 className="text-3xl font-bold my-5">Oops! Page Not Found</h3>
      <p className="text-lg mb-5">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button
        className="bg-primary text-white px-4 py-2 rounded-lg"
        onClick={handleGoHome}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
