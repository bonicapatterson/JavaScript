import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
/* Be sure only to copy and paste from the 'apiKey: to 'measurementId:' */
  apiKey: "AIzaSyBGjoE44ThlUx9hlBqvDEW6DMoOJi1EX8Q",
  authDomain: "clone-5d14c.firebaseapp.com",
  projectId: "clone-5d14c",
  storageBucket: "clone-5d14c.appspot.com",
  messagingSenderId: "323132457851",
  appId: "1:323132457851:web:ee4ca76a31f2746062f3de",
  measurementId: "G-5JL1SV5Y5G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };