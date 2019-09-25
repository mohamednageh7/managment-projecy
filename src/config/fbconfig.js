import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC5M_Z4n26r5Q4moAdDFjZdgM60WYF3b7U",
    authDomain: "managment-project.firebaseapp.com",
    databaseURL: "https://managment-project.firebaseio.com",
    projectId: "managment-project",
    storageBucket: "",
    messagingSenderId: "751571271179",
    appId: "1:751571271179:web:60bd35d0ab50af1f8ed10e"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // firebase.firestore().settings({timestampsInSnapshots: true});

    export default firebase;