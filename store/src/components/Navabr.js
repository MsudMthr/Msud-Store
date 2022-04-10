import React , {useState} from "react";


import Menu from "./Menu";

const Navabr = () => {
  const [showToggle, setShowToggle] = useState(false);

  const toggleHandler = () => {
    setShowToggle(!showToggle);
  };

  return (
    <div className="transition-all duration-300 flex  justify-between dark:rounded-md px-4 md:flex-col items-center z-10  dark:bg-slate-800">
      <h1 className=" font-bold m-4 md:pt-4 dark:text-white">STORE</h1>

      <div>
        <Menu open={showToggle} />
        <div
          className={`flex flex-col  sm:hidden  h-4 justify-around  ${
            showToggle && "absolute top-4 right-4 z-20"
          }`}
          onClick={toggleHandler}
          open={showToggle}
        >
          <span
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all duration-300  ${
              showToggle && "rotate-45"
            }`}
          ></span>
          <span
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all duration-300  ${
              showToggle && "translate-x-full opacity-0"
            }`}
          ></span>
          <span
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all duration-300  ${
              showToggle && "-rotate-45"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
