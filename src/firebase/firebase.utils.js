import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAmnBvjbl6n8FC-A3tX3R_5o7K8rmJes2Y",
    authDomain: "nxt-clothing.firebaseapp.com",
    databaseURL: "https://nxt-clothing.firebaseio.com",
    projectId: "nxt-clothing",
    storageBucket: "nxt-clothing.appspot.com",
    messagingSenderId: "926517846836",
    appId: "1:926517846836:web:d9bee89e8169e17d40bb61",
    measurementId: "G-LM28KNYQH4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
