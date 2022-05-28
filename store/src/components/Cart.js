import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { checkOut, clear } from "../redux/Cart/CartAction";

import CartItem from "./shared/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.selectedItems.length ? (
        <div className="w-full flex flex-col-reverse   items-center md:items-start md:flex-row justify-between gap-3  dark:bg-slate-800 dark:text-white">
          <div className="w-full md:w-9/12">
            {cart.selectedItems.map((item) => (
              <CartItem data={item} />
            ))}
          </div>
          <div className="w-full md:w-3/12 border-2 border-blue-500  rounded-md ">
            <h4 className="font-semibold">
              total : <span>{cart.itemCounter}</span>
            </h4>
            <h4 className="font-semibold">
              payment : <span>${cart.total.toLocaleString()}</span>
            </h4>
            <div className="flex justify-between m-2  ">
              <button
                onClick={() => dispatch(clear())}
                className="bg-red-500 rounded p-1"
              >
                Clear
              </button>
              <button
                onClick={() => dispatch(checkOut())}
                className="bg-green-500 rounded p-1"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center flex-col">
          <div className="emptyCart"></div>
          <h1 className="text-2xl font-bold"> no order yet!</h1>
          <p className="w-52 text-center text-xs opacity-50">
            your cart is empty , you can by something from menu
          </p>
          <Link
            to={"/products"}
            className="bg-red-500 py-2 px-4 font-semibold mt-2 rounded hover:rounded-xl transition-all hover:scale-105 hover:bg-red-700"
          >
            Buy something
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
