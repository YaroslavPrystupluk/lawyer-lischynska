import { FC } from "react";

import Navbar from "./components/Navbar/Navbar";
import own from "../../assets/image/own.webp";

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-secondary to-secondary/30">
      <Navbar />
      <div className="flex flex-col sm:flex-row items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <p className="relative text-4xl sm:text-6xl font-bold text-primary uppercase">
            <span className="before:content-['\201c'] before:absolute before:top-[-15px] sm:before:top-[-25px] before:left-[-30px] before:text-primary before:text-4xl sm:before:text-6xl">
              Репутація
            </span>
          </p>
          <p className="text-4xl sm:text-6xl font-bold text-primary uppercase">
            повага
          </p>
          <p className="relative text-4xl sm:text-6xl font-bold text-primary uppercase">
            <span className="after:content-['\201d'] after:absolute after:bottom-[-35px] sm:after:bottom-[-50px] after:right-[-30px] after:text-primary after:text-4xl sm:after:text-6xl">
              результат
            </span>
          </p>
        </div>
        <img src={own} alt="lawyer photo" />
      </div>
    </header>
  );
};

export default Header;
