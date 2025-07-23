import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'Aerial Reconnaissance',
    category: 'Surveillance',
    image: '/eagle-swoop.png', // Placeholder - replace with actual drone footage thumbnail
    description: 'High-altitude surveillance operations'
  },
  {
    id: 2,
    title: 'Thermal Imaging Scan',
    category: 'Thermal',
    image: '/eagle-swoop.png', // Placeholder - replace with actual thermal image
    description: 'Night vision thermal detection'
  },
  {
    id: 3,
    title: '3D Site Mapping',
    category: 'Mapping',
    image: '/eagle-swoop.png', // Placeholder - replace with actual mapping image
    description: 'Precision aerial photogrammetry'
  },
  {
    id: 4,
    title: 'Emergency Response',
    category: 'Response',
    image: '/eagle-swoop.png', // Placeholder - replace with actual emergency footage
    description: 'Rapid deployment operations'
  }
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative py-20"
    >
      {/* Elegant blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-stencil text-center mb-6 text-amber-300"
        >
          Mission Gallery
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg text-center mb-12 text-parchment/90 max-w-3xl mx-auto"
        >
          Witness the precision and capability of our aerial operations. From reconnaissance to emergency response, 
          every mission demonstrates our commitment to excellence and security.
        </motion.p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: idx * 0.1 + 0.4 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-black/40 backdrop-blur-sm">
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-parchment/80 text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.a
            href="/gallery-page"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-amber-600/80 hover:bg-amber-500/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg backdrop-blur-sm border border-amber-400/30"
          >
            <span>View Full Gallery</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          
          <p className="text-sm text-parchment/70 mt-4">
            Explore our complete portfolio of aerial operations and capabilities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery; 