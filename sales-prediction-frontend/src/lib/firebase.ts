// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your actual Firebase config:
const firebaseConfig = {
  apiKey: "AIzaSyBDSSB2-oVtanZiMTjZrg32nno1FvkzIAs",
  authDomain: "sale-prediction-5b2ca.firebaseapp.com",
  projectId: "sale-prediction-5b2ca",
  storageBucket: "sale-prediction-5b2ca.appspot.com", // fixed typo: ".app" → ".appspot.com"
  messagingSenderId: "910452931787",
  appId: "1:910452931787:web:6cc0bdfd5b416aa9492f4e",
  measurementId: "G-40ZK8E1C9E",
};

// Prevent re-initializing on Fast Refresh
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
