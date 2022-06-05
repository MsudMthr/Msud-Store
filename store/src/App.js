import React, { Suspense, useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
//redux
import { useDispatch } from "react-redux";
import {
  subscribeFailure,
  subscribeSuccess,
} from "./redux/subscribe/subscribeAction";

//components
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import HomePage from "./components/HomePage";
import DetailProduct from "./components/DetailProduct";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import Loading from "./components/Loading";
import Profile from "./components/Profile";
// import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        await dispatch(subscribeSuccess(userAuth));
      } else {
        await dispatch(subscribeFailure("error"));
      }
    });
    return unSubScribe;
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className=" h-full dark:bg-zinc-800 transition-all ease-in-out">
        <div className="container mx-auto xl:max-w-screen-2xl dark:bg-zinc-800 transition-all duration-300">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-[50px_minmax(100px,_1fr)">
            <div className="bg-white dark:bg-slate-600 md:col-span-2  text-center row-span-1 sticky top-0 md:h-auto rounded-md shadow-lg">
              <Navbar />
            </div>
            <div className="bg-white md:col-span-10 h-auto min-h-screen row-span-2 shadow-lg rounded-md transition-all duration-300">
              <Routes>
                <Route path="/products/:id" element={<DetailProduct />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/products" element={<Cards />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<Navigate to={"/notfound"} />} />
                <Route path={"/SignUP"} element={<Signup />} />
                <Route path={"/"} element={<HomePage />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Favorite" element={<Favorite />} />
                <Route path="/Profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
