import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
  type = 'website',
  noindex = false,
  structuredData
}) => {
  const { t, i18n } = useTranslation();
  
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://shiftstart.dev';
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  const seoTitle = title || String(t('seo.home.title'));
  const seoDescription = description || String(t('seo.home.description'));
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;
  const seoImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const defaultKeywords = isRTL 
    ? 'تطوير المواقع, تطوير التطبيقات, شيفت ستارت, تصميم واجهات, تطوير البرامج, فريق التطوير, السعودية, الرياض'
    : 'web development, mobile apps, Shift Start, UI/UX design, software development, development team, Saudi Arabia, Riyadh';

  const seoKeywords = keywords || defaultKeywords;

  // Default structured data for the company
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shift Start",
    "description": seoDescription,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966501234567",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressLocality": "Riyadh"
    },
    "sameAs": [
      "https://github.com/shiftstart",
      "https://linkedin.com/company/shiftstart",
      "https://twitter.com/shiftstart",
      "https://instagram.com/shiftstart"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLanguage} dir={isRTL ? 'rtl' : 'ltr'} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Shift Start" />
      <meta property="og:locale" content={isRTL ? 'ar_SA' : 'en_US'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
      <meta property="twitter:site" content="@shiftstart" />
      <meta property="twitter:creator" content="@shiftstart" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Shift Start" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}/ar${url || ''}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${url || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${url || ''}`} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

// Pre-defined SEO configurations for different pages
export const HomeSEO: React.FC<Partial<SEOProps>> = (props) => (
  <SEO
    title="شيفت ستارت - فريق التطوير الرائد | تطوير المواقع والتطبيقات"
    description="شيفت ستارت فريق تطوير محترف متخصص في تطوير المواقع والتطبيقات المحمولة. نقدم حلول تقنية مبتكرة وتصاميم عصرية لتحقيق نجاح مشروعك الرقمي."
    keywords="تطوير المواقع, تطوير التطبيقات, شيفت ستارت, تصميم واجهات, React, Node.js, فريق التطوير السعودي"
    {...props}
  />
);

export const AboutSEO: React.FC<Partial<SEOProps>> = (props) => (
  <SEO
    title="من نحن - شيفت ستارت | فريق التطوير المحترف"
    description="تعرف على فريق شيفت ستارت، مجموعة من المطورين والمصممين المحترفين الذين يحولون الأفكار إلى حلول رقمية مبتكرة."
    url="/about"
    structuredData={{
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Shift Start",
        "foundingDate": "2020",
        "numberOfEmployees": "10-50",
        "industry": "Software Development"
      }
    }}
    {...props}
  />
);

export const ServicesSEO: React.FC<Partial<SEOProps>> = (props) => (
  <SEO
    title="خدماتنا - تطوير المواقع والتطبيقات | شيفت ستارت"
    description="خدمات شاملة في تطوير المواقع الإلكترونية، التطبيقات المحمولة، تصميم واجهات المستخدم، والحلول السحابية من فريق شيفت ستارت."
    url="/services"
    structuredData={{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Shift Start"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development"
            }
          }
        ]
      }
    }}
    {...props}
  />
);

export const ContactSEO: React.FC<Partial<SEOProps>> = (props) => (
  <SEO
    title="تواصل معنا - شيفت ستارت | ابدأ مشروعك الآن"
    description="تواصل مع فريق شيفت ستارت لبدء مشروعك التقني. نقدم استشارات مجانية وحلول مخصصة لتحقيق أهدافك الرقمية."
    url="/contact"
    structuredData={{
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Shift Start",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966501234567",
          "contactType": "customer service",
          "email": "info@shiftstart.dev"
        }
      }
    }}
    {...props}
  />
);

export default SEO;