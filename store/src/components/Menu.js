import React, { useState, useEffect } from "react";
//redux
import { useSelector } from "react-redux";

//router-dom
import { Link } from "react-router-dom";
//component
import Theme from "./Theme";
// import { firstLetter } from "./../helper/function";


const Menu = ({ open }) => {
  const itemCounter = useSelector((state) => state.cart.itemCounter);
  const user = useSelector((state) => state.userState);

  return (
    <div>
      <ul
        open={open}
        className={`transition-all duration-300 rounded-lg  ease-in-out justify-evenly md:flex-col md:h-80 items-center sm:static sm:translate-x-0 sm:h-10   sm:flex sm:flex-row bg-slate-200 sm:bg-white fixed top-0 right-0 dark:bg-slate-800 dark:text-white
        ${
          open
            ? "flex flex-col z-10  h-screen translate-x-0"
            : "  translate-x-[1000%]"
        }`}
      >
        <li>
          <Link
            to={"/"}
            className="flex gap-1 mx-2 cursor-pointer hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link
            to={"/products"}
            className="flex gap-1 mx-2 cursor-pointer hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            <p>product</p>
          </Link>
        </li>
        <li>
          <Link
            to={"/Favorite"}
            className="flex gap-1 mx-2 cursor-pointer hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <p>Favorite</p>
          </Link>
        </li>
        <li>
          <Link
            to={"/Cart"}
            className="flex gap-1 mx-2  cursor-pointer relative hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <p>Cart</p>
            <p className="absolute top-0 dark:text-black font-bold shadow-sm shadow-amber-300 rounded-full px-1  right-0 bg-amber-300 text-xs ">
              {itemCounter}
            </p>
          </Link>
        </li>{" "}
        <li>
          {user.isLoggedIn ? (
            <Link
              to={"/Profile"}
              className="flex gap-1 mx-2  cursor-pointer relative hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <p>Profile</p>
            </Link>
          ) : (
            <Link
              to={"/SignUp"}
              className="flex gap-1 mx-2 cursor-pointer hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>SignUp</p>
            </Link>
          )}
        </li>
        <Theme />
      </ul>
    </div>
  );
};

export default Menu;
