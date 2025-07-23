import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20"
    >
      {/* Elegant blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-mono font-bold text-blue-200 mb-6"
        >
          Veteran-Owned. Mission-Driven.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg md:text-xl mb-6"
        >
          Founded by U.S. veterans, AeroScout Services combines field-tested discipline with cutting-edge drone technology. Our mission is to deliver fast, accurate, and secure aerial intelligence for any terrain, any target.
        </motion.p>
        
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          src="/veteran-badge.png"
          alt="Veteran Owned"
          className="mx-auto w-32 md:w-40 mt-8"
        />
      </div>
    </section>
  );
};

export default About;