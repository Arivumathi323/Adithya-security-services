import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { careers } from '../data/mock';
import { MapPin, Clock, Briefcase, CheckCircle, Send, Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { toast } from 'sonner';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Application submitted:', { job: selectedJob, ...formData });
    toast.success('Application submitted successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', experience: '', message: '' });
  };

  const benefits = [
    "Competitive Salary",
    "ESI & PF Benefits",
    "Uniforms Provided",
    "Training & Development",
    "Career Growth Opportunities",
    "Festival Bonuses",
    "Safe Working Environment",
    "24/7 Support"
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
                <span className="caption text-[#888680] mb-4 block">Careers</span>
                <h1 className="heading-1 text-[#d9fb06] mb-6">Build Your Career With Us</h1>
                <p className="body-large text-[#888680] mb-8">
                  Join Tamil Nadu's trusted security services provider. We offer competitive salaries, comprehensive benefits, and excellent career growth opportunities.
                </p>
                <div className="flex flex-wrap gap-3">
                  {benefits.slice(0, 4).map((benefit, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-[#3f4816] rounded-full text-[#d9fb06] body-small"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#302f2c] rounded-2xl p-8 border border-[#3f4816]">
                <h3 className="text-[#d9fb06] font-bold text-xl mb-6">Why Work With Us?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#d9fb06] flex-shrink-0" />
                      <span className="body-medium text-[#dfddd6]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-[#302f2c]">
          <div className="container-main">
            <div className="text-center mb-16">
              <span className="caption text-[#888680] mb-4 block">Open Positions</span>
              <h2 className="heading-2 text-[#d9fb06] mb-4">Current Job Openings</h2>
              <p className="body-medium text-[#888680] max-w-2xl mx-auto">
                Explore our current vacancies and find the right opportunity for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {careers.map((job) => (
                <Card 
                  key={job.id}
                  className="bg-[#1a1c1b] border-[#3f4816] p-8 hover:border-[#d9fb06] transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-[#d9fb06] font-bold text-xl">{job.title}</h3>
                    <span className="px-3 py-1 bg-[#3f4816] rounded-full text-[#d9fb06] text-sm">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-[#888680]">
                      <MapPin className="w-4 h-4" />
                      <span className="body-small">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#888680]">
                      <Briefcase className="w-4 h-4" />
                      <span className="body-small">{job.experience}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[#dfddd6] font-medium mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                          <span className="body-small text-[#888680]">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="btn-primary w-full gap-2"
                        onClick={() => setSelectedJob(job.title)}
                      >
                        Apply Now <Send className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#1a1c1b] border-[#3f4816] max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-[#d9fb06] text-xl">Apply for {job.title}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="name" className="text-[#dfddd6]">Full Name</Label>
                          <Input 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-[#dfddd6]">Email</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-[#dfddd6]">Phone Number</Label>
                          <Input 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="experience" className="text-[#dfddd6]">Years of Experience</Label>
                          <Input 
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-[#dfddd6]">Why should we hire you?</Label>
                          <Textarea 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-1"
                            rows={3}
                          />
                        </div>
                        <Button type="submit" className="btn-primary w-full gap-2">
                          Submit Application <Send className="w-4 h-4" />
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
