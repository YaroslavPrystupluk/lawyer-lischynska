import { FC } from "react";
import { DisclosureButton } from "@headlessui/react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const BurgerButton: FC = () => {
  return (
    <div className="absolute inset-y-0 left-3 flex items-center sm:hidden">
      <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary  hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <IoMenuOutline
          aria-hidden="true"
          className="block h-8 w-8 group-data-[open]:hidden"
        />
        <IoCloseOutline
          aria-hidden="true"
          className="hidden h-8 w-8 group-data-[open]:block"
        />
      </DisclosureButton>
    </div>
  );
};

export default BurgerButton;
