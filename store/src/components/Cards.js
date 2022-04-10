import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import useTitle from "../hooks/useTitle";
import LinkFilter from "./LinkFilter";
import Loading from "./Loading";
const Card = React.lazy(() => import("./Card"));

export const dataContext = React.createContext();

const Cards = ({ shopData, location, setShopData }) => {
  // const categoryQuery = queryString.parse(location.search);
  const data = {
    shopData: shopData,
    // category : queryString.parse(location.search),
  };
  useTitle("products");
  return (
    <>
      {/* {console.log(categoryQuery)}
      {console.log(categoryQuery.category)} */}
      <dataContext.Provider value={data}>
        <LinkFilter />
      </dataContext.Provider>

      <Suspense fallback={<Loading />}>
        <div className="flex flex-wrap justify-center">
          {shopData.loading ? (
            <Loading />
          ) : (
            shopData.data.map((data) => (
              <div
                className={` w-6/12 sm:w-48  mx-auto md:w-56 flex flex-col justify-between  rounded-sm border-2 m-2 overflow-hidden shadow-sm hover:shadow-xl p-2 transition-all delay-100`}
              >
                <Card
                  key={data.id}
                  image={data.image}
                  name={data.title}
                  rate={data.rating.rate}
                  cost={data.price}
                  count={data.rating.count}
                />
              </div>
            ))
          )}
        </div>
      </Suspense>
    </>
  );
};

export default Cards;
