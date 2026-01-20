import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`
      )}`,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Contactez-nous
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Devis gratuit et réponse rapide garantie
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <div className="relative">
            {/* Form card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 via-primary-400/10 to-primary-600/20 rounded-[2rem] blur-xl" />

            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-10">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-primary-500 rounded-full blur-xl opacity-30" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-slate-400 mb-8 text-lg">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium"
                  >
                    Envoyer un autre message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900/50 border border-slate-600/50 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900/50 border border-slate-600/50 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/50 border border-slate-600/50 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder="jean.dupont@email.fr"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900/50 border border-slate-600/50 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold px-8 py-5 rounded-2xl transition-all duration-500 shadow-xl shadow-primary-600/20 hover:shadow-primary-500/30 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {formState === 'submitting' ? (
                      <>
                        <div className="relative w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="relative">Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info & map */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.icon === MapPin ? '_blank' : undefined}
                  rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-5 bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <info.icon className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                    <div className="font-semibold text-white group-hover:text-primary-50 transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Horaires d'ouverture</h3>
              </div>
              <div className="space-y-3">
                {siteConfig.contact.hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm py-2 border-b border-slate-700/50 last:border-0">
                    <span className="text-slate-400">{schedule.days}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            {siteConfig.features.showMap && (
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/10 via-primary-400/5 to-primary-600/10 rounded-3xl blur-sm" />
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/50">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
