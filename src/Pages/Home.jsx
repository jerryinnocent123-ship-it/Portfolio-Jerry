import React, { useEffect } from 'react';
import Header from '../Compoments/Header';
import Hero from '../Compoments/Hero';
import About from '../Compoments/About';
import Projects from '../Compoments/Projects';
import Skills from '../Compoments/Skills';
import Contact from '../Compoments/Contact';
import Footer from '../Compoments/Footer';

const Home = () => {
  useEffect(() => {
    // Mettre à jour l'année dans le footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;