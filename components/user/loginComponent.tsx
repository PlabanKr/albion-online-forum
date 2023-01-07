import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import { loginUserWithEmailAndPassword } from "../../firebase/authUtils";

interface userLogin {
  email: string;
  password: string;
}

export const LoginComponent: FunctionComponent = () => {
  const router = useRouter();
  const [user, setUser] = useState<userLogin>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Loading");
    setLoading(true);
    await loginUserWithEmailAndPassword(user.email, user.password);
    console.log("Finished Loading");
    setLoading(false);
    router.push("/profile");
  };

  return (
    <>
      {loading ? (
        <div className="mt-32 flex justify-center items-center">
          <div className="animate-bounce font-bold text-2xl text-orange-700">
            Loading...
          </div>
        </div>
      ) : (
        <form className="max-w-2xl flex flex-col gap-5 mx-auto mt-14">
          <h2 className="font-bold text-center text-3xl">Login</h2>
          <input
            className="px-2 py-3 border"
            type="email"
            id="loginEmail"
            name="loginEmail"
            value={user.email}
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="px-2 py-3 border"
            type="password"
            id="loginPass"
            name="loginPass"
            value={user.password}
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="py-3 bg-orange-700 text-white hover:bg-orange-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      )}
    </>
  );
};
