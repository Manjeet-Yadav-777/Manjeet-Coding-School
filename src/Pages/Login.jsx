import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-white flex justify-center mt-20">
      <form action="" className="w-[80%] md:w-[30%]">
        <h1 className="text-3xl">Sign in</h1>
        <p className="text-[rgb(106,106,106)] text-sm mt-1">
          New User ?{" "}
          <Link to={"/signup"} className="text-blue-500 text-sm">
            Create an account
          </Link>
        </p>

        <input
          type="email"
          className="bg-black mt-5 h-12 border-[rgb(106,106,106)] border-b-2 outline-none w-full placeholder:text-sm"
          placeholder="Email address"
        />

        <input
          type="password"
          className="bg-black mt-5 h-12 border-[rgb(106,106,106)] border-b-2 outline-none w-full placeholder:text-sm"
          placeholder="Password"
        />

        <div className="flex justify-end mt-5">
          {" "}
          <input
            type="submit"
            className="justify-end bg-[rgb(36,207,166)] text-black font-bold px-5 py-1 rounded-full cursor-pointer text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
