import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroMain } from './components/HeroMain';
import { ProductFeaturesSection } from './components/ProductFeaturesSection';
import { AISection } from './components/AISection';
import { CompaniesSection } from './components/CompaniesSection';
import { HeroTimeline } from './components/HeroTimeline';
import { IntegrationsSection } from './components/IntegrationsSection';
import { TechnicalSection } from './components/TechnicalSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navigation />

      <main>
        {/* Hero */}
        <HeroMain />

        {/* What We Build - multicolor expandable cards */}
        <ProductFeaturesSection />

        {/* How We Help - command palette style */}
        <AISection />
        <CompaniesSection />

        {/* Timeline & Technical */}
        <HeroTimeline />
        <IntegrationsSection />
        <TechnicalSection />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm bg-black">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Haestus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
