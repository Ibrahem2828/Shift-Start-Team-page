import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactSEO } from '../../components/SEO/SEO';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContactSEO />
      <div className="page-wrapper">
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t('contact.title')}</h2>
            <p className="section-subtitle">{t('contact.subtitle')}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;