import React from "react";
import Cards from "./Cards";

const Cources = () => {
  return (
    <div className="text-white px-16 min-h-screen pb-40">
      <h1 className="lan-para text-3xl md:text-4xl">Cources Offered.</h1>

      <div className="flex flex-wrap items-center justify-between">
        <Cards
          image="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"
          name="React Js : Master The Art"
          content="Join our interactive React JS course to build dynamic, modern web
            applications with real-world projects."
          teacher="Manjeet Yadav"
          price="4999"
        />

        <Cards
          image="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/node_js_logo-1024.png"
          name="Node Js : Master The Art"
          content="Enroll in our interactive Node.js course to master server-side development with hands-on projects and real world examples."
          teacher="Manjeet Yadav"
          price="4999"
        />

        <Cards
          image="https://media.mongodb.org/ico/icon-leaf.png"
          name="MongoDB : Master The Art"
          content="Enroll in our interactive MongoDB course to learn database management through hands-on projects and exercises."
          teacher="Manjeet Yadav"
          price="2999"
        />

        <Cards
          image="https://hiresoftwareengineer.com/wp-content/uploads/2022/10/express-original.png"
          name="Express Js : Master The Art"
          content="Join our interactive React JS course to build dynamic, modern web
            applications with real-world projects."
          teacher="Manjeet Yadav"
          price="3999"
        />
      </div>
    </div>
  );
};

export default Cources;
