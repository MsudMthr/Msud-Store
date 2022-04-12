import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";

//context
import ProductContextProvider from './services/ProductContextProvider'

//components
import Navabr from "./components/Navabr";
import Cards from "./components/Cards";
import HomePage from "./components/HomePage";
import DetailProduct from "./components/DetailProduct";
// import useLocalStorage from "./hooks/useLocalStorage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/NotFound";






const App = () => {
  // const [shopData, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   axios
  //     .get("/products")
  //     .then((response) => dispatch({ type: "SUCCESS", payload: response.data }))
  //     .catch((error) => {
  //       dispatch({ type: "FAILED" });
  //     });
  // }, []);

  return (
   <ProductContextProvider>
      <div className="container mx-auto xl:max-w-screen-2xl dark:bg-zinc-800 transition-all duration-300">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-[50px_minmax(100px,_1fr)">
        <div className="bg-white dark:bg-slate-600 md:col-span-2  text-center row-span-1 sticky top-0 md:h-auto rounded-md shadow-lg">
          <Navabr />
        </div>
        <div className="bg-white md:col-span-10 h-auto min-h-screen row-span-2 shadow-lg rounded-md transition-all duration-300">
          <Routes>
            <Route path="/products/:id" element={<DetailProduct />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/products" element={<Cards />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<Navigate to={"/notfound"} />} />
            <Route path={"/SignUP"} element={<Signup />} />
            <Route path={"/"} element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
   </ProductContextProvider>
  );
};

export default App;
