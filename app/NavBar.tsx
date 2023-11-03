import Image from "next/image";
import React from "react";
import { ModeToggle } from "./components/toogle-dark-mode";

const NavBar = () => {
  return (
    <nav className="grid grid-flow-col items-center justify-between ">
      <Image
        src="logo.png"
        alt="logo"
        width={0}
        height={0}
        unoptimized
        className="h-14 w-auto p-2"
      />

      <ModeToggle />
    </nav>
  );
};

export default NavBar;
