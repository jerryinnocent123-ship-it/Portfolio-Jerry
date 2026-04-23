import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Styles/Skills.css';

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillBarsRef = useRef([]);

  useEffect(() => {
    if (inView) {
      skillBarsRef.current.forEach(bar => {
        if (bar) {
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
        }
      });
    }
  }, [inView]);

  const technicalSkills = [
    { name: t('Développement Frontend'), level: 90 },
    { name: t('Bureautique'), level: 80 },
    { name: t('Conception UI/UX'), level: 85 },
    { name: t('Bases de données'), level: 50 }
  ];

  const tools = [
    'HTML5 / CSS3', 'JavaScript ES6+', 'React / Vue.js',
    'Word / Excel', 'PowerPoint / Access', 'Gmail / Outlook',
    'Figma / Adobe XD', 'Installation Windows', 'Git / GitHub',
    'Supabase', 'tailwindcss', 'Bootstrap'
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('Mes Compétences')}
        </motion.h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="skills-category-title">{t('Techniques')}</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div 
                      ref={el => skillBarsRef.current[index] = el}
                      className="skill-bar" 
                      data-width={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="skills-category-title">{t('Outils & Technologies')}</h3>
            <div className="skills-tags">
              {tools.map((tool, index) => (
                <motion.span 
                  key={index}
                  className="tool-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'var(--primary-color)',
                    color: 'white'
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;