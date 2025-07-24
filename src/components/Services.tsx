import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Recon & Surveillance',
    icon: '🔍',
    description: 'Real-time intel for property, tactical, or remote site operations. Night or day.',
  },
  {
    title: 'Thermal Imaging',
    icon: '🌡️',
    description: 'Precision thermal scans to detect heat signatures, leaks, wildlife, or threats.',
  },
  {
    title: 'Mapping & Survey',
    icon: '🗺️',
    description: 'Generate accurate maps, topography, and 3D site models using aerial photogrammetry.',
  },
  {
    title: 'Emergency Response',
    icon: '🛡️',
    description: 'Deploy drones for rapid situational awareness during fire, flood, or law enforcement scenarios.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-white">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl md:text-5xl font-mono text-center mb-8 sm:mb-10 text-gray-200"
        >
          Mission Capabilities
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: idx * 0.1 + 0.3 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              className="bg-black bg-opacity-30 p-4 sm:p-6 rounded-lg shadow-md cursor-pointer"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1 + 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl mb-3"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;