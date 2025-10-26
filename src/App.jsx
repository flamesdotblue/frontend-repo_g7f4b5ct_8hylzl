import React from 'react';
import Hero from './components/Hero';
import ValuePillars from './components/ValuePillars';
import PortfolioShowcase from './components/PortfolioShowcase';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ValuePillars />
      <PortfolioShowcase />
      <CTASection />
      <footer className="w-full bg-black py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Ascension Holdings — Multi-Venture Ownership
      </footer>
    </div>
  );
}

export default App;
