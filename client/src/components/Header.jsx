import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // react-icons se icons
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // animation library
import logo from "../assets/image.png"; // adjust path if needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="tagesschrift-regular bg-white h-[70px] shadow-sm sticky top-0 z-50 text-lg px-4 lg:px-10">
    <div className=" mx-auto flex justify-between items-center p-4 px-6">
  <motion.button onClick={toggleMenu}>
    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
  </motion.button>
  
  <div className="flex items-center space-x-2">
    <Link to={"/"}>
      <img
        src={logo}
        alt="SMG-scholarships"
        className="w-10 h-10 rounded-full object-cover"
        style={{ maxWidth: '70px', maxHeight: '70px' }}
      />
    </Link>
    <Link to="/">
  <p className="text-2xl font-bold text-blue-900 sm:block hidden">
    scholarships
  </p>
</Link>

  </div>


        {/* Middle - Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/resources" className="text-gray-700 hover:text-blue-900 font-medium">
            Resources
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium">
            About Us
          </Link>
    
        </nav>

        {/* Right - Login and Sign Up (Always Visible) */}
        <div className="flex items-center space-x-6">
          <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Resources, About Us) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Resources
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              About Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
