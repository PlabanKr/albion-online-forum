import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

export const Navbar: FunctionComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (
    <nav className="bg-orange-700 text-white flex justify-between py-5 px-32">
      <h2 className="font-bold text-xl">
        <Link href="/">Albion Online Forum</Link>
      </h2>
      <div>
        {isLoggedIn ? (
          <Link
            className="mx-2 px-4 py-2 bg-orange-800 border-2 border-orange-800"
            href="/profile"
          >
            Profile
          </Link>
        ) : (
          <>
            <Link
              className="mx-2 px-4 py-2 bg-orange-800 border-2 border-orange-800"
              href="/login"
            >
              Log in
            </Link>
            <Link
              className="mx-2 px-4 py-2 bg-orange-600 border-2 border-orange-600"
              href="/signup"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
