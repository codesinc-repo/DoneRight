// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkay_UAZb7rZkgDOnPmzYRdDDCKvRoxlE",
  authDomain: "done-right-8df6d.firebaseapp.com",
  projectId: "done-right-8df6d",
  storageBucket: "done-right-8df6d.appspot.com",
  messagingSenderId: "160477631445",
  appId: "1:160477631445:web:8a30614ff53d10169a235c",
  measurementId: "G-CQEENHBGKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup };
