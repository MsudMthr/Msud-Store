import React from "react";

const InfoCards = ({ history, data }) => {
  const Back = () => {
    history.push("/products");
  };

  return (
    <div className="flex flex-col w-9/12 mx-auto z-50 justify-center items-center mt-8">
      <div className="flex justify-center flex-col items-center text-center">
        <img src={data.image} alt={data.title} className="w-56 max-h-56 h-56 my-4" />
        <p className="font-semibold">{data.title}</p>
      </div>
      <p className="text-justify my-4">{data.description}</p>
      <div className="flex flex-col justify-between w-full items-center">
        <p>price : {data.price} $</p>
        <p>Rete :{data.rating.rate}</p>
      </div>
      <p
        className="py-3 px-2 bg-pink-200 text-center rounded mt-3 cursor-pointer"
        onClick={Back}
      >
        Back to Shop
      </p>
    </div>
  );
};

export default InfoCards;
