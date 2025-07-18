import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiInstagram,
  FiArrowUp,
  FiSend
} from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/shiftstart', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/company/shiftstart', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/shiftstart', label: 'Twitter' },
    { icon: FiInstagram, href: 'https://instagram.com/shiftstart', label: 'Instagram' }
  ];

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'portfolio', path: '/portfolio' }
  ];

  const serviceLinks = [
    'web_development',
    'mobile_development',
    'ui_ux_design',
    'backend_development'
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-pattern"></div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-section">
                <div className="company-info">
                  <div className="logo">
                    <span className="gradient-text">{t('hero.title')}</span>
                  </div>
                  <p className="description">
                    {t('footer.description')}
                  </p>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <FiMapPin className="icon" />
                    <span>الرياض، المملكة العربية السعودية</span>
                  </div>
                  <div className="contact-item">
                    <FiPhone className="icon" />
                    <span>+966 50 123 4567</span>
                  </div>
                  <div className="contact-item">
                    <FiMail className="icon" />
                    <span>info@shiftstart.dev</span>
                  </div>
                </div>

                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-section">
                <h4>{t('footer.quick_links')}</h4>
                <div className="footer-links">
                  <ul>
                    {quickLinks.map(link => (
                      <li key={link.key}>
                        <Link to={link.path}>
                          {t(`navigation.${link.key}`)}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/team">{t('navigation.team')}</Link>
                    </li>
                    <li>
                      <Link to="/contact">{t('navigation.contact')}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-section">
                <h4>{t('footer.services_footer')}</h4>
                <div className="footer-links">
                  <ul>
                    {serviceLinks.map(service => (
                      <li key={service}>
                        <Link to="/services">
                          {t(`services.${service}.title`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="footer-section">
                <div className="newsletter">
                  <h4>النشرة الإخبارية</h4>
                  <p className="newsletter-description">
                    اشترك للحصول على آخر الأخبار والتحديثات
                  </p>
                  
                  <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                    <input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      required
                    />
                    <button type="submit">
                      <FiSend />
                    </button>
                  </form>
                  
                  <p className="newsletter-text">
                    نحن نحترم خصوصيتك ولن نرسل لك رسائل مزعجة
                  </p>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="copyright">
                {t('footer.copyright')}
              </div>
              
              <div className="footer-links-bottom">
                <Link to="/privacy">
                  سياسة الخصوصية
                </Link>
                <Link to="/terms">
                  شروط الاستخدام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button
        className="back-to-top fade-in"
        onClick={scrollToTop}
      >
        <FiArrowUp />
      </button>
    </>
  );
};

export default Footer;