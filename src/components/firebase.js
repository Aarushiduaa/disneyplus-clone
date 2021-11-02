import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore';
import '@firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyAYn03Lh8Ab5zXTbH5NiX6PG59N-41tFb8",
    authDomain: "disneyplus-clone-615b0.firebaseapp.com",
    projectId: "disneyplus-clone-615b0",
    storageBucket: "disneyplus-clone-615b0.appspot.com",
    messagingSenderId: "66131305828",
    appId: "1:66131305828:web:3809fb499330cd30c20671",
    measurementId: "G-L0Z44LKYN2"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

