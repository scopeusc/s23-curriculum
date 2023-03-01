// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ADD THIS!
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwU1MelTWGW7OwOKMuKF4DyQZHNes20do",
  authDomain: "counters-893fa.firebaseapp.com",
  projectId: "counters-893fa",
  storageBucket: "counters-893fa.appspot.com",
  messagingSenderId: "219708720129",
  appId: "1:219708720129:web:1a943422451884eaef6c00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ADD THIS!!