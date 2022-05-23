import React, { useContext } from "react";
//router-dom
import { Link } from "react-router-dom";
//functions
import { isFavorite } from "../../helper/function";
import { shortTitle, isInCart, quantityCount } from "../../helper/function";
//context
import { cartContext } from "../../services/CartContextProvider";

const Card = ({ productData }) => {
  const { title, image, price, rating, id } = productData;
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className="flex flex-col justify-between h-full ">
      <img
        src={image}
        alt="dress "
        className="rounded-md w-56 sm:w-full md:w-full  h-56 mx-auto dark:shadow-2xl dark:shadow-slate-300"
      />
      <h5 className="font-bold text-sm  p-2">{shortTitle(title)}</h5>
      <div className="flex flex-col  ">
        <div className="flex justify-between">
          <button
            onClick={() => {
              dispatch({ type: "LIKE", payload: productData });
            }}
            className="text-red-500 transition-all"
          >
            {isFavorite(state, productData.id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </button>
          <p className="font-medium inline p-2 self-end">{price}$</p>
        </div>
        <p className="text-sm font-semibold">
          Rate: {rating.rate}{" "}
          <span className="text-slate-600 font-thin">
            at {rating.count} person
          </span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 my-2 p-1">
        <Link
          className=" text-lg text-gray-800 dark:text-fuchsia-900 font-semibold bg-lime-200 hover:bg-orange-200 transition-all px-2 py-1 rounded "
          to={`/products/${id}`}
        >
          Details
        </Link>

        <div className="flex justify-between">
          {isInCart(state, id) ? (
            <div className="flex gap-2 items-center">
              {quantityCount(state, id) > 1 ? (
                <button
                  className="bg-blue-400  p-2 rounded"
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: productData })
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
                      d="M20 12H4"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="bg-blue-400 p-2 rounded"
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
              <p className="font-medium">
                {quantityCount(state, productData.id)}
              </p>
              <button
                className="bg-blue-400 p-2 rounded"
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-400 py-2 px-4 font-semibold rounded hover:bg-blue-600 transition-all"
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
