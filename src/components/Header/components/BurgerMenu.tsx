import { FC } from "react";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { COMMON_ROUTES_NAME } from "../../../constants/constants";

const BurgerMenu: FC = () => {
  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {COMMON_ROUTES_NAME.map((item) => (
          <NavLink to={item.to} key={item.name}>
            <DisclosureButton
              className={
                "block rounded-md px-3 py-2 text-base font-medium text-primary"
              }
            >
              {item.name}
            </DisclosureButton>
          </NavLink>
        ))}
      </div>
    </DisclosurePanel>
  );
};

export default BurgerMenu;
