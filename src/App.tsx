// src/App.js
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import './App.css'
const App = () => {
  return (
    <div className="container">
      <h1>User Registration and Login</h1>
      <Register />
      <Login />
    </div>
  );
};

export default App;
