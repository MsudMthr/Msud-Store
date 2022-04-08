import React from "react";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import image from "../images/Free_Vector___Dressing_room_concept_illustration-removebg-preview.png";

const HomePage = () => {
  useTitle("msud store");
  return (
    <div className="flex md:flex-row flex-col items-center  h-screen bg-gradient-to-r from-lime-100 via-yellow-100 to-cyan-100  ">
      <div className="flex flex-col w-screen items-center md:items-start md:justify-evenly ">
        <div className="flex flex-col">
          <h1 className=" md:ml-4 font-bold text-6xl md:text-8xl">MSUD</h1>
        </div>
        <div className="md:ml-12 flex mt-4 flex-col items-center">
          <h4 className="font-bold text-3xl md:text-4xl ">Welcome</h4>
          <p className="font-medium text-lg md:text-xl mb-12">
            you can buy something in here{" "}
          </p>
          <div>
          <Link
            to={"/products"}
            className="bg-blue-500 mx-1 text-white font-bold w-fit py-2 px-4 self-center rounded-lg"
          >
            Go To Shop
          </Link>
          <Link
            to={"/SignUP"}
            className="bg-sky-500 mx-1 text-white font-bold w-fit py-2 px-4 self-center rounded-lg"
          >
            Signup
          </Link>
          </div>
        </div>
      </div>
      <img
        src={image}
        alt="msud store"
        className="md:h-4/6  h-1/2 self-center md:mr-16"
      />
    </div>
  );
};

export default HomePage;
