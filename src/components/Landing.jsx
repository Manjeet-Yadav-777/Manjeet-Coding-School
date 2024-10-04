import React from "react";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing text-white flex flex-col items-center pt-[20vh] md:pt-[14vh] min-h-[87vh]">
      <div className="head w-[100%] sm:w-[50%] flex flex-col items-center ">
        <h1 className="lan-h1 text-4xl sm:text-[4xl] md:text-[4vw] text-wrap text-center leading-[1.1]">
          Unlock your <span className="text-[rgb(36,207,166)]">potential</span>,
          learn to code, and shape the future
        </h1>

        <Link
          to={"/courses"}
          className="learn bg-[rgb(36,207,166)] text-[#0c0c0c] font-bold w-fit px-8 py-2 rounded-md text-xl mt-14"
        >
          Learn Today, Succeed Tomorrow
        </Link>
      </div>

      <div className="lan-down flex mt-14 md:mt-24 gap-14">
        <div className="one text-center">
          <h1 className="md:text-3xl text-xl font-bold">24k+</h1>
          <p className="lan-para text-sm md:text-xl font-light">
            Students taught
          </p>
        </div>
        <div className="one text-center">
          <h1 className="md:text-3xl text-xl font-bold">9+</h1>
          <p className="lan-para text-sm md:text-xl font-light">Instructors</p>
        </div>
        <div className="one text-center">
          <h1 className="md:text-3xl text-xl font-bold">32+</h1>
          <p className="lan-para text-sm md:text-xl font-light">
            Imapactful Courses
          </p>
        </div>
      </div>

      <div className="flex justify-center text-center py-40">
        <h1 className="lan-para text-[4vw] md:text-[3vw] md:w-[80%] w-[90%]">
          Master in-demand skills with expert guidance, and{" "}
          <span className="color">lead the future of the tech industry.</span>
        </h1>
      </div>

      <div className="px-10 pb-40">
        <img className=" w-[70vw] object-contain" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Landing;
