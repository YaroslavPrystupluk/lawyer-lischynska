import { FC } from "react";
import { Disclosure } from "@headlessui/react";

import BurgerMenu from "./components/BurgerMenu";
import MenuDesctop from "./components/MenuDesctop";
import MenuAdmin from "./components/MenuAdmin";
import Logo from "./components/Logo";
import { ROLE } from "../../../../types/types";

const Navbar: FC = () => {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-8 py-4 relative flex items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:justify-start">
          <Logo />
          <MenuDesctop />
          <BurgerMenu />
        </div>
        {ROLE.ADMIN && <MenuAdmin />}
      </div>
    </Disclosure>
  );
};

export default Navbar;
