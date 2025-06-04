import React from 'react';

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1470&q=80)' }}>
      <div className="absolute top-8 left-8 flex items-center space-x-3">
        <img src="/logo.png" alt="LeadNest Logo" className="h-10" />
        <h1 className="text-white text-2xl font-bold">LeadNest</h1>
      </div>
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">Work Less. Close More.</h2>
        <p className="text-sm text-center text-gray-600 mb-6">Your AI-powered real estate assistant.</p>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">Log In to LeadNest</button>
        </form>
        <div className="text-center mt-4">
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 w-full text-sm hover:bg-gray-100 transition">Sign in with Google</button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
      </div>
    </div>
  );
};

export default AuthPage;
