import React from "react";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import image from "../images/Free_Vector___Dressing_room_concept_illustration-removebg-preview.png";

const HomePage = () => {
  useTitle("msud store");
  return (
    <div className="flex md:flex-row flex-col justify-evenly items-center min-h-screen md:h-screen bg-gradient-to-r from-lime-100 via-yellow-100 to-cyan-100 dark:from-slate-800 dark:via-neutral-800 dark:to-gray-800  transition-all duration-300 ">
      <div className="flex flex-col w-screen max-w-lg items-center md:items-start md:justify-evenly ">
        <div className="flex flex-col">
          <h1 className=" md:ml-4 font-bold text-6xl md:text-8xl dark:text-white transition-all duration-300 ">MSUD</h1>
        </div>
        <div className="md:ml-8 flex mt-4 flex-col items-center">
          <h4 className="font-bold text-3xl md:text-4xl  dark:text-white transition-all duration-300 ">Welcome</h4>
          <p className="font-medium text-lg md:text-xl mb-12 dark:text-white transition-all duration-300 ">
            you can buy something in here{" "}
          </p>
          <div>
          <Link
            to={"/products"}
            className="bg-blue-500 mx-1 transition-all duration-300  text-white font-bold w-fit py-2 px-4 self-center rounded-lg dark:bg-lime-200 dark:text-black"
          >
            Go To Shop
          </Link>
          <Link
            to={"/SignUP"}
            className="bg-sky-500 mx-1 transition-all duration-300  text-white font-bold w-fit py-2 px-4 self-center rounded-lg dark:bg-amber-200 dark:text-black"
          >
            Signup
          </Link>
          </div>
        </div>
      </div>
      <img
        src={image}
        loading={"lazy"}
        alt="msud store"
        className="md:h-4/6  h-1/2 self-center md:mr-16"
      />
    </div>
  );
};

export default HomePage;
