import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer/Footer";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4 lg:px-8 py-4">
        <Outlet />
      </div>
      <button
        // onclick="buttonHandler()"
        title="Contact Sale"
        className="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300 cursor-pointer"
      >
        &#9993;
      </button>
      <Footer />
    </>
  );
};

export default Layout;
