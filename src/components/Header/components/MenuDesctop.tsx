import { FC } from "react";
import { NavLink } from "react-router-dom";

import { COMMON_ROUTES_NAME } from "../../../constants/constants";

const MenuDesctop: FC = () => {
  return (
    <div className="hidden sm:ml-5 lg:ml-8 sm:block">
      <div className="flex space-x-4">
        {COMMON_ROUTES_NAME.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "text-primary px-2 py-2 lg:text-base sm:text-sm  font-semibold uppercase border-primary border-b-2 border-solid "
                : "text-black/70 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase hover:border-primary hover:border-b-2 hover:border-solid hover:text-primary"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenuDesctop;
