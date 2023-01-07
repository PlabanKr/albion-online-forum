import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";
import { logout } from "../../firebase/authUtils";
import { auth } from "../../firebase/config";

export const ProfileComponent: FunctionComponent = () => {
  const router = useRouter();
  const [uid, setUid] = useState<string>("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setUid(user.uid);
    } else {
      router.push("/login");
    }
  });

  const handleLogout = async () => {
    logout();
    router.push("/");
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          className="rounded-full"
          src={"https://picsum.photos/200"}
          alt="user"
        />
        <h3 className="mt-7 mb-3 font-bold text-4xl">User ID: {uid}</h3>
        <div className="self-end">
          <Link href="/">Edit</Link>
          <button
            className="ml-4 px-4 py-2 text-orange-700 border-2 border-orange-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-xl self-start">Your Questions</h4>
      </div>
    </div>
  );
};
