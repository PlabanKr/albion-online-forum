import React, { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  url: string;
  text: string;
}

export const Navlink: FunctionComponent<Props> = ({ url, text }) => {
  return (
    <Link href={url} className="text-orange-700 hover:text-orange-500">
      {text}
    </Link>
  );
};
