import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDJz4bmn1WEmW4fFSMIwZb7SR5FAWryc4",
    authDomain: "weatherapp-75d90.firebaseapp.com",
    projectId: "weatherapp-75d90",
    storageBucket: "weatherapp-75d90.appspot.com",
    messagingSenderId: "245116882936",
    appId: "1:245116882936:web:5260b1dfcbe840c442100d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp.firestore();