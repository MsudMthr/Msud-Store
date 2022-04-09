import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import useTitle from "../hooks/useTitle";
import Card from "./Card";
import LinkFilter from "./LinkFilter";
import Loading from "./Loading";

export const dataContext = React.createContext();

const Cards = ({ shopData, location, setShopData }) => {
  // const categoryQuery = queryString.parse(location.search);
  const data = {
    shopData : shopData,
    // category : queryString.parse(location.search),
  }
  useTitle('products')
  return (
    <>
      {/* {console.log(categoryQuery)}
      {console.log(categoryQuery.category)} */}
      <dataContext.Provider value={data}>
        <LinkFilter />
      </dataContext.Provider>

      <div className="flex flex-wrap justify-center">
        {shopData.loading ? (
          <Loading />
        ) : (
          shopData.data.map((data) => (
            <Link
              to={`products/${data.id}`}
              key={data.id}
              className={` w-6/12 sm:w-36  mx-auto md:w-48 flex flex-col justify-between  rounded-sm border-2 m-2 overflow-hidden shadow-xl p-2`}
            >
              <Card
                image={data.image}
                name={data.title}
                rate={data.rating.rate}
                cost={data.price}
                count={data.rating.count}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Cards;
