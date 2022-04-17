// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsm_BCbNl6U5gOsLwjUqL98ktrC3Gzxos",
    authDomain: "assignment-10-39663.firebaseapp.com",
    projectId: "assignment-10-39663",
    storageBucket: "assignment-10-39663.appspot.com",
    messagingSenderId: "331130379337",
    appId: "1:331130379337:web:53cf6e763a36c5b3db7398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;