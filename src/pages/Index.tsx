
import React from 'react';
import SEOHead from '@/components/common/SEOHead';
import Hero from '@/components/home/Hero';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import QuantumOverview from '@/components/home/QuantumOverview';
import QCSPOverview from '@/components/home/QCSPOverview';
import BeAMember from '@/components/home/BeAMember';
import NewsletterSubscribe from '@/components/home/NewsletterSubscribe';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ColorSchemeExample from '@/components/home/ColorSchemeExample';
import ColorSchemeShowcase from '@/components/examples/ColorSchemeShowcase';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Quantum Philippines Nexus | Quantum Computing Society of the Philippines"
        description="Join the growing quantum technology community in the Philippines. Access events, resources, and connect with fellow quantum enthusiasts."
        canonicalUrl="https://quantum-philippines.org/"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <ColorSchemeExample />
          <ColorSchemeShowcase />
        </div>
        <FeaturedEvents />
        <QuantumOverview />
        <QCSPOverview />
        <BeAMember />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
