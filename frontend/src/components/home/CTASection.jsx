import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { compliance } from '../../data/mock';

export const CTASection = () => {
  return (
    <section className="py-24 bg-[#1a1c1b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="caption text-[#888680] mb-4 block">Why Choose Us</span>
            <h2 className="heading-2 text-[#d9fb06] mb-6">Trusted & Compliant Security Partner</h2>
            <p className="body-large text-[#888680] mb-8">
              We maintain the highest standards of compliance and professionalism, ensuring complete peace of mind for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {compliance.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[#dfddd6] font-medium body-small">{item.title}</div>
                    <div className="text-[#888680] text-xs">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button className="btn-secondary gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right Content - CTA Card */}
          <div className="bg-[#3f4816] rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-[#d9fb06] flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#1a1c1b]" />
              </div>
              <div>
                <h3 className="heading-3 text-[#d9fb06]">Get Protected Today</h3>
                <p className="body-small text-[#dfddd6]">Request a free security assessment</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[#dfddd6]">
                <Award className="w-5 h-5 text-[#d9fb06]" />
                <span className="body-small">Free on-site security audit</span>
              </li>
              <li className="flex items-center gap-3 text-[#dfddd6]">
                <Award className="w-5 h-5 text-[#d9fb06]" />
                <span className="body-small">Customized security solutions</span>
              </li>
              <li className="flex items-center gap-3 text-[#dfddd6]">
                <Award className="w-5 h-5 text-[#d9fb06]" />
                <span className="body-small">Competitive pricing</span>
              </li>
              <li className="flex items-center gap-3 text-[#dfddd6]">
                <Award className="w-5 h-5 text-[#d9fb06]" />
                <span className="body-small">24/7 support available</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="btn-primary w-full gap-2">
                Request Free Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
