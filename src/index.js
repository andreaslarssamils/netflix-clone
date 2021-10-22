import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { GlobalStyles } from './globalStyles';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { FirebaseContext } from './context/firebase';
import { initializeApp } from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDIOZKkgLBw_8Pd3cAsbdulDu4OCrAIVCk',
  authDomain: 'netflix-e744c.firebaseapp.com',
  projectId: 'netflix-e744c',
  storageBucket: 'netflix-e744c.appspot.com',
  messagingSenderId: '378673780794',
  appId: '1:378673780794:web:e6f79272fc7236a2df7d03',
  measurementId: 'G-8P9Q6SD1W8',
};

const firebase = initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
