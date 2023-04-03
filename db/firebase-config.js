
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB3qiknY0-uIKpAVIEn2zcKaHGLU9qnQi4",
    authDomain: "firstreactproject-fireb.firebaseapp.com",
    projectId: "firstreactproject-fireb",
    storageBucket: "firstreactproject-fireb.appspot.com",
    messagingSenderId: "316744778767",
    appId: "1:316744778767:web:a5c87e4d8c71729058cf7a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

