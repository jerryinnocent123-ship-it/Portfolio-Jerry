import React from 'react';
import { motion } from 'framer-motion';
import './Styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bienvenue sur mon Portfolio
          </motion.h2>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez mes projets et mon univers créatif
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#projects" className="btn-primary">
              Voir mes Projets
            </a>
            <a href="#contact" className="btn-secondary">
              Me Contacter
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;