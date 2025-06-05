import React from 'react';
import './Login.css';

export default function AuthPage() {
  return (
    <div className="auth-page">
      <div className="auth-logo">
        <img src="/logo.png" alt="LeadNest Logo" />
      </div>
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="auth-links">
          <a href="/signup">Create an Account</a>
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
