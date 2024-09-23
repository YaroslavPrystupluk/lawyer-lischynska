import { FC, useState } from "react";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { COMMON_ROUTES_NAME } from "../../../constants/constants";

const BurgerMenu: FC = () => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const handleShowSubmenu = () => {
    setShowSubmenu((prev) => !prev);
  };

  return (
    <DisclosurePanel className="sm:hidden bg-slate-600">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {COMMON_ROUTES_NAME.map((item) => (
          <div key={item.name}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "block rounded-md px-3 py-2 text-primary"
                  : "block rounded-md px-3 py-2 text-white"
              }
            >
              <DisclosureButton
                onClick={() => item.submenu && handleShowSubmenu()}
                className="font-semibold uppercase"
              >
                {item.name}
              </DisclosureButton>
            </NavLink>
            {item.submenu && showSubmenu && (
              <div className="pl-6">
                {item.submenu.map((subItem) => (
                  <NavLink
                    key={subItem.name}
                    to={subItem.to}
                    className={({ isActive }) =>
                      isActive
                        ? "block rounded-md px-3 py-2 text-primary"
                        : "block rounded-md px-3 py-2 text-white"
                    }
                  >
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </DisclosurePanel>
  );
};

export default BurgerMenu;
