import React, { Component } from "react";

import Card from "./Card";
import axios from "axios";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: [],
      category : this.props.category,
    };
  }
  
  componentDidUpdate = () => {
    switch (this.state.category) {
      case "men":
        axios.get(`/products`).then((res) =>
          this.setState({
            
            shopData: res.data.filter(
              (data) => data.category === "men's clothing"
            ),
          })
        );
        break
      case "Jewelry":
        axios.get(`/products`).then((res) =>
          this.setState({
            shopData: res.data.filter(
              (data) => data.category === "jewelry"
            ),
          })
        );
        break
      case "electronics":
        axios.get(`/products`).then((res) =>
          this.setState({
            shopData: res.data.filter(
              (data) => data.category === "electronics"
            ),
          })
        );
        break;
      case "women":
        axios.get(`/products`).then((res) =>
          this.setState({
            shopData: res.data.filter(
              (data) => data.category === "women's clothing"
            ),
          })
        );
        break;
        default: 
        this.setState({
          shopData : this.state.shopData
        })
        break;
  }}
  

  componentDidMount = () => {
   
     
        axios.get(`/products`).then((res) =>
          this.setState({
            shopData: res.data,
          })
        );
        
    }
    render() {
      console.log(this.state.category);
      const { shopData } = this.state;
      return (
        <div className="flex flex-wrap" >
          {shopData.map((data) => (
            <Card
              key={data.id}
              image={data.image}
              name={data.title}
              cost={data.price}
              rate={data.rating.rate}
              deleteCard={() => this.deleteCard(data.id)}
            />
          ))}
        </div>
      );
    }
  };


export default Cards;
