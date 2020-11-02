import './normalize.scss';
import './style.scss';
import './tablet.scss';
import './mobile.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import Counter from './components/Counter';

const firebaseConfig = {
  apiKey: "AIzaSyC1s-bJcevqHEjJFfOE5gwwJzf0S2j007Q",
  authDomain: "rem-counter.firebaseapp.com",
  databaseURL: "https://rem-counter.firebaseio.com",
  projectId: "rem-counter",
  storageBucket: "rem-counter.appspot.com",
  messagingSenderId: "94880061991",
  appId: "1:94880061991:web:46b997be0f5b792cdbcc02"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);