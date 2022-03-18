import React, { Component } from "react";

class Menu extends Component {
  render() {
    const { open } = this.props;
    return (
      <div>
        <ul
          open={open}
          className={`transition-[1s] justify-evenly md:flex-col md:h-48 items-center sm:static sm:translate-x-0 sm:h-10 opacity-100  sm:flex sm:flex-row bg-purple-200 sm:bg-white fixed top-0 right-0 ${
            open
              ? "flex flex-col z-10  h-screen translate-x-0"
              : " opacity-0 translate-x-[1000%]"
          }`}
        >
          <li>
            <input
              id="dress"
              className="hidden"
              type={"radio"}
              name="category"
            />
            <label
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="dress"
            >
              Men
            </label>
          </li>
          <li>
            <input id="man" className="hidden" type={"radio"} name="category" />
            <label
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="man"
            >
              Jewelry
            </label>
          </li>
          <li>
            <input id="man" className="hidden" type={"radio"} name="category" />
            <label
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="man"
            >
              electronics
            </label>
          </li>
          <li>
            <input
              id="woman"
              className="hidden"
              type={"radio"}
              name="category"
            />
            <label
              className="mx-2 cursor-pointer hover:text-violet-600 transition-all md:border-b-2 px-2 py-2  md:my-4 md:py-2"
              htmlFor="woman"
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
