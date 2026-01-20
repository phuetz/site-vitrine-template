import { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[120px]" />

      {/* Decorative question marks */}
      <div className="absolute top-20 right-20 opacity-5">
        <HelpCircle className="w-40 h-40 text-white" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {siteConfig.faq.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {siteConfig.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border rounded-3xl overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? 'border-primary-500/30 shadow-xl shadow-primary-500/5'
                    : 'border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Number badge */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      isOpen
                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white'
                        : 'bg-slate-700/50 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-300'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className={`font-semibold text-lg transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'bg-primary-500/20 text-primary-400 rotate-0'
                      : 'bg-slate-700/50 text-slate-400'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 pl-[88px]">
                    <div className="text-slate-400 leading-relaxed text-lg">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-slate-400 mb-6">
              Notre équipe est là pour vous aider
            </p>
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
