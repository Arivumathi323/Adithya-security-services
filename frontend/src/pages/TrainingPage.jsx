import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { trainingModules } from '../data/mock';
import { GraduationCap, Clock, BookOpen, Users, Award, Target, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/card';

const TrainingPage = () => {
  const trainingFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Structured training programs covering all aspects of security and housekeeping operations."
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Training conducted by experienced professionals and ex-servicemen with real-world expertise."
    },
    {
      icon: Target,
      title: "Practical Sessions",
      description: "Hands-on training with mock drills and real-scenario simulations for better preparedness."
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "All training programs are certified and comply with industry standards and regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="caption text-[#888680] mb-4 block">Training & Development</span>
                <h1 className="heading-1 text-[#d9fb06] mb-6">Building Excellence Through Training</h1>
                <p className="body-large text-[#888680] mb-8">
                  Our comprehensive training programs ensure every personnel is equipped with the skills, knowledge, and professionalism needed to deliver exceptional service.
                </p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="heading-2 text-[#d9fb06]">500+</div>
                    <div className="body-small text-[#888680]">Personnel Trained</div>
                  </div>
                  <div className="w-px h-16 bg-[#3f4816]" />
                  <div className="text-center">
                    <div className="heading-2 text-[#d9fb06]">6</div>
                    <div className="body-small text-[#888680]">Training Modules</div>
                  </div>
                  <div className="w-px h-16 bg-[#3f4816]" />
                  <div className="text-center">
                    <div className="heading-2 text-[#d9fb06]">100%</div>
                    <div className="body-small text-[#888680]">Certified Staff</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/35407370/pexels-photo-35407370.jpeg" 
                  alt="Security Training"
                  className="rounded-2xl w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1a1c1b] to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </section>

        {/* Training Features */}
        <section className="py-20 bg-[#302f2c]">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainingFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-[#3f4816] flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-[#d9fb06]" />
                  </div>
                  <h3 className="text-[#d9fb06] font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="body-small text-[#888680]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Modules */}
        <section className="py-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="text-center mb-16">
              <span className="caption text-[#888680] mb-4 block">Our Programs</span>
              <h2 className="heading-2 text-[#d9fb06] mb-4">Training Modules</h2>
              <p className="body-medium text-[#888680] max-w-2xl mx-auto">
                Comprehensive training programs designed to develop skilled and professional personnel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingModules.map((module, index) => (
                <Card 
                  key={index}
                  className="bg-[#302f2c] border-[#3f4816] p-8 hover:border-[#d9fb06] transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#3f4816] flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-[#d9fb06]" />
                    </div>
                    <div className="flex items-center gap-2 text-[#888680]">
                      <Clock className="w-4 h-4" />
                      <span className="body-small">{module.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-[#d9fb06] font-bold text-lg mb-3">{module.title}</h3>
                  <p className="body-small text-[#888680]">{module.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Philosophy */}
        <section className="py-20 bg-[#302f2c]">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="caption text-[#888680] mb-4 block">Our Philosophy</span>
                <h2 className="heading-2 text-[#d9fb06] mb-6">Preventive Security Approach</h2>
                <p className="body-large text-[#888680] mb-6">
                  We believe in preventive security measures rather than reactive responses. Our training emphasizes vigilance, threat assessment, and proactive security practices.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                    <span className="body-medium text-[#dfddd6]">Regular refresher training and skill upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                    <span className="body-medium text-[#dfddd6]">Mock drills and emergency response exercises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                    <span className="body-medium text-[#dfddd6]">Performance monitoring and continuous improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                    <span className="body-medium text-[#dfddd6]">Regular inspections and quality audits</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a1c1b] rounded-2xl p-8 border border-[#3f4816]">
                <h3 className="text-[#d9fb06] font-bold text-xl mb-6">Training Standards</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="body-small text-[#dfddd6]">Security Protocols</span>
                      <span className="body-small text-[#d9fb06]">100%</span>
                    </div>
                    <div className="w-full h-2 bg-[#3f4816] rounded-full overflow-hidden">
                      <div className="h-full bg-[#d9fb06] rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="body-small text-[#dfddd6]">Fire Safety</span>
                      <span className="body-small text-[#d9fb06]">100%</span>
                    </div>
                    <div className="w-full h-2 bg-[#3f4816] rounded-full overflow-hidden">
                      <div className="h-full bg-[#d9fb06] rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="body-small text-[#dfddd6]">First Aid</span>
                      <span className="body-small text-[#d9fb06]">95%</span>
                    </div>
                    <div className="w-full h-2 bg-[#3f4816] rounded-full overflow-hidden">
                      <div className="h-full bg-[#d9fb06] rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="body-small text-[#dfddd6]">Customer Service</span>
                      <span className="body-small text-[#d9fb06]">98%</span>
                    </div>
                    <div className="w-full h-2 bg-[#3f4816] rounded-full overflow-hidden">
                      <div className="h-full bg-[#d9fb06] rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPage;
