import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpcvk1bNwW1xX9i_SzcVP7TIkDbERtjck",
  authDomain: "chatify-e9425.firebaseapp.com",
  projectId: "chatify-e9425",
  storageBucket: "chatify-e9425.appspot.com",
  messagingSenderId: "872127846683",
  appId: "1:872127846683:web:843f23ae8018ae29f8dbbe",
};

export const auth = firebase.initializeApp(firebaseConfig).auth();
