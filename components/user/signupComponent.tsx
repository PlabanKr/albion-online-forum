import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";
import { registerUserWithEmailAndPassword } from "../../firebase/authUtils";

interface userSignup {
  name: string;
  email: string;
  password: string;
}

export const SignupComponent: FunctionComponent = () => {
  const router = useRouter();
  const [user, setUser] = useState<userSignup>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Loading");
    setLoading(true);
    await registerUserWithEmailAndPassword(
      user.name,
      user.email,
      user.password
    );
    console.log("Loading ended");
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
          <h2 className="font-bold text-center text-3xl">Signup</h2>
          <input
            className="px-2 py-3"
            id="name"
            type="text"
            name="name"
            value={user.name}
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            className="px-2 py-3"
            id="signupEmail"
            type="email"
            name="signupEmail"
            value={user.email}
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="px-2 py-3"
            id="signupPass"
            type="password"
            name="signupPass"
            value={user.password}
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="py-3 bg-orange-700 text-white hover:bg-orange-600"
            onClick={handleSignup}
          >
            Signup
          </button>
        </form>
      )}
    </>
  );
};
