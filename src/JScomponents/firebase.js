import React from 'react'
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAN6t0_kyxnzx9ce5KBLui378idzRr92TM",
    authDomain: "superchat-41e8a.firebaseapp.com",
    databaseURL: "https://superchat-41e8a.firebaseio.com",
    projectId: "superchat-41e8a",
    storageBucket: "superchat-41e8a.appspot.com",
    messagingSenderId: "10084442628",
    appId: "1:10084442628:web:81298f8b5e66710e2a4b51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const dataBase = firebase.firestore()


  export const googleLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: "select_account"});
      return auth.signInWithPopup(provider)
  }

  export const signOut = () => {
      return auth.signOut().then(res => console.log("logged out"))
  }
  

// function firebase() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default firebase
