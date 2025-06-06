import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
const { login } = useAuth();
  const handleSignUp = (e) => {
    e.preventDefault();
  

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;}


    axios
      .post(
          "https://csr-scholarship-program-1.onrender.com/signup",
        //  "http://localhost:3001/signup",
        { firstName, lastName, phone ,email, password }
      )
      .then(() => {
         login({
        firstName,
        lastName,
        phone,
        email,
      });
        navigate('/home');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">
              First Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
              <span className="px-3 text-gray-500">
                <FiUser />
              </span>
              <input
                type="text"
                id="firstName"
                className="p-3 w-full outline-none"
                value={firstName}
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">
              Last Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
              <span className="px-3 text-gray-500">
                <FiUser />
              </span>
              <input
                type="text"
                id="lastName"
                className="p-3 w-full outline-none"
                value={lastName}
                placeholder="Enter your last name" 
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
              <span className="px-3 text-gray-500">
              <FaPhoneAlt />
              </span>
              <input
                type="tel"
                id="phone"
                className="p-3 w-full outline-none"
                value={phone}
                placeholder="Enter your phone number" 
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            </div>

          {/* Email */}
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

          {/* Password */}
          <div className="mb-4">
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

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
              <span className="px-3 text-gray-500">
                <FiLock />
              </span>
              <input
                type="password"
                id="confirmPassword"
                className="p-3 w-full outline-none"
                value={confirmPassword}
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-blue-900 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all"
          >
            Sign Up
          </motion.button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-900 hover:underline">
              Login
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
