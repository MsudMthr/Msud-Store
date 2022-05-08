import React, { useContext } from "react";

import { cartContext } from "../../services/CartContextProvider";
import { shortTitle } from "../../helper/function";

const FavoriteItem = ({ data }) => {
  const { dispatch } = useContext(cartContext);

  return (
    <div className="flex flex-col">
      <img src={data.image} alt={data.title} className="max-h-40 w-40" />
      <h5>{shortTitle(data.title)}</h5>
      <div>
        <p>{data.price}</p>
        <p>{data.rating.rate}</p>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "LIKE", payload: data });
        }}
        className="text-red-500 "
      >
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
      </button>
    </div>
  );
};

export default FavoriteItem;
