import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiBookOpen, FiInfo, FiUser, FiLogIn, FiUserPlus } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/image.png";
import { ChevronDown } from "lucide-react";
import "../index.css";
import { MdWork } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdownInitiatives, setShowDropdownInitiatives] = useState(false);
  const [showDropdownResources, setShowDropdownResources] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdownInitiatives = () => setShowDropdownInitiatives(!showDropdownInitiatives);
  const toggleDropdownResources = () => setShowDropdownResources(!showDropdownResources);


  const navItems = [

    { name: "About Us", path: "/about", icon: <FiInfo className="mr-1" /> },
  ];
  

  const initiatives = [
    { name: "Fincharcha-Financial Literacy", path: "/fincharcha", icon: <MdWork className="mr-2" /> },
    { name: "Saarthi-Career Counseling Program", path: "/saarthi", icon: <GiTeacher className="mr-2" /> },
    { name: "Aganwadi Transformation Programs", path: "/aaganwadi", icon: <BsFillPeopleFill className="mr-2" /> },
  ];
  const resources = [
    { name: "Testimonials", path: "/testimonials",  },
    { name: "Annual Report", path: "/annual-report",  },
  ];
  

  return (
    <header className="bg-white h-[70px] sticky top-0 z-50 text-lg px-4 lg:px-10 text-gray-800    shadow-lg p-8 mb-16 ">
      <div className="flex justify-between items-left p-4 px-6 space-x-6">
        <div
          className="mx-auto flex items-start space-x-6"
          style={{ marginLeft: "0" }}
        >
          <motion.button onClick={toggleMenu} whileTap={{ scale: 0.95 }}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>

          <Link to={"/"}>
            <img
              src={logo}
              alt="SMG-scholarships"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
              style={{
                maxWidth: "60px",
                maxHeight: "60px",
                borderRadius: "50%",
                border: "2px solid #1e3a8a",
                padding: "4px",
              }}
            />
          </Link>

          <Link to="/">
            <div className="text-2xl font-bold text-blue-900" id="myElement">Scholarships</div>
          </Link>
        </div>

        {/* Middle - Desktop Menu */}
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


          <div className="relative cursor-pointer">
            <div
              onClick={toggleDropdownInitiatives}
              className="flex items-center text-gray-700 hover:text-blue-900 font-medium"
              style={{ position: "relative" }}
            >
              Initiatives
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            {showDropdownInitiatives && (
              <div className=" bg-white shadow-md rounded-md mt-2 w-64 z-50" style={{ position: "absolute" }}>
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
          <div className="relative cursor-pointer">
            <div
              onClick={toggleDropdownResources}
              className="flex items-center text-gray-700 hover:text-blue-900 font-medium"
              style={{ position: "relative" }}
            >
              Resources
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            {showDropdownResources && (
              <div className=" bg-white shadow-md rounded-md mt-2 w-64 z-50" style={{ position: "absolute" }}>
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

        {/* Right - Login and Sign Up */}
        <div className="flex items-center space-x-6" style={{ marginLeft: "4px" }}>
  {isLoggedIn ? (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
    >
      <FiLogOut />
      <span>Logout</span>
    </button>
  ) : (
    <>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          `flex items-center space-x-1 ${isActive
            ? "bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-normal"
            : "text-gray-700 hover:text-blue-600 font-normal"}`
        }
      >
        <FiLogIn />
        <span className="ml-1" style={{paddingLeft:"5px"}}> Login</span>
      </NavLink>

      <NavLink
        to="/signup"
        className={({ isActive }) =>
          `flex items-center space-x-1 ${isActive
            ? "bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-normal"
            : "text-gray-700 hover:text-blue-600 font-normal"}`
        }
      >
        <FiUserPlus />
        <span className="ml-1" style={{paddingLeft:"5px"}}> Sign Up</span>
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
            className="md:hidden bg-white shadow-md absolute top-[70px] left-0 w-[30vw] h-screen z-40 border-r"
          >
            <nav className="flex flex-col items-start space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}

              <div className=" relative " >
                <button
                  onClick={toggleDropdownResources}
                  className=" flex items-center text-gray-700 hover:text-blue-600 font-medium" 
                >
                  Resources
                  <motion.span animate={{ rotate: showDropdownResources ? 180 : 0 }}>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {showDropdownResources && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md w-64 z-50 overflow-hidden" 
                    >
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex px-4 py-2 text-gray-700 hover:bg-gray-100" 
                          onClick={() => {
                            toggleDropdownResources();
                            toggleMenu();
                          }}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className=" relative " >
                <button
                  onClick={toggleDropdownInitiatives}
                  className=" flex items-center text-gray-700 hover:text-blue-600 font-medium" 
                >
                  Initiatives
                  <motion.span animate={{ rotate: showDropdownInitiatives ? 180 : 0 }}>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {showDropdownInitiatives && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md w-64 z-50 overflow-hidden" 
                    >
                      {initiatives.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex px-4 py-2 text-gray-700 hover:bg-gray-100" 
                          onClick={() => {
                            toggleDropdownInitiatives();
                            toggleMenu();
                          }}
                        >
                          {item.icon}
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
