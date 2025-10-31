import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDDxR1c8dw3hbrxeLr0lEnh5rxyRYR_Afk",
    authDomain: "newfilmyverse.firebaseapp.com",
    projectId: "newfilmyverse",
    storageBucket: "newfilmyverse.appspot.com",
    messagingSenderId: "652834670201",
    appId: "1:652834670201:web:3cdaeeebdf4f3b86c476a8",
    measurementId: "G-36438LYPKN"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;




