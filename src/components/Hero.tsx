import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-primary-300 px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-lg">
          <Sparkles className="w-4 h-4" />
          {siteConfig.business.tagline}
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
          {siteConfig.hero.title.split(' ').map((word, i) => (
            <span key={i} className="inline-block">
              {i === 1 ? (
                <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">{word} </span>
              ) : (
                <span className="text-white">{word} </span>
              )}
            </span>
          ))}
        </h1>

        {/* Subtitle with better typography */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {siteConfig.hero.subtitle}
        </p>

        {/* CTA buttons with glass effect */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={siteConfig.hero.ctaLink}
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-500 shadow-2xl shadow-primary-600/30 hover:shadow-primary-500/50 hover:scale-[1.02] overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Phone className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{siteConfig.hero.ctaText}</span>
          </a>
          <a
            href={siteConfig.hero.secondaryCtaLink}
            className="group inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            {siteConfig.hero.secondaryCtaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Trust indicators with glass cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {siteConfig.about.highlights.map((highlight, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5 min-w-[140px]"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-1">
                {highlight.value}
              </div>
              <div className="text-sm text-slate-400 font-medium">{highlight.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2.5 bg-primary-400 rounded-full animate-bounce" />
        </div>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
