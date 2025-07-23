import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-slate-800/95 text-amber-100 border-t-2 border-amber-600/60 py-8 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/eagle-swoop.png"
            alt="AeroScout Logo"
            className="w-12 h-auto"
          />
          <span className="font-stencil text-lg text-amber-400 tracking-widest">
            AEROSCOUT
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm text-amber-200">
          <a href="#hero" className="hover:text-amber-300 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-amber-300 transition-colors duration-200">About</a>
          <a href="#services" className="hover:text-amber-300 transition-colors duration-200">Services</a>
          <Link to="/gallery-page" className="hover:text-amber-300 transition-colors duration-200">Gallery</Link>
          <a href="#contact" className="hover:text-amber-300 transition-colors duration-200">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-amber-300/70 text-center md:text-right">
          © {new Date().getFullYear()} AeroScout Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;