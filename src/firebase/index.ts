import * as firebase from 'firebase'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "first-bc925.firebaseapp.com",
  databaseURL: "https://first-bc925.firebaseio.com",
  projectId: "first-bc925",
  storageBucket: "first-bc925.appspot.com",
  messagingSenderId: process.env.SENDER_ID
}
console.log(process.env)
const Firebase: any = firebase.initializeApp(config)

export default Firebase
