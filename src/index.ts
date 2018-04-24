import Firebase from './firebase'
import signInWithEmailAndPassword from './firebase/auth/mailAndPassword'


setTimeout (() => {
  signInWithEmailAndPassword({
    email: process.env.MAIL,
    password: process.env.PASSWORD
  }).then(() => {
    Firebase.database().ref('messages').push({
      name: 'sho'
    }).then(d => {
      Firebase.database().ref('messages').on('value', snapshot => {
        const key = d.key
        console.log(snapshot.val()[key])
      })
    })
  }).catch(err => {
    Error(err.message)
  })
}, 2000)
