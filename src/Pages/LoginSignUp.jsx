import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if(email && password){
    // Handle login logic
    console.log('Login clicked');
    navigate('/');
    }else{
        alert('Please fill in all the fields')
    }
  };

  const handleSignup = () => {
    if (email && password && username) {
    // Handle signup logic
    console.log('Signup clicked');
    console.log('Username:', username);
    navigate('/');
    }
    else{
        alert('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-violet-100">
      <div className="bg-white w-1/2 p-8 rounded shadow-md text-center">
        <h2 className="text-4xl font-bold uppercase mb-10">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {/* Only show the username input field in the signup section */}
        {!isLogin && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-3/4 p-2 border border-gray-300 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-3/4 p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-3/4 p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-3/4 bg-violet-500 text-white p-2 rounded hover-bg-orange-500"
          onClick={isLogin ? handleLogin : handleSignup}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        <div className="my-4 mt-10">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
