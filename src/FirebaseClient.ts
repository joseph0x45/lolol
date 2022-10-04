import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAZGHmiHfViAzjxNuwC5czg06qIsghPDaM",
  authDomain: "lolol-a8ea4.firebaseapp.com",
  projectId: "lolol-a8ea4",
  storageBucket: "lolol-a8ea4.appspot.com",
  messagingSenderId: "940872230300",
  appId: "1:940872230300:web:898197b95e42a3f5125459",
  measurementId: "G-YF40YKNNK1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    app,
    db 
}