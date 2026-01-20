# Site Vitrine Template

Template moderne pour créer des sites vitrines professionnels. Design premium avec effets glassmorphism, animations fluides et configuration centralisée.

## Aperçu

![Screenshot](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

**Démos en ligne :**
- [Coach / Consultant](https://demo-coach-black.vercel.app) (thème violet)
- [Restaurant](https://demo-restaurant-nu-dusky.vercel.app) (thème amber)
- [Cabinet d'avocats](https://demo-avocat-blush.vercel.app) (thème bleu)
- [Salon de coiffure](https://demo-coiffure-ten.vercel.app) (thème rose)

## Fonctionnalités

- **Design premium** : Glassmorphism, gradients animés, particules flottantes
- **6 thèmes de couleurs** : Emerald, Blue, Amber, Rose, Violet, Orange
- **Configuration centralisée** : Un seul fichier pour tout personnaliser
- **Composants inclus** : Navigation, Hero, Services, About, Gallery, Testimonials, FAQ, Contact, Footer
- **Responsive** : Mobile-first, adapté à tous les écrans
- **Performance** : Build optimisé avec Vite
- **TypeScript** : Typage complet pour une meilleure DX

## Stack technique

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Lucide React (icônes)

## Installation

```bash
# Cloner le template
git clone https://github.com/phuetz/site-vitrine-template.git mon-site

# Installer les dépendances
cd mon-site
npm install

# Lancer en développement
npm run dev
```

## Configuration

Toute la personnalisation se fait dans `src/config/site.config.ts` :

```typescript
export const siteConfig = {
  // Informations de l'entreprise
  business: {
    name: "Mon Entreprise",
    tagline: "Votre slogan ici",
    description: "Description pour le SEO...",
  },

  // Coordonnées
  contact: {
    phone: "+33 1 23 45 67 89",
    email: "contact@example.fr",
    address: { street: "...", city: "...", postalCode: "..." },
    hours: [{ days: "Lundi - Vendredi", hours: "9h - 18h" }],
  },

  // Thème (emerald | blue | amber | rose | violet | orange)
  theme: {
    primaryColor: "violet",
  },

  // Sections du site
  hero: { title: "...", subtitle: "...", ctaText: "..." },
  services: { title: "...", items: [...] },
  about: { title: "...", content: "...", image: "..." },
  gallery: { items: [...] },
  testimonials: { items: [...] },
  faq: { items: [...] },

  // Activer/désactiver les sections
  features: {
    showGallery: true,
    showTestimonials: true,
    showFaq: true,
    showMap: true,
  },
};
```

## Structure du projet

```
src/
├── components/
│   ├── Navigation.tsx    # Barre de navigation avec scroll effect
│   ├── Hero.tsx          # Section hero avec particules animées
│   ├── Services.tsx      # Grille de services style bento
│   ├── About.tsx         # Section à propos avec stats flottantes
│   ├── Gallery.tsx       # Galerie filtrable avec lightbox
│   ├── Testimonials.tsx  # Témoignages avec design premium
│   ├── FAQ.tsx           # Accordéon FAQ stylisé
│   ├── Contact.tsx       # Formulaire + infos + carte
│   ├── Footer.tsx        # Pied de page avec liens sociaux
│   └── CallButton.tsx    # Bouton d'appel flottant (mobile)
├── config/
│   └── site.config.ts    # Configuration centralisée
├── App.tsx
├── main.tsx
└── index.css             # Styles Tailwind + variables CSS
```

## Personnalisation des couleurs

Les couleurs utilisent des variables CSS. Pour changer le thème, modifiez `primaryColor` dans la config :

```typescript
theme: {
  primaryColor: "amber", // emerald | blue | amber | rose | violet | orange
}
```

Les variables CSS sont automatiquement générées dans `index.css` :

```css
:root {
  --color-primary-50: ...;
  --color-primary-500: ...;
  --color-primary-900: ...;
}
```

## Déploiement

```bash
# Build de production
npm run build

# Le dossier dist/ contient les fichiers statiques
```

**Déploiement sur Vercel :**
```bash
npm i -g vercel
vercel --prod
```

## Ajouter des images

Utilisez des URLs Unsplash directement dans la config :

```typescript
about: {
  image: "https://images.unsplash.com/photo-xxx?w=800&h=600&fit=crop",
},
gallery: {
  items: [
    { image: "https://images.unsplash.com/photo-xxx?w=600&h=400&fit=crop", title: "..." },
  ],
},
```

## Licence

MIT - Créé par [Patrice Huetz](https://patricehuetz.fr)
