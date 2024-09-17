import { FC } from "react";
import { DisclosureButton } from "@headlessui/react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const BurgerButton: FC = () => {
  return (
    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary  hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open main menu</span>
      <IoMenuOutline
        aria-hidden="true"
        className="block h-6 w-6 group-data-[open]:hidden"
      />
      <IoCloseOutline
        aria-hidden="true"
        className="hidden h-6 w-6 group-data-[open]:block"
      />
    </DisclosureButton>
  );
};

export default BurgerButton;
