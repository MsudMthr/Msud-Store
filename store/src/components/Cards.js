import React, { Suspense, useContext, useEffect, useState } from "react";

import { productContext } from "../services/ProductContextProvider";
import useTitle from "../hooks/useTitle";
import Loading from "./Loading";
import FilterProducts from "./FilterProducts";

const Card = React.lazy(() => import("./shared/Card"));

// export const dataContext = React.createContext();

const Cards = () => {
  useTitle("products");
  const [category, setCategory] = useState("");

  const { products, searchText, setProducts } = useContext(productContext);

  const filterProducts = () => {
    if (category.category === "All Products") {
      const searchProducts = products.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      return searchProducts;
    } else {
      const searchProducts = products.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      const searchFilterProducts = searchProducts.filter(
        (item) => item.category === category.category
      );
      return searchFilterProducts;
    }
  };

  const product = filterProducts();

  return (
    <section >
      <FilterProducts setCategory={setCategory} />
      <Suspense fallback={<Loading />}>
        <div className="flex flex-wrap justify-center overflow-hidden dark:bg-slate-800 ">
          {product.map((data) => (
            <div
              key={data.id}
              className={` w-6/12 sm:w-48  md:w-56 flex flex-col justify-between  rounded-sm border m-2 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-white dark:hover:shadow-md p-2 transition-all delay-100 dark:bg-slate-600`}
            >
              <Card productData={data} />
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Cards;
