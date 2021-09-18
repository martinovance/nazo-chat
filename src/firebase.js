import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDnDsoCbRbET1VnoCHCrTcv9_CaZepOY-8",
    authDomain: "nazochat-1dc2f.firebaseapp.com",
    projectId: "nazochat-1dc2f",
    storageBucket: "nazochat-1dc2f.appspot.com",
    messagingSenderId: "1037431702372",
    appId: "1:1037431702372:web:ec6f921c4c0d7545fc7071"
  }).auth();