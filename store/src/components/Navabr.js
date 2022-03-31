import React , {useState} from "react";


import Menu from "./Menu";

const Navabr = () => {
  const [showToggle, setShowToggle] = useState(false);

  const toggleHandler = () => {
    setShowToggle(!showToggle);
  };

  return (
    <div className="flex  justify-between px-4 md:flex-col items-center z-10">
      <h1 className=" font-bold m-4 md:pt-4">STORE</h1>

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
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all  ${
              showToggle && "rotate-45"
            }`}
          ></span>
          <span
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all  ${
              showToggle && "translate-x-full opacity-0"
            }`}
          ></span>
          <span
            className={`w-4 bg-black rounded-sm h-0.5 origin-[1px] transition-all  ${
              showToggle && "-rotate-45"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
