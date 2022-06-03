import React, { useState } from "react";
//authentication
import { updateProfile, updatePhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { firstLetter } from "./../helper/function";
import uploadSVG from "../images/upload-svgrepo-com.svg";
const Profile = () => {
  const { user, isLoad } = useSelector((state) => state.userState);

  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
  });

  const changeHandler = (event) => {
    setUserData({ [event.target.name]: event.target.value });
  };

  const updateHandler = () => {
    updateProfile(auth.currentUser, {
      displayName: userData.name,
    }).then((user) => console.log(user));
  };

  return (
    <section className="flex justify-center items-center h-screen ">
      {isLoad ? (
        <p>Loading</p>
      ) : (
        <div className="bg-red-300 h-96 w-4/5 p-3 flex flex-col gap-5">
          <div className="flex items-center">
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.email} />
            ) : (
              <div className="w-10 h-10 bg-emerald-300 flex items-center justify-center rounded-full uppercase font-bold">
                {firstLetter(user.email)}
              </div>
            )}
            <p className="text-blue-700 ml-4  mr-1">Upload Photo</p>
            <img src={uploadSVG} alt="uploadProfileImage" className="w-5" />
          </div>
          <div className="flex flex-col gap-3">
            <p>Email : {user.email}</p>
            <p>
              UserName :{" "}
              {user.displayName ? (
                <span>{user.displayName}</span>
              ) : (
                <input
                  type={"text"}
                  value={userData.name}
                  name="name"
                  onChange={changeHandler}
                />
              )}
            </p>
            {/* <p>
            PhoneNumber :{" "}
            {user.phoneNumber ? (
              <span>{user.phoneNumber}</span>
            ) : (
              <input
                type={"tel"}
                value={userData.phoneNumber}
                onChange={(e) => e.target.value}
              />
            )}
          </p> */}
          </div>
          <button onClick={updateHandler}>Update Profile</button>
        </div>
      )}
    </section>
  );
};

export default Profile;
