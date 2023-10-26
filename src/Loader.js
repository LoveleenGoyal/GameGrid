// Loader.js
import React from 'react';
import './App.css';
import Loading from './Components/assets/loader.gif'

const Loader = () => {
  return (
    <div className="loader">
      <img src={Loading} alt="Loading..." />
    </div>
  );
};

export default Loader;
