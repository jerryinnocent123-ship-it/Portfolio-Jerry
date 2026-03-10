import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          À propos de moi
        </motion.h2>
        
        <div className="about-content" ref={ref}>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Je suis Jerry Innocent, un Technicien en informatique bureautique et web developper FrontEnd. 
              Avec une solide expérience dans le dépannage, je crée des expériences digitales 
              qui allient esthétique et fonctionnalité.
            </p>
            <p>
              Mon approche combine rigueur technique et créativité pour transformer des idées 
              en solutions concrètes. Je m'intéresse particulièrement aux technologies émergentes, 
              au design d'interface et à l'expérience utilisateur.
            </p>
            <p>
              Mon objectif professionnel est de contribuer à des projets innovants qui ont un 
              impact positif, tout en continuant à développer mes compétences dans le domaine 
              du développement full-stack et de la conception numérique.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-wrapper">
              <img 
                src="Jerry.png"
                alt="Jerry Innocent" 
                className="profile-photo"
              />
              <div className="image-overlay"></div>
              <div className="image-border"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;