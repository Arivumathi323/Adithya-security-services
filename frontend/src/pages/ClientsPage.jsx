import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { clients } from '../data/mock';
import { Building2, Briefcase, Hospital, GraduationCap, Car, Building, ShoppingBag, Hotel } from 'lucide-react';

const categoryIcons = {
  Government: Building2,
  IT: Briefcase,
  Healthcare: Hospital,
  Manufacturing: Building,
  Banking: Building2,
  Automobile: Car,
  Retail: ShoppingBag,
  Hospitality: Hotel,
  Education: GraduationCap,
  Infrastructure: Building
};

const ClientsPage = () => {
  // Group clients by category
  const categories = [...new Set(clients.map(c => c.category))];

  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto">
              <span className="caption text-[#888680] mb-4 block">Our Clients</span>
              <h1 className="heading-1 text-[#d9fb06] mb-6">Trusted by Industry Leaders</h1>
              <p className="body-large text-[#888680]">
                We are proud to serve over 150+ reputed organizations across Tamil Nadu, from multinational corporations to government institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Client Statistics */}
        <section className="py-16 bg-[#302f2c]">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="heading-1 text-[#d9fb06] mb-2">150+</div>
                <div className="body-small text-[#888680] uppercase tracking-wider">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="heading-1 text-[#d9fb06] mb-2">10+</div>
                <div className="body-small text-[#888680] uppercase tracking-wider">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="heading-1 text-[#d9fb06] mb-2">98%</div>
                <div className="body-small text-[#888680] uppercase tracking-wider">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="heading-1 text-[#d9fb06] mb-2">15+</div>
                <div className="body-small text-[#888680] uppercase tracking-wider">Years of Trust</div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients by Category */}
        <section className="py-20 bg-[#1a1c1b]">
          <div className="container-main">
            <div className="text-center mb-16">
              <span className="caption text-[#888680] mb-4 block">Industries We Serve</span>
              <h2 className="heading-2 text-[#d9fb06] mb-4">Our Client Portfolio</h2>
            </div>

            <div className="space-y-12">
              {categories.map((category) => {
                const CategoryIcon = categoryIcons[category] || Building2;
                const categoryClients = clients.filter(c => c.category === category);
                
                return (
                  <div key={category} className="bg-[#302f2c] rounded-2xl p-8 border border-[#3f4816]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-[#3f4816] flex items-center justify-center">
                        <CategoryIcon className="w-6 h-6 text-[#d9fb06]" />
                      </div>
                      <div>
                        <h3 className="text-[#d9fb06] font-bold text-xl">{category}</h3>
                        <p className="body-small text-[#888680]">{categoryClients.length} clients</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {categoryClients.map((client, idx) => (
                        <div 
                          key={idx}
                          className="bg-[#1a1c1b] rounded-lg p-6 text-center border border-[#3f4816] hover:border-[#d9fb06] transition-colors"
                        >
                          <span className="text-[#dfddd6] font-medium body-medium">{client.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-20 bg-[#302f2c]">
          <div className="container-main">
            <div className="bg-[#3f4816] rounded-2xl p-12 text-center">
              <h2 className="heading-2 text-[#d9fb06] mb-4">Join Our Growing Client Family</h2>
              <p className="body-large text-[#dfddd6] mb-4 max-w-2xl mx-auto">
                Discover why 150+ organizations trust ADITHYA Security Services for their security and facility management needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPage;
