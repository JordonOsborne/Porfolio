// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvn_h4Xr55_IyUBggmsfy1NQ27CVq0eH8",
  authDomain: "josborne-dev.firebaseapp.com",
  projectId: "josborne-dev",
  storageBucket: "josborne-dev.appspot.com",
  messagingSenderId: "102599981598",
  appId: "1:102599981598:web:07ad724a39aaf460d6cc0f",
  measurementId: "G-XHFTK7R7YD",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
