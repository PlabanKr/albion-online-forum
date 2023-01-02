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
        <section className={haveSidebar ? "ml-80 px-4" : "px-60"}>
          {children}
        </section>
      </div>
    </>
  );
};
