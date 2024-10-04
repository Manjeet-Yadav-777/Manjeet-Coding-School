import React from "react";
import { Link } from "react-router-dom";

const Companies = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center text-center py-20">
        <h1 className="lan-para text-[5vw] md:text-[3vw] md:w-[50%] w-[90%]">
          Top <span className="color">companies</span> our students working with
        </h1>
      </div>
      <div className="flex flex-wrap mt-10 justify-center gap-14">
        <img
          className="h-28"
          src="https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_social_media_search___logo_google_engine_software.png"
          alt=""
        />

        <img
          className="h-28"
          src="https://cdn3d.iconscout.com/3d/free/thumb/facebook-5562352-4642756.png"
          alt=""
        />

        <img
          className="h-28"
          src="https://static.vecteezy.com/system/resources/previews/018/780/169/original/3d-illustration-of-amazon-logo-free-png.png"
          alt=""
        />
      </div>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-20">
        <img
          className="h-28"
          src="https://ouch-cdn2.icons8.com/4LpZRCrDSfeou6-QgTwEc_AzhePrzMTyOkcRyiOT96U/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTU4/LzczMWQxZGE3LTA1/ZGItNGY5MS05ZTdi/LWNmODQyMWRjYjJj/MS5wbmc.png"
          alt=""
        />

        <img
          className="h-14"
          src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260"
          alt=""
        />

        <img
          className="h-24"
          src="https://companieslogo.com/img/orig/WIT_BIG-0de2dc21.png?t=1648406781"
          alt=""
        />

        <img
          className="h-14"
          src="https://hostbillapp.com/appstore/payment_paytm/images/logo.png"
          alt=""
        />
      </div>

      <div className="flex justify-center mt-16">
        <Link
          to={"/courses"}
          className="button bg-[rgb(36,207,166)] text-black text-xl font-bold text-center mt-5 py-2 rounded-lg px-14 "
        >
          Explore Courses
        </Link>{" "}
      </div>
    </div>
  );
};

export default Companies;
