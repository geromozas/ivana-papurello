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
  apiKey: "AIzaSyDLYnN9AZksfUXKhFC7PCap4u8vJUpeQmE",
  authDomain: "ivana-papurello.firebaseapp.com",
  projectId: "ivana-papurello",
  storageBucket: "ivana-papurello.firebasestorage.app",
  messagingSenderId: "199396629923",
  appId: "1:199396629923:web:ad11ed7aad78a3e01cce16",
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
