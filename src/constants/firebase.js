import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { API_KEY_FIREBASE } from "./.env.local";


const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  authDomain: "taipei-parking-v2-ceb64.firebaseapp.com",
  projectId: "taipei-parking-v2-ceb64",
  storageBucket: "taipei-parking-v2-ceb64.appspot.com",
  messagingSenderId: "969760120576",
  appId: "1:969760120576:web:5e3722bdf651a8db769de5",
  measurementId: "G-MPGQ4SNY4W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()