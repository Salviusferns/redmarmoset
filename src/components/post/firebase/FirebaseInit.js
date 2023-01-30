import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyBTn7fj_54-5Hra1ezhsLQvxsejNtatY3U",
  authDomain: "react-chat-10ef6.firebaseapp.com",
  projectId: "react-chat-10ef6",
  storageBucket: "react-chat-10ef6.appspot.com",
  messagingSenderId: "540015682065",
  appId: "1:540015682065:web:b6fd8603b3c9aa62adc7b0",
  measurementId: "G-LBNHF7CVT0"
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };