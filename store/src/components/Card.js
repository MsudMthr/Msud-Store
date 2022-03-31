import React from "react";

const Card = ({name , image, cost , rate , count }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <img
        src={image}
        alt="dress "
        className="rounded-sm w-11/12 sm:w-32 md:w-44 h-40"
      />
      <h5 className="font-semibold text-sm  p-2">{name}</h5>
      <div className="flex flex-col  ">
        <p className="font-medium inline p-2 self-end">{cost}$</p>

        <p className="text-sm font-semibold">
          Rate: {rate}{" "}
          <span className="text-slate-600 font-thin">at {count} person</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
