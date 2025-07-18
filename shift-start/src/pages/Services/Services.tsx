import React from 'react';
import { useTranslation } from 'react-i18next';
import { ServicesSEO } from '../../components/SEO/SEO';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ServicesSEO />
      <div className="page-wrapper">
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('services.subtitle')}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;