import React, { Component } from "react";

import Card from "./Card";
import axios from "axios";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: [],
    };
  }

  componentDidMount = () => {
    axios.get(`https://fakestoreapi.com/products`)
    .then((res) =>
      this.setState({
        shopData: res.data,
      })
    )
  };



  render() {
    const { shopData } = this.state;
    return (
      <div className="flex flex-wrap">
        {shopData.map((data) => (
          <Card
            key={data.id}
            image={data.image}
            name={data.title}
            cost={data.price}
            rate={data.rating.rate}
            deleteCard = {() => this.deleteCard(data.id)}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
