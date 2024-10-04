import React from "react";

const Cards = (props) => {
  return (
    <div className="sm:w-[100%] md:w-[40%] lg:w-[30%] flex flex-col">
      <div className=" rounded-lg flex flex-col gap-5 justify-center mt-10 bg-[rgb(44,44,44)]  py-8">
        <div className="img px-8 flex justify-center">
          <img className="h-40 " src={props.image} alt="" />
        </div>

        <div className="content px-8 flex gap-2 flex-col">
          <h1 className="text-2xl">{props.name}</h1>

          <p className="text-sm text-[rgb(106,106,106)]">{props.content}</p>
        </div>

        <div className="h-[1px] mx-8 bg-[rgb(106,106,106)]"></div>

        <div className="flex px-8 bg-black h-10 items-center justify-between">
          <h1>
            <span className="text-[rgb(106,106,106)] text-sm">By</span>{" "}
            {props.teacher}{" "}
          </h1>
          <p>₹{props.price}</p>
        </div>
      </div>

      <a
        href=""
        className="button bg-[rgb(36,207,166)] text-black text-xl font-bold text-center mt-5 py-2 rounded-lg"
      >
        Buy Now
      </a>
    </div>
  );
};

export default Cards;
