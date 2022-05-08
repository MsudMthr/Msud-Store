import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import queryString from "query-string";

const LinkFilter = ({ setPath , filterCategory  }) => {
  const LinkRef = React.createRef();

  return (
    <div
      className="hidden sm:flex sm:justify-evenly py-2 sticky top-0 transition-all  bg-white dark:bg-slate-800 shadow-md rounded-sm"
      ref={LinkRef}
    >
      <Link
        className="py-2 px-4 bg-slate-200 shadow-sm rounded-full opacity-50 focus:opacity-100  duration-300 focus:bg-slate-500 transition-all hover:bg-slate-200 hover:opacity-100"
        onClick={() => {
          setPath(queryString.parse(window.location.search));
          filterCategory()
        }}
        to={"/products"}
      >
        All
      </Link>
      <Link
        className="py-2 px-4 bg-slate-200 shadow-sm rounded-full opacity-50 focus:opacity-100  duration-300 focus:bg-slate-500 transition-all hover:bg-slate-200 hover:opacity-100"
        onClick={() => {
          setPath(queryString.parse(window.location.search));
          filterCategory("men's clothing")
        }}
        to={"/products?category=men's clothing"}
      >
        Men
      </Link>
      <Link
        className="py-2 px-4 bg-slate-200 shadow-sm rounded-full opacity-50 focus:opacity-100  duration-300 focus:bg-slate-500 transition-all hover:bg-slate-200 hover:opacity-100"
        onClick={() => {
          setPath(queryString.parse(window.location.search));
          filterCategory('jewelry')
        }}
        to={"/products?category=jewelry"}
      >
        Jewelry
      </Link>
      <Link
        className="py-2 px-4 bg-slate-200 shadow-sm rounded-full opacity-50 focus:opacity-100  duration-300 focus:bg-slate-500 transition-all hover:bg-slate-200 hover:opacity-100"
        onClick={() => {
          setPath(queryString.parse(window.location.search));
          filterCategory("electronics")
        }}
        to={"/products?category=electronics"}
      >
        Electronics
      </Link>
      <Link
        className="py-2 px-4 bg-slate-200 shadow-sm rounded-full opacity-50 focus:opacity-100  duration-300 focus:bg-slate-500 transition-all hover:bg-slate-100 hover:opacity-100"
        onClick={() => {
          setPath(queryString.parse(window.location.search));
          filterCategory("women's clothing")
        }}
        to={"/products?category=women's clothing"}
      >
        Women
      </Link>
      <Search />
    </div>
  );
};

export default LinkFilter;
