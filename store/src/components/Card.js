import React, { Component } from "react";

import up from "../images/up.svg";
import down from "../images/down.svg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSales: 0,
    };
  }

  increaseCart = () => {
    this.setState((prevState) => ({
      numberOfSales: prevState.numberOfSales + 1,
    }));
  };
  decreaseCart = () => {
    if (this.state.numberOfSales >= 1) {
      this.setState((prevState) => ({
        numberOfSales: prevState.numberOfSales - 1,
      }));
    }
  };

  render() {
    const { numberOfSales } = this.state;
    const { image, name, rate, cost, count  } = this.props;
    return (
      <div
      className="flex flex-col justify-between h-full"
      >
        <img
          src={image}
          alt="dress "
          className="rounded-sm w-11/12 sm:w-32 md:w-44 h-40"
        />
        <h5 className="font-semibold text-sm  p-2">{name}</h5>
        <div className="flex flex-col  ">
          <p className="font-medium inline p-2 self-end">{cost}$</p>
          {/* <div className="self-end flex items-center">
            <img
              src={up}
              onClick={this.increaseCart}
              className="w-5 mx-2 cursor-pointer text-xl shadow-sm h-5 rounded-full border-2"
              alt="increase to cart"
            />
            <span>{numberOfSales}</span>
            <img
              src={down}
              onClick={this.decreaseCart}
              className={`w-5 mx-2 cursor-pointer text-xl shadow-sm h-5 rounded-full border-2 transition-all ${
                !numberOfSales && "opacity-30 z-0"
              } `}
              alt="decrease at cart"
            />
          </div> */}
          <p className="text-sm font-semibold">
            Rate: {rate}{" "}
            <span className="text-slate-600 font-thin">at {count} person</span>{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
