import { initializeApp } from "firebase/app";
import { getFirestore, where, query, collection, getDocs, addDoc, doc } from "firebase/firestore"


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
const usersRef = collection(db, "users")

export {
    login
}

const login = async (username: string)=>{
  if(username.includes("nigga") || username.includes("nigger") ){
    return [false, "Thou name contains a word that has been banned from LOLAND"]
  }
  const q = query(usersRef, where("username", "==", username))
  const queryResults = await getDocs(q)
  if(queryResults.size!=0){
    return [false, "A Lolander already goes by that name. Mind choosing another one"]
  }
  const newUser = await addDoc(collection(db, "users"), {
    username: username
  })
  return [true, username]
}
