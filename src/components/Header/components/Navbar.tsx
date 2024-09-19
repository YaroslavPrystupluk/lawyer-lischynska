import { FC } from "react";
import { Disclosure } from "@headlessui/react";

import BurgerMenu from "./BurgerMenu";
import BurgerButton from "./BurgerButton";
import MenuDesctop from "./MenuDesctop";
import MenuAdmin from "./MenuAdmin";
import Logo from "./Logo";

const Navbar: FC = () => {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-8 py-4 relative flex items-center justify-between">
        <BurgerButton />
        <div className="flex flex-1 items-center justify-center sm:justify-start">
          <Logo />
          <MenuDesctop />
        </div>
        <MenuAdmin />
      </div>
      <BurgerMenu />
    </Disclosure>
  );
};

export default Navbar;
