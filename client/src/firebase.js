// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-21454.firebaseapp.com",
  projectId: "mern-estate-21454",
  storageBucket: "mern-estate-21454.firebasestorage.app",
  messagingSenderId: "810653064176",
  appId: "1:810653064176:web:cf3657fc29dc8ed52fdb35",
  measurementId: "G-60NTMGWELD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
