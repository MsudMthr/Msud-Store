import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen relative  dark:bg-slate-800 w-full transition-all z-1">
      <div className="flex flex-col items-center justify-center absolute md:top-28 top-16 ml-20">
        <h1 className="md:text-6xl text-4xl  font-bold dark:text-white ">
          Page is not found
          <p className="md:text-8xl text-6xl font-semibold my-4 ml-8 dark:text-white">
            404
          </p>
        </h1>
        <div className="flex justify-between items-center my-8 w-full md:justify-center gap-2">
          <button
            className="py-2 px-4 font-semibold bg-blue-600 text-white rounded-md   w-36 dark:bg-lime-200 dark:text-black "
            onClick={() => navigate("/", { replace: true })}
          >
            Back Home
          </button>
          <button
            className="py-2 px-4 font-semibold bg-sky-800 text-white rounded-md   w-28 dark:bg-amber-200 dark:text-black mr-8"
            onClick={() => navigate('/products')}
          >
            products
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
