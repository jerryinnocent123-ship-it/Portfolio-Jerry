import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Styles/Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitting: false,
        message: 'Veuillez remplir tous les champs.',
        type: 'error'
      });
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitting: false,
        message: 'Veuillez entrer une adresse email valide.',
        type: 'error'
      });
      return;
    }

    setFormStatus({ submitting: true, message: '', type: '' });

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
        type: 'success'
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Cacher le message après 5 secondes
      setTimeout(() => {
        setFormStatus({ submitting: false, message: '', type: '' });
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    { icon: FaEnvelope, title: 'Email', value: 'jerryinnocent123@gmail.com', link: 'mailto:jerryinnocent123@gmail.com' },
    { icon: FaLinkedin, title: 'LinkedIn', value: 'linkedin.com/in/jerry-innocent', link: 'https://ht.linkedin.com/in/jerry-innocent-5019b2355' },
    { icon: FaGithub, title: 'GitHub', value: 'github.com/jerryinnocent', link: '#' },
    { icon: FaTwitter, title: 'Twitter', value: '@jerryinnocent', link: '#' }
  ];

  return (
    <section id="contact" className="section contact-section bg-light">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Me Contacter
        </motion.h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-subtitle">Restons en contact</h3>
            <p>
              N'hésitez pas à me contacter pour discuter de projets, 
              collaborations ou opportunités.
            </p>
            
            <div className="contact-details">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  className="contact-method"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <method.icon />
                  <div>
                    <h4>{method.title}</h4>
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeSgDvERZgLxcxU-Nd6iksjU1aWyF8D7Gn9dX9nEuYRJSVvLA/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Formulaire de contact"
              className="contact-iframe"
            >
              Chargement…
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;