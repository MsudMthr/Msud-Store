import React from "react";
//router-dom
import { Link } from "react-router-dom";
//functions
import { isFavorite } from "../../helper/function";
import { shortTitle } from "../../helper/function";

//components
import CartButton from "./CartButton";
import LikeButton from './LikeButton';

const Card = ({ productData }) => {
  const { title, image, price, rating, id } = productData;

  return (
    <div className="flex flex-col justify-between h-full ">
      <img
        src={image}
        alt="dress"
        className="rounded-md w-56 sm:w-full md:w-full  h-56 mx-auto dark:shadow-2xl dark:shadow-slate-300"
      />
      <h5 className="font-bold text-sm  p-2">{shortTitle(title)}</h5>
      <div className="flex flex-col  ">
        <div className="flex justify-between">
         <LikeButton product={productData}/> 
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
        <CartButton product={productData} id={id} />
      </div>
    </div>
  );
};

export default Card;
