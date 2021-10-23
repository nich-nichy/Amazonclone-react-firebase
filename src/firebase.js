import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB14wYvOHiFC4hoSCNDWctgY1fgTIkCf5A",
  authDomain: "clone-2d8be.firebaseapp.com",
  projectId: "clone-2d8be",
  storageBucket: "clone-2d8be.appspot.com",
  messagingSenderId: "721249723651",
  appId: "1:721249723651:web:cd8a88e312867db79df536",
  measurementId: "G-2YNS64EMNE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};