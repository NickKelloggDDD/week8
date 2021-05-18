const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCQhmxE-JDycCE9USqhBTHKICQSg7rGTLs",
    authDomain: "kiei-451-60e69.firebaseapp.com",
    projectId: "kiei-451-60e69",
    storageBucket: "kiei-451-60e69.appspot.com",
    messagingSenderId: "45804692184",
    appId: "1:45804692184:web:4fecd079717baeafa5edad"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase