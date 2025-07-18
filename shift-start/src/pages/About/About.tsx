import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutSEO } from '../../components/SEO/SEO';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <AboutSEO />
      <div className="page-wrapper">
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">{t('about.subtitle')}</p>
            <p>{t('about.description')}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;