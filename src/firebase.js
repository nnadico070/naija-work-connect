// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpEjx2Cyp7rsSFVt0PYyCo4aiM7f1HU2g",
  authDomain: "naijaworkconnect.firebaseapp.com",
  projectId: "naijaworkconnect",
  storageBucket: "naijaworkconnect.appspot.com",
  messagingSenderId: "434174668848",
  appId: "1:434174668848:web:3c1ccad609aa1930a63df5",
  measurementId: "G-77DPFB142M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
