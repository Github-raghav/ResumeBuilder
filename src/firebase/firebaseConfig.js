import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgoLSmXyho1wUd6aMxCCeYwB1c7gSxxG4",
    authDomain: "resume-builder-57106.firebaseapp.com",
    projectId: "resume-builder-57106",
    storageBucket: "resume-builder-57106.appspot.com",
    messagingSenderId: "596360244703",
    appId: "1:596360244703:web:42d1ee1eca8f8b7ce5a86a"
  };

export const firebaseApp= firebase.initializeApp(firebaseConfig);
 export  const firebaseDb=firebaseApp.firestore();
//   export default firebaseApp;