import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOvbzgKDGCI1q6wR1jNuLPmjkYgDx79kY",
  authDomain: "curso-react-coder-ad063.firebaseapp.com",
  projectId: "curso-react-coder-ad063",
  storageBucket: "curso-react-coder-ad063.appspot.com",
  messagingSenderId: "1068744433796",
  appId: "1:1068744433796:web:6300f4193295b5df1c22d1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
