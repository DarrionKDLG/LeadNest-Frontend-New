import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuSBm1DvcCSo8g0TlSP4qUWCX25uciAk",
  authDomain: "leadnest-e62a9.firebaseapp.com",
  projectId: "leadnest-e62a9",
  storageBucket: "leadnest-e62a9.appspot.com",
  messagingSenderId: "327252759412",
  appId: "1:327252759412:web:b4e34d7db3cf33f1f25221"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
