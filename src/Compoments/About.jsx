import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import './Styles/About.css';

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`}>
          {t('À propos de moi')}
        </h2>

        <div className="about-content" ref={ref}>
          <div
            className={`about-text reveal-from-left ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <p>
              <p> <strong>{t('Qui suis-je ?')}</strong><br />
              <strong>{t('Jerry INNOCENT, Passionné par le développement web')}</strong><br /></p>
              <p>{t('Avec quelques années d\'expérience à mon actif, j\'ai appris que la performance et l\'esthétique ne s\'opposent pas. Au contraire, elles vont de pair. Je passe des heures à peaufiner chaque détail, à chasser les lenteurs, à rendre chaque interaction fluide et naturelle. Mon credo ? Un code propre, maintenable, mais surtout une expérience utilisateur qui en jette, sans jamais prendre l\'utilisateur pour un idiot.')}</p>
              <p>{t('Ce que je vous propose, ce n\'est pas juste un site qui marche. C\'est un outil pensé pour vous, rapide, agréable à utiliser, et taillé sur mesure pour vos besoins. Parce qu\'au fond, un bon développeur, ce n\'est pas celui qui enchaîne les lignes de code le plus vite possible, mais celui qui sait répondre à une vraie problématique humaine avec une solution technique élégante.')}</p>
              </p>
              </div>

          <div
            className={`about-image reveal-from-right ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;