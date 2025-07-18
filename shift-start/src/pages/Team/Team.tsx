import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO/SEO';

const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t('team.title')} - شيفت ستارت`}
        description="تعرف على فريق شيفت ستارت من المطورين والمصممين المحترفين"
        url="/team"
      />
      <div className="page-wrapper">
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t('team.title')}</h2>
            <p className="section-subtitle">{t('team.subtitle')}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;