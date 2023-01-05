import React, { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar: FunctionComponent = () => {
  const isLoggedIn = false;
  const router = useRouter();
  return (
    <nav className="bg-orange-700 text-white flex justify-between py-5 px-32">
      <h2 className="font-bold text-xl">
        <Link href="/">Albion Online Forum</Link>
      </h2>
      <div>
        {isLoggedIn ? (
          <Link
            className="mx-2 px-4 py-2 bg-orange-800 border-2 border-orange-800"
            href="/login"
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
