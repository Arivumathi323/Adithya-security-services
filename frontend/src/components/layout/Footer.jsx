import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { companyInfo, navLinks, services } from '../../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#302f2c] border-t border-[#3f4816]">
      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#d9fb06] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#1a1c1b]" />
              </div>
              <div>
                <span className="text-[#d9fb06] font-bold text-lg">ADITHYA</span>
                <span className="text-[#888680] text-xs block">Security Services</span>
              </div>
            </Link>
            <p className="text-[#888680] body-small mb-6">
              Professional security and housekeeping solutions trusted by 150+ clients across Tamil Nadu since 2010.
            </p>
            <div className="flex gap-4">
              <a 
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3f4816] flex items-center justify-center text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d9fb06] font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors body-small"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#d9fb06] font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services#${service.id}`}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors body-small"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#d9fb06] font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-3 text-[#888680] hover:text-[#d9fb06] transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="body-small">
                    <div>{companyInfo.phone}</div>
                    {companyInfo.phoneSecondary && <div>{companyInfo.phoneSecondary}</div>}
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-[#888680] hover:text-[#d9fb06] transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="body-small">{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#888680]">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="body-small">{companyInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3f4816]">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#888680] text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-[#888680] text-sm">ESI Registered</span>
              <span className="text-[#888680] text-sm">PF Compliant</span>
              <span className="text-[#888680] text-sm">GST Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
