import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://csr-scholarship-program-1.onrender.com/login" || "http://localhost:3001/login",
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-blue-900 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all"
          >
            Login
          </motion.button>
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
