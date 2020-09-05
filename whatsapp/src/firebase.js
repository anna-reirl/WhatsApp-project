import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDC12VoUUcjXAHMbSY7JIti33_Q5FBCd-U",
  authDomain: "whatsapp-fc0a9.firebaseapp.com",
  databaseURL: "https://whatsapp-fc0a9.firebaseio.com",
  projectId: "whatsapp-fc0a9",
  storageBucket: "whatsapp-fc0a9.appspot.com",
  messagingSenderId: "57430728789",
  appId: "1:57430728789:web:9390e1828911a441c1f4dc",
  measurementId: "G-EZZT0PEHGB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth
  .GoogleAuthProvider();

export { auth, provider }
export default db;

