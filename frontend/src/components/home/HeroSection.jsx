import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { heroSlides } from '../../data/mock';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="container-main relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <span className="caption text-[#d9fb06] mb-4 block">
              Trusted Security Partner Since 2010
            </span>
            <h1 className="heading-display text-[#d9fb06] mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="body-large text-[#dfddd6] mb-8 max-w-2xl">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button className="btn-primary gap-2">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-secondary">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-[#d9fb06] flex items-center justify-center text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#d9fb06]' : 'bg-[#3f4816]'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-[#d9fb06] flex items-center justify-center text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
