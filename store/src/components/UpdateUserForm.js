import React, { useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";

import { toast } from "react-toastify";

import { upload, auth } from "../firebase";

import closeWindow from "../images/close-svgrepo-com.svg";
import { toastHandler } from "./functions/toast";

const UpdateUserForm = ({ user, setIsUpdateForm }) => {
  const [isShowInput, setIsShowInput] = useState({
    password: false,
    photo: false,
  });
  const [newPassword, setNewPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const closeHandler = () => {
    setIsUpdateForm(false);
  };

  const clickHandler = () => {
    upload(photo, user, setLoading);
    toast("success");
  };

  const changeHandler = (e) => {
    if (e.target.files[0]) setPhoto(e.target.files[0]);
  };

  // const updatePasswordHandler = () => {
  //   sendPasswordResetEmail(user, user.email)
  //     .then((res) => {
  //       toastHandler("success", "Send Email");
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       toastHandler(err.message);
  //     });
  // };

  return (
    <section className="flex flex-col shadow-inner p-2 justify-center items-center relative h-64 rounded">
      <div onClick={closeHandler} className="close__update__section">
        <img
          src={closeWindow}
          alt="close Update section"
          className="w-5 hover:rotate-90 transition-all"
          title="close"
        />
      </div>
      {!user.profileUrl &&
        (isShowInput.photo ? (
          <div className="absolute h-full w-full flex flex-col gap-2 justify-center items-center  bg-opacity-50 backdrop-blur-md">
            <div
              onClick={() => setIsShowInput({ password: false })}
              className="close__update__section"
            >
              <img
                src={closeWindow}
                alt="close Update section"
                className="w-5 hover:rotate-90 transition-all"
                title="close"
              />
            </div>

            <input
              type="file"
              name="image"
              id="uploadPhoto"
              className=""
              onChange={changeHandler}
            />
            <label
              htmlFor="uploadPhoto"
              className="flex text-blue-700 my-2 bg-gray-200/90 px-3 py-1 font-medium rounded hover:bg-gray-300"
            >
              select Photo
            </label>
            <button
              disabled={loading || !photo}
              onClick={clickHandler}
              className="updateProfile"
            >
              Upload
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsShowInput({ photo: true })}
            className={"bg-gray-400 rounded px-3 py-1 font-medium my-1"}
          >
            Upload Photo
          </button>
        ))}
      {isShowInput.password ? (
        <div className="absolute h-full w-full flex flex-col gap-2 justify-center items-center  bg-opacity-50 backdrop-blur-md">
          <div
            onClick={() => setIsShowInput({ password: false })}
            className="close__update__section"
          >
            <img
              src={closeWindow}
              alt="close Update section"
              className="w-5 hover:rotate-90 transition-all"
              title="close"
            />
          </div>
          <div className="update__input__container">
            <label>New Password</label>
            <input
              type={"password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              accept="image/*"
              name="password"
              className="outline-none focus:ring-2 focus:ring-yellow-300 transition-all focus:ring-offset-2 focus:mt-1"
              required
            />
          </div>
          <p className={error ? "text-red-500 text-xs" : "hidden"}>{error}</p>
          <button className="updateProfile">Update Password</button>
        </div>
      ) : (
        <button
          onClick={() => setIsShowInput({ password: true })}
          className={"bg-gray-400 rounded px-3 py-1 font-medium my-1"}
        >
          Change Password
        </button>
      )}

      {!user.displayName && (
        <div className="update__input__container">
          <p>userName : </p>
          <input
          // onChange={changeHandler}
          // value={userData.userName}
          // name="userName"
          />
        </div>
      )}
      {/* <button className="updateProfile" >Update Profile</button> */}
    </section>
  );
};

export default UpdateUserForm;
