import { FC } from "react";
import { Outlet } from "react-router-dom";

const LayoutAuth: FC = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[100vh] px-2 sm:px-4 lg:px-8 py-4 flex justify-center items-center ">
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
