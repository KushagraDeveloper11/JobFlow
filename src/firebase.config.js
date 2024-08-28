// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8sByYkK_q0QXlk9JcTXBVlnN_27JUzdo",
  authDomain: "jobflow-bcea8.firebaseapp.com",
  projectId: "jobflow-bcea8",
  storageBucket: "jobflow-bcea8.appspot.com",
  messagingSenderId: "447657488830",
  appId: "1:447657488830:web:1e7c10cff0c1f1ccf089ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};