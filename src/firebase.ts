import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAVcrHQH-QUf51NrVDmx9SPhf92ZFjNHWI",
  authDomain: "sandbox-749b4.firebaseapp.com",
  databaseURL: "https://sandbox-749b4.firebaseio.com",
  projectId: "sandbox-749b4",
  storageBucket: "sandbox-749b4.appspot.com",
  messagingSenderId: "1004016018334"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default config
