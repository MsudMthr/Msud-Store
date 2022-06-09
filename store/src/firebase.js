//import the functions you need from SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { toastHandler } from "./components/functions/toast";

//web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf4n0AbDoU-YV-9lAaIm-f-vSmdamXWSQ",
  authDomain: "store-2bb12.firebaseapp.com",
  projectId: "store-2bb12",
  storageBucket: "store-2bb12.appspot.com",
  messagingSenderId: "1047865773088",
  appId: "1:1047865773088:web:9d4ec602fd7c76f6cfc045",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const storage = getStorage();

//storage
const upload = async (file, currentUser, setLoading) => {
  const fileRef = ref(storage, currentUser.uid + ".png");

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(auth.currentUser, { photoURL });

  setLoading(false);
};

export { auth, upload };
