import * as firebase from "firebase"
require("firebase/firestore");

var firebaseConfig = {

  apiKey: "AIzaSyBzkakvvykR5oqjVj1EvtOY2WUN877v38s",
    authDomain: "webtest-a81dc.firebaseapp.com",
    databaseURL: "https://webtest-a81dc.firebaseio.com",
    projectId: "webtest-a81dc",
    storageBucket: "webtest-a81dc.appspot.com",
    messagingSenderId: "180737000927",
    appId: "1:180737000927:web:3d1df2cd0b631a2601b06a",
    measurementId: "G-9CB63L546Y"


};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const authCheck = async _handleAuthedUser => {
  return new Promise(resolve => {
    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(async user => {
      if (user != null) {
        console.log("We are authenticated now!");

        return resolve(await _handleAuthedUser(user));
      } else {
        console.log("We did not authenticate.");
        _handleAuthedUser(null);
        return resolve(null);
      }
    });
  });
};

/**
 *
 * @param {*} email
 * @param {*} password
 */

export const loginWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export const logOut = () => {
  return firebase.auth().signOut();
};

export const getUserProfile = () => {
  let user = firebase.auth().currentUser;
  console.log(user);

  
};

