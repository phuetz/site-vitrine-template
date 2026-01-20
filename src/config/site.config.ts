// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                    CONFIGURATION DU SITE                                  ║
// ║  Modifiez uniquement ce fichier pour personnaliser votre site vitrine    ║
// ╚══════════════════════════════════════════════════════════════════════════╝

export const siteConfig = {
  // ═══════════════════════════════════════════════════════════════════════════
  // INFORMATIONS GÉNÉRALES
  // ═══════════════════════════════════════════════════════════════════════════
  business: {
    name: "Nom de l'entreprise",
    tagline: "Votre slogan accrocheur ici",
    description: "Description courte de votre activité pour le SEO (150-160 caractères)",
    foundedYear: 2020,
    owner: "Prénom Nom",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COORDONNÉES
  // ═══════════════════════════════════════════════════════════════════════════
  contact: {
    phone: "+33 6 00 00 00 00",
    email: "contact@exemple.fr",
    address: {
      street: "123 Rue Example",
      city: "Paris",
      postalCode: "75001",
      country: "France",
    },
    // Horaires d'ouverture
    hours: [
      { days: "Lundi - Vendredi", hours: "9h - 18h" },
      { days: "Samedi", hours: "10h - 16h" },
      { days: "Dimanche", hours: "Fermé" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RÉSEAUX SOCIAUX (laisser vide si non utilisé)
  // ═══════════════════════════════════════════════════════════════════════════
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
    tiktok: "",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THÈME ET COULEURS
  // ═══════════════════════════════════════════════════════════════════════════
  theme: {
    // Palette disponibles: "emerald", "blue", "amber", "rose", "violet", "orange"
    primaryColor: "emerald" as const,
    // Style du site: "modern", "classic", "minimal"
    style: "modern" as const,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION HERO (page d'accueil)
  // ═══════════════════════════════════════════════════════════════════════════
  hero: {
    title: "Titre principal accrocheur",
    subtitle: "Sous-titre qui explique votre proposition de valeur en une phrase",
    ctaText: "Prendre rendez-vous",
    ctaLink: "#contact",
    secondaryCtaText: "Nos services",
    secondaryCtaLink: "#services",
    // Image de fond (dans /public/images/)
    backgroundImage: "/images/hero-bg.jpg",
    // Ou utiliser un dégradé si pas d'image
    useGradient: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SERVICES / PRESTATIONS
  // ═══════════════════════════════════════════════════════════════════════════
  services: {
    title: "Nos services",
    subtitle: "Des solutions adaptées à vos besoins",
    items: [
      {
        icon: "Wrench", // Icônes Lucide: Wrench, Zap, Shield, Heart, Star, etc.
        title: "Service 1",
        description: "Description détaillée du service proposé et de ses avantages.",
        price: "À partir de 50€",
      },
      {
        icon: "Zap",
        title: "Service 2",
        description: "Description détaillée du service proposé et de ses avantages.",
        price: "À partir de 80€",
      },
      {
        icon: "Shield",
        title: "Service 3",
        description: "Description détaillée du service proposé et de ses avantages.",
        price: "Sur devis",
      },
      {
        icon: "Star",
        title: "Service 4",
        description: "Description détaillée du service proposé et de ses avantages.",
        price: "À partir de 120€",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // À PROPOS
  // ═══════════════════════════════════════════════════════════════════════════
  about: {
    title: "À propos",
    subtitle: "Notre histoire",
    content: `
      Rédigez ici votre histoire, votre parcours et ce qui vous différencie.

      Parlez de votre passion, de votre expertise et de votre engagement envers vos clients.

      N'hésitez pas à mentionner vos certifications, formations ou années d'expérience.
    `,
    // Image du propriétaire ou de l'équipe
    image: "/images/about.jpg",
    // Points forts (statistiques ou achievements)
    highlights: [
      { value: "10+", label: "Années d'expérience" },
      { value: "500+", label: "Clients satisfaits" },
      { value: "100%", label: "Garantie qualité" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GALERIE / RÉALISATIONS
  // ═══════════════════════════════════════════════════════════════════════════
  gallery: {
    title: "Nos réalisations",
    subtitle: "Découvrez notre travail",
    items: [
      {
        image: "/images/gallery/project-1.jpg",
        title: "Projet 1",
        category: "Catégorie A",
      },
      {
        image: "/images/gallery/project-2.jpg",
        title: "Projet 2",
        category: "Catégorie B",
      },
      {
        image: "/images/gallery/project-3.jpg",
        title: "Projet 3",
        category: "Catégorie A",
      },
      {
        image: "/images/gallery/project-4.jpg",
        title: "Projet 4",
        category: "Catégorie C",
      },
      {
        image: "/images/gallery/project-5.jpg",
        title: "Projet 5",
        category: "Catégorie B",
      },
      {
        image: "/images/gallery/project-6.jpg",
        title: "Projet 6",
        category: "Catégorie A",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TÉMOIGNAGES
  // ═══════════════════════════════════════════════════════════════════════════
  testimonials: {
    title: "Ce que disent nos clients",
    subtitle: "Témoignages vérifiés",
    items: [
      {
        name: "Marie D.",
        role: "Particulier",
        content: "Service impeccable, je recommande vivement ! Très professionnel et à l'écoute.",
        rating: 5,
        image: "/images/testimonials/client-1.jpg",
      },
      {
        name: "Jean-Pierre M.",
        role: "Chef d'entreprise",
        content: "Travail soigné et respect des délais. Une équipe vraiment compétente.",
        rating: 5,
        image: "/images/testimonials/client-2.jpg",
      },
      {
        name: "Sophie L.",
        role: "Particulier",
        content: "Excellente prestation, prix très correct. Je fais appel à eux régulièrement.",
        rating: 5,
        image: "/images/testimonials/client-3.jpg",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FAQ
  // ═══════════════════════════════════════════════════════════════════════════
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Quels sont vos délais d'intervention ?",
        answer: "Nous intervenons généralement sous 48h pour les demandes urgentes, et sous une semaine pour les projets planifiés.",
      },
      {
        question: "Proposez-vous des devis gratuits ?",
        answer: "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous pour une estimation personnalisée.",
      },
      {
        question: "Quelles zones géographiques couvrez-vous ?",
        answer: "Nous intervenons dans toute la région parisienne et les départements limitrophes.",
      },
      {
        question: "Quels sont vos moyens de paiement ?",
        answer: "Nous acceptons les paiements par carte bancaire, virement, chèque et espèces.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SEO & MÉTADONNÉES
  // ═══════════════════════════════════════════════════════════════════════════
  seo: {
    title: "Nom Entreprise - Votre métier à Ville",
    description: "Description SEO de 150-160 caractères pour Google",
    keywords: ["mot-clé 1", "mot-clé 2", "mot-clé 3", "ville"],
    ogImage: "/images/og-image.jpg",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FONCTIONNALITÉS ACTIVÉES
  // ═══════════════════════════════════════════════════════════════════════════
  features: {
    showGallery: true,
    showTestimonials: true,
    showFaq: true,
    showMap: true,
    showCallButton: true, // Bouton d'appel flottant sur mobile
    showWhatsApp: false,
    whatsAppNumber: "",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// PALETTES DE COULEURS (ne pas modifier sauf pour ajouter des palettes)
// ═══════════════════════════════════════════════════════════════════════════
export const colorPalettes = {
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
};

export type SiteConfig = typeof siteConfig;
export type ColorPalette = keyof typeof colorPalettes;
