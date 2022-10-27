// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFr4x8q7ERa1lqepSrEZECbjU4cmG62Uc",
  authDomain: "botel-9bf6d.firebaseapp.com",
  projectId: "botel-9bf6d",
  storageBucket: "botel-9bf6d.appspot.com",
  messagingSenderId: "1052354908347",
  appId: "1:1052354908347:web:7c80ff6b82680ee5bf999e",
  measurementId: "G-LJ71VZQEBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
