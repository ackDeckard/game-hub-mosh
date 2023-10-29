import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="grid grid-flow-col">
      <Image
        src="logo.png"
        alt="logo"
        width={0}
        height={0}
        unoptimized
        className="h-14 w-auto"
      />
      <div>Any text</div>
    </nav>
  );
};

export default NavBar;
