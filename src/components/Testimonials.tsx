import { Star, Quote, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />

      {/* Floating quotes decoration */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="w-24 h-24 text-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Témoignages
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {siteConfig.testimonials.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            {siteConfig.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials grid - First one featured */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.testimonials.items.map((testimonial, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 ${
                  isFeatured ? 'lg:row-span-2 flex flex-col justify-between' : ''
                }`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Quote icon with glow */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-500/10 rounded-full blur-xl" />
                  <Quote className={`relative w-12 h-12 text-primary-500/40 mb-6 ${isFeatured ? 'w-16 h-16' : ''}`} />
                </div>

                {/* Stars */}
                <div className="relative flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 transition-transform duration-300 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400 group-hover:scale-110'
                          : 'text-slate-600'
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className={`relative text-slate-300 mb-8 leading-relaxed ${
                  isFeatured ? 'text-lg md:text-xl' : 'text-base'
                }`}>
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="relative flex items-center gap-4 mt-auto">
                  <div className="relative">
                    {/* Avatar glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-md opacity-50" />
                    <div className={`relative rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 border-2 border-primary-400/30 ${
                      isFeatured ? 'w-16 h-16' : 'w-14 h-14'
                    }`}>
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={`font-bold text-white group-hover:text-primary-50 transition-colors ${
                      isFeatured ? 'text-lg' : ''
                    }`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary-400/80 font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Trust badge */}
        <div className="mt-16 flex justify-center">
          <div className="relative group">
            {/* Badge glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-yellow-500/20 to-primary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative inline-flex items-center gap-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full px-8 py-4 shadow-2xl">
              <div className="flex -space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(250, 204, 21, 0.5))' }}
                  />
                ))}
              </div>
              <div className="h-8 w-px bg-slate-700" />
              <div>
                <span className="text-white font-bold text-lg">5.0</span>
                <span className="text-slate-400 ml-2">
                  Note moyenne sur {siteConfig.testimonials.items.length * 50}+ avis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
