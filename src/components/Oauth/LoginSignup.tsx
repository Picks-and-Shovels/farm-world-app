import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => setAge(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleLogin = () => {
    // 로그인 로직 구현
  };

  const handleSignup = () => {
    // 회원가입 로직 구현
  };

  const toggleForm = () => {
    setIsSignup(!isSignup); // Toggle the boolean state to show login or signup
  };

  return (
    <div className={`login-signup-container ${isSignup ? 'signup' : 'login'}`}>
      <form>
        {isSignup ? (
          <>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
            />
            <input
              type="text"
              value={age}
              onChange={handleAgeChange}
              placeholder="Age"
            />
          </>
        ) : null}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        {isSignup ? (
          <button type="button" onClick={handleSignup}>
            Register
          </button>
        ) : (
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        )}
        <button type="button" onClick={toggleForm}>
          {isSignup ? 'Back to Login' : 'Go to Register'}
        </button>
      </form>
    </div>
  );
};

export default LoginSignup;
