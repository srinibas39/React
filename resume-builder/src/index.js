import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {Provider} from "react-redux"
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducer/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {reduxFirestore,getFirestore} from "redux-firestore";
import { ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import { createFirestoreInstance} from 'redux-firestore' // <- needed if using firestore



const firebaseConfig = {
  apiKey: "AIzaSyDVXz0QVPRN4vPkXCCFNBb6syPISDlETzM",
  authDomain: "resumeb-83234.firebaseapp.com",
  projectId: "resumeb-83234",
  storageBucket: "resumeb-83234.appspot.com",
  messagingSenderId: "288267324655",
  appId: "1:288267324655:web:819e200b080beefda55f1a"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)))//binding for redux to get firestore
ReactDOM.render(
    
    <BrowserRouter>
        <Provider store={store}>
          <ReactReduxFirebaseProvider
            firebase={firebase}
            config={firebaseConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}>
            <App />
          </ReactReduxFirebaseProvider>
        </Provider>  
    </BrowserRouter>
,
  document.getElementById('root')
);