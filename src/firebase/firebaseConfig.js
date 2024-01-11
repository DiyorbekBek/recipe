// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMVbnCtB0liy2MrBFvJuf2z0WoC57mB2U",
  authDomain: "recipe-118bb.firebaseapp.com",
  projectId: "recipe-118bb",
  storageBucket: "recipe-118bb.appspot.com",
  messagingSenderId: "752642136401",
  appId: "1:752642136401:web:8703ef57e48f193f605b70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
