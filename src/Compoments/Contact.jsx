import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import './Styles/Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
          {t('Me Contacter')}
        </motion.h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-subtitle">{t('Restons en contact')}</h3>
            <p>
              {t("N'hésitez pas à me contacter pour discuter de projets, collaborations ou opportunités.")}
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
                    <h4>{t(method.title)}</h4>
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
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


function ContactForm() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mgorrypg");
  if (state.succeeded) {
    return <p>{t('Thanks for Message!')}</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <label htmlFor="email" className='label-form'>
      {t('Email Address')}
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder={t('Enter your email')}
        className='input-form'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder={t('Enter your message')}
        className='textarea-form'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='submit-button'>
        {t('Submit')}
      </button>
    </form>
  );
}

export default Contact;