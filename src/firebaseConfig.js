// import { Password } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
const auth = getAuth(app);
//base de datos
export const db = getFirestore(app);

//login
export const onSignIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//logout
export const logOut = () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

//login google
let googleProvider = new GoogleAuthProvider();
export const logInGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//register
export const register = async ({ email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//olvide la contraseña
export const forgotPassword = async ({ email }) => {
  try {
    const res = await sendPasswordResetEmail(auth, email);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//storage
