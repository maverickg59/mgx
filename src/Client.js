import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAcliG8jNb5geJ45Cz7ns47QtKQkEDykps",
  authDomain: "motogx-eb312.firebaseapp.com",
  databaseURL: "https://motogx-eb312.firebaseio.com",
  projectId: "motogx-eb312",
  storageBucket: "motogx-eb312.appspot.com",
  messagingSenderId: "91190932483"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()
