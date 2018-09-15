import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMZ0lZoO0LyEgV8bp7neE3L2ZcwVf4Mus",
  authDomain: "sunday-paper.firebaseapp.com",
  databaseURL: "https://sunday-paper.firebaseio.com",
  projectId: "sunday-paper",
  storageBucket: "sunday-paper.appspot.com",
  messagingSenderId: "794457487221"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
