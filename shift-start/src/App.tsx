import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './i18n';
import './App.css';

// Loading component
const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.2rem'
  }}>
    جاري التحميل...
  </div>
);

// Lazy load components for better performance
const About = React.lazy(() => import('./pages/About/About'));
const Services = React.lazy(() => import('./pages/Services/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio/Portfolio'));
const Team = React.lazy(() => import('./pages/Team/Team'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

function App() {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    document.body.className = `${isDark ? 'dark' : 'light'} ${isRTL ? 'rtl' : 'ltr'}`;
  }, [isRTL, currentLanguage, isDark]);

  return (
    <Router>
      <div className="App">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Handle 404 */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
