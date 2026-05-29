import React from 'react';
import { useTranslation } from 'react-i18next';
import './Styles/Hero.css';

const Hero = () => {
  const { t } = useTranslation();


  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title hero-slide-in-left">
            {t('Bienvenue sur mon Portfolio')}
          </h2>
          
          <p className="hero-subtitle hero-slide-in-right">
            {t('Découvrez mes projets et mon univers créatif')}
          </p>
          
          <div className="hero-buttons hero-fade-in">
            <a href="#projects" className="btn-primary">
              {t('Voir mes Projets')}
            </a>
            <a href="#contact" className="btn-secondary">
              {t('Me Contacter')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;