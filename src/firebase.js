// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTn7fj_54-5Hra1ezhsLQvxsejNtatY3U",
  authDomain: "react-chat-10ef6.firebaseapp.com",
  projectId: "react-chat-10ef6",
  storageBucket: "react-chat-10ef6.appspot.com",
  messagingSenderId: "540015682065",
  appId: "1:540015682065:web:b6fd8603b3c9aa62adc7b0",
  measurementId: "G-LBNHF7CVT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);