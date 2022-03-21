import React, { Component } from "react";

import Navabr from "./components/Navabr";
import Cards from "./components/Cards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category : '',
      value : 0,
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.id,
    });
  };
  
  changeValue = event => {
    this.setState({
      value : event.target.value,
    })
  }

  render() {
    const {category} = this.state;
    
    return (
      <div className="container mx-auto xl:max-w-screen-xl ]">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-[50px_minmax(100px,_1fr)">
          <div className="bg-white md:col-span-2 text-center row-span-1 sticky top-0 md:h-auto rounded-md shadow-lg">
            <Navabr changeHandler={this.changeHandler} changeValue={this.changeValue} value={this.state.value}/>
          </div>
          <div className="bg-white md:col-span-10 h-auto row-span-2">
            <Cards category ={category}/>
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
