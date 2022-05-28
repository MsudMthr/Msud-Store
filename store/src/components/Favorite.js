import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

// import { cartContext } from "../services/CartContextProvider";
import Card from "./shared/Card";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites);

  // const { state } = useContext(cartContext);
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      {favorites.favorite.length ? (
        <div className="flex  justify-evenly flex-wrap ">
          {favorites.favorite.map((product) => (
              <div
                className={` w-72 sm:w-48  mx-auto md:w-56 flex flex-col justify-between max-h-96  rounded-sm border m-2 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-white dark:hover:shadow-md p-2 transition-all delay-100 dark:bg-slate-600`}
              >
                <Card productData={product} />
              </div>
            ))}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col gap-3">
          <p className="font-semibold">You Dont Have a Favorite Product</p>
          <Link
            to={"/products"}
            className="bg-blue-400 px-2 py-1 rounded dark:bg-lime-200 dark:text-black font-medium text-xl hover:scale-105 transition-all"
          >
            Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorite;
