import Firebase from '../'

function signInWithEmailAndPassword (user) {
  return Firebase.auth().signInWithEmailAndPassword(user.email, user.password)
}

export default signInWithEmailAndPassword
