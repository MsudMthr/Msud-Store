// import React, { useState, useEffect } from "react";
// import Formfield from "./Formfield";
// import { validation } from "./functions/validation";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import { toastHandler } from "./functions/toast";
// import { sendData } from "./functions/sendData";
import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState({});
//   const [touched, setTouched] = useState({});

//   useEffect(
//     () => {
//       setError(validation(data));
//     },
//     [data],
//     [touched]
//   );

//   const changeHandler = (event) => {
//     if (event.target.type === "checkbox") {
//       setData({ ...data, [event.target.name]: event.target.checked });
//     } else {
//       setData({ ...data, [event.target.name]: event.target.value });
//     }
//   };

//   const touchHandler = (event) => {
//     setTouched({ ...touched, [event.target.name]: true });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (!Object.keys(error).length) {
//       console.log(data);
//       sendData(data);
//       toastHandler("success", "you sign success");
//       setTimeout(() => {
//         navigate("/products", { replace: true });
//       }, 3000);
//     } else {
//       toastHandler("error", "invalid data!");
//       setTouched({
//         name: true,
//         email: true,
//         password: true,
//         confirmPassword: true,
//         isAccept: true,
//       });
//     }
//   };

//   return (
//     <form
//       onSubmit={submitHandler}
//       className="flex flex-col h-screen justify-center items-center transition-all delay-[50ms] dark:bg-slate-800"
//     >
//       <h2 className="font-bold text-xl text-blue-900 mb-4 dark:text-blue-200">Login</h2>

//       <Formfield

//         text="email"
//         type="email"
//         name="email"
//         value={data.email}
//         changeHandler={changeHandler}
//         touchHandler={touchHandler}
//         touch={touched.email}
//         massage={error.email}
//       />
//       <Formfield
//         text="password"
//         type="password"
//         name="password"
//         value={data.password}
//         changeHandler={changeHandler}
//         touchHandler={touchHandler}
//         touch={touched.password}
//         massage={error.password}
//       />

//       <div className="flex justify-between items-center w-52 my-4">
//         <button
//           onClick={() => navigate("/signup")}
//           className="font-medium text-blue-500 text-lg  py-1 px-4 rounded-md  border-2 border-blue-200 dark:text-lime-400"
//         >
//           SignUP
//         </button>
//         <button
//           type="submit"
//           className="bg-blue-700 text-white py-2 px-4 rounded-md dark:bg-cyan-800"
//         >
//           Login
//         </button>
//       </div>
//       <ToastContainer />
//     </form>
//   );
// };

// export default Login;

import React from "react";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen justify-center items-center dark:bg-slate-800 transition-all delay-[50ms] ">
      <h1 className="font-bold text-xl text-blue-900 mb-4 dark:text-blue-200">
        Login
      </h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            signInWithEmailAndPassword(auth, values.email, values.password)
              .then((user) => {
                console.log(user);
              })
              .catch((err) => {
                console.log(err);
              });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="label-form" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={`input-form `}
            />
            <p className="error-form">
              {errors.email && touched.email && errors.email}
            </p>
            <label className="label-form" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={`input-form `}
            />
            <p className="error-form">
              {errors.password && touched.password && errors.password}
            </p>
            <div className="flex justify-between flex-row-reverse mt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-700 text-white py-2 px-4 rounded-md dark:bg-cyan-800"
              >
                Submit
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="font-medium text-blue-500 text-lg  py-1 px-4 rounded-md  border-2 border-blue-200 dark:text-lime-400"
              >
                SignUP
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
