import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';

import AuthNavigator from './navigation/AuthNavigator';
import HomeScreen from './view/HomeScreen.js';


var firebaseConfig = {
  apiKey: "AIzaSyCC4-O1h6Vj-l4i1XqZFH73vNoihU14RZ4",
  authDomain: "newenapp-74ddf.firebaseapp.com",
  projectId: "newenapp-74ddf",
  storageBucket: "newenapp-74ddf.appspot.com",
  messagingSenderId: "521914167649",
  appId: "1:521914167649:web:0f4524ac7c076691f0d520"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default createAppContainer(
  
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: HomeScreen,
    },
    {
      initialRouteName: 'Auth'
    }
  )
);