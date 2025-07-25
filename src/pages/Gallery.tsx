import React, { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'Aerial Reconnaissance',
    category: 'surveillance',
    image: '/eagle-swoop.png',
    description: 'High-altitude surveillance operations with precision targeting capabilities.'
  },
  {
    id: 2,
    title: 'Night Patrol',
    category: 'surveillance',
    image: '/eagle-swoop.png',
    description: '24/7 monitoring capabilities for secure perimeter surveillance.'
  },
  {
    id: 3,
    title: 'Thermal Detection',
    category: 'thermal',
    image: '/eagle-swoop.png',
    description: 'Advanced thermal imaging for heat signature identification.'
  },
  {
    id: 4,
    title: 'Infrared Scan',
    category: 'thermal',
    image: '/eagle-swoop.png',
    description: 'Precision infrared scanning for concealed threat detection.'
  },
  {
    id: 5,
    title: '3D Site Mapping',
    category: 'mapping',
    image: '/eagle-swoop.png',
    description: 'High-precision aerial photogrammetry for detailed terrain mapping.'
  },
  {
    id: 6,
    title: 'Topographic Survey',
    category: 'mapping',
    image: '/eagle-swoop.png',
    description: 'Comprehensive topographic analysis for strategic planning.'
  },
  {
    id: 7,
    title: 'Emergency Response',
    category: 'emergency',
    image: '/eagle-swoop.png',
    description: 'Rapid deployment for critical emergency situations.'
  },
  {
    id: 8,
    title: 'Search & Rescue',
    category: 'emergency',
    image: '/eagle-swoop.png',
    description: 'Advanced search and rescue operations in challenging terrain.'
  },
  {
    id: 9,
    title: 'Perimeter Security',
    category: 'surveillance',
    image: '/eagle-swoop.png',
    description: 'Comprehensive perimeter monitoring and threat assessment.'
  },
  {
    id: 10,
    title: 'Heat Signature Analysis',
    category: 'thermal',
    image: '/eagle-swoop.png',
    description: 'Advanced thermal analysis for precise threat identification.'
  },
  {
    id: 11,
    title: 'Volume Calculations',
    category: 'mapping',
    image: '/eagle-swoop.png',
    description: 'Precise volume and area calculations for project planning.'
  },
  {
    id: 12,
    title: 'Disaster Assessment',
    category: 'emergency',
    image: '/eagle-swoop.png',
    description: 'Rapid disaster assessment and damage evaluation.'
  }
];

const categories = [
  { id: 'all', name: 'All Missions' },
  { id: 'surveillance', name: 'Surveillance' },
  { id: 'thermal', name: 'Thermal Imaging' },
  { id: 'mapping', name: 'Mapping & Survey' },
  { id: 'emergency', name: 'Emergency Response' }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div
      style={{
        backgroundImage: "url('/flag-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "scroll", // Changed from "fixed" to "scroll" for mobile compatibility
      }}
      className="min-h-screen font-sans text-parchment mobile-bg-fix"
    >
      {/* Background Overlay */}
      <div className="fixed inset-0 backdrop-blur-sm bg-black/20 z-0"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-slate-800/90 backdrop-blur-sm border-b border-amber-600/60 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/eagle-swoop.png" alt="AeroScout Logo" className="h-10 w-auto" />
            <h1 className="text-amber-400 text-xl font-stencil tracking-wide">AEROSCOUT</h1>
          </a>
          <a href="/" className="text-amber-100 hover:text-amber-300 transition-colors duration-200">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-stencil text-amber-300 mb-6"
          >
            Mission Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-parchment/90 max-w-3xl mx-auto"
          >
            Explore our comprehensive portfolio of aerial operations, surveillance missions, and technical capabilities. 
            Each image represents our commitment to precision, security, and excellence.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12 px-6"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg border border-amber-600/60 transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-amber-600/80 text-white'
                  : 'bg-slate-800/80 text-amber-100 hover:bg-amber-600/80 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: idx * 0.1 
                }}
                whileHover={{ 
                  scale: 1.02, 
                  transition: { duration: 0.2 } 
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-black/40 backdrop-blur-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-parchment/80 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 bg-slate-800/95 text-amber-100 border-t-2 border-amber-600/60 py-8 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/eagle-swoop.png" alt="AeroScout Logo" className="w-12 h-auto" />
            <span className="font-stencil text-lg text-amber-400 tracking-widest">AEROSCOUT</span>
          </div>
          <div className="text-xs text-amber-300/70 text-center md:text-right">
            © {new Date().getFullYear()} AeroScout Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery; 