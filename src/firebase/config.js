// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR0dbMpa_HVr6ujUHcTF1tIaH7ZCSRX2U",
  authDomain: "exam-58d96.firebaseapp.com",
  projectId: "exam-58d96",
  storageBucket: "exam-58d96.appspot.com",
  messagingSenderId: "895342139504",
  appId: "1:895342139504:web:f04f05e68c6ddcc46f3cb5",
  measurementId: "G-WPH1TPSEHD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
