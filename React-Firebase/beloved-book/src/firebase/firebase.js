import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpMnLzfrp0aQDXe5MvNmE3yTCDvkz7sRw",
  authDomain: "fav-books-80202.firebaseapp.com",
  projectId: "fav-books-80202",
  storageBucket: "fav-books-80202.appspot.com",
  messagingSenderId: "993443288744",
  appId: "1:993443288744:web:e8728a959553374351d49d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
