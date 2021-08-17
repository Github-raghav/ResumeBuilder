import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { reduxFirestore,getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider,getFirebase } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from "./reducer/rootReducer";
import { firebaseApp, firebaseDb } from './firebase/firebaseConfig';
import firebase from 'firebase';

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
   config={firebaseApp}
   dispatch={reduxStore.dispatch}
   createFirestoreInstance={createFirestoreInstance}
   >
   <App />
   </ReactReduxFirebaseProvider>
   
 </Provider>,
   document.getElementById('root')
  
);

