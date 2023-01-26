import { auth } from "./firebase/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleSignin from "./img/OIP.png";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to Red marmoset global Chat.</h2>
      
      <p>Sign in with Google to chat with with your follower.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;