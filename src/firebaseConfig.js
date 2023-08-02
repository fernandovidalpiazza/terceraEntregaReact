import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:import.meta.VITE_apiKey ,
  authDomain: import.meta.VITE_authDomain ,
  projectId:import.meta.VITE_projectId ,
  storageBucket:import.meta.VITE_storageBucket ,
  messagingSenderId:import.meta.VITE_messagingSenderId ,
  appId:import.meta.VITE_appId ,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
