import firebase from 'firebase';

const  firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyAVWkxsA6bxXvDb8Y-wgiLQAgQWcB4PMaM",
        authDomain: "messanger-clone-115cd.firebaseapp.com",
        projectId: "messanger-clone-115cd",
        storageBucket: "messanger-clone-115cd.appspot.com",
        messagingSenderId: "621287202535",
        appId: "1:621287202535:web:e98e62d42e876b7e580c42",
        measurementId: "G-KZKZGKXHPL"

});
const  db = firebaseApp.firestore();

export  {db};