import React, { Component } from "react";
import { Route , Switch } from "react-router-dom";

import Navabr from "./components/Navabr";
import Cards from "./components/Cards";
import axios from "axios";
import InfoCards from "./components/InfoCards";
import HomePage from "./components/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: [],
      category: "",
      value: 0,
      isFilter: false,
    };
  }

  componentDidMount = () => {
    axios.get(`/products`).then((res) =>
      this.setState({
        shopData: res.data,
      })
    );
  };

  changeHandler = (event) => {
    this.setState({
      category: event.target.id,
      isFilter: true,
    });
  };

  changeValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { category, isFilter, shopData } = this.state;

    return (
      <div className="container mx-auto xl:max-w-screen-xl ]">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-[50px_minmax(100px,_1fr)">
          <div className="bg-white md:col-span-2 text-center row-span-1 sticky top-0 md:h-auto rounded-md shadow-lg">
            <Navabr
              changeHandler={this.changeHandler}
              changeValue={this.changeValue}
              value={this.state.value}
            />
          </div>
          <div className="bg-white md:col-span-10 h-auto row-span-2">
            <Switch>
            <Route path={`/products/:id`} component={InfoCards}/>
            <Route
              path="/products"
              render={(props) => (
                <Cards
                  category={category}
                  shopData={shopData}
                  isFilter={isFilter}
                  {...props}
                />
              )}
            />
              <Route path={'/'} component={HomePage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
