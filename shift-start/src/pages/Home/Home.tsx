import React from 'react';
import Hero from '../../components/Hero/Hero';
import { HomeSEO } from '../../components/SEO/SEO';

const Home: React.FC = () => {
  return (
    <>
      <HomeSEO />
      <Hero />
    </>
  );
};

export default Home;