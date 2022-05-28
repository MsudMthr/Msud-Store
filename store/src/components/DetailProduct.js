import React, { useState, useEffect } from "react";

//hooks
import { useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";


//functions
import axios from "axios";

import Loading from "./Loading";
import Suggestion from "./Suggestion";
import CartButton from "./shared/CartButton";
import LikeButton from "./shared/LikeButton";

const DetailProduct = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(product);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${param.id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      });
  }, [param.id]);
  const { image, title, description, rating, price, category, id } = product;
  useTitle(`${title}`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <div className="flex flex-col  md:flex-row justify-center py-12 px-8 items-center dark:bg-slate-800 dark:text-white">
            <img
              // loading="lazy"
              src={image}
              alt={title}
              className="md:w-80 md:max-h-80 w-40 rounded my-2"
            />
            <div className="flex flex-col justify-around mx-5">
              <h4 className="font-bold text-lg">{title}</h4>
              <p className="py-2">
                <span className="font-bold text-base">category : </span>{" "}
                {category}
              </p>
              <p className="text-justify">{description}</p>
              <p className="py-2">
                <span className="font-bold text-base">price : </span>
                {price} $
              </p>
              <div className="flex justify-between items-center py-12">
                <p>
                  <span className="font-bold text-base">Rate : </span>
                  {rating.rate}
                </p>
                <div className="flex items-center gap-6">
                  <LikeButton product={product} />
                  <CartButton product={product} id={id} />
                </div>
              </div>
            </div>
          </div>
          <div className="px-0 sm:px-4  dark:bg-slate-800">
            <h1 className="font-bold  text-lg px-4">Suggestions</h1>
            <Suggestion category={category} title={title} />
          </div>
        </section>
      )}
    </>
  );
};

export default DetailProduct;
