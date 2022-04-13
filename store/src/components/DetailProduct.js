import React, { useContext } from "react";

//hooks
import { useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";

//context
import { productContext } from "../services/ProductContextProvider";
import { cartContext } from "../services/CartContextProvider";

//functions
import {
  isInCart,
  quantityCount,
} from "../helper/function";


const DetailProduct = () => {
  const param = useParams();
  const data = useContext(productContext);
  const product = data[param.id - 1];
  const {state , dispatch} = useContext(cartContext)

  const { image, title, description, rating, price, category , id } = product;

  useTitle(`${title}`);

  console.log(product);
  return (
    <div className="flex flex-col  md:flex-row justify-center py-12 px-8  items-center dark:bg-slate-800 dark:text-white">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="md:w-80 md:max-h-96 w-40 rounded my-2"
      />
      <div className="flex flex-col justify-around mx-5">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="py-2">
          <span className="font-bold text-base">category : </span> {category}
        </p>
        <p className="text-justify">{description}</p>
        <p className="py-2">
          <span className="font-bold text-base">price : </span>
          {price} $
        </p>
        <div className="flex justify-between items-center py-12">
          <p>
            <span className="font-bold text-base">Rate : </span>
            {rating.rate}
          </p>
          <div className="flex justify-between">
            {isInCart(state, id) ? (
              <div className="flex gap-2">
                {quantityCount(state, id) >= 1 ? (
                  <button
                    className="bg-blue-400 p-2 rounded"
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: product })
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
                      dispatch({ type: "REMOVE_ITEM", payload: product })
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
                <button
                  className="bg-blue-400 p-2 rounded"
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: product })
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
                className="bg-blue-400 py-2 px-4 font-semibold rounded"
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: product })
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
    </div>
  );
};

export default DetailProduct;
