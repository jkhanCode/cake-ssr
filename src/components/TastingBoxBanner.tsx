import React from 'react';
import { TASTING_BOX } from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';
import { Sparkles, Check, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface TastingBoxBannerProps {
  onAddTastingBox: (product: Product) => void;
}

export const TastingBoxBanner: React.FC<TastingBoxBannerProps> = ({ onAddTastingBox }) => {
  const tastingProduct: Product = {
    id: TASTING_BOX.id,
    name: TASTING_BOX.name,
    category: 'fresh-cakes',
    tagline: TASTING_BOX.tagline,
    description: TASTING_BOX.description,
    price: TASTING_BOX.price,
    image: TASTING_BOX.image,
    flavorNotes: ['Rose Lychee', 'Wild Strawberry', 'Valrhona Cocoa', 'Lemon Verbena'],
    dietary: 'Vegetarian Tasting Flight',
    ingredients: ['Madagascar Vanilla', 'Valrhona Cocoa', 'French Butter', 'Fresh Berries', 'Rosewater'],
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#FAF7F2] via-[#FFF5F7] to-[#FAF7F2] border-b border-[#F0E4D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#FFE3EC] shadow-lg shadow-[#3D2624]/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#F3ECE2]">
              <BakeryImage
                src={TASTING_BOX.image}
                alt="Cakelab Weekend Tasting Box"
                aspectRatioClass="aspect-[4/3]"
                badge="Limited Weekend Drop"
              />
            </div>
          </div>

          {/* Right Column: Information & Order Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-script text-2xl text-[#FF3B77] font-semibold">
                taste before your celebration
              </span>
              <span className="text-[#FFC0D3]" aria-hidden="true">✦</span>
              <span className="text-xs uppercase tracking-widest text-[#72524E] font-medium">
                Weekend Tasting Flight
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#3D2624] tracking-tight mb-3">
              {TASTING_BOX.name}
            </h3>

            <p className="text-sm sm:text-base text-[#553936] leading-relaxed mb-6 [text-wrap:balance]">
              {TASTING_BOX.description}
            </p>

            {/* List of included mini creations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
              {TASTING_BOX.itemsIncluded.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#3D2624] bg-[#FAF7F2] px-3.5 py-2.5 rounded-xl border border-[#F3ECE2]">
                  <Check className="w-3.5 h-3.5 text-[#FF3B77] flex-shrink-0" />
                  <span className="font-medium truncate">{item}</span>
                </div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 w-full pt-4 border-t border-[#F3ECE2]">
              <div>
                <span className="text-xs text-[#93726D] block">Flight Price (4 Creations)</span>
                <span className="font-serif font-bold text-2xl text-[#3D2624] tabular-nums">
                  ${TASTING_BOX.price}.00
                </span>
              </div>

              <button
                onClick={() => onAddTastingBox(tastingProduct)}
                className="bg-[#FF3B77] hover:bg-[#E62562] text-white text-xs font-semibold px-7 py-3.5 rounded-full rose-shadow transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Tasting Flight to Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
