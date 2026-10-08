import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { BAKERY_PRODUCTS } from '../data/bakeryData';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';

interface TreatsSectionProps {
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onOpenCustomBuilder: () => void;
  activeFilter?: ProductCategory;
  onFilterChange?: (filter: ProductCategory) => void;
}

export const TreatsSection: React.FC<TreatsSectionProps> = ({
  onQuickView,
  onQuickAdd,
  onOpenCustomBuilder,
  activeFilter: propFilter,
  onFilterChange,
}) => {
  const [internalFilter, setInternalFilter] = useState<ProductCategory>('all');
  const activeCategory = propFilter || internalFilter;

  const handleCategoryChange = (cat: ProductCategory) => {
    if (onFilterChange) {
      onFilterChange(cat);
    } else {
      setInternalFilter(cat);
    }
  };

  const filteredProducts =
    activeCategory === 'all'
      ? BAKERY_PRODUCTS
      : BAKERY_PRODUCTS.filter((p) => p.category === activeCategory);

  const categoryDetails: Record<ProductCategory, { title: string; subtitle: string; script: string }> = {
    all: {
      title: 'Our Signature Creations',
      subtitle:
        'Every single cake and pastry is hand-baked in limited daily quantities using pure French butter, unbleached flour, and cold-steeped botanicals.',
      script: 'curated with heart',
    },
    'fresh-cakes': {
      title: 'Artisan Fresh Cakes',
      subtitle:
        'Layered with slow-whipped diplomat mousses, seasonal fruit preserves, and sponge cakes so tender they melt upon your first bite.',
      script: 'tender sponge & botanicals',
    },
    'sweet-pastries': {
      title: 'Sweet Morning & Afternoon Pastries',
      subtitle:
        'Laminated doughs rested for 72 hours, twice-baked to golden perfection with roasted nut frangipanes and floral reductions.',
      script: '72-hour golden laminations',
    },
    'custom-cakes': {
      title: 'Bespoke Celebration & Wedding Cakes',
      subtitle:
        'Showstopping multi-tiered masterpieces adorned with vintage Lambeth piping, pressed meadow blooms, and edible gold leaf.',
      script: 'unforgettable milestones',
    },
  };

  const currentInfo = categoryDetails[activeCategory];

  return (
    <section id="treats-section" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#F0E4D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-script text-2xl text-[#FF3B77] font-semibold">
                {currentInfo.script}
              </span>
              <span className="text-[#FFC0D3]" aria-hidden="true">✦</span>
              <span className="text-xs uppercase tracking-widest text-[#72524E] font-medium">
                The Confectionery Gallery
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2624] tracking-tight">
              {currentInfo.title}
            </h2>
            <p className="mt-4 text-base text-[#553936] leading-relaxed [text-wrap:balance]">
              {currentInfo.subtitle}
            </p>
          </div>

          {/* Interactive Filter Pills/Segmented Controls */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#F3ECE2] rounded-full overflow-x-auto max-w-full">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-[#3D2624] shadow-sm'
                  : 'text-[#72524E] hover:text-[#3D2624]'
              }`}
            >
              All Treats
            </button>
            <button
              onClick={() => handleCategoryChange('fresh-cakes')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'fresh-cakes'
                  ? 'bg-white text-[#FF3B77] shadow-sm'
                  : 'text-[#72524E] hover:text-[#3D2624]'
              }`}
            >
              Fresh Cakes
            </button>
            <button
              onClick={() => handleCategoryChange('sweet-pastries')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'sweet-pastries'
                  ? 'bg-white text-[#FF3B77] shadow-sm'
                  : 'text-[#72524E] hover:text-[#3D2624]'
              }`}
            >
              Sweet Pastries
            </button>
            <button
              onClick={() => handleCategoryChange('custom-cakes')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'custom-cakes'
                  ? 'bg-white text-[#FF3B77] shadow-sm'
                  : 'text-[#72524E] hover:text-[#3D2624]'
              }`}
            >
              Custom Cakes
            </button>
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </div>

        {/* Action Banner below treats: Explore all & Custom Cake Callout */}
        <div className="bg-gradient-to-r from-[#FFF5F7] via-[#FFF9F6] to-[#F7EFE7] rounded-3xl p-8 sm:p-10 border border-[#FFE3EC] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-full bg-[#FF3B77] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="font-script text-xl text-[#FF3B77] block font-semibold">
                planning a wedding, party, or brand gala?
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#3D2624]">
                Looking for a bespoke creation tailored to your palette?
              </h3>
              <p className="text-xs sm:text-sm text-[#72524E] mt-1">
                Collaborate with our lead cake designers to craft bespoke flavor combinations, floral arches, and custom piping.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenCustomBuilder}
              className="bg-[#3D2624] hover:bg-[#261614] text-white text-xs font-semibold px-6 py-3.5 rounded-full shadow transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              Custom Cake Inquiry
            </button>
            <button
              onClick={() => handleCategoryChange('all')}
              className="bg-white hover:bg-[#FAF7F2] text-[#3D2624] border border-[#EEDBCC] text-xs font-semibold px-6 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              Explore all treats
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
