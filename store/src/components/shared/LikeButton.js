import React from "react";
import { isFavorite, isInCart, quantityCount } from "../../helper/function";

import { useSelector, useDispatch } from "react-redux";

// import { cartContext } from "../../services/CartContextProvider";
import { likeProduct } from "./../../redux/likeProducts/likeProductAction";

const LikeButton = ({ product }) => {
  // const { state, dispatch } = useContext(cartContext);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(likeProduct(product));
        }}
        className="text-red-500 transition-all"
      >
        {isFavorite(favorites, product.id) ? (
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
    </div>
  );
};

export default LikeButton;
