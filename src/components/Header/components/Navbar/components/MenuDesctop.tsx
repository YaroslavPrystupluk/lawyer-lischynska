import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  PopoverGroup,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

import {
  COMMON_ROUTES_NAME,
  COMMON_ROUTES_NAME_SUBMENU,
} from "../../../../../constants/constants";

const MenuDesctop: FC = () => {
  return (
    <PopoverGroup className="hidden sm:ml-2 lg:ml-8 md:flex sm:space-x-4">
      <div className="flex space-x-4">
        {COMMON_ROUTES_NAME.map((item) => (
          <div key={item.id}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-primary px-2 py-2 lg:text-base sm:text-sm  font-semibold uppercase border-primary border-b-2 border-solid"
                  : "text-black/70 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase hover:border-primary hover:border-b-2 hover:border-solid hover:text-primary "
              }
            >
              {item.name}
            </NavLink>
          </div>
        ))}

        <Popover className="relative">
          {({ open, close }) => (
            <>
              <PopoverButton
                className={`text-black/70 px-2 pb-2 lg:text-base sm:text-sm font-semibold uppercase hover:border-primary hover:border-b-2 hover:border-solid hover:text-primary outline-none ${
                  open
                    ? "border-primary border-b-2 hover:border-solid text-primary"
                    : ""
                }`}
              >
                {COMMON_ROUTES_NAME_SUBMENU[0].name}
                <IoIosArrowDown
                  aria-hidden="true"
                  className={`ml-2 h-4 w-4 inline-block text-black/30 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-5 w-screen max-w-[250px] overflow-hidden rounded-lg bg-slate-600 shadow-lg ring-1 ring-primary transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {COMMON_ROUTES_NAME_SUBMENU[0].submenu.map((item) => (
                    <div
                      key={item.id}
                      className="group relative flex items-center rounded-lg text-sm"
                    >
                      <div className="h-11 w-11 rounded-lg">
                        <div className="absolute inset-0">
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              isActive
                                ? "text-primary py-2 lg:text-base sm:text-sm  font-semibold uppercase pl-2 before:content-['>'] before:mr-1 before:text-sm before:font-extrabold"
                                : "text-white lg:text-base sm:text-sm font-semibold uppercase hover:text-primary hover:pl-2 hover:before:content-['>'] hover:before:font-extrabold transition-all duration-300 ease-in-out before:mr-1 before:text-sm"
                            }
                            onClick={() => close()}
                          >
                            {item.name}
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>
      </div>
    </PopoverGroup>
  );
};

export default MenuDesctop;
