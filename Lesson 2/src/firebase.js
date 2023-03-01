// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKydFwe9k1QpDcaG6a7OfWAfGhWu3qYjE",
  authDomain: "counters-32ca5.firebaseapp.com",
  projectId: "counters-32ca5",
  storageBucket: "counters-32ca5.appspot.com",
  messagingSenderId: "254977926218",
  appId: "1:254977926218:web:1782a60be0aaba859c32b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);