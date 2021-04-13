import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfcYLiNVXU95Trjd5Rw9wU3i9X2KrqKag",
    authDomain: "clone-yt-7d574.firebaseapp.com",
    projectId: "clone-yt-7d574",
    storageBucket: "clone-yt-7d574.appspot.com",
    messagingSenderId: "865356587360",
    appId: "1:865356587360:web:1bc97e541f6d75a0c0fe05",
    measurementId: "G-XWPM5R6KWL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};