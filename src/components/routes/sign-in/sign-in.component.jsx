import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../utils/firebase.utils";

const SignIn = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log(user);
  };

  return (
    <div>
      SignIn
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
    </div>
  );
};

export default SignIn;
