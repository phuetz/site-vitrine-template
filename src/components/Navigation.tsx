import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '../config/site.config';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'À propos' },
  { href: '#gallery', label: 'Réalisations' },
  { href: '#testimonials', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="relative group flex items-center gap-3">
            {/* Logo glow on hover */}
            <div className="absolute -inset-2 bg-primary-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              {siteConfig.business.name.charAt(0)}
            </div>
            <span className="relative text-xl font-bold text-white">
              {siteConfig.business.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-slate-300 hover:text-white transition-colors text-sm font-medium group"
              >
                {link.label}
                {/* Hover underline */}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </a>
            ))}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="group relative ml-4 flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30 hover:scale-[1.02] overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Phone className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{siteConfig.contact.phone}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isOpen
                ? 'bg-primary-500/20 text-primary-400'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 text-slate-300 hover:text-white py-3 px-4 rounded-xl hover:bg-slate-800/50 text-base font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors" />
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 shadow-xl shadow-primary-600/20"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
