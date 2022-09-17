import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAdc6p78m7G421SxGtz5DJempBmxs5fH1A",
    authDomain: "tiendagerlero.firebaseapp.com",
    projectId: "tiendagerlero",
    storageBucket: "tiendagerlero.appspot.com",
    messagingSenderId: "246329760755",
    appId: "1:246329760755:web:701ea682021d1ccf311086"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);