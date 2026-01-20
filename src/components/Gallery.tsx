import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(siteConfig.gallery.items.map(item => item.category))];
  const filteredItems = filter === 'all'
    ? siteConfig.gallery.items
    : siteConfig.gallery.items.filter(item => item.category === filter);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentFilteredIndex = filteredItems.findIndex((_, i) =>
      siteConfig.gallery.items.indexOf(filteredItems[i]) === selectedImage
    );
    if (direction === 'prev') {
      const newIndex = currentFilteredIndex > 0 ? currentFilteredIndex - 1 : filteredItems.length - 1;
      setSelectedImage(siteConfig.gallery.items.indexOf(filteredItems[newIndex]));
    } else {
      const newIndex = currentFilteredIndex < filteredItems.length - 1 ? currentFilteredIndex + 1 : 0;
      setSelectedImage(siteConfig.gallery.items.indexOf(filteredItems[newIndex]));
    }
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {siteConfig.gallery.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            {siteConfig.gallery.subtitle}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:text-white border border-slate-700/50 hover:border-primary-500/30'
              }`}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div>

        {/* Gallery grid - Masonry-like effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Vary heights for visual interest
            const isLarge = index === 0 || index === 4;

            return (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                  isLarge ? 'sm:row-span-2 aspect-[4/5]' : 'aspect-[4/3]'
                }`}
                onClick={() => setSelectedImage(siteConfig.gallery.items.indexOf(item))}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/50 to-primary-900/50 -z-10" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block bg-primary-500/20 backdrop-blur-sm text-primary-300 text-xs font-medium px-3 py-1 rounded-full mb-2 border border-primary-500/20">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Corner accent on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/30 to-transparent rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 md:left-8 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image container */}
          <div
            className="max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={siteConfig.gallery.items[selectedImage].image}
                alt={siteConfig.gallery.items[selectedImage].title}
                className="w-full h-full object-contain bg-slate-900/50"
              />
            </div>

            {/* Caption */}
            <div className="text-center mt-6">
              <span className="inline-block bg-primary-500/20 backdrop-blur-sm text-primary-300 text-sm font-medium px-4 py-1 rounded-full mb-3 border border-primary-500/20">
                {siteConfig.gallery.items[selectedImage].category}
              </span>
              <h3 className="text-white font-bold text-2xl">
                {siteConfig.gallery.items[selectedImage].title}
              </h3>
            </div>
          </div>

          {/* Navigation - Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 md:right-8 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
