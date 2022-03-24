import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.state.category);
    const { shopData } = this.props;

    return (
      <div className="flex flex-wrap">
        {shopData.map((data) => (
          <Link
            to={`products/${data.id}`}
            key={data.id}
            className={` w-6/12 sm:w-36  mx-auto md:w-48 flex flex-col justify-between  rounded-sm border-2 m-2 overflow-hidden shadow-xl p-2`}
          >
            <Card
              image={data.image}
              name={data.title}
              cost={data.price}
              rate={data.rating.rate}
              count={data.rating.count}
              description={data.description}
              deleteCard={() => this.deleteCard(data.id)}
              showModal={this.showModal}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default Cards;
