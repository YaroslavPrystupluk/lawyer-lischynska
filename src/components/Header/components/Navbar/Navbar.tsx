import { FC } from "react";
import { Disclosure } from "@headlessui/react";

import BurgerMenu from "./components/BurgerMenu";
import MenuDesctop from "./components/MenuDesctop";
import logoutIcon from "/icons/logout.svg";
// import MenuAdmin from "./components/MenuAdmin";
import Logo from "./components/Logo";
import { auth } from "../../../../firebase/firebaseConfig";
// import { ROLE } from "../../../../types/types";

const Navbar: FC = () => {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-8 relative flex items-center justify-between">
        <div className="flex flex-1 items-center justify-center md:justify-start gap-6">
          <Logo />
          <MenuDesctop />
          <BurgerMenu />
        </div>
        {auth && (
          <button>
            <img
              className="w-8 h-8 fill-primary"
              src={logoutIcon}
              alt="вихід"
            />
          </button>
        )}
        {/*{ROLE.ADMIN && <MenuAdmin />}*/}
      </div>
    </Disclosure>
  );
};

export default Navbar;
