import { initializeApp } from "firebase/app";
import { getFirestore, where, query, collection, getDocs, addDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuid } from "uuid"

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
const storage = getStorage()
const rootUrl = "https://firebasestorage.googleapis.com/v0/b/lolol-a8ea4.appspot.com/o/"

export {
  login,
  post,
  db,
  mediaUrlFormatter
}

const login = async (username: string) => {
  if (username.includes("nigga") || username.includes("nigger")) {
    return [false, "Thou name contains a word that has been banned from LOLAND"]
  }
  const q = query(usersRef, where("username", "==", username))
  const queryResults = await getDocs(q)
  if (queryResults.size != 0) {
    return [false, "A Lolander already goes by that name. Mind choosing another one"]
  }
  await addDoc(collection(db, "users"), {
    username: username
  })
  return [true, username]
}

const post = async (op: string, text: string, media?: Blob) => {
  let post: Post = {
    op: op,
    text: text,
    lols: 0,
  }
  if (media) {
    uploadBytes(ref(storage, uuid()), media).then(async (snapshot) => {
      post = {
        op: op,
        text: text,
        lols: 0,
        media: await mediaUrlFormatter(snapshot.metadata.fullPath)
      }
      const newPost = await addDoc(collection(db, "posts"), post)
      return [true, newPost.id]
    }).catch(err => {
      console.log(err);
    })
  } else {
    console.log("MEdia post");
    const newPost = await addDoc(collection(db, "posts"), post)
    return [true, newPost.id]
  }

}


const mediaUrlFormatter = async (url: string) => {
  const formattedUrl = await getDownloadURL(ref(storage, `${url}`)).then((url) => {
    return url
  }).catch(err => {
    return "https://lorem.picsum/200/200"
  })
  return formattedUrl
}





interface Post {
  op: string
  text: string
  lols: number
  media?: string
}