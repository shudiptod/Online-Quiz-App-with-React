import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"


var firebaseConfig = {
    apiKey: "AIzaSyDgZfVEXp0tAmNBfW1Z4RlYQCx1QbR7MJY",
    authDomain: "quizzy-39c01.firebaseapp.com",
    databaseURL: "https://quizzy-39c01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quizzy-39c01",
    storageBucket: "quizzy-39c01.appspot.com",
    messagingSenderId: "465384633856",
    appId: "1:465384633856:web:6f1f5abc8f3efe616e4ae5"
  };


  firebase.initializeApp(firebaseConfig);
var fireDb = firebase.database().ref();

export default fireDb;