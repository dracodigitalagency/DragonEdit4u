/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import CinematicHero from './components/CinematicHero';
import AboutSection from './components/AboutSection';
import TestimonialSlider from './components/TestimonialSlider';
import InteractiveContact from './components/InteractiveContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white font-sans antialiased overflow-x-hidden selection:bg-brand-purple selection:text-white">
      {/* Premium Cinematic Overhead Line Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan z-5 z-50 pointer-events-none" />

      {/* Global Navigation Panel */}
      <Navbar />
      
      <main>
        <CinematicHero />
        <AboutSection />
        <TestimonialSlider />
        <InteractiveContact />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
