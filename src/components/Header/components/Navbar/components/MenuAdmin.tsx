import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IoLogInOutline } from "react-icons/io5";
import { ADMIN_ROUTES } from "../../../../../routes/routes.name";

const MenuAdmin: FC = () => {
  return (
    <NavLink to={ADMIN_ROUTES.LOGIN}>
      <IoLogInOutline className="w-8 h-8 text-primary" />
    </NavLink>
  );
};

export default MenuAdmin;
