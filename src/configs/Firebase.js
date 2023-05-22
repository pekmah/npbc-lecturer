import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8DmDoVb5tuUp2PDhrMV_fpV1egLbte0w",
  authDomain: "npbc-ins.firebaseapp.com",
  projectId: "npbc-ins",
  storageBucket: "npbc-ins.appspot.com",
  messagingSenderId: "1091463851657",
  appId: "1:1091463851657:web:f9259ce2aa56d87e3d2058",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);

// firebase configs
const CFirebase = {
  // db,
  auth,
};

export default CFirebase;
