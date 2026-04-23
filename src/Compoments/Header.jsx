import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './common/LanguageSwitcher';
import './Styles/Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Appliquer le thème au body et à l'élément html
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Defini fonksyon yo anvan w ap itilize yo
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { href: '#about', label: t('À propos') },
    { href: '#projects', label: t('Projets') },
    { href: '#skills', label: t('Compétences') },
    { href: '#contact', label: t('Contact') },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-text">
          <h1 className="site-title">{t('Jerry INNOCENT')}</h1>
          <p className="tagline">{t('Développeur web front-end')}</p>
        </div>

        <nav className="nav">
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <button 
            className={`theme-toggle ${isDarkMode ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label="Mode sombre/clair"
          >
            <FaSun className="fa-sun" />
            <FaMoon className="fa-moon" />
          </button>

          <button 
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Menu navigation"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;