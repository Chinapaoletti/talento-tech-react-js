import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8s8JuOlx6sGD8PgHE_xgZO0AwCoXDaIM",
  authDomain: "talentotech-reactjs-01.firebaseapp.com",
  projectId: "talentotech-reactjs-01",
  storageBucket: "talentotech-reactjs-01.firebasestorage.app",
  messagingSenderId: "52916981697",
  appId: "1:52916981697:web:3318adac4d1295fbeae940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
