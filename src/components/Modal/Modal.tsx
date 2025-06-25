import { FC, ReactNode } from "react";

interface modalProps {
  children: ReactNode;
}
const Modal: FC<modalProps> = ({ children }) => {
  return <dialog>{children}</dialog>;
};

export default Modal;
