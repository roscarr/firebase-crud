import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCjreQbaMLz64dzIRqaeagVGXnsU4ojCAQ",
  authDomain: "simple-crud-8044d.firebaseapp.com",
  projectId: "simple-crud-8044d",
  storageBucket: "simple-crud-8044d.appspot.com",
  messagingSenderId: "306932145253",
  appId: "1:306932145253:web:44b46b3beb7d4d99e87a8c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
