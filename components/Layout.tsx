import React, { FunctionComponent, ReactNode } from "react";
import { Navbar } from "./navigation/navbar";
import { Sidebar } from "./navigation/sidebar";

interface Props {
  children: ReactNode;
  haveSidebar: boolean;
}

export const Layout: FunctionComponent<Props> = ({ children, haveSidebar }) => {
  return (
    <>
      <Navbar />
      <div className="relative px-32 pt-8">
        {haveSidebar ? <Sidebar /> : <></>}
        <section className="ml-80 px-4">{children}</section>
      </div>
    </>
  );
};
