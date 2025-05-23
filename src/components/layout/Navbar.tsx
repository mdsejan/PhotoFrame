import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/reunion-logo.webp";
import { motion, useAnimation } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    controls.start(
      isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
    );
  }, [isOpen, controls]);

  const navLinks = (
    <>
      <Link
        to="/"
        className={`block ${
          location.pathname === "/"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`block ${
          location.pathname === "/about"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
        onClick={closeMenu}
      >
        About
      </Link>

      <motion.a
        href="https://reunion.dghsaa.org/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={closeMenu}
        className="block text-lg lg:text-sm  text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-lg px-2 py-[2px] text-center shadow hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-600 hover:to-indigo-500 transition-all duration-300 w-full sm:w-auto"
      >
        Main Site
      </motion.a>

      {/* <Link
        to="/contact"
        className={`block ${
          location.pathname === "/contact"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
        onClick={closeMenu}
      >
        Contact
      </Link> */}
    </>
  );

  return (
    <nav className="bg-white border-b z-20 sticky top-0">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="relative w-full flex items-center">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <a
                href="/"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <img src={logo} className="h-8" alt="Logo" />
                <h1 className="text-xl font-bold text-gray-800">
                  DGHS Reunion
                </h1>
              </a>
            </div>

            {/* Centered links */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
              {navLinks}
            </div>
          </div>

          <div className="flex items-center">
            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={`fixed top-16 left-0 w-full bg-white border-t shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <div className="text-2xl px-2 pt-2 pb-3 space-y-4  sm:px-3">
            {navLinks}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
