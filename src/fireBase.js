import { initializeApp } from "firebase/app";
import {getAuth} from "fireBase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzgv0BJoTn_-EzBD-SiD_BrofaYhO3iFQ",
  authDomain: "piston-notes.firebaseapp.com",
  projectId: "piston-notes",
  storageBucket: "piston-notes.appspot.com",
  messagingSenderId: "905295062364",
  appId: "1:905295062364:web:788525af377bda0aab0d99",
  measurementId: "G-D5X04Y4TV6"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;