// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChbHnNos2jyubLsHgnMaFmx1ES0UDHZGU",
    authDomain: "netflix-clone-56eff.firebaseapp.com",
    projectId: "netflix-clone-56eff",
    storageBucket: "netflix-clone-56eff.appspot.com",
    messagingSenderId: "553988637893",
    appId: "1:553988637893:web:6af3fdb24ada3abac99cac"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }