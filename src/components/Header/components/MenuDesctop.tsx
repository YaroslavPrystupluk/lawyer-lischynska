import { FC, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { COMMON_ROUTES_NAME } from "../../../constants/constants";

const MenuDesctop: FC = () => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleShowSubmenu = () => {
    const isExist = COMMON_ROUTES_NAME.find(
      (item) => item.submenu && item.submenu.length
    );
    if (isExist) {
      setShowSubmenu((prev) => !prev);
    } else {
      setShowSubmenu(false);
    }
  };

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (!menuRef.current?.contains(event.target as Node)) {
      setShowSubmenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="hidden sm:ml-5 lg:ml-8 sm:block" ref={menuRef}>
      <div className="flex space-x-4">
        {COMMON_ROUTES_NAME.map((item) => (
          <div key={item.name} className="relative">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-primary px-2 py-2 lg:text-base sm:text-sm  font-semibold uppercase border-primary border-b-2 border-solid"
                  : "text-black/70 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase hover:border-primary hover:border-b-2 hover:border-solid hover:text-primary"
              }
              onClick={() =>
                item.submenu ? handleShowSubmenu() : setShowSubmenu(false)
              }
            >
              {item.name}
            </NavLink>

            {item.submenu && showSubmenu && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg">
                {item.submenu.map((subItem) => (
                  <NavLink
                    key={subItem.name}
                    to={subItem.to}
                    className="block px-4 py-2 text-sm text-black/70 hover:bg-gray-200 hover:text-primary"
                  >
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDesctop;
