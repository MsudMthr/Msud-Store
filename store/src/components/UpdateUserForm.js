import React, { useState } from "react";

import closeWindow from "../images/close-svgrepo-com.svg";

const UpdateUserForm = ({ user, setIsUpdateForm }) => {
  const [isShowInput, setIsShowInput] = useState({
    password: false,
  });
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const changeHandler = (event) => {
    setUserData({ [event.target.name]: event.target.value });
  };

  const closeHandler = () => {
    setIsUpdateForm(false);
  };

  return (
    <section className="flex flex-col shadow-inner p-2 justify-center items-center relative h-64 rounded">
      <div onClick={closeHandler} className="close__update_section">
        <img
          src={closeWindow}
          alt="close Update section"
          className="w-5 hover:rotate-90 transition-all"
          title="close"
        />
      </div>

      {isShowInput.password ? (
        <div className="absolute h-full w-full flex flex-col gap-2 justify-center items-center  bg-opacity-50 backdrop-blur-md">
          <div
            onClick={() => setIsShowInput({ password: false })}
            className="close__update_section"
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
              value={userData.password}
              onChange={changeHandler}
              name="password"
              required
            />
          </div>
          <div className="update__input__container">
            <label>Confirm New Password</label>
            <input
              type={"password"}
              value={userData.password}
              onChange={changeHandler}
              name="password"
              required
            />
          </div>
          <button className="updateProfile">Update Password</button>
        </div>
      ) : (
        <p onClick={() => setIsShowInput({ password: true })} className>
          Change Password
        </p>
      )}

      {user.displayName && (
        <div>
          <p>userName : </p>
          <input
            onChange={changeHandler}
            value={userData.userName}
            name="userName"
          />
        </div>
      )}
      {/* <button className="updateProfile">Update Profile</button> */}
    </section>
  );
};

export default UpdateUserForm;
