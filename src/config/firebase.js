
import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyA07rKXucvLc9o83omyE3ymypaw8dKqdnc",
  authDomain: "appenafinisce.firebaseapp.com",
  databaseURL: "https://appenafinisce.firebaseio.com",
  projectId: "appenafinisce",
  storageBucket: "appenafinisce.appspot.com",
  messagingSenderId: "973953242081",
  appId: "1:973953242081:web:98aff35c56b531062a38a0",
  measurementId: "G-Z09S1CZN61"
};

firebase.initializeApp(config);
export default firebase;