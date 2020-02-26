import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/*we use firebase services*/ 

const config = {
    apiKey: "AIzaSyAlLVO-hsu4FUXiv3G5YlW3Iqx3_rouKpI",
    authDomain: "style88-db.firebaseapp.com",
    databaseURL: "https://style88-db.firebaseio.com",
    projectId: "style88-db",
    storageBucket: "style88-db.appspot.com",
    messagingSenderId: "716735589057",
    appId: "1:716735589057:web:61fa63117ae248392ec240",
    measurementId: "G-3DB9T40923"
  };/*object created from firebase to customize our application*/ 

  export const createUserProfileDocument = async (userAuth,additionalData) =>{/*userAuth is object return from auth library*/ 
    if(!userAuth) return;/*if user didn't sign in return nothing*/
     const userRef = firestore.doc(`users/${userAuth.uid}`);/*uid which in authentication library*/ 
     const snapShot = await userRef.get();/*to get user object(data)*/
     
     if(!snapShot.exists){/*if user didn't exist in database*/ 
       const {displayName,email} = userAuth;
       const createdAt = new Date();

       try{/*create a new user object in Database*/ 
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
       }catch(error){
         console.log('error creating user',error.message);
       }
     }
     return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  /*we want to always trigger the google pop up when ever we use GoogleAuthProvider*/
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  /*in case we want the whole library*/ 