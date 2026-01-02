import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { companyInfo } from '../data/mock';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/quote/request`, formData);
      toast.success(response.data.message || 'Quote request sent successfully! We will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (error) {
      console.error('Quote submission error:', error);
      toast.error(error.response?.data?.detail || 'Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: `${companyInfo.phone}\n${companyInfo.phoneSecondary}`,
      link: `tel:${companyInfo.phone.replace(/\s/g, '')}`
    },
    {
      icon: Mail,
      title: "Email",
      content: companyInfo.email,
      link: `mailto:${companyInfo.email}`
    },
    {
      icon: MapPin,
      title: "Address",
      content: companyInfo.address,
      link: null
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto">
              <span className="caption text-[#888680] mb-4 block">Contact Us</span>
              <h1 className="heading-1 text-[#d9fb06] mb-6">Get In Touch With Us</h1>
              <p className="body-large text-[#888680]">
                Have questions about our services? Need a quote? We're here to help. Contact us through any of the channels below or fill out the form.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-[#302f2c]">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-[#1a1c1b] border-[#3f4816] p-6 text-center hover:border-[#d9fb06] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3f4816] flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-[#d9fb06]" />
                  </div>
                  <h3 className="text-[#d9fb06] font-bold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="body-small text-[#888680] hover:text-[#d9fb06] transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="body-small text-[#888680]">{info.content}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & WhatsApp */}
        <section className="py-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="heading-2 text-[#d9fb06] mb-4">Request a Quote</h2>
                <p className="body-medium text-[#888680] mb-8">
                  Fill out the form below and our team will get back to you within 24 hours with a customized quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[#dfddd6]">Full Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-2 h-12"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#dfddd6]">Email Address *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-2 h-12"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-[#dfddd6]">Phone Number *</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-2 h-12"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-[#dfddd6]">Company Name</Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-2 h-12"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-[#dfddd6]">Service Required *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-[#302f2c] border border-[#3f4816] text-[#dfddd6] mt-2 h-12 rounded-md px-3"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="security">Security Services</option>
                      <option value="housekeeping">Housekeeping Services</option>
                      <option value="manpower">Trained Manpower</option>
                      <option value="custom">Custom Solutions</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#dfddd6]">Message *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-[#302f2c] border-[#3f4816] text-[#dfddd6] mt-2"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full md:w-auto gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* WhatsApp & Quick Contact */}
              <div>
                <div className="bg-[#302f2c] rounded-2xl p-8 border border-[#3f4816] mb-8">
                  <h3 className="text-[#d9fb06] font-bold text-xl mb-4">Quick Connect via WhatsApp</h3>
                  <p className="body-medium text-[#888680] mb-6">
                    Need an immediate response? Connect with us on WhatsApp for quick assistance.
                  </p>
                  <a 
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hello, I'm interested in your security services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="bg-[#3f4816] rounded-2xl p-8">
                  <h3 className="text-[#d9fb06] font-bold text-xl mb-4">Emergency Contact</h3>
                  <p className="body-medium text-[#dfddd6] mb-6">
                    For existing clients, our emergency support line is available 24/7.
                  </p>
                  <a 
                    href={`tel:${companyInfo.phone}`}
                    className="heading-3 text-[#d9fb06] hover:opacity-80 transition-opacity flex items-center gap-2"
                  >
                    <Phone className="w-6 h-6" />
                    {companyInfo.phone}
                  </a>
                </div>

                <div className="mt-8 p-6 border border-[#3f4816] rounded-xl">
                  <h4 className="text-[#d9fb06] font-bold mb-4">Office Location</h4>
                  <div className="aspect-video bg-[#302f2c] rounded-lg flex items-center justify-center">
                    <p className="text-[#888680] body-small text-center px-4">
                      {companyInfo.address}
                    </p>
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

export default ContactPage;
