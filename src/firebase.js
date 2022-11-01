// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
  measurementId: "G-NMCKMQB4HG",
  storageBucket: "https://console.firebase.google.com/project/fckingsick-2c710/storage/fckingsick-2c710.appspot.com/files"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app)
// const analytics = getAnalytics(app);