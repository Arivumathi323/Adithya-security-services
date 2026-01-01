import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { companyInfo, compliance, statistics } from '../data/mock';
import { Shield, Target, Eye, Users, CheckCircle, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="max-w-4xl">
              <span className="caption text-[#888680] mb-4 block">About Us</span>
              <h1 className="heading-1 text-[#d9fb06] mb-6">Your Trusted Security Partner Since 2010</h1>
              <p className="body-large text-[#888680]">
                {companyInfo.name} has been providing professional security and housekeeping services across Tamil Nadu for over 15 years, serving 150+ satisfied clients.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-[#302f2c]">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-dark rounded-lg p-8">
                <div className="w-14 h-14 rounded-lg bg-[#3f4816] flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#d9fb06]" />
                </div>
                <h3 className="heading-3 text-[#d9fb06] mb-4">Our Mission</h3>
                <p className="body-small text-[#888680]">
                  To provide superior security and facility management services that exceed client expectations while maintaining the highest standards of professionalism and integrity.
                </p>
              </div>
              <div className="card-dark rounded-lg p-8">
                <div className="w-14 h-14 rounded-lg bg-[#3f4816] flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[#d9fb06]" />
                </div>
                <h3 className="heading-3 text-[#d9fb06] mb-4">Our Vision</h3>
                <p className="body-small text-[#888680]">
                  To be the most trusted and preferred security services provider in South India, known for our commitment to excellence and customer satisfaction.
                </p>
              </div>
              <div className="card-dark rounded-lg p-8">
                <div className="w-14 h-14 rounded-lg bg-[#3f4816] flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#d9fb06]" />
                </div>
                <h3 className="heading-3 text-[#d9fb06] mb-4">Our Values</h3>
                <p className="body-small text-[#888680]">
                  Integrity, professionalism, reliability, and continuous improvement form the foundation of our service delivery and client relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="heading-1 text-[#d9fb06] mb-2">{stat.value}</div>
                  <div className="body-small text-[#888680] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-[#302f2c]">
          <div className="container-main">
            <div className="text-center mb-16">
              <span className="caption text-[#888680] mb-4 block">Compliance & Certifications</span>
              <h2 className="heading-2 text-[#d9fb06] mb-4">Fully Compliant & Certified</h2>
              <p className="body-medium text-[#888680] max-w-2xl mx-auto">
                We maintain strict adherence to all statutory requirements and industry standards
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compliance.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-[#1a1c1b] rounded-lg border border-[#3f4816]">
                  <CheckCircle className="w-6 h-6 text-[#d9fb06] flex-shrink-0" />
                  <div>
                    <h4 className="text-[#d9fb06] font-bold mb-1">{item.title}</h4>
                    <p className="body-small text-[#888680]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="caption text-[#888680] mb-4 block">Why Choose Us</span>
                <h2 className="heading-2 text-[#d9fb06] mb-6">What Sets Us Apart</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#3f4816] flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[#d9fb06]" />
                    </div>
                    <div>
                      <h4 className="text-[#d9fb06] font-bold mb-1">Trained Personnel</h4>
                      <p className="body-small text-[#888680]">All staff undergo rigorous training in security protocols, customer service, and emergency response.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#3f4816] flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#d9fb06]" />
                    </div>
                    <div>
                      <h4 className="text-[#d9fb06] font-bold mb-1">Uniformed Staff</h4>
                      <p className="body-small text-[#888680]">Professional appearance with clean, well-maintained uniforms enhancing your premises' image.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#3f4816] flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#d9fb06]" />
                    </div>
                    <div>
                      <h4 className="text-[#d9fb06] font-bold mb-1">Background Verified</h4>
                      <p className="body-small text-[#888680]">Thorough background verification of all personnel for your complete security and peace of mind.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/35407376/pexels-photo-35407376.jpeg" 
                  alt="Security Training"
                  className="rounded-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1a1c1b] to-transparent opacity-50" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
