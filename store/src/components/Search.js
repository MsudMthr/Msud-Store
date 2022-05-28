import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { searchText } from "./../redux/filterProducts/filterProductsAction";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.filterProducts.searchText);

  const [showInput, setShowInput] = useState(false);
  const isShow = () => {
    setShowInput(!showInput);
  };

  const handleChange = (event) => {
    dispatch(searchText(event.target.value));
  };
  return (
    <div className="flex justify-center items-center ">
      <button
        onClick={isShow}
        className={`z-10 hover:scale-125 transition-all ease-in-out duration-700  ${
          showInput ? "hidden" : "flex"
        }`}
      >
        <svg
          className="w-6 h-6 text-zinc-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
      <input
        type="search"
        placeholder="search"
        onChange={handleChange}
        value={search}
        className={`z-0 absolute w-full  left-0 top-0 h-full text-lg capitalize dark:text-white dark:bg-slate-800 outline-none  overflow-hidden rounded-md px-4 placeholder:text-xl shadow-lg transition ease-in duration-300 ${
          showInput ? "flex  opacity-100" : "hidden opacity-0"
        } `}
      />
      <button
        className={`absolute top-4 right-8  z-30 hover:rotate-90 transition-all ease-in-out duration-700 ${
          showInput ? "flex" : "hidden"
        }`}
        onClick={isShow}
      >
        <svg
          className="w-6 h-6 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Search;
