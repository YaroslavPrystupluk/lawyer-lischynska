import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IoLogInOutline } from "react-icons/io5";
import { ADMIN_ROUTES } from "../../../../../routes/routes.name";

const MenuAdmin: FC = () => {
  return (
    <div className="absolute right-0 lg:flex lg:flex-1 lg:justify-end">
      <NavLink to={ADMIN_ROUTES.LOGIN}>
        <IoLogInOutline className="sm:h-8 sm:w-8 w-6 h-6 text-primary" />
      </NavLink>
    </div>
  );
};

export default MenuAdmin;
