import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Courses from "./Pages/Courses";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".navbar", {
      y: -10,
      delay: 0.5,
      opacity: 0,
    });
  });

  useGSAP(() => {
    tl.from(".link", {
      y: -10,
      opacity: 0,
      stagger: 0.3,
      scrub: 3,
    });
  });

  useGSAP(() => {
    tl.from(".lan-h1", {
      y: 40,
      opacity: 0,
      stagger: 0.3,
    });
  });

  useGSAP(() => {
    tl.from(".learn", {
      y: 40,
      opacity: 0,
      stagger: 0.3,
    });
  });

  useGSAP(() => {
    tl.from(".one p", {
      y: 20,
      opacity: 0,
      stagger: 0.3,
    });
  });

  useGSAP(() => {
    tl.from(".one h1", {
      scale: 0,
      opacity: 0,
      stagger: 0.3,
    });
  });

  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
