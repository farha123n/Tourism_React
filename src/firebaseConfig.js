// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVEpLEcZp9sYSKup09wvtrfbyLr7Pe6os",
  authDomain: "tourism-97cf1.firebaseapp.com",
  projectId: "tourism-97cf1",
  storageBucket: "tourism-97cf1.appspot.com",
  messagingSenderId: "290773480946",
  appId: "1:290773480946:web:39b5628de6d96fe5f2e76b",
  measurementId: "G-SGMY79BR1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
