import React from 'react';
import { Shield, Sparkles, Users, CheckCircle } from 'lucide-react';
import { statistics, services } from '../../data/mock';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  Sparkles: Sparkles,
  Users: Users
};

export const StatsSection = () => {
  return (
    <section className="py-20 bg-[#302f2c]">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="heading-1 text-[#d9fb06] mb-2">{stat.value}</div>
              <div className="body-small text-[#888680] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-[#1a1c1b]">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="caption text-[#888680] mb-4 block">What We Offer</span>
          <h2 className="heading-2 text-[#d9fb06] mb-4">Our Core Services</h2>
          <p className="body-medium text-[#888680] max-w-2xl mx-auto">
            Comprehensive security and facility management solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="card-dark rounded-lg p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-[#3f4816] flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-[#d9fb06]" />
                </div>
                <h3 className="heading-3 text-[#d9fb06] mb-4">{service.title}</h3>
                <p className="body-small text-[#888680] mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                      <span className="body-small text-[#dfddd6]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-[#d9fb06] hover:opacity-80 transition-opacity body-small font-medium"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="btn-primary gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
