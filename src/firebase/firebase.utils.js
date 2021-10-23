import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDIOZKkgLBw_8Pd3cAsbdulDu4OCrAIVCk',
  authDomain: 'netflix-e744c.firebaseapp.com',
  projectId: 'netflix-e744c',
  storageBucket: 'netflix-e744c.appspot.com',
  messagingSenderId: '378673780794',
  appId: '1:378673780794:web:e6f79272fc7236a2df7d03',
  measurementId: 'G-8P9Q6SD1W8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
