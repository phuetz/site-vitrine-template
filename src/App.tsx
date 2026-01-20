import { useEffect } from 'react';
import { siteConfig, colorPalettes } from './config/site.config';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallButton from './components/CallButton';
import './index.css';

function App() {
  // Appliquer les couleurs du thème au chargement
  useEffect(() => {
    const palette = colorPalettes[siteConfig.theme.primaryColor];
    const root = document.documentElement;

    Object.entries(palette).forEach(([shade, color]) => {
      root.style.setProperty(`--color-primary-${shade}`, color);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      {siteConfig.features.showGallery && <Gallery />}
      {siteConfig.features.showTestimonials && <Testimonials />}
      {siteConfig.features.showFaq && <FAQ />}
      <Contact />
      <Footer />
      {siteConfig.features.showCallButton && <CallButton />}
    </div>
  );
}

export default App;
