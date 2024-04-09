import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBDOVjzB74q9_IqNS4rbe4NP_UFBVaEcYA",
  authDomain: "psychologists-services-yv.firebaseapp.com",
  databaseURL:
    "https://psychologists-services-yv-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-services-yv",
  storageBucket: "psychologists-services-yv.appspot.com",
  messagingSenderId: "742914034048",
  appId: "1:742914034048:web:1cd04665a4cc849dc45965",
  measurementId: "G-35H9D6VW8L",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
