import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-in failed", error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <OAuth/>
    </div>
  );
};

export default SignIn;
