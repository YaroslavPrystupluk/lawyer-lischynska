import { FC } from "react";
import { Link } from "react-router-dom";

import { COMMON_ROUTES } from "../../../../../routes/routes.name";

import logoFull from "../../../../../assets/image/logo.webp";

const Logo: FC = () => {
  return (
    <>
      <Link
        to={COMMON_ROUTES.HOME}
        className="flex flex-col items-center gap-1 text-primary"
      >
        <img
          src={logoFull}
          alt="logo"
          className="block w-[200px] pl-12 md:pl-0"
        />
      </Link>
    </>
  );
};

export default Logo;
