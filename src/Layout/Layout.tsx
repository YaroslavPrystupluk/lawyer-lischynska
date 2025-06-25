import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer/Footer";
import ButtonFloatingAction from "../components/ButtonFloatingAction/ButtonFloatingAction ";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4 lg:px-8 py-4">
        <Outlet />
      </div>
      <ButtonFloatingAction />
      <Footer />
      </>
  );
};

export default Layout;
