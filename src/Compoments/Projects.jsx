import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Styles/Projects.css';
import { link } from 'framer-motion/client';

const Projects = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const completedProjects = [
    {
      title: t('Conception site pour un café local'),
      description: t('Marketplace spécialisée dans la vente de café.'),
      technologies: ['Figma'],
      status: t('completed'),
      link:"https://www.figma.com/design/1g5NNtFNs6ls2RnGWbnePJ/Projets-Figma?node-id=0-1&t=bWRY6PjtADulqgr3-1"
    },
    {
      title: t('Conception site pour un artiste peintre'),
      description: t('Réalisation d\'un site pour un artiste peintre, avec interface interactive (prototype), responsive.'),
      technologies: ['Figma'],
      status: t('completed'),
      link:"https://www.figma.com/design/1g5NNtFNs6ls2RnGWbnePJ/Projets-Figma?node-id=65-57&t=bWRY6PjtADulqgr3-1"
    },
    {
      title: t('Conception site Streaming'),
      description: t('Réalisation d\'un site pour regarder des films et séries, avec interface interactive (prototype), responsive.'),
      technologies: ['React'],
      status: t('completed'),
      link:"https://www.figma.com/design/wTO1xXE1SLnCso9XGVSIDG/Pratique?node-id=0-1&t=bWRY6PjtADulqgr3-1"
    },
    {
      title: t('Creation Portfolio'),
      description: t('Réalisation d\'un Portfolio , avec interface interactive (prototype), responsive.'),
      technologies: ['React'],
      status: t('completed'),
      link:"none"
    },
    {
      title: t('Creation TodoApp'),
      description: t('Réalisation d\'un TodoApp , avec interface interactive , responsive.'),
      technologies: ['React','tailwind','UUID','lucide React'],
      status: t('completed'),
      link:"https://github.com/jerryinnocent123-ship-it/TodoApp-simple.git"
    },
  ];

  const inProgressProjects = [
    {
      title: t('Création d\'un site E-commerce'),
      description: t('Plateforme de vente qui permet aux clients de trouver les meilleurs produits selon leur localisation.'),
      technologies: ['Figma', 'VS Code', 'tailwind', 'JavaScript', 'React'],
      status: t('in-progress'),
      link:"none"
    },
    {
      title: t('Création d\'un portfolio'),
      description: t('Réalisation d\'un portfolio responsive et disponible en ligne.'),
      technologies: ['React', 'VS Code', 'GitHub', 'AI Integration','tailwind','lucide React'],
      status: t('in-progress'),
      link:"https://github.com/jerryinnocent123-ship-it/Portfolio-Jerry.git"
    },
    {
      title: t('Création d\'un Market Restaurant'),
      description: t('Réalisation d\'un Market responsive et disponible en ligne Pour commander a manger en Haiti.'),
      technologies: ['Lucide React', 'VS Code', 'GitHub', 'AI Integration','React','tailwind'],
      status: t('in-progress'),
      link:"https://github.com/jerryinnocent123-ship-it/Project-FoodConnect.git"
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.article 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="project-header">
        <h4 className="project-title">{project.title}</h4>
        <span className={`project-status ${project.status}`}>
          {project.status === t('completed') ? t('Terminé') : t('En développement')}
        </span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      {project.link !== "none" && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          {t('Voir le projet')}
        </a>
      )}
      </div>

    </motion.article>
  );

  return (
    <section id="projects" className="section projects-section bg-light">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('Mes Projets')}
        </motion.h2>
        
        <div className="projects-category">
          <h3 className="category-title">{t('Projets Achevés')}</h3>
          <div className="projects-grid">
            {completedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        
        <div className="projects-category">
          <h3 className="category-title">{t('Projets en Cours')}</h3>
          <div className="projects-grid">
            {inProgressProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index + completedProjects.length} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;