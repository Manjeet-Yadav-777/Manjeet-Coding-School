import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="md:px-16 px-5 mt-28">
        <div className="h-[1px] bg-[rgb(61,59,59)]"></div>{" "}
      </div>
      <div className="footer text-white md:px-16 px-5 flex py-20 justify-between flex-wrap md:flex-row flex-col">
        <div>
          <h1 className="text-4xl">🦁</h1>
          <p className="text-[rgb(201,201,201)] mt-2">
            Let's connect with our socials
          </p>
        </div>

        <div className="md:mt-0 mt-10">
          <h1 className="font-bold text-[rgb(201,201,201)]">COMPANY</h1>

          <div className="mt-6">
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">About Us</a>
            </p>
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">Support</a>
            </p>
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">Privacy Policy</a>
            </p>
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">Terms Condition</a>
            </p>
          </div>
        </div>

        <div className="md:mt-0 mt-10">
          <h1 className="font-bold text-[rgb(201,201,201)]">COMMUNITY</h1>

          <div className="mt-6">
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">Inertia</a>
            </p>
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">Discord</a>
            </p>
          </div>
        </div>

        <div className="md:mt-0 mt-10">
          <h1 className="font-bold text-[rgb(201,201,201)]">GET IN TOUCH</h1>

          <div className="mt-6">
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">+91-9166024500</a>
            </p>
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">+91-9509709957</a>
            </p>
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">my79762975@gmail.com</a>
            </p>
            <p className="mt-2 text-[rgb(201,201,201)]">
              <a href="">Jaipur Rajasthan</a>
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-16 px-5">
        <div className="h-[1px] bg-[rgb(61,59,59)]"></div>{" "}
      </div>

      <div className="text-white py-5 flex flex-col items-center">
        <p className="font-bold text-[rgb(159,155,155)]">
          Copyright &copy; 2024 Manjeet Pvt. Ltd.
        </p>
        <p className="font-bold text-[rgb(159,155,155)]">All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
