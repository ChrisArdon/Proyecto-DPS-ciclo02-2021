import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoGQejc-pvf7lXexhVlTy4JUJFO8fjWgI",
    authDomain: "tienda-en-linea-ff79e.firebaseapp.com",
    projectId: "tienda-en-linea-ff79e",
    storageBucket: "tienda-en-linea-ff79e.appspot.com",
    messagingSenderId: "560687210203",
    appId: "1:560687210203:web:ca0bd1a8a90fe8d764b6fe",
    measurementId: "G-3DCBVXBS6C"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();