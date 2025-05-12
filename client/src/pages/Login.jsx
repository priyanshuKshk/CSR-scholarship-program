import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
const {login}=useAuth();
  const { profileImage } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://csr-scholarship-program-1.onrender.com/login",
      //  "http://localhost:3001/login",
       { email, password }
      )
      .then((result) => {
        if (result.data === "Login successful") {
          alert("Login successful");
          navigate("/home");
        } else if (result.data === "Invalid password") {
          alert("Wrong password");
        } else if (result.data === "User not found") {
          alert("User not found, please sign up.");
          navigate("/signup");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="tagesschrift-regular flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
              <span className="px-3 text-gray-500">
                <FiMail />
              </span>
              <input
                type="email"
                id="email"
                className="p-3 w-full outline-none"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
              <span className="px-3 text-gray-500">
                <FiLock />
              </span>
              <input
                type="password"
                id="password"
                className="p-3 w-full outline-none"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

        <div className="flex flex-col items-center mt-10">
      {!isLoggedIn ? (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-16 h-16 rounded-full border"
          />
          <p className="text-lg font-semibold">Welcome back!</p>
        </div>
      )}
    </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-900 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
