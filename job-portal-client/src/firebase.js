
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCq24yCOD9lzAHA6yRkhCX_mU-n8LwuL-U",
  authDomain: "auth-2fdb4.firebaseapp.com",
  projectId: "auth-2fdb4",
  storageBucket: "auth-2fdb4.appspot.com",
  messagingSenderId: "803282929420",
  appId: "1:803282929420:web:1f10ad386120be646d2b29",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
