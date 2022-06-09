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
import deleteAccount from "../images/delete-user-svgrepo-com.svg";
import logOut from "../images/log-out-symbol-svgrepo-com.svg";
import avatar from "../images/avatar-svgrepo-com.svg";

import Loading from "./Loading";
import UpdateUserForm from "./UpdateUserForm";

const Profile = () => {
  const { user, isLoad } = useSelector((state) => state.userState);
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const [ProfileUrl, setProfileUrl] = useState(avatar);

  useEffect(() => {
    if (user?.photoURL) {
      setProfileUrl(user.photoURL);
    }
  },[user]);
  console.log(user);
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
    signOut(auth).then(() => navigate("/", { replace: true }));
  };
  return (
    <section className="flex justify-center items-center h-screen dark:bg-slate-800 ">
      {isLoad ? (
        <Loading />
      ) : (
        <article className="profile ">
          <div className="flex flex-col gap-5 rounded-md h-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <img
                  src={ProfileUrl}
                  alt={user.displayName}
                  className="h-10 w-10 ring-2 shadow-inner  ring-black rounded-full "
                />
                {!isUpdateForm && (
                  <button
                    onClick={showUpdateForm}
                    className={"text-rose-700 font-medium "}
                  >
                    Update
                  </button>
                )}
              </div>
              <div className="flex flex-col justify-center items-center gap-1 w-40 ">
                <div className="btn-container">
                  <span className="opacity-0 ">Log Out</span>
                  <button onClick={signOurHandler} className="button-account">
                    <img src={logOut} alt="logOut" />
                  </button>
                </div>
                <div className="btn-container">
                  <span className="opacity-0 ">Delete User</span>
                  <button onClick={signOurHandler} className="button-account">
                    <img src={deleteAccount} alt="delete account" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 capitalize">
              <div>
                <p className="font-medium text-sm sm:text-base ">
                  Email : <span>{user.email}</span>
                </p>
              </div>
              <div>
                {user.displayName && (
                  <p className="font-medium ">userName : {user.displayName}</p>
                )}
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
