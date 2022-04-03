import {initializeApp} from "firebase/app" ;
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAvVixv_r8ki7K_wrp0m9vU0HMklmBVvds",
  
    authDomain: "react-bdapp.firebaseapp.com",
  
    databaseURL: "https://react-bdapp-default-rtdb.firebaseio.com",
  
    projectId: "react-bdapp",
  
    storageBucket: "react-bdapp.appspot.com",
  
    messagingSenderId: "1091580727122",
  
    appId: "1:1091580727122:web:5e0bafa638c9586fb3748b"
  
  };

  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);

  export default db;

  