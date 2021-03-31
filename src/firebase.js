// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

/*const firebaseConfig = {
  apiKey: "AIzaSyDzqggJRZ_g_6L89QbftqXF4s-iP4yS0TM",
  authDomain: "bayoskop-website.firebaseapp.com",
  projectId: "bayoskop-website",
  storageBucket: "bayoskop-website.appspot.com",
  messagingSenderId: "54925581769",
  appId: "1:54925581769:web:a610e888bb4b80f92fdc18",
  measurementId: "G-8HCXSW1JTX",
};*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFyLeYZ0t2xgdyt7Onl9LIL2hYi27dvnc",
  authDomain: "sobkini-e-commerce.firebaseapp.com",
  projectId: "sobkini-e-commerce",
  storageBucket: "sobkini-e-commerce.appspot.com",
  messagingSenderId: "808124130739",
  appId: "1:808124130739:web:6f983a7bdeaa80a74197c6",
  measurementId: "G-842BR017H6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
