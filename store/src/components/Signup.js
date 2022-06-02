import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen justify-center items-center dark:bg-slate-800 transition-all delay-[50ms] ">
      <h1 className="font-bold text-xl text-blue-900 mb-4 dark:text-blue-200">
        Sign Up
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
            createUserWithEmailAndPassword(auth, values.email, values.password)
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
            <label htmlFor="email" className="label-form">
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
            <label htmlFor="password" className="label-form">
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
                onClick={() => navigate("/Login")}
                className="font-medium text-blue-500 text-lg  py-1 px-4 rounded-md  border-2 border-blue-200 dark:text-lime-400"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
