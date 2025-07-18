import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiGlobe, FiMoon, FiSun } from 'react-icons/fi';
import './Header.css';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsLanguageDropdownOpen(false);
    window.location.reload();
  };

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'portfolio', path: '/portfolio' },
    { key: 'team', path: '/team' },
    { key: 'contact', path: '/contact' }
  ];

  const currentLanguage = i18n.language;

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-content">
            <Link to="/" className="logo">
              {t('hero.title')}
            </Link>

            <div className="nav-links">
              {navItems.map(item => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
            </div>

            <div className="nav-actions">
              <button className="theme-toggle" onClick={toggleTheme}>
                {isDark ? <FiSun /> : <FiMoon />}
              </button>

              <div className="language-switcher">
                <button
                  className="language-button"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                >
                  <FiGlobe />
                  {currentLanguage === 'ar' ? 'العربية' : 'English'}
                </button>

                {isLanguageDropdownOpen && (
                  <div className="language-dropdown">
                    <button 
                      className="language-option"
                      onClick={() => changeLanguage('ar')}
                    >
                      العربية
                    </button>
                    <button 
                      className="language-option"
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>

              <Link to="/contact" className="btn btn-primary btn-small">
                {t('contact.get_in_touch')}
              </Link>

              <button 
                className="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button 
            className="close-button"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiX />
          </button>

          {navItems.map(item => (
            <Link
              key={item.key}
              to={item.path}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(`navigation.${item.key}`)}
            </Link>
          ))}

          <div className="mobile-actions">
            <Link 
              to="/contact" 
              className="btn btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('contact.get_in_touch')}
            </Link>

            <div className="mobile-controls">
              <button className="theme-toggle" onClick={toggleTheme}>
                {isDark ? <FiSun /> : <FiMoon />}
              </button>
              <button
                className="language-button"
                onClick={() => changeLanguage(currentLanguage === 'ar' ? 'en' : 'ar')}
              >
                <FiGlobe />
                {currentLanguage === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;