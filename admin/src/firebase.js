import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAR3Guy6ii8wODJKw4uw9RaMg4S3Z07mf8",
    authDomain: "netflix-63363.firebaseapp.com",
    projectId: "netflix-63363",
    storageBucket: "netflix-63363.appspot.com",
    messagingSenderId: "79826011127",
    appId: "1:79826011127:web:901a6b0c3f3552ecc4a4f2",
    measurementId: "G-EBNLJTHFDV"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;