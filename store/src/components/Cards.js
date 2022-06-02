import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import useTitle from "../hooks/useTitle";
import Loading from "./Loading";
import FilterProducts from "./FilterProducts";
import fetchProducts from "../redux/getProductsFromApi/getProductAction";

const Card = React.lazy(() => import("./shared/Card"));

// export const dataContext = React.createContext();

const Cards = () => {
  useTitle("products");
  // const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const filterState = useSelector((state) => state.filterProducts);
  console.log(filterState);
  const filterProducts = () => {
    if (filterState.category.category === "All Products") {
      const searchProducts = productsState.products.filter((item) =>
        item.title.toLowerCase().includes(filterState.searchText.toLowerCase())
      );
      return searchProducts;
    } else {
      const searchProducts = productsState.products.filter((item) =>
        item.title.toLowerCase().includes(filterState.searchText.toLowerCase())
      );
      const searchFilterProducts = searchProducts.filter(
        (item) => item.category === filterState.category.category
      );
      return searchFilterProducts;
    }
  };

  const product = filterProducts();
  return (
    <section>
      {productsState.isLoading ? (
        <Loading />
      ) : (
        <>
          <FilterProducts />

          <div className="flex flex-wrap justify-center overflow-hidden min-h-screen dark:bg-slate-800 ">
            {product.map((data) => (
              <div
                key={data.id}
                className={` w-6/12 sm:w-48 max-h-[450px]  md:w-56 flex flex-col justify-between  rounded-sm border m-2 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-white dark:hover:shadow-md p-2 transition-all delay-100 dark:bg-slate-600`}
              >
                <Card productData={data} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Cards;
