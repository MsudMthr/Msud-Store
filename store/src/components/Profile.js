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
import deleteAccount from "../images/delete-user-svgrepo-com.svg";
import logOut from "../images/log-out-symbol-svgrepo-com.svg";

import Loading from "./Loading";
import UpdateUserForm from "./UpdateUserForm";

const Profile = () => {
  const { user, isLoad } = useSelector((state) => state.userState);
  const [isUpdateForm, setIsUpdateForm] = useState(false);

  const showUpdateForm = () => {
    setIsUpdateForm(true);
  };

  const navigate = useNavigate();

  // const updateHandler = () => {
  //   updateProfile(auth.currentUser, {
  //     displayName: userData.name,
  //   }).then((user) => console.log(user));
  // };

  const signOurHandler = () => {
    signOut(auth).then((res) => navigate("/", { replace: true }));
  };
  return (
    <section className="flex justify-center items-center h-screen dark:bg-slate-800 ">
      {isLoad ? (
        <Loading />
      ) : (
        <article className="profile ">
          <div className="flex flex-col gap-5 rounded-md h-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} />
                ) : (
                  <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full uppercase font-semibold text-white text-xl">
                    {firstLetter(user.email)}
                  </div>
                )}
                <input
                  type="file"
                  name="image"
                  id="uploadPhoto"
                  className="hidden"
                  // onChange={changeHandler}
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
              {!isUpdateForm && (
                <button
                  onClick={showUpdateForm}
                  className={"text-rose-700 font-medium "}
                >
                  Update
                </button>
              )}
              <div className="flex flex-col justify-center items-center gap-1 w-40 ">
                <div className="btn-container">
                  <span className="opacity-0 ">Log Out</span>
                  <button onClick={signOurHandler} className="button-account">
                    <img src={logOut} alt="logOut" />
                  </button>
                </div>
                <div className="btn-container">
                  <span className="opacity-0 ">DeleteAccount</span>
                  <button onClick={signOurHandler} className="button-account">
                    <img src={deleteAccount} alt="delete account" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 capitalize">
              <div>
                <p className="font-medium">
                  Email : <span>{user.email}</span>
                </p>
              </div>
              <div>
                <p className="font-medium">
                  UserName :
                  {user.displayName && (
                    <span className="">{user.displayName}</span>
                    // ) : isShow.nameInput ? (
                    //   <input
                    //     type={"text"}
                    //     value={userData.name}
                    //     name="name"
                    //     placeholder="Name"
                    //     onChange={changeHandler}
                    //   />
                    // ) : (
                    //   <span
                    //     onClick={() => setIsShow({ nameInput: true })}
                    //     name="nameInput"
                    //     className="text-blue-700 cursor-pointer"
                    //   >
                    //     Set Name
                    //   </span>
                  )}
                </p>
              </div>
            </div>
            {isUpdateForm && (
              <UpdateUserForm setIsUpdateForm={setIsUpdateForm} user={user} />
            )}
          </div>
        </article>
      )}
    </section>
  );
};

export default Profile;
