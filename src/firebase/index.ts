// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvT-KXu92BFIhgQME6mp4mYB73UquLpE",
  authDomain: "wallymolly-a918b.firebaseapp.com",
  projectId: "wallymolly-a918b",
  storageBucket: "wallymolly-a918b.appspot.com",
  messagingSenderId: "773957190354",
  appId: "1:773957190354:web:6eb94119ada0d1b26b230b",
};

// Initialize Firebase
let app: FirebaseApp | null = null;
if (getApps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const auth = getAuth(app);
export default app;
