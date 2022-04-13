import React, { Suspense, useContext } from "react";

import { productContext } from "../services/ProductContextProvider";


import useTitle from "../hooks/useTitle";
import LinkFilter from "./LinkFilter";
import Loading from "./Loading";
const Card = React.lazy(() => import("./shared/Card"));

export const dataContext = React.createContext();

const Cards = () => {
  useTitle("products");

  const products = useContext(productContext);
  return (
    <>
      <LinkFilter />

      <Suspense fallback={<Loading />}>
        <div className="flex flex-wrap justify-center dark:bg-slate-800 ">
          {products.map((data) => (
            <div
              key={data.id}
              className={` w-6/12 sm:w-48  mx-auto md:w-56 flex flex-col justify-between  rounded-sm border m-2 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-white dark:hover:shadow-md p-2 transition-all delay-100 dark:bg-slate-600`}
            >
              <Card
                productData = {data}
              />
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default Cards;
