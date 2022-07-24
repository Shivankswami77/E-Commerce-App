import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGBEQYSZUUYN5NdDG1WY-Nhhn5tqMCrPo",
  authDomain: "ecommerce-store-2b7b2.firebaseapp.com",
  projectId: "ecommerce-store-2b7b2",
  storageBucket: "ecommerce-store-2b7b2.appspot.com",
  messagingSenderId: "1035491040095",
  appId: "1:1035491040095:web:1740626cce3cf4cd6cf4ea",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithGoogleRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); //db - to get firestore,"users" - collection,userAuth.id - unique identifier
  //   console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef); //get snapshot of data in databse
  //   console.log(userSnapshot);
  //   console.log(userSnapshot.exists()); // check wether the following place is there for data in databse
  //if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  //if yser data exists

  //return  userDocref
};
