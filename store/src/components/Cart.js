import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../services/CartContextProvider";
import CartItems from "./shared/CartItems";
import { productContext } from "../services/ProductContextProvider";
const Cart = () => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen justify-around dark:bg-slate-800 dark:text-white ">
      {state.itemCounter > 0 && (
        <div className="flex flex-col gap-4 md:w-8/12">
          {state.selectedItems.map((item) => (
            <CartItems key={item.id} data={item} />
          ))}
        </div>
      )}

      {state.checkOut && (
        <div className="w-full flex flex-col  justify-center items-center gap-2">
          <h4 className="text-green-600 font-bold">checkout successfully</h4>
          <Link
            className="dark:text-lime-100 text-indigo-800 font-semibold"
            to={"/products"}
          >
            Buy more
          </Link>
        </div>
      )}

      {!state.checkOut && state.itemCounter === 0 && (
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h4 className="dark:text-blue-100 font-bold">Want to Buy ?</h4>
          <Link
            className="dark:text-lime-100 text-indigo-800 font-semibold"
            to={"/products"}
          >
            Back to shop
          </Link>
        </div>
      )}
      {!state.checkOut && state.itemCounter !== 0 && (
        <div className=" md:w-4/12 w-11/12 flex flex-col justify-around  md:h-80 h-40 md:sticky md:top-2 md:right-1 my-2  border mx-auto  px-2 rounded-md">
          <h1 className="text-center my-2 font-bold text-lg">Cart</h1>
          <div className="flex flex-col justify-around ">
            <p>
              <span className="my-2 font-bold text-sm md:text-lg">
                total selected =
              </span>
              <span className="font-semibold"> {state.itemCounter}</span>{" "}
            </p>
            <p>
              <span className="my-2 font-bold text-sm md:text-lg">
                total payment ={" "}
              </span>
              <span className="font-semibold">{state.total} $</span>
            </p>
          </div>
          <div className="flex justify-around my-4">
            <button
              className="text-blue-500 "
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              clear
            </button>
            <button
              className="bg-green-500 rounded-md py-2 px-4"
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              checkOut
            </button>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Cart;
