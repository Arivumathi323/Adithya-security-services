import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { navLinks, companyInfo } from '../../data/mock';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1c1b]/95 backdrop-blur-sm border-b border-[#3f4816]">
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#d9fb06] flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#1a1c1b]" />
            </div>
            <div>
              <span className="text-[#d9fb06] font-bold text-lg tracking-tight">ADITHYA</span>
              <span className="text-[#888680] text-xs block">Security Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full
                  ${location.pathname === link.path 
                    ? 'text-[#1a1c1b] bg-[#d9fb06]' 
                    : 'text-[#d9fb06] hover:text-[#d9fb06]/80'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="hidden md:flex items-center gap-2 text-[#d9fb06] hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{companyInfo.phone}</span>
            </a>
            
            <Link to="/contact" className="hidden sm:block">
              <Button className="btn-primary text-sm px-6">
                Get Quote
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-[#d9fb06]">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#1a1c1b] border-l border-[#3f4816]">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors duration-200
                        ${location.pathname === link.path 
                          ? 'text-[#d9fb06]' 
                          : 'text-[#888680] hover:text-[#d9fb06]'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-[#3f4816]">
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-2 text-[#d9fb06] mb-4"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{companyInfo.phone}</span>
                    </a>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="btn-primary w-full">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
