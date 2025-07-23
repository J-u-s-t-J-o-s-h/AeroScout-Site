import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/eagle-logo.png"; // <-- You'll add this in a sec

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-slate-800/90 backdrop-blur-sm border-b border-amber-600/60 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="AeroScout Logo" className="h-10 w-auto" />
          <h1 className="text-amber-400 text-xl font-stencil tracking-wide">
            AEROSCOUT
          </h1>
        </div>

        {/* Nav Links */}
        <div className="space-x-6 text-amber-100 font-medium">
          <a href="#hero" className="hover:text-amber-300 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-amber-300 transition-colors duration-200">About</a>
          <a href="#services" className="hover:text-amber-300 transition-colors duration-200">Services</a>
          <Link to="/gallery-page" className="hover:text-amber-300 transition-colors duration-200">Gallery</Link>
          <a href="#contact" className="hover:text-amber-300 transition-colors duration-200">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;