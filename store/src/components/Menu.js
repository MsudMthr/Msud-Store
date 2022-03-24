import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }

  render() {
    const { category } = this.state;
    const { open } = this.props;
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
            <Link
            to={'/products'}
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="men's clothing"
            >
              products
            </Link>
          </li>
          <li>
            <Link
            to={'/'}
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="jewelry"
            >
              Jewelry
            </Link>
          </li>
          <li>
            <Link
            to={'/'}
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="electronics"
            >
              electronics
            </Link>
          </li>
          <li>
            <Link
            to={'/'}
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="women's clothing"
            >
              Women
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
