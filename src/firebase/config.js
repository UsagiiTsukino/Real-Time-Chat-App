import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAFX62GX87MKiv0fMHo1f2fB-mJowYIdvc",
  authDomain: "chat-app-f83d2.firebaseapp.com",
  projectId: "chat-app-f83d2",
  storageBucket: "chat-app-f83d2.appspot.com",
  messagingSenderId: "635956909792",
  appId: "1:635956909792:web:e5a05a0117d8ab2aeca285",
  measurementId: "G-6ZRCN2385B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;