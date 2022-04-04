import React, { useReducer, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import Navabr from "./components/Navabr";
import Cards from "./components/Cards";
import InfoCards from "./components/InfoCards";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";

const initialState = {
  data: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };
    case "FAILED":
      return {
        data: [],
        loading: false,
      };
    default:
      return state;
  }
};

const App = () => {
  const [shopData, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => dispatch({ type: "SUCCESS", payload: response.data }))
      .catch((error) => {
        dispatch({ type: "FAILED" });
      });
  }, []);

  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      {console.log(shopData.data)}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-[50px_minmax(100px,_1fr)">
        <div className="bg-white md:col-span-2 text-center row-span-1 sticky top-0 md:h-auto rounded-md shadow-lg">
          <Navabr />
        </div>
        <div className="bg-white md:col-span-10 h-auto min-h-screen row-span-2 shadow-lg rounded-md">
          <Switch>
            <Route
              path={`/products/:id`}
              className="w-full"
              render={(props) => (
                <InfoCards
                  {...props}
                  data={shopData.data.find(
                    (item) => item.id == props.match.params.id
                  )}
                />
              )}
            />
            <Route
              path="/products"
              render={(props) => (
                <Cards {...props} dispatch={dispatch} shopData={shopData} />
              )}
            />
            <Route path={"/Loading"} exact component={Loading} />
            <Route path={"/"} exact component={HomePage} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
