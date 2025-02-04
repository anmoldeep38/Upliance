// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_FIREBASE_API_KEY",
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "your-sender-id",
//   appId: "your-app-id",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmjGfhxXGRkwLZHzQ_Sr7X59_38d6UDNE",
  authDomain: "upliance-ai-65dd8.firebaseapp.com",
  projectId: "upliance-ai-65dd8",
  storageBucket: "upliance-ai-65dd8.firebasestorage.app",
  messagingSenderId: "247400826924",
  appId: "1:247400826924:web:897c3cfa52ad3fd237e989",
  measurementId: "G-B61DRXC2HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);