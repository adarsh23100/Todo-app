const firebaseConfig = {
    apiKey: "AIzaSyB1BhzaqDMwIC2Ha8-xxWYRTNu7qMQRuCI",
    authDomain: "to-do-list-d02dc.firebaseapp.com",
    projectId: "to-do-list-d02dc",
    storageBucket: "to-do-list-d02dc.appspot.com",
    messagingSenderId: "221558953653",
    appId: "1:221558953653:web:36a92423f7ca27753390fc",
    measurementId: "G-L0P0GYC6H4"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();