import * as firebase from 'firebase/'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDxYN0ToXWwVpeGI3srLiBP2VAUIDqdpDI',
  authDomain: 'j45t7-firegram.firebaseapp.com',
  databaseURL: 'https://j45t7-firegram.firebaseio.com',
  projectId: 'j45t7-firegram',
  storageBucket: 'j45t7-firegram.appspot.com',
  messagingSenderId: '904429925082',
  appId: '1:904429925082:web:4fe37488bed74456f6abe3',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
