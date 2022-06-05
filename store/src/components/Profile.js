import React, { useEffect, useState } from "react";
//authentication
import { updateProfile, updatePhoneNumber, signOut } from "firebase/auth";
import { auth } from "../firebase";
//redux
import { useSelector, useDispatch } from "react-redux";
//react router dom
import { useNavigate } from "react-router-dom";
//functions
import { firstLetter } from "../helper/function";
//asset
import uploadSVG from "../images/upload-svgrepo-com.svg";
import Loading from "./Loading";

const Profile = () => {
  const { user, isLoad } = useSelector((state) => state.userState);
  const [isShow, setIsShow] = useState({
    nameInput: false,
    phoneInput: false,
    emailInput: false,
  });
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const changeHandler = (event) => {
    setUserData({ [event.target.name]: event.target.value });
  };

  const updateHandler = () => {
    updateProfile(auth.currentUser, {
      displayName: userData.name,
    }).then((user) => console.log(user));
  };

  const signOurHandler = () => {
    signOut(auth).then((res) => navigate("/", { replace: true }));
  };

  return (
    <section className="flex justify-center items-center h-screen dark:bg-slate-800 ">
      {isLoad ? (
        <Loading />
      ) : (
        <section className="profile ">
          <div className="flex flex-col gap-5 rounded-md h-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} />
                ) : (
                  <div className="w-10 h-10 bg-emerald-300 flex items-center justify-center rounded-full uppercase font-bold">
                    {firstLetter(user.email)}
                  </div>
                )}
                <input
                  type="file"
                  name="image"
                  id="uploadPhoto"
                  className="hidden"
                  onChange={changeHandler}
                  disabled
                />
                <label htmlFor="uploadPhoto" className="flex ">
                  <p className="text-blue-700 ml-4  mr-1">Upload Photo</p>
                  <img
                    src={uploadSVG}
                    alt="uploadProfileImage"
                    className="w-5"
                  />
                </label>
              </div>
              <button
                onClick={signOurHandler}
                className="bg-red-600 px-2 py-1 rounded-md font-medium"
              >
                Sign Out
              </button>
            </div>
            <div className="flex flex-col gap-3 capitalize">
              <div>
                <p>Email : {user.email}</p>
              </div>
              <div></div>
              <div>
                <p>
                  UserName :
                  {user.displayName ? (
                    <span>{user.displayName}</span>
                  ) : isShow.nameInput ? (
                    <input
                      type={"text"}
                      value={userData.name}
                      name="name"
                      placeholder="Name"
                      onChange={changeHandler}
                    />
                  ) : (
                    <span
                      onClick={() => setIsShow({ nameInput: true })}
                      name="nameInput"
                      className="text-blue-700"
                    >
                      Set Name
                    </span>
                  )}
                </p>
              </div>

              <div></div>

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
            <button onClick={updateHandler} className={"updateProfile"}>
              Update Profile
            </button>
          </div>
        </section>
      )}
    </section>
  );
};

export default Profile;
