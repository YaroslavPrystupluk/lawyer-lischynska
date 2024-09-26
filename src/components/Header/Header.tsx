import { FC } from "react";

import Navbar from "./components/Navbar/Navbar";
import own from "../../assets/image/own.webp";

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-secondary to-secondary/30">
      <Navbar />
      <div className="flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <p className="text-8xl font-bold text-primary uppercase after:content-['"'] after:text-primary after:text-8xl before:content-['"'] before:text-primary before:text-8xl">
            Репутація,
          </p>
          <p className="text-8xl font-bold text-primary uppercase">повага,</p>
          <p className="text-8xl font-bold text-primary uppercase">результат</p>
        </div>
        <img src={own} alt="lawyer photo" />
      </div>
    </header>
  );
};

export default Header;
