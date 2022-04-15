import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../services/CartContextProvider";
import Theme from "./Theme";

const Menu = ({ open }) => {

  const {state} = useContext(cartContext)
  console.log(state);
  return (
    <div>
      <ul
        open={open}
        className={`transition-all duration-300 rounded-lg  ease-in-out justify-evenly md:flex-col gap-3 md:h-48 items-center sm:static sm:translate-x-0 sm:h-10   sm:flex sm:flex-row bg-slate-200 sm:bg-white fixed top-0 right-0 dark:bg-slate-800 dark:text-white
        ${
          open
            ? "flex flex-col z-10  h-screen translate-x-0"
            : "  translate-x-[1000%]"
        }`}
      >
        <li>
          <Link
            to={"/"}
            className="mx-2 cursor-pointer hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2  md:my-4 md:py-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/products"}
            className="mx-2 cursor-pointer hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2  md:my-4 md:py-2"
          >
            product
          </Link>
        </li>
        <li>
          <Link
            to={"/SignUp"}
            className="mx-2 cursor-pointer hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2  md:my-4 md:py-2"
          >
            SignUp
          </Link>
        </li>
        <li>
          <Link
            to={"/cart"}
            className="mx-2 cursor-pointer flex justify-center items-center relative  hover:text-violet-600 dark:hover:text-red-400  transition-all md:border-b-2 dark:md:border-stone-600 px-2 py-2 md:py-1"
          >
            Cart {state.itemCounter > 0 && <p className="absolute top-0 -right-2 flex justify-center items-center  text-xs bg-teal-400 dark:text-black font-semibold w-4 h-4 rounded-full">{state.itemCounter}</p>}
          </Link>
        </li>
        <Theme />
      </ul>
    </div>
  );
};

export default Menu;
