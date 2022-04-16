import React, { useContext } from "react";
import { Link } from "react-router-dom";

//functions
import { shortTitle, isInCart, quantityCount } from "../../helper/function";
//context
import { cartContext } from "../../services/CartContextProvider";

const Card = ({ productData }) => {
  const { title, image, price, rating, id } = productData;
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className="flex flex-col justify-between h-full dark:bg-slate-800 ">
      <img
        src={image}
        alt="dress "
        className="rounded-sm w-11/12 sm:w-full md:w-full h-40 dark:shadow-2xl dark:shadow-slate-300"
      />
      <h5 className="font-bold text-sm  p-2">{shortTitle(title)}</h5>
      <div className="flex flex-col  ">
        <p className="font-medium inline p-2 self-end">{price}$</p>
        <p className="text-sm font-semibold">
          Rate: {rating.rate}{" "}
          <span className="text-slate-600 font-thin">
            at {rating.count} person
          </span>{" "}
        </p>
      </div>
      <div className="flex justify-between items-center my-2 p-1">
        <Link
          className="ml-2 text-lg text-gray-800 dark:text-red-100 "
          to={`/products/${id}`}
        >
          Details
        </Link>
        <div className="flex justify-between">
          {isInCart(state, id) ? (
            <div className="flex items-center gap-2">
              {quantityCount(state, id) > 1 && (
                <button
                  className="bg-blue-400 rounded px-2 flex justify-center items-center font-bold text-lg  "
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: productData })
                  }
                >
                  -
                </button>
              )}
              {quantityCount(state, id) === 1 && (
                <button
                  className="bg-blue-400 rounded px-2  flex justify-center items-center py-0.5  "
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: productData })
                  }
                >
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
              {quantityCount(state, id) > 0 && (
                <p className="font-bold dark:text-lime-200">
                  {quantityCount(state, id)}
                </p>
              )}

              <button
                className="bg-blue-400 rounded px-2 flex justify-center items-center font-bold text-lg  "
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-400 px-2 py-0.5 rounded font-bold"
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to cart
            </button>
          )}
          {/* 
         
          */}
        </div>
      </div>
    </div>
  );
};

export default Card;
