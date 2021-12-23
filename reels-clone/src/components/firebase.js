
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCI6ErX_kZoJUSMlugtX8kM4E991UcbRD0",
  authDomain: "reels-clone-86afe.firebaseapp.com",
  projectId: "reels-clone-86afe",
  storageBucket: "reels-clone-86afe.appspot.com",
  messagingSenderId: "804174292153",
  appId: "1:804174292153:web:e83ef3e1ba568408f32768"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth()
const firestore=firebase.firestore();
export const database={
    users:firestore.collection("users"),
    getTimestamp:firebase.firestore.FieldValue.serverTimestamp(),
    posts:firestore.collection("posts"),
    comments:firestore.collection("comments")
    
}
export const storage=firebase.storage();

