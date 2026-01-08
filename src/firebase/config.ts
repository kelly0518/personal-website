import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ2RCfB1JEeN0Qo-kIWX-ryCGyHL8Hqpo",
  authDomain: "personal-portfolio-websi-5bbab.firebaseapp.com",
  projectId: "personal-portfolio-websi-5bbab",
  storageBucket: "personal-portfolio-websi-5bbab.firebasestorage.app",
  messagingSenderId: "761647811758",
  appId: "1:761647811758:web:b88a2658e16b8f5addf13f",
  measurementId: "G-Z9VPC022DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
