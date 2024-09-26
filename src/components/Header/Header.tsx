import { FC } from "react";

import Navbar from "./components/Navbar/Navbar";

const Header: FC = () => {
  return (
    <header className="h-[100vh] bg-gradient-to-r from-secondary to-secondary/30">
      <Navbar />
    </header>
  );
};

export default Header;
