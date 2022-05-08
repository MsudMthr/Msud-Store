import React, { useContext } from "react";

import { cartContext } from "../services/CartContextProvider";
import CartItem from "./shared/CartItem";

const Cart = () => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className="flex flex-col-reverse  items-center md:items-start md:flex-row justify-between gap-3  dark:bg-slate-800 dark:text-white">
      <div className="w-full md:w-9/12">
        {state.selectedItems.map((item) => (
          <CartItem data={item} />
        ))}
      </div>
      <div className="w-full md:w-3/12 border-2 border-blue-500  rounded-md md:sticky md:top-2 md:right-0">
        <h4 className="font-semibold">
          total : <span>{state.itemCounter}</span>
        </h4>
        <h4 className="font-semibold">
          payment : <span>${state.total.toLocaleString()}</span>
        </h4>
        <div className="flex justify-between m-2  ">
            <button onClick={() => dispatch({type:"CLEAR"})} className='bg-red-500 rounded p-1'>Clear</button>
            <button onClick={() => dispatch({type:"CHECKOUT"})} className='bg-green-500 rounded p-1'>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
