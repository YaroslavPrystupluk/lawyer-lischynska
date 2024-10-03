import { FC } from "react";

import { SvgIcon } from "../SvgIcon/SvgIcon";
import { CARD } from "../../constants/constants";

// import icons from "/icons/icons.svg";
const CardMyexpertise: FC = () => {
  return (
    <>
      <div className="relative my-8 sm:my-16">
        <h1 className="text-3xl sm:text-5xl text-center font-bold before:content-[''] before:bg-primary before:absolute before:bottom-[-30%] sm:before:bottom-[-50%] before:left-[50%] before:translate-x-[-50%] before:w-20 before:h-1">
          Сфери моєї компетенції
        </h1>
      </div>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARD.map((item) => (
            <div key={item.id} className="p-4 bg-white rounded-lg shadow-lg">
              <div className="grid grid-flow-col gap-x-3 sm:gap-x-7 items-center">
                <SvgIcon
                  icon={item.icon}
                  className=" w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] row-span-3 text-primary fill-primary"
                />
                <h1 className="text-lg sm:text-xl font-semibold mb-2">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base">{item.discription}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default CardMyexpertise;
