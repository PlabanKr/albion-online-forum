import React, { FunctionComponent } from "react";

export const SignupComponent: FunctionComponent = () => {
  return (
    <form className="max-w-2xl flex flex-col gap-5 mx-auto mt-14">
      <h2 className="font-bold text-center text-3xl">Signup</h2>
      <input
        className="px-2 py-3"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        className="px-2 py-3"
        type="email"
        name="signupEmail"
        id="signupEmail"
        placeholder="Email"
      />
      <input
        className="px-2 py-3"
        type="password"
        name="signupPass"
        id="signupPass"
        placeholder="Password"
      />
      <button className="py-3 bg-orange-700 text-white hover:bg-orange-600">
        Signup
      </button>
    </form>
  );
};
