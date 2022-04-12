import React, { useState, useEffect } from "react";
import Formfield from "./Formfield";
import { validation } from "./functions/validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { toastHandler } from "./functions/toast";
// import { sendData } from "./functions/sendData";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccept: false,
  });

  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(
    () => {
      setError(validation(data, "signup"));
    },
    [data],
    [touched]
  );

  const changeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const touchHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      console.log(data);
      toastHandler("success", "you sign success");
      setTimeout(() => {
        navigate("/products", { replace: true });
      }, 3000);
    } else {
      toastHandler("error", "invalid data!");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccept: true,
      });
    }
  };

  const navigate = useNavigate();

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col h-screen justify-center items-center dark:bg-slate-800 transition-all delay-[50ms] "
    >
      <h2 className="font-bold text-xl text-blue-900 mb-4 dark:text-blue-200">
        SignUP
      </h2>
      <Formfield
        text="name"
        type="text"
        name="name"
        value={data.name}
        changeHandler={changeHandler}
        touchHandler={touchHandler}
        touch={touched.name}
        massage={error.name}
      />
      <Formfield
        text="email"
        type="email"
        name="email"
        value={data.email}
        changeHandler={changeHandler}
        touchHandler={touchHandler}
        touch={touched.email}
        massage={error.email}
      />
      <Formfield
        text="password"
        type="password"
        name="password"
        value={data.password}
        changeHandler={changeHandler}
        touchHandler={touchHandler}
        touch={touched.password}
        massage={error.password}
      />
      <Formfield
        text="confirmPassword"
        type="password"
        name="confirmPassword"
        value={data.confirmPassword}
        changeHandler={changeHandler}
        touchHandler={touchHandler}
        touch={touched.confirmPassword}
        massage={error.confirmPassword}
      />
      <Formfield
        text="I Accept term of privacy and policy"
        type="checkbox"
        name="isAccept"
        value={data.isAccept}
        changeHandler={changeHandler}
        touchHandler={touchHandler}
        touch={touched.isAccept}
        massage={error.isAccept}
      />
      <div className="flex justify-between items-center w-52">
        <button
          onClick={() => navigate("/login")}
          className="font-medium text-blue-500 text-lg  py-1 px-4 rounded-md  border-2  border-blue-200 dark:text-lime-400"
        >
          Login
        </button>

        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded-md dark:bg-cyan-800"
        >
          SignUP
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Signup;
