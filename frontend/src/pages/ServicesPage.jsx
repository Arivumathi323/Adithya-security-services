import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { services } from '../data/mock';
import { Shield, Sparkles, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const iconMap = {
  Shield: Shield,
  Sparkles: Sparkles,
  Users: Users
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="max-w-4xl">
              <span className="caption text-[#888680] mb-4 block">Our Services</span>
              <h1 className="heading-1 text-[#d9fb06] mb-6">Comprehensive Security & Facility Solutions</h1>
              <p className="body-large text-[#888680]">
                From security guards to housekeeping staff, we provide end-to-end facility management services tailored to your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20 bg-[#302f2c]">
          <div className="container-main">
            <Tabs defaultValue="security" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-start gap-4 bg-transparent h-auto mb-12">
                {services.map((service) => {
                  const IconComponent = iconMap[service.icon];
                  return (
                    <TabsTrigger 
                      key={service.id} 
                      value={service.id}
                      id={service.id}
                      className="flex items-center gap-2 px-6 py-4 bg-[#1a1c1b] border border-[#3f4816] rounded-full data-[state=active]:bg-[#d9fb06] data-[state=active]:text-[#1a1c1b] data-[state=active]:border-[#d9fb06] text-[#d9fb06] transition-all"
                    >
                      <IconComponent className="w-5 h-5" />
                      {service.title}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {services.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <TabsContent key={service.id} value={service.id}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Service Details */}
                      <div>
                        <div className="w-16 h-16 rounded-xl bg-[#3f4816] flex items-center justify-center mb-6">
                          <IconComponent className="w-8 h-8 text-[#d9fb06]" />
                        </div>
                        <h2 className="heading-2 text-[#d9fb06] mb-4">{service.title}</h2>
                        <p className="body-large text-[#888680] mb-8">{service.description}</p>
                        
                        <h3 className="text-[#d9fb06] font-bold text-lg mb-4">Services Offered</h3>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                              <span className="body-medium text-[#dfddd6]">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link to="/contact">
                          <Button className="btn-primary gap-2">
                            Request Quote <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>

                      {/* Duties & Responsibilities */}
                      <div className="bg-[#1a1c1b] rounded-2xl p-8 border border-[#3f4816]">
                        <h3 className="text-[#d9fb06] font-bold text-lg mb-6">Duties & Responsibilities</h3>
                        <ul className="space-y-4">
                          {service.duties.map((duty, idx) => (
                            <li key={idx} className="flex items-start gap-4 p-4 bg-[#302f2c] rounded-lg">
                              <span className="w-8 h-8 rounded-full bg-[#3f4816] flex items-center justify-center text-[#d9fb06] font-bold text-sm flex-shrink-0">
                                {idx + 1}
                              </span>
                              <span className="body-medium text-[#dfddd6] pt-1">{duty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="bg-[#3f4816] rounded-2xl p-12 text-center">
              <h2 className="heading-2 text-[#d9fb06] mb-4">Need Custom Security Solutions?</h2>
              <p className="body-large text-[#dfddd6] mb-8 max-w-2xl mx-auto">
                We understand every client has unique requirements. Let us design a customized security plan for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="btn-primary gap-2">
                    Get Free Assessment <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button className="btn-secondary">
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
