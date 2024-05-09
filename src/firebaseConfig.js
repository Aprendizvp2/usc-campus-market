// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyChHnb-Il7Oq9ZVs8Q5IoNJ6ZPI2NauFMQ",
  authDomain: "usc-campus-market.firebaseapp.com",
  projectId: "usc-campus-market",
  storageBucket: "usc-campus-market.appspot.com",
  messagingSenderId: "796483145048",
  appId: "1:796483145048:web:013b68ad8663fbd047e92d"
};

// Initialize Firebase
const appFirebase = firebase.initializeApp(firebaseConfig);
export default appFirebase