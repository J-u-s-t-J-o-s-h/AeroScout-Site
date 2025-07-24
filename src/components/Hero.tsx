import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Animated Eagle Swoop Logo */}
        <img
          src="/eagle-swoop.png"
          alt="Eagle Swoop Logo"
          className="mx-auto mb-7 sm:mb-8 md:mb-6 lg:mb-8 xl:mb-10 w-38 sm:w-48 md:w-56 lg:w-64 xl:w-72 animate-eagleFlyIn"
        />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-stencil text-oldGold drop-shadow-lg mb-4 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-6">
          AeroScout Services
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-parchment drop-shadow-md px-4 sm:px-0">
          Aerial Intelligence. Precision. Trust.
        </p>
      </div>
    </div>
  );
};

export default Hero;