// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP8KyAqmYw9ez6K2lVjikFen4LixChzRo",
  authDomain: "crwn-clothing-cda25.firebaseapp.com",
  projectId: "crwn-clothing-cda25",
  storageBucket: "crwn-clothing-cda25.appspot.com",
  messagingSenderId: "144411059080",
  appId: "1:144411059080:web:6a470116a541c407d4103d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);

  const userSnap = await getDoc(userDocRef);


  //if user does not exists, set a new user
  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        Name: displayName,
        email: email,
        createdAt: createdAt,
      });
    } catch(err) {
        console.log(err);
    }
  }

  //if it exists, return it
  console.log(userSnap.exists());
  return userDocRef;
};
