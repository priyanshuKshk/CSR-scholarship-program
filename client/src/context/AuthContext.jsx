// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  const login = (image) => {
    setIsLoggedIn(true);
    setProfileImage(image);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setProfileImage('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, profileImage, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
