import React, { FunctionComponent } from "react";
import { Navlink } from "./navlink";

const SidebarItems = [
  { title: "How to clear tier 5 dungeons fast?", url: "/" },
  { title: "Which city you should choose?", url: "/" },
  { title: "What is faction warfare?", url: "/" },
  { title: "Should you make a solo guild?", url: "/" },
  { title: "How to maximize your profit in crafting?", url: "/" },
  {
    title:
      "What is the best gathering profession for someone who primarily lives in Lymhurst?",
    url: "/",
  },
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
