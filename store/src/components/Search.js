import React, { useState } from "react";

const Search = () => {
  const [showInput, setShowInput] = useState(false);

  const isShow = () => {
    setShowInput(!showInput);
  };
  return (
    <div className="flex justify-center items-center">
      <button onClick={isShow} className={`z-10 ${showInput ? "hidden" : "flex"}`}>
        <svg
          class="w-6 h-6 text-zinc-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
      <input
        typeof="search"
        placeholder="search"
        className={`z-0 absolute w-full left-0 top-0 h-full text-lg overflow-hidden rounded-md px-4 placeholder:text-xl shadow-lg ${
          showInput ? "flex" : "hidden"
        } `}
      />
      <button
        className={`absolute top-4 right-4 z-30 ${showInput ? "flex" : "hidden"}`}
        onClick={isShow}
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Search;
