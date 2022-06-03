import React, { useState } from "react";

import Menu from "./Menu";

const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);

  const toggleHandler = () => {
    setShowToggle(!showToggle);
  };

  return (
    <div className="transition-all duration-300 flex  justify-between dark:rounded-md px-4 md:flex-col  items-center   dark:bg-slate-800 z-20">
      <h1 className=" font-bold m-4 md:pt-4 dark:text-white transition-all duration-300 z-10">
        STORE
      </h1>

      <div className="md:w-full">
        <Menu open={showToggle} />
        <div
          className={`flex flex-col  sm:hidden  h-[15px] justify-around  ${
            showToggle && "absolute top-2 right-2 z-20"
          }`}
          onClick={toggleHandler}
          open={showToggle}
        >
          <span
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all duration-300 dark:bg-amber-50  ${
              showToggle && "rotate-45"
            }`}
          ></span>
          <span
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all duration-300 dark:bg-amber-50  ${
              showToggle && "translate-x-full opacity-0"
            }`}
          ></span>
          <span
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all duration-300 dark:bg-amber-50  ${
              showToggle && "-rotate-45"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
