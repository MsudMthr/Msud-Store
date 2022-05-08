import React, { useContext } from "react";
import { quantityCount ,shortTitle } from "../../helper/function";

import { cartContext } from "../../services/CartContextProvider";

const CartItem = ({ data }) => {
  const {state, dispatch } = useContext(cartContext);

  return (
    <div className="flex justify-between  items-center gap-1 m-2 border rounded p-1 dark:bg-slate-400 hover:shadow-lg dark:hover:shadow-md dark:hover:shadow-white dark:text-white transition-all">
      <img src={data.image} alt={data.title} className="w-24 max-h-24 h-24" />
      <p className="font-semibold">{shortTitle(data.title)}</p>
      <p className="font-medium">${data.price.toLocaleString()}</p>
      <p className="font-medium bg-yellow-300 px-1 rounded">{data.quantity}</p>
      <div>
        <div className="flex gap-1 items-center">
          {quantityCount(state, data.id) > 1 ? (
            <button
              className="bg-blue-400 p-1 rounded"
              onClick={() =>
                dispatch({ type: "DECREASE", payload: data })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12H4"
                />
              </svg>
            </button>
          ) : (
            <button
              className="bg-blue-400 p-1 rounded"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: data })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
         
          <button
            className="bg-blue-400 p-1 rounded"
            onClick={() => dispatch({ type: "INCREASE", payload: data })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
