// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
// # For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fckingsick-2c710.firebaseapp.com",
  projectId: "fckingsick-2c710",
  storageBucket: "fckingsick-2c710.appspot.com",
  messagingSenderId: "711802793455",
  appId: "1:711802793455:web:d086bd2c75e73455d09a1a",
  measurementId: "G-NMCKMQB4HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);