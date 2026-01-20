import { Wrench, Zap, Shield, Star, Heart, Home, Car, Scissors, Briefcase, Users, Sparkles, Coffee, Utensils, Scale, Camera, Palette, ArrowRight, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Wrench, Zap, Shield, Star, Heart, Home, Car, Scissors,
  Briefcase, Users, Sparkles, Coffee, Utensils, Scale, Camera, Palette,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Ce que nous proposons
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {siteConfig.services.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            {siteConfig.services.subtitle}
          </p>
        </div>

        {/* Services grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Star;
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 ${
                  isLarge ? 'md:col-span-1' : ''
                }`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Icon with glow effect */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-all duration-500" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-8 h-8 text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary-50 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price tag */}
                  {service.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                      <div className="flex items-center gap-1 text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        <span className="text-sm font-medium">En savoir plus</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold px-10 py-5 rounded-2xl text-lg transition-all duration-500 shadow-2xl shadow-primary-600/25 hover:shadow-primary-500/40 hover:scale-[1.02] overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Demander un devis gratuit</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
