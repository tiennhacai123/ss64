// src/Login.js
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/users?username=${username}`);
    const users = await response.json();

    if (users.length === 0) {
      alert('User not found!');
      return;
    }

    const user = users[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      alert('Login successful!');
    } else {
      alert('Invalid password.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
