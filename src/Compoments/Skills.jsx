import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
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
        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`}>
          {t('Mes Compétences')}
        </h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="skills-category-title">{t('Techniques')}</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`skill-item reveal-from-left ${inView ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
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
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="skills-category-title">{t('Outils & Technologies')}</h3>
            <div className="skills-tags">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className={`tool-tag reveal-scale ${inView ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.15 + index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;