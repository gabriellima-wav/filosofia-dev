import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlqWJrB4UVteYZtarjUBs2G1xUAGWlGgc",
  authDomain: "filosofia-dev.firebaseapp.com",
  projectId: "filosofia-dev",
  storageBucket: "filosofia-dev.firebasestorage.app",
  messagingSenderId: "394998977482",
  appId: "1:394998977482:web:f02207d759cc3721883533",
  measurementId: "G-LS13BEJGDW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { getAuth };
