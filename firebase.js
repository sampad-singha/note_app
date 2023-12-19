import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBu3R5eUkBJCjQMpSRzI9yuZyVewXJ8ZmI",
    authDomain: "note-app-e798e.firebaseapp.com",
    projectId: "note-app-e798e",
    storageBucket: "note-app-e798e.appspot.com",
    messagingSenderId: "154836652624",
    appId: "1:154836652624:web:3de74baebfce2657a4b755",
    measurementId: "G-QS7ZXSSB6Z"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
export const notesCollection = collection(db,"notes")
