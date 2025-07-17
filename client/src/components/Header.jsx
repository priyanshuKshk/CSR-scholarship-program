import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiInfo,
  FiLogIn,
  FiUserPlus,
  FiLogOut,
} from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/image.png";
import { ChevronDown } from "lucide-react";
import { MdWork } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { SiOpenapiinitiative } from "react-icons/si";
import { GrResources } from "react-icons/gr";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdownInitiatives, setShowDropdownInitiatives] = useState(false);
  const [showDropdownResources, setShowDropdownResources] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you really want to logout?");
    if (confirmLogout) logout();
  };

  const navItems = [{ name: "About Us", path: "/about", icon: <FiInfo className="mr-1" /> }];
  const initiatives = [
    { name: "Fincharcha-Financial Literacy", path: "/fincharcha", icon: <MdWork className="mr-2" /> },
    { name: "Saarthi-Career Counseling Program", path: "/saarthi", icon: <GiTeacher className="mr-2" /> },
    { name: "Aganwadi Transformation Programs", path: "/aaganwadi", icon: <BsFillPeopleFill className="mr-2" /> },
  ];
  const resources = [
    { name: "Testimonials", path: "/testimonials" },
    { name: "Annual Report", path: "/annual-report" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg px-4 lg:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Left - Logo and Title */}
        <div className="flex items-center space-x-4">
          <motion.button onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.95 }}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>

          <Link to="/">
            <img
              src={logo}
              alt="SMG-scholarships"
              className="w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] p-1"
            />
          </Link>

          <Link to="/">
            <span className="text-lg sm:text-2xl font-bold text-blue-900 hidden lg:inline-block">
              Scholarships
            </span>
          </Link>
        </div>

        {/* Middle - Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center text-gray-700 hover:text-blue-900 font-medium"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          <div className="relative">
            <div
              onClick={() => setShowDropdownInitiatives(!showDropdownInitiatives)}
              className="flex items-center text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
            >
              <SiOpenapiinitiative />
              <span className="ml-1">Initiatives</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            {showDropdownInitiatives && (
              <div className="absolute mt-2 bg-white shadow-md rounded-md w-64 z-50">
                {initiatives.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdownInitiatives(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <div
              onClick={() => setShowDropdownResources(!showDropdownResources)}
              className="flex items-center text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
            >
              <GrResources />
              <span className="ml-1">Resources</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            {showDropdownResources && (
              <div className="absolute mt-2 bg-white shadow-md rounded-md w-64 z-50">
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdownResources(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right - Auth */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              <FiLogOut className="mr-2" />
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-900 text-white"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                <FiLogIn className="mr-2" />
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-900 text-white"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                <FiUserPlus className="mr-2" />
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[70px] left-0 w-[80vw] h-screen bg-white shadow-md z-40 border-r p-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setShowDropdownResources(!showDropdownResources)}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium w-full"
                >
                  <GrResources />
                  <span className="ml-1">Resources</span>
                  <motion.span animate={{ rotate: showDropdownResources ? 180 : 0 }}>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {showDropdownResources && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 bg-white shadow rounded-md w-full"
                    >
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setShowDropdownResources(false);
                            setIsOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  onClick={() => setShowDropdownInitiatives(!showDropdownInitiatives)}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium w-full"
                >
                  <SiOpenapiinitiative />
                  <span className="ml-1">Initiatives</span>
                  <motion.span animate={{ rotate: showDropdownInitiatives ? 180 : 0 }}>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {showDropdownInitiatives && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 bg-white shadow rounded-md w-full"
                    >
                      {initiatives.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setShowDropdownInitiatives(false);
                            setIsOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
