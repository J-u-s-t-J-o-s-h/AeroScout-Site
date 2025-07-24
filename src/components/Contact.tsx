import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 px-4 sm:px-6"
    >
      {/* Elegant blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20 z-0"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl md:text-5xl font-stencil text-oldGold mb-4 sm:mb-6"
        >
          Get in Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-base sm:text-lg text-parchment/90 mb-8 sm:mb-10"
        >
          Have a project, need a quote, or want to learn more? Drop us a message and we'll get back to you promptly.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:gap-6 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submission disabled for demo.");
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm mb-1 text-parchment">Name</label>
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-parchment/95 text-midnight rounded focus:outline-none focus:ring-2 focus:ring-oldGold backdrop-blur-sm text-sm sm:text-base"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm mb-1 text-parchment">Email</label>
            <input
              type="email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-parchment/95 text-midnight rounded focus:outline-none focus:ring-2 focus:ring-oldGold backdrop-blur-sm text-sm sm:text-base"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm mb-1 text-parchment">Message</label>
            <textarea
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-parchment/95 text-midnight rounded resize-none focus:outline-none focus:ring-2 focus:ring-oldGold backdrop-blur-sm text-sm sm:text-base"
              required
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.9,
              type: "spring",
              stiffness: 200
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 sm:mt-6 bg-oldGold text-midnight font-bold py-3 px-6 sm:px-8 rounded hover:bg-flagRed hover:text-white transition duration-300 shadow-lg text-sm sm:text-base"
          >
            Let's Talk
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;