import React, { useContext } from "react";
import { cartContext } from "../../services/CartContextProvider";
import { isFavorite, isInCart, quantityCount } from "../../helper/function";

const CartButton = ({ product, id }) => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className="flex items-center gap-5">
      
      <div className="flex justify-between">
        {isInCart(state, id) ? (
          <div className="flex gap-2 items-center">
            {quantityCount(state, id) > 1 ? (
              <button
                className="bg-blue-400 py-2 rounded"
                onClick={() => dispatch({ type: "DECREASE", payload: product })}
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
                  dispatch({
                    type: "REMOVE_ITEM",
                    payload: product,
                  })
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
            <p className="font-medium">{quantityCount(state, product.id)}</p>

            <button
              className="bg-blue-400 p-2 rounded"
              onClick={() => dispatch({ type: "INCREASE", payload: product })}
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
            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
          >
            Add to cart
          </button>
        )}
        {/*

*/}
      </div>
    </div>
  );
};

export default CartButton;
