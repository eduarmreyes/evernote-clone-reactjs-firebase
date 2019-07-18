import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAMmzygrnabuYd41vKobhIlLJkJlqVsZY",
  authDomain: "evernote-clone-5c9df.firebaseapp.com",
  databaseURL: "https://evernote-clone-5c9df.firebaseio.com",
  projectId: "evernote-clone-5c9df",
  storageBucket: "evernote-clone-5c9df.appspot.com",
  messagingSenderId: "205860174469",
  appId: "1:205860174469:web:e6296894f62d4b2b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
