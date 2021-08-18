import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import rootReducer from "./reducer/rootReducer";
import firebase from 'firebase';
// redux firestore library-->database add
import { reduxFirestore,getFirestore, createFirestoreInstance } from 'redux-firestore';
// redux firebase-->auth functionality
import { ReactReduxFirebaseProvider,getFirebase } from 'react-redux-firebase';

var firebaseConfig={
  apiKey: "AIzaSyAgoLSmXyho1wUd6aMxCCeYwB1c7gSxxG4",
    authDomain: "resume-builder-57106.firebaseapp.com",
    projectId: "resume-builder-57106",
    storageBucket: "resume-builder-57106.appspot.com",
    messagingSenderId: "596360244703",
    appId: "1:596360244703:web:42d1ee1eca8f8b7ce5a86a"
}
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const reduxStore=createStore(rootReducer,
   composeWithDevTools(
     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
   reduxFirestore(firebase)
    ));


ReactDOM.render(
 <Provider store={reduxStore}>
  
   <ReactReduxFirebaseProvider
   firebase={firebase}
   config={firebaseConfig}
  //  to change in redux storage
   dispatch={reduxStore.dispatch}
  //  firestore
  //  createFirestoreInstance={createFirestoreInstance}
  createFirestoreInstance={createFirestoreInstance}
   >
   <App />
   </ReactReduxFirebaseProvider>
   
 </Provider>,
   document.getElementById('root')
  
);

