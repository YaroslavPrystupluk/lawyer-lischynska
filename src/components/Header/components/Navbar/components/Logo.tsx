import { FC } from "react";
import { Link } from "react-router-dom";

import { COMMON_ROUTES } from "../../../../../routes/routes.name";
import { GoLaw } from "react-icons/go";

const Logo: FC = () => {
  return (
    <Link
      to={COMMON_ROUTES.HOME}
      className="flex flex-col items-center gap-1 text-primary"
    >
      <GoLaw className="sm:h-10 sm:w-10 w-8 h-8" />
      <span className="sm:text-base lg:text-lg font-semibold sm:hidden md:block">
        Тетяна Ліщинська
      </span>
    </Link>
  );
};

export default Logo;
