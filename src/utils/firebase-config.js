import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQPTcYMtAGG2GP7iEHW9H3PatyvUuJ6KE",
  authDomain: "netflix-clone-ebaa6.firebaseapp.com",
  projectId: "netflix-clone-ebaa6",
  storageBucket: "netflix-clone-ebaa6.appspot.com",
  messagingSenderId: "1086222071345",
  appId: "1:1086222071345:web:9a38871bc13e3f0ba0c710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app)