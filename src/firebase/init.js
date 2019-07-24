import firebase from "firebase";
import firestore from "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyCg9x8aY-SUWfNw9onQDaKTjxikpyopLEM",
  authDomain: "smoothies-7915b.firebaseapp.com",
  databaseURL: "https://smoothies-7915b.firebaseio.com",
  projectId: "smoothies-7915b",
  storageBucket: "",
  messagingSenderId: "58209547626",
  appId: "1:58209547626:web:8020fedfae072d06"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
