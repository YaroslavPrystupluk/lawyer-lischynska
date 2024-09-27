import { FC } from "react";

import Navbar from "./components/Navbar/Navbar";
import lawyer from "../../assets/image/lawyer.webp";

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-secondary to-secondary/30">
      <Navbar />
      <div className="grid grid-flow-row sm:grid-flow-col">
        <div className="flex flex-col items-center sm:pl-12 justify-center flex-shrink-">
          <p className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-primary uppercase">
            <span className="before:content-['\201c'] before:absolute before:top-[-15px] sm:before:top-[-25px] before:left-[-30px] before:text-primary before:text-4xl sm:before:text-5xl lg:before:text-6xl">
              Репутація
            </span>
          </p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary uppercase">
            повага
          </p>
          <p className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-primary uppercase">
            <span className="after:content-['\201d'] after:absolute after:bottom-[-35px] sm:after:bottom-[-50px] after:right-[-30px] after:text-primary after:text-4xl sm:after:text-5xl lg:after:text-6xl">
              результат
            </span>
          </p>
        </div>
        <div className="h-[470px] max-w-[400px] sm:h-[600px] sm:max-w-[500px] lg:h-[700px] lg:max-w-[600px] overflow-hidden justify-self-center">
          <img className="max-w-full" src={lawyer} alt="lawyer photo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
