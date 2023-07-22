// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2L6pTF1NpKCIaQSTV1Tzgt3ckkInfOIY",
    authDomain: "best-car-servicing.firebaseapp.com",
    projectId: "best-car-servicing",
    storageBucket: "best-car-servicing.appspot.com",
    messagingSenderId: "131533985735",
    appId: "1:131533985735:web:cf8d480e557085f3666be2",
    measurementId: "G-5QERD7GT5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;