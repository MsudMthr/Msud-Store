import React, { useContext } from "react";
import { quantityCount, shortTitle } from "../../helper/function";
import { cartContext } from "../../services/CartContextProvider";

const CartItems = ({ data }) => {
  const { dispatch } = useContext(cartContext);

  return (
    <div className="flex justify-between items-center w-12/12 border-2 py-2 gap-2 px-4 m-2 rounded-md dark:bg-slate-800 dark:hover:bg-slate-200 dark:hover:text-black dark:text-white transition-all ease-out ">
      <img
        className="max-w-xs md:w-24 w-20 h-20  md:h-24  rounded-sm"
        src={data.image}
        alt={shortTitle(data.title)}
      />
      <h6 className="font-semibold text-sm ">{shortTitle(data.title)}</h6>
      <p className="font-semibold bg-yellow-500 px-2 rounded-sm dark:text-black">
        {data.quantity}
      </p>
      <div className="flex gap-2">
        {data.quantity > 1 ? (
          <button className="bg-blue-400  px-2 rounded flex justify-center items-center select-none font-bold text-xl" onClick={() => dispatch({type:"DECREASE" , payload:data})}>-</button>
        ) : (
          <button className="bg-blue-400  rounded flex justify-center items-center select-none font-bold text-xl" onClick={() => dispatch({type:"REMOVE_ITEM" , payload:data})}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        )}
        
        <button className="bg-blue-400 px-2 rounded flex justify-center items-center select-none font-bold text-xl" onClick={() => dispatch({type:"INCREASE" , payload:data})}>+</button>
      </div>
    </div>
  );
};

export default CartItems;
