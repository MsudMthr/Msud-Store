import React from "react";
import CategoryFilter from "./CategoryFilter";
import Search from "./Search";

const FilterProducts = () => {
  return (
    <div className="sticky top-0 w-full  bg-white flex justify-around py-3 shadow-md dark:bg-slate-900">
      <CategoryFilter />
      <Search />
    </div>
  );
};

export default FilterProducts;
