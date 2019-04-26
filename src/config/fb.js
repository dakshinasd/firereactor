import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB1WclUsIdnJCOUqtaw6I4-GNUINTU9Eyk",
    authDomain: "firereactor-base.firebaseapp.com",
    databaseURL: "https://firereactor-base.firebaseio.com",
    projectId: "firereactor-base",
    storageBucket: "firereactor-base.appspot.com",
    messagingSenderId: "290685163187"
};

firebase.initializeApp(config);
firebase.firestore()

export default firebase;