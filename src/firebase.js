// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDWuUN11I9oh5P-i7fJZ3M7xMOPNLWjXSA",
  authDomain: "linkedin-clone-69e9f.firebaseapp.com",
  projectId: "linkedin-clone-69e9f",
  storageBucket: "linkedin-clone-69e9f.appspot.com",
  messagingSenderId: "1084288821804",
  appId: "1:1084288821804:web:d3a67986d7d304e6c33f89",
  measurementId: "G-HCR25TR37R"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;