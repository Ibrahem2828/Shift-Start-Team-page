import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO/SEO';

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t('portfolio.title')} - شيفت ستارت`}
        description="اطلع على مجموعة مختارة من أعمالنا المميزة في تطوير المواقع والتطبيقات"
        url="/portfolio"
      />
      <div className="page-wrapper">
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t('portfolio.title')}</h2>
            <p className="section-subtitle">{t('portfolio.subtitle')}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;