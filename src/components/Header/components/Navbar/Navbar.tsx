import { FC } from "react";
import { Disclosure } from "@headlessui/react";
import BurgerMenu from "./components/BurgerMenu";
import MenuDesctop from "./components/MenuDesctop";
import { SvgIcon } from "../../../SvgIcon/SvgIcon";
import Logo from "./components/Logo";
import { auth } from "../../../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../../api/auth";
import { COMMON_ROUTES } from "../../../../routes/routes.name";
import { useAuth } from "../../../../hooks/useAuth";
import Spinner from "../../../Spiner/Spinner.tsx";

const Navbar: FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const { mutate: mutateLogout } = useLogout(auth);
  const logout = () => {
    mutateLogout(undefined, {
      onSuccess: () => {
        navigate(COMMON_ROUTES.HOME);
      },
      onError: (error) => {
        throw new Error(error.message);
      },
    });
  };
  if (loading) return <Spinner />;
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-8 relative flex items-center justify-between">
        <div className="flex flex-1 items-center justify-center md:justify-start gap-6">
          <Logo />
          <MenuDesctop />
          <BurgerMenu />
        </div>
        {isAuthenticated && (
          <button onClick={logout} className="self-center">
            <SvgIcon icon="logout" className="max-w-12 max-h-12 fill-primary" />
          </button>
        )}
           </div>
    </Disclosure>
  );
};

export default Navbar;
