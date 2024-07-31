// src/App.js
import React from 'react';
import './App.css';
import PayPal from './components/paypal';
import PayImage from '../src/assets/pay.jpg'

function App() {
  return (
    <React.Fragment>
      <div className='app'>
        <PayPal></PayPal>
        <img src={PayImage} alt="fuck you, pay mee" />
      </div>
    </React.Fragment>
  );
}

export default App;
