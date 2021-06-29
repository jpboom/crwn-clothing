import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyClEH_f5lj77xaCfPbFiIfQYyxQd3b7vBY',
    authDomain: 'crwn-db-e8847.firebaseapp.com',
    projectId: 'crwn-db-e8847',
    storageBucket: 'crwn-db-e8847.appspot.com',
    messagingSenderId: '10617723183',
    appId: '1:10617723183:web:af8a9c3e81dc72b85429da',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
