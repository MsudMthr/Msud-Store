import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import Loading from './Loading'

const Cards = ({shopData}) => {
  

  return (
    <div className="flex flex-wrap justify-center">
      {console.log(shopData)}
      {shopData.length ? shopData.map((data) => (
        <Link
          to={`products/${data.id}`}
          key={data.id}
          className={` w-6/12 sm:w-36  mx-auto md:w-48 flex flex-col justify-between  rounded-sm border-2 m-2 overflow-hidden shadow-xl p-2`}
        >
          <Card
            image={data.image}
            name={data.name}
            rate={data.rating.rate}
            cost={data.price}
            count={data.rating.count}
          />
        </Link>
      )) : <Loading />}
    </div>
  );
};

export default Cards;
