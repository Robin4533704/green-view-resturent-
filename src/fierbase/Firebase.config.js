// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qBpLw2r6oN390m5ZP8jJR2y94s8hklw",
  authDomain: "greenview-resturent-project.firebaseapp.com",
  projectId: "greenview-resturent-project",
  storageBucket: "greenview-resturent-project.firebasestorage.app",
  messagingSenderId: "785192864200",
  appId: "1:785192864200:web:d6343e78d458966f7898fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;