import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection, ServicesPreview } from '../components/home/StatsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
