import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiCode, FiZap, FiStar } from 'react-icons/fi';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-background-pattern"></div>
      <div className="hero-floating-icons">
        <div className="floating-icon float" style={{ top: '20%', left: '10%' }}>
          <FiCode />
        </div>
        <div className="floating-icon float" style={{ top: '60%', left: '80%', animationDelay: '1s' }}>
          <FiZap />
        </div>
        <div className="floating-icon float" style={{ top: '80%', left: '20%', animationDelay: '2s' }}>
          <FiStar />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <h2 className="hero-subtitle fade-in">{t('hero.subtitle')}</h2>
              <h1 className="hero-title slide-in-left">
                <span className="gradient-text">{t('hero.title')}</span>
              </h1>
              <p className="hero-description slide-in-right">{t('hero.description')}</p>
              
              <div className="hero-actions scale-in">
                <Link to="/contact" className="btn btn-primary btn-large">
                  {t('hero.cta')}
                  <FiArrowRight />
                </Link>
                
                <button className="play-button">
                  <div className="play-icon">
                    <FiPlay />
                  </div>
                  {t('hero.learn_more')}
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="code-card slide-in-up">
                <div className="code-header">
                  <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <span className="file-name">ShiftStart.tsx</span>
                </div>

                <div className="code-lines">
                  <div className="code-line" style={{ animationDelay: '0s' }}></div>
                  <div className="code-line" style={{ animationDelay: '0.5s' }}></div>
                  <div className="code-line" style={{ animationDelay: '1s' }}></div>
                  <div className="code-line" style={{ animationDelay: '1.5s' }}></div>
                  <div className="code-line" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="stat-number">50+</div>
              <div className="stat-label">مشروع مكتمل</div>
            </div>

            <div className="stat-card fade-in" style={{ animationDelay: '1s' }}>
              <div className="stat-number">100%</div>
              <div className="stat-label">رضا العملاء</div>
            </div>

            <div className="stat-card fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="stat-number">24/7</div>
              <div className="stat-label">دعم فني</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;