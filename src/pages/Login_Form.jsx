import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userEmail = (event) => {
    setEmail(event.target.value);
  };

  const userPassword = (event) => {
    setPassword(event.target.value);
  };

  const submitLogin = (event) => {
    event.preventDefault();
    
    alert(`Email: ${email} Password: ${password}`);
    
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login Form</h2>
      <form onSubmit={submitLogin}>
        <div>
          <input 
            type="email" 
            value={email} 
            onChange={userEmail} 
            placeholder="Email" 
            style={{ marginBottom: '10px', padding: '10px', width: '200px' }}
          />
        </div>
        <div>
          <input 
            type="password" 
            value={password} 
            onChange={userPassword} 
            placeholder="Password" 
            style={{ marginBottom: '10px', padding: '10px', width: '200px' }}
          />
        </div>
        <button type="submit">
          Login
        </button>
      </form>
      
    </div>
  );
};

export default LoginForm;
