import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyChKiHg1KyQaMxlAYAYfIwbfE9sTJ5HeuI",
  authDomain: "script-app-59660.firebaseapp.com",
  databaseURL: "https://script-app-59660.firebaseio.com",
  projectId: "script-app-59660",
  storageBucket: "script-app-59660.appspot.com",
  messagingSenderId: "769001439706"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const adminEmail = 'test2@gmail.com'
