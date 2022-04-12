import React from "react";
import { Link } from "react-router-dom";

import { shortTitle } from "../../helper/function";

const Card = ({ name, image, cost, rate, count , id }) => {
  return (
    <div className="flex flex-col justify-between h-full ">
      <img
        src={image}
        alt="dress "
        className="rounded-sm w-11/12 sm:w-full md:w-full h-40 dark:shadow-2xl dark:shadow-slate-300"
      />
      <h5 className="font-bold text-sm  p-2">{shortTitle(name)}</h5>
      <div className="flex flex-col  ">
        <p className="font-medium inline p-2 self-end">{cost}$</p>

        <p className="text-sm font-semibold">
          Rate: {rate}{" "}
          <span className="text-slate-600 font-thin">at {count} person</span>{" "}
        </p>
      </div>
      <div className="flex justify-between items-center my-2 p-1">
        <Link
          className="ml-2 text-lg text-gray-800 dark:text-red-100 "
          to={`/products/${id}`}
        >
          Details
        </Link>
        <div className="flex justify-between">
          <button className="bg-blue-700 py-1 px-3 rounded-md font-semibold text-white dark:bg-blue-200 dark:text-black  ">
            Add to cart
          </button>
          {/* <button className="bg-">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button className="bg-">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;