import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyCoVKwOo1ZjlEJ06wVzfEjvJD2KLETLawg",
    authDomain: "foodyippee.firebaseapp.com",
    databaseURL: "https://foodyippee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "foodyippee",
    storageBucket: "foodyippee.appspot.com",
    messagingSenderId: "559713394197",
    appId: "1:559713394197:web:ac35162def3f59cacbb81c",
    measurementId: "G-GEXW568QDY"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;
export {auth}