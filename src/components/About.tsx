import { CheckCircle, ArrowRight, Award, Clock, Shield } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function About() {
  const features = [
    { icon: Award, text: "Travail soigné et professionnel" },
    { icon: Clock, text: "Respect des délais annoncés" },
    { icon: Shield, text: "Satisfaction garantie" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side with fancy frame */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 via-primary-400/10 to-primary-600/20 rounded-[2rem] blur-sm" />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-600/10 rounded-[2rem]" />

              {/* Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={siteConfig.about.image}
                  alt={siteConfig.business.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 flex items-center justify-center">
                  <span className="text-[120px] font-bold text-white/10">
                    {siteConfig.business.name.charAt(0)}
                  </span>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-8 -right-8 md:right-8">
              <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent mb-1">
                  {siteConfig.about.highlights[0]?.value || '10+'}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {siteConfig.about.highlights[0]?.label || "Années d'expérience"}
                </div>
              </div>
            </div>

            {/* Second floating card */}
            <div className="absolute -top-4 -left-4 md:left-8 hidden md:block">
              <div className="bg-primary-600/90 backdrop-blur-xl border border-primary-400/30 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      {siteConfig.about.highlights[2]?.value || '100%'}
                    </div>
                    <div className="text-primary-100 text-xs">
                      {siteConfig.about.highlights[2]?.label || 'Satisfaction'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              {siteConfig.about.subtitle}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              {siteConfig.about.title}
            </h2>

            <div className="text-slate-400 mb-10 space-y-4 text-lg leading-relaxed">
              {siteConfig.about.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-primary-500/30 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary-400 mb-3" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 shadow-xl shadow-primary-600/20 hover:shadow-primary-500/30 hover:scale-[1.02]"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
