import React, { FunctionComponent } from "react";
import { Navlink } from "./navlink";

const SidebarItems = [
  { title: "Should you go to black zone solo?", url: "/" },
  { title: "Should you go to red zone solo?", url: "/" },
  { title: "Should you do ganking solo?", url: "/" },
  { title: "Should you make a solo guild?", url: "/" },
  { title: "How to min-max your profit in crafting?", url: "/" },
];

export const Sidebar: FunctionComponent = () => {
  return (
    <aside className="fixed overflow-y-auto w-80 border-r-4">
      <ul>
        <li className="flex cursor-pointer items-center text-lg font-bold">
          Related
        </li>
        {SidebarItems.map((item, index) => {
          return (
            <li key={index} className="flex cursor-pointer items-center">
              <Navlink text={item.title} url={item.url} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
