import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar text-white flex justify-between items-center h-[13vh] px-5 sm:px-10">
      <Link
        to={"/"}
        className="logo text-[rgb(223,223,223)] sm:text-[15px] text-[12px] font-bold"
      >
        <span className="text-2xl">🦁</span> Manjeet coding school
      </Link>

      <div className="links text-[rgb(223,223,223)] flex items-center gap-10">
        <Link to={"/"} className="link text-sm md:text-md">
          Home
        </Link>
        <Link to={"/courses"} className="link text-sm md:text-md">
          Courses
        </Link>
        <Link
          to={"/login"}
          className="link text-sm md:text-md font-bold px-5 py-2 bg-[rgb(36,207,166)] text-black rounded "
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
