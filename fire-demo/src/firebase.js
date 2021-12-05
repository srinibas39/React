
import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBRkEAeqWhCy88O2K1oi9Oj1gbFtrDMjdw",
  authDomain: "fir-demo-b49e5.firebaseapp.com",
  projectId: "fir-demo-b49e5",
  storageBucket: "fir-demo-b49e5.appspot.com",
  messagingSenderId: "796042190184",
  appId: "1:796042190184:web:d025980380cab142de8add"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();