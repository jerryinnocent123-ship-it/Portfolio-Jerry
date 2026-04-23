import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import '../Styles/LangSwitcher.css'; 

// Ou ka ajoute logo pou chak lang
const languageFlags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  ht: '🇭🇹'
};

const languageNames = {
  fr: 'Français',
  en: 'English',
  ht: 'Kreyòl'
};

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Sere preferans nan localStorage
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className="lang-switcher">
      <button className="lang-button">
        <FaGlobe className="globe-icon" />
        <span className="current-lang">{languageNames[currentLang] || currentLang}</span>
      </button>
      <div className="lang-dropdown">
        {Object.keys(languageFlags).map((lng) => (
          <button
            key={lng}
            className={`lang-option ${currentLang === lng ? 'active' : ''}`}
            onClick={() => changeLanguage(lng)}
          >
            <span className="lang-flag">{languageFlags[lng]}</span>
            <span className="lang-name">{languageNames[lng]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;