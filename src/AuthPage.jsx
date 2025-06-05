
import React from 'react';
import './Login.css';

export default function AuthPage() {
  return (
    <div className="login-container">
      <div className="logo-wrapper">
        <img src="/logo.png" alt="LeadNest Logo" className="circle-logo" />
      </div>
      <div className="login-hero">
        <h1 className="headline">Work Less. Close More.</h1>
        <p className="subhead">Your AI-powered real estate assistant.</p>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
        <p className="create-account">
          Don’t have an account? <a href="#">Create one</a>
        </p>
      </form>
    </div>
  );
}
