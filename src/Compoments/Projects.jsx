import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Styles/Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const completedProjects = [
    {
      title: 'Conception site web coffee beans',
      description: 'Marketplace spécialisée dans la vente de café.',
      technologies: ['Figma'],
      status: 'completed'
    },
    {
      title: 'Conception site pour un artiste peintre',
      description: 'Réalisation d\'un site pour un artiste peintre, avec interface interactive (prototype), responsive.',
      technologies: ['Figma'],
      status: 'completed'
    },
    {
      title: 'Conception site Streaming',
      description: 'Réalisation d\'un site pour regarder des films et séries, avec interface interactive (prototype), responsive.',
      technologies: ['React'],
      status: 'completed'
    },
    {
      title: 'Creation Portfolio',
      description: 'Réalisation d\'un Portfolio , avec interface interactive (prototype), responsive.',
      technologies: ['React'],
      status: 'completed'
    }
  ];

  const inProgressProjects = [
    {
      title: 'Création d\'un site E-commerce',
      description: 'Plateforme de vente qui permet aux clients de trouver les meilleurs produits selon leur localisation.',
      technologies: ['Figma', 'VS Code', 'Bootstrap', 'JavaScript', 'React'],
      status: 'in-progress'
    },
    {
      title: 'Création d\'un portfolio',
      description: 'Réalisation d\'un portfolio responsive et disponible en ligne.',
      technologies: ['Figma', 'VS Code', 'GitHub', 'AI Integration'],
      status: 'in-progress'
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
          {project.status === 'completed' ? 'Terminé' : 'En développement'}
        </span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
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
          Mes Projets
        </motion.h2>
        
        <div className="projects-category">
          <h3 className="category-title">Projets Achevés</h3>
          <div className="projects-grid">
            {completedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        
        <div className="projects-category">
          <h3 className="category-title">Projets en Cours</h3>
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