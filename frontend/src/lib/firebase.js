import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDuUOjt5r7wAl0f5WvRSLOSwDjxtzkVwXg",
  authDomain: "sunday-paper-2018.firebaseapp.com",
  databaseURL: "https://sunday-paper-2018.firebaseio.com",
  projectId: "sunday-paper-2018",
  storageBucket: "sunday-paper-2018.appspot.com",
  messagingSenderId: "298992067325"
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()

const settings = {
  timestampsInSnapshots: true
}

firestore.settings(settings)

export default firebase
