import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Eagle Swoop Logo */}
        <img
          src="/eagle-swoop.png"
          alt="Eagle Swoop Logo"
          className="mx-auto mb-6 w-40 animate-eagleFlyIn sm:w-48 md:w-56 lg:w-64"
        />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-stencil text-oldGold drop-shadow-lg">
          AeroScout Services
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-parchment drop-shadow-md">
          Aerial Intelligence. Precision. Trust.
        </p>
      </div>
    </div>
  );
};

export default Hero;