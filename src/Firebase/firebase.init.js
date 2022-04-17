import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuqmEBvGelMKpM9KWnlP4KUb8NNFNzWVs",
  authDomain: "core-realtor-auth.firebaseapp.com",
  projectId: "core-realtor-auth",
  storageBucket: "core-realtor-auth.appspot.com",
  messagingSenderId: "256006038531",
  appId: "1:256006038531:web:a35f1971c82f588d3b1a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;