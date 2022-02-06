import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCKDuviKMlArD227DfJY2Q0Ygko4XWbaM",
  authDomain: "gigs-6b633.firebaseapp.com",
  projectId: "gigs-6b633",
  storageBucket: "gigs-6b633.appspot.com",
  messagingSenderId: "1022430595496",
  appId: "1:1022430595496:web:72788c5c2144c1e499359d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);