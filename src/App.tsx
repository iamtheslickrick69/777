import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroMain } from './components/HeroMain';
import { FeatureCards } from './components/FeatureCards';
import { AISection } from './components/AISection';
import { CompaniesSection } from './components/CompaniesSection';
import { ProductFeaturesSection } from './components/ProductFeaturesSection';
import { HeroTimeline } from './components/HeroTimeline';
import { IntegrationsSection } from './components/IntegrationsSection';
import { TechnicalSection } from './components/TechnicalSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navigation />

      <main>
        {/* Section from Project 3 */}
        <HeroMain />
        <FeatureCards />
        <AISection />

        {/* Section from Project 2 */}
        <CompaniesSection />
        <ProductFeaturesSection />

        {/* Section from Project 1 */}
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
