import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqwBckIk_szLgSHBTqunwVOr22nOsIpfY",
  authDomain: "linkdin-fdefe.firebaseapp.com",
  projectId: "linkdin-fdefe",
  storageBucket: "linkdin-fdefe.appspot.com",
  messagingSenderId: "969703041161",
  appId: "1:969703041161:web:51c0b07d0e046ca18efe58",
  measurementId: "G-MP5DT5RQVL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export default db;
export { auth };
