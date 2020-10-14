import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwzwV0MhfrowifAUo39ijrRfQXKgF08YI",
  authDomain: "slack-clone-13b87.firebaseapp.com",
  databaseURL: "https://slack-clone-13b87.firebaseio.com",
  projectId: "slack-clone-13b87",
  storageBucket: "slack-clone-13b87.appspot.com",
  messagingSenderId: "410409453189",
  appId: "1:410409453189:web:221e364d97f7e8eacc8bec",
  measurementId: "G-QF81RR4RFK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
