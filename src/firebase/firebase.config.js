// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0kAcA0lNmy3xfajtDgqJZ_qTKMAP1rGk",
  authDomain: "historical-artifacts.firebaseapp.com",
  projectId: "historical-artifacts",
  storageBucket: "historical-artifacts.firebasestorage.app",
  messagingSenderId: "788217614922",
  appId: "1:788217614922:web:79e3473fb0ca8f968c4cb3",
  measurementId: "G-BEXTXHBQCE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
