
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

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
const db = getFirestore();

export { auth };
export default db;
