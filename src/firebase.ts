import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOLIKjZdPZuGHZJYgs4-GF6VOpefnoeXE",
  authDomain: "notion-88dd9.firebaseapp.com",
  projectId: "notion-88dd9",
  storageBucket: "notion-88dd9.firebasestorage.app",
  messagingSenderId: "273989106731",
  appId: "1:273989106731:web:f105eaa8db69f21e38fe6e",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
