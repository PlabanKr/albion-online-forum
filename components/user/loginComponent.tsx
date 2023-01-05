import React, { FunctionComponent } from "react";

export const LoginComponent: FunctionComponent = () => {
  return (
    <form className="max-w-2xl flex flex-col gap-5 mx-auto mt-14">
      <h2 className="font-bold text-center text-3xl">Login</h2>
      <input
        className="px-2 py-3"
        type="email"
        name="loginEmail"
        id="loginEmail"
        placeholder="Email"
      />
      <input
        className="px-2 py-3"
        type="password"
        name="loginPass"
        id="loginPass"
        placeholder="Password"
      />
      <button className="py-3 bg-orange-700 text-white hover:bg-orange-600">
        Login
      </button>
    </form>
  );
};
