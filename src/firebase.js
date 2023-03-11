// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; 
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmVL7-RscXVp0vZunFmtAvmNDcewc7CDA",
  authDomain: "disney-clone-97766.firebaseapp.com",
  projectId: "disney-clone-97766",
  storageBucket: "disney-clone-97766.appspot.com",
  messagingSenderId: "262201128278",
  appId: "1:262201128278:web:b405192bbffedb6fc692f7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth(app);
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage; 

export { auth, provider };

export default db;