import Link from "next/link";
import React, { FunctionComponent } from "react";

export const ProfileComponent: FunctionComponent = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          className="rounded-full"
          src={"https://picsum.photos/200"}
          alt="user"
        />
        <h3 className="mt-7 mb-3 font-bold text-4xl">John Doe</h3>
        <div>
          <Link href="/">Edit</Link>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-xl self-start">Your Questions</h4>
      </div>
    </div>
  );
};
