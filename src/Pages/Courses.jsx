import React from "react";
import Cources from "../components/Cources";

const Courses = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center text-center py-40">
        <h1 className="lan-para text-[4vw] md:text-[6xvw] md:w-[80%] w-[90%]">
          Master in-demand skills with expert guidance, and{" "}
          <span className="color">lead the future of the tech industry.</span>
        </h1>
      </div>
      <Cources />
    </div>
  );
};

export default Courses;
