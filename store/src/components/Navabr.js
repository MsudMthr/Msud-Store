import React, { Component } from "react";

class Navabr extends Component {
  render() {
    return (
      <div className="flex justify-between px-4 md:flex-col ">
        <h1 className=" font-bold m-4 md:pt-4">STORE</h1>
        <ul className="flex justify-evenly md:flex-col md:h-48 items-center">
          <li>
            <input id="dress" className="hidden" type={"radio"} name="category" />
            <label className="mx-2 cursor-pointer hover:text-violet-600 transition-all border-b-2 px-2 py-2  md:my-4 md:py-2" htmlFor="dress">dress</label>
          </li>
          <li>
            <input id="man" className="hidden" type={"radio"} name="category" />
            <label className="mx-2 cursor-pointer hover:text-violet-600 transition-all border-b-2 px-2 py-2  md:my-4 md:py-2" htmlFor="man">man</label>
          </li>
          <li>
            <input id="woman" className="hidden" type={"radio"} name="category" />
            <label className="mx-2 cursor-pointer hover:text-violet-600 transition-all border-b-2 px-2 py-2  md:my-4 md:py-2" htmlFor="woman">woman</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navabr;
