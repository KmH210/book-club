import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhEezwrc8PSkMsCKj1sWTbdfI3_MCHlUA",
    authDomain: "read-it-and-weep.firebaseapp.com",
    projectId: "read-it-and-weep",
    storageBucket: "read-it-and-weep.appspot.com",
    messagingSenderId: "766250500717",
    appId: "1:766250500717:web:3a5db836d2512e6b0af564"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const authProvider = new firebase.auth.GoogleAuthProvider();

export function signInWithGoogle(): void {
    firebase.auth().signInWithPopup(authProvider);
}

export function signOut(): void {
    firebase.auth().signOut();
}

export default firebase;