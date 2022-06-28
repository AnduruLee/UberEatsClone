import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0V1Y-14vB0cE86j_znFQAszqy8wC_FzE",
    authDomain: "rn-uber-eats-clone-yt-47618.firebaseapp.com",
    projectId: "rn-uber-eats-clone-yt-47618",
    storageBucket: "rn-uber-eats-clone-yt-47618.appspot.com",
    messagingSenderId: "273902590203",
    appId: "1:273902590203:web:afecadc2a8cc488b48f85e"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;