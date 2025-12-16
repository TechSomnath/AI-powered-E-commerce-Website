import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-61189.firebaseapp.com",
  projectId: "loginonecart-61189",
  storageBucket: "loginonecart-61189.firebasestorage.app",
  messagingSenderId: "554444920818",
  appId: "1:554444920818:web:b263344869b8713486bd6b"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider()

export { auth , provider}