import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/eagle-logo.png"; // <-- You'll add this in a sec

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-slate-800/90 backdrop-blur-sm border-b border-amber-600/60 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="AeroScout Logo" className="h-10 w-auto sm:h-12 md:h-14" />
            <h1 className="text-amber-400 text-lg sm:text-xl md:text-2xl font-stencil tracking-wide">
              AEROSCOUT
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 text-amber-100 font-medium">
            <a href="#hero" className="hover:text-amber-300 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-amber-300 transition-colors duration-200">About</a>
            <a href="#services" className="hover:text-amber-300 transition-colors duration-200">Services</a>
            <Link to="/gallery-page" className="hover:text-amber-300 transition-colors duration-200">Gallery</Link>
            <a href="#contact" className="hover:text-amber-300 transition-colors duration-200">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-amber-100 hover:text-amber-300 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pt-4 pb-2 border-t border-amber-600/30"
          >
            <div className="flex flex-col space-y-3 text-amber-100 font-medium">
              <a 
                href="#hero" 
                className="hover:text-amber-300 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="hover:text-amber-300 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="hover:text-amber-300 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <Link 
                to="/gallery-page" 
                className="hover:text-amber-300 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <a 
                href="#contact" 
                className="hover:text-amber-300 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;