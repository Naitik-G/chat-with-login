import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      sessionStorage.setItem('authToken', data.token); // Storing the token
      sessionStorage.setItem('userData', JSON.stringify(data)); // Storing the whole user data (stringified)
      navigate('/chat');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-gray-200">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-8 rounded-md shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-400">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-gray-400">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-500 transition"
        >
          Login
        </button>
        {/* Additional Text */}
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-pink-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
