import { FC, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import {
  COMMON_ROUTES_NAME,
  COMMON_ROUTES_NAME_SUBMENU,
} from "../../../../../constants/constants";

const BurgerMenu: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-y-0 left-3 flex items-center sm:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary  hover:text-primary outline-none ring-2 ring-inset ring-primary"
        >
          <span className="sr-only">Open main menu</span>
          <IoMenuOutline aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="sm:hidden"
      >
        <div className="relative inset-0 z-10" />
        <DialogPanel className="absolute inset-y-0 right-0 z-10 w-full overflow-y-auto  bg-slate-600 px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-2 flow-root">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary  hover:text-primary outline-none ring-2 ring-inset ring-primary"
              >
                <span className="sr-only">Close menu</span>
                <IoCloseOutline aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {COMMON_ROUTES_NAME.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary text-base  font-semibold uppercase pl-4 group flex w-full items-center justify-between "
                          : "text-white pl-2 text-base font-semibold uppercase group flex w-full items-center justify-between "
                      }
                      onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg pb-2 pl-5 text-base font-semibold  text-white uppercase">
                      {COMMON_ROUTES_NAME_SUBMENU[0].name}
                      <IoIosArrowDown
                        aria-hidden="true"
                        className="h-5 w-5 mr-4 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>

                    <DisclosurePanel className="mx-8 space-y-4">
                      {COMMON_ROUTES_NAME_SUBMENU[0].submenu.map((item) => (
                        <div key={item.id} className="group flex items-center ">
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              isActive
                                ? "text-primary text-sm font-semibold uppercase pl-4"
                                : "text-white text-sm font-semibold uppercase"
                            }
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                          >
                            {item.name}
                          </NavLink>
                        </div>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default BurgerMenu;
