
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_7fXceZJQZS-cpBidfYZtM1gmrZEMG90",
  authDomain: "academy-87016.firebaseapp.com",
  projectId: "academy-87016",
  storageBucket: "academy-87016.firebasestorage.app",
  messagingSenderId: "954400069302",
  appId: "1:954400069302:web:d25ba5ae16948e2a643817",
  measurementId: "G-RBH7R698WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

