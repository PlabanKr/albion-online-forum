import React, { FunctionComponent } from "react";

export const Navbar: FunctionComponent = () => {
  return (
    <nav className="bg-orange-700 text-white flex justify-between py-5 px-32">
      <span className="font-bold text-xl">Albion Online Forum</span>
      <span>Other options</span>
    </nav>
  );
};
