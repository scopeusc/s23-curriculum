// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCISpum3eT7etDXNREfu-6XtQPpRFpVaPg",
  authDomain: "scope-lesson2.firebaseapp.com",
  projectId: "scope-lesson2",
  storageBucket: "scope-lesson2.appspot.com",
  messagingSenderId: "59165591819",
  appId: "1:59165591819:web:b63cbd875751e9236e3a0e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// initialize your provider as type Google
const provider = new firebase.auth.GoogleAuthProvider();
// set your provider so that it asks the user to select "which Google account?"
provider.setCustomParameters({prompt: 'select_account'});

// and now export these settings to work as Sign-In-With-Popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// finally, export the firebase object
export default firebase;


