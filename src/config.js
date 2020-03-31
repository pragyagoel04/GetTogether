import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: 'AIzaSyBB6UoJL2DCmdRXgz9wuFieXFMvJYYyAd4',
  authDomain: 'gettogether-fbf77.firebaseapp.com',
  databaseURL: 'https://gettogether-fbf77.firebaseio.com',
  projectId: 'gettogether-fbf77',
  storageBucket: 'gettogether-fbf77.appspot.com',
  messagingSenderId: '149987676647',
  appId: '1:149987676647:web:fb30597b66b1d5f08fad42',
  measurementId: 'G-GDH8P9Y7Y5',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
