import firebase from './firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCgkPGo_7fM-LGY6aAt9X5XlvePR---uOc",
    authDomain: "fir-react-auth-eb046.firebaseapp.com",
    projectId: "fir-react-auth-eb046",
    storageBucket: "fir-react-auth-eb046.appspot.com",
    messagingSenderId: "1040094551778",
    appId: "1:1040094551778:web:f29e5c6cddd4c98157c8bb",
    measurementId: "G-EWWLFL3QW2"
  };

  const fire = firebase.initializApp(firebaseConfig);

  export default fire;