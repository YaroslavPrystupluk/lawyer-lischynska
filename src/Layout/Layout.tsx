import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4 lg:px-8 py-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
