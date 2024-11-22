// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqyNaYCV2Uo1El9jOwbCCjzTbPsBT0Lvk",
  authDomain: "assignment-11-955b9.firebaseapp.com",
  projectId: "assignment-11-955b9",
  storageBucket: "assignment-11-955b9.firebasestorage.app",
  messagingSenderId: "20136235927",
  appId: "1:20136235927:web:7c28d462a59e6be2f06ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;