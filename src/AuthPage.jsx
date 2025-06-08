import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import './Login.css';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully!');
    } catch (err) {
      setError('Wrong email or password');
      console.error(err);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-logo">
        <img src="/logo.png" alt="LeadNest Logo" />
      </div>
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="auth-links">
          <Link to="/signup">Create an Account</Link>
        </div>
      </div>
      <footer className="auth-footer">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </footer>
    </div>
  );
}
