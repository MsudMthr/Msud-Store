import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }

  

  render() {
    const { category } = this.state;
    const { open ,changeHandler} = this.props;
    return (
      <div>
        <ul
          open={open}
          className={`transition-[1s] justify-evenly md:flex-col md:h-48 items-center sm:static sm:translate-x-0 sm:h-10   sm:flex sm:flex-row bg-purple-200 sm:bg-white fixed top-0 right-0 ${
            open
              ? "flex flex-col z-10  h-screen translate-x-0"
              : "  translate-x-[1000%]"
          }`}
          category={category}
        >
          <li>
            <input
              onChange={changeHandler}
              id="men"
              className="hidden"
              type={"radio"}
              name="category"
            />
            <label
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="men"
            >
              Men
            </label>
          </li>
          <li>
            <input
              onChange={changeHandler}
              id="Jewelry"
              className="hidden"
              type={"radio"}
              name="category"
            />
            <label
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="Jewelry"
            >
              Jewelry
            </label>
          </li>
          <li>
            <input
              onChange={changeHandler}
              id="electronics"
              className="hidden"
              type={"radio"}
              name="category"
            />
            <label
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="electronics"
            >
              electronics
            </label>
          </li>
          <li>
            <input
              onChange={changeHandler}
              id="women"
              className="hidden"
              type={"radio"}
              name="category"
            />
            <label
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="women"
            >
              Women
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
