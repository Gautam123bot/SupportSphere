import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCjIdwdPGVxwKkyzuFsTf7VgaI5E5QezhE",
    authDomain: "care-taker-d5f69.firebaseapp.com",
    projectId: "care-taker-d5f69",
    storageBucket: "care-taker-d5f69.appspot.com",
    messagingSenderId: "638947744368",
    appId: "1:638947744368:web:fe385c051b1756ee3972b5",
    measurementId: "G-LVMX9E47XS"
  };

const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

export default app;