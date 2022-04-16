import React, { Suspense, useContext, useState } from "react";

import { productContext } from "../services/ProductContextProvider";

import useTitle from "../hooks/useTitle";
import LinkFilter from "./LinkFilter";
import Loading from "./Loading";
import Search from "./Search";
const Card = React.lazy(() => import("./shared/Card"));

export const dataContext = React.createContext();

const Cards = () => {
  useTitle("products");

  const [search, setSearch] = useState("");
  const [showInput, setShowInput] = useState(false);

  const products = useContext(productContext);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const isShow = () => {
    setShowInput(!showInput);
  };

  const searchData = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* <LinkFilter /> */}

      <Suspense fallback={<Loading />}>
        <div className="flex justify-end items-center relative z-0 dark:bg-slate-800">
          <button
            onClick={isShow}
            className={` hover:scale-125 transition-all ease-in-out py-5 px-12  duration-700  ${
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
            typeof="search"
            placeholder="search"
            onChange={searchHandler}
            className={`z-0  w-full border-2    h-10 text-lg dark:text-white dark:bg-slate-800 outline-none  overflow-hidden rounded-md p-8 placeholder:text-xl shadow-lg transition-all ease-in duration-300 ${
              showInput ? "flex  opacity-100 " : "hidden opacity-0"
            } `}
          />
          <button
            className={`absolute top-6 right-12  z-30 hover:rotate-90 transition-all ease-in-out duration-700 ${
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
        {/* <div>
          <input type={'search'} value={search} onChange={searchHandler} placeholder={'search'}  className={`px-4 py-2`}/>
        </div> */}
        <div className="flex flex-wrap justify-center dark:bg-slate-800 ">
          {searchData.map((data) => (
            <div
              key={data.id}
              className={` w-6/12 sm:w-48  mx-auto md:w-56 flex flex-col justify-between  rounded-sm border m-2 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-white dark:hover:shadow-md p-2 transition-all delay-100 dark:bg-slate-600`}
            >
              <Card productData={data} />
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default Cards;
