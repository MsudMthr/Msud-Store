import React, { useState, useEffect } from "react";
import Formfield from "./Formfield";
import { validation } from "./functions/validation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { toastHandler } from "./functions/toast";
import { sendData } from "./functions/sendSignData";
 

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
      setError(validation(data));
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

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      console.log(data);
      sendData(data)
      toastHandler("success" , 'you sign success')
      
      
    } else {
      toastHandler("error" , "invalid data!")
      setTouched({
        name: true ,
        email: true ,
        password: true ,
        confirmPassword:true ,
        isAccept: true ,
      });
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col h-screen justify-center items-center "
    >
      <h2 className="font-bold text-xl text-blue-900 mb-4">SignUP</h2>
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
        <p className="font-medium text-blue-500 text-lg">Login</p>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded-md"
        >
          SignUP
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Signup;
