import { Phone } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function CallButton() {
  return (
    <a
      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
      className="fixed bottom-6 right-6 z-40 md:hidden bg-primary-600 hover:bg-primary-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-primary-600/30 animate-pulse"
      aria-label="Appeler"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
