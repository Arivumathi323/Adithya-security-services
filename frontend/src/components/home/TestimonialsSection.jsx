import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/mock';
import { Card } from '../ui/card';

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#302f2c]">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="caption text-[#888680] mb-4 block">Testimonials</span>
          <h2 className="heading-2 text-[#d9fb06] mb-4">What Our Clients Say</h2>
          <p className="body-medium text-[#888680] max-w-2xl mx-auto">
            Trusted by leading organizations across Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-[#1a1c1b] border-[#3f4816] p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-[#3f4816] mb-6" />
              <p className="body-medium text-[#dfddd6] mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-[#3f4816] pt-6">
                <div className="font-bold text-[#d9fb06]">{testimonial.name}</div>
                <div className="body-small text-[#888680]">{testimonial.position}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
