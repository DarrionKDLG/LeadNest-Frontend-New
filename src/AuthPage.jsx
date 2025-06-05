import React from 'react';
import './Login.css';

export default function AuthPage() {
  return (
    <div className="login-container">
      <div className="login-hero">
        <img src="/logo.png" alt="LeadNest Logo" className="logo" />
        <h1>Work Less. Close More.</h1>
        <p>Your AI-powered real estate assistant.</p>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
