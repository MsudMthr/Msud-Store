import React, { useContext } from "react";

import { productContext } from "../services/ProductContextProvider";

import Card from "./shared/Card";

const Suggestion = ({ category }) => {
  const { products } = useContext(productContext);

  const suggestProduct = products.filter(
    (product) => product.category === category
  );

  console.log(suggestProduct);

  return (
    <div className="flex flex-wrap gap-3 justify-center ">
      {suggestProduct.map((product) => (
        <div
          key={product.id}
          className={`max-w-[180px] w-6/12 sm:w-48  md:w-56 md:max-w-xs flex flex-col justify-between items-center  rounded-sm border my-2 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-white dark:hover:shadow-md p-2 transition-all delay-100 dark:bg-slate-600`}
        >
          <Card productData={product} />
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
