import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfOKih4BohG4jcjNA2XPRIZbxl6bH6DJk",
  authDomain: "dragon-news-d1605.firebaseapp.com",
  projectId: "dragon-news-d1605",
  storageBucket: "dragon-news-d1605.appspot.com",
  messagingSenderId: "520391255321",
  appId: "1:520391255321:web:b856cfac774e8600f15188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };