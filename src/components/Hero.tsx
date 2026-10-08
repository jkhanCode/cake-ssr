import React from 'react';
import { ArrowRight, Sparkles, Heart, Clock, Award } from 'lucide-react';
import { BakeryImage } from './BakeryImage';

interface HeroProps {
  onExploreMenu: () => void;
  onDiscoverStory: () => void;
  onOpenCustomBuilder: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onDiscoverStory,
  onOpenCustomBuilder,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FFF9F6] to-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#F0E4D7]">
      {/* Delicate decorative background floral glow */}
      <div
        className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#FFE3EC]/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#F3EBE1]/70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Story & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Handwritten brand moment */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-script text-2xl sm:text-3xl text-[#FF3B77] font-semibold -rotate-2 inline-block">
                artisan confectionery atelier
              </span>
              <span className="text-[#BD174D]/40" aria-hidden="true">✦</span>
              <span className="text-xs font-medium tracking-widest uppercase text-[#72524E]">
                Est. 2021
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#3D2624] tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Baked with passion,{' '}
              <span className="italic font-serif font-normal text-[#FF3B77] relative">
                served with love.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#FF3B77]/30"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 6.5C45.5 2.5 145.5 1.5 197.5 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#553936] leading-relaxed mb-8 max-w-xl [text-wrap:balance]">
              Welcome to Cakelab — where modern pastry design meets heirloom French techniques.
              We craft botanical celebration cakes, slow-laminated pastries, and bespoke multi-tier
              creations in micro-batches with whole fruits, organic dairy, and wild edible florals.
            </p>

            {/* Primary Action Buttons: Rounded Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF3B77] hover:bg-[#E62562] text-white text-sm font-semibold px-7 py-3.5 rounded-full rose-shadow transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>Order Signature Treats</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCustomBuilder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFF0F4] hover:bg-[#FFE3EC] text-[#FF3B77] border border-[#FFC0D3] text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Custom Cake Planner</span>
              </button>

              <button
                onClick={onDiscoverStory}
                className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider text-[#72524E] hover:text-[#3D2624] px-4 py-2 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>Discover our story</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Quiet Trust Proof: Clean unboxed metadata with typographic separators */}
            <div className="pt-6 border-t border-[#EEDBCC]/70 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#72524E]">
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#FF3B77]" />
                <span className="font-medium text-[#3D2624]">100% Real French Butter</span>
              </div>
              <span className="text-[#C2ABA7]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF3B77]" />
                <span>Baked fresh daily at 6:00 AM</span>
              </div>
              <span className="text-[#C2ABA7]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#FF3B77]" />
                <span>Zero artificial preservatives</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Centerpiece Image Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 shadow-xl shadow-[#3D2624]/5 border border-[#F0E4D7]">
                <BakeryImage
                  src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=85"
                  alt="Cakelab artisan bespoke floral tiered celebration cake"
                  aspectRatioClass="aspect-[4/5]"
                  className="rounded-2xl"
                  badge="Chef's Spring Masterpiece"
                />

                {/* Romantic caption card inside frame */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-[#FAF7F2] rounded-xl mt-2 border border-[#F3ECE2]">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif font-bold text-lg text-[#3D2624]">
                      The Rose Petal Lambeth
                    </h3>
                    <span className="text-sm font-semibold text-[#FF3B77] tabular-nums">
                      From $180
                    </span>
                  </div>
                  <p className="text-xs text-[#72524E] leading-relaxed mb-3">
                    Vintage Victorian ruffled piping, organic garden rose blossoms, and champagne lychee sponge.
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-[#93726D]">
                    <span>Serves 28–36 guests</span>
                    <span className="font-script text-base text-[#FF3B77] font-semibold">
                      handcrafted for love
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Accompanying Card: Fresh Morning Batch */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#FFE3EC] max-w-xs">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-[#F3EBE1]">
                  <BakeryImage
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80"
                    alt="Warm raspberry rose twice baked croissant"
                    aspectRatioClass="aspect-square"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF3B77] block">
                    Fresh Out Of The Oven
                  </span>
                  <p className="font-serif font-medium text-xs text-[#3D2624] line-clamp-1">
                    Raspberry Twice-Baked
                  </p>
                  <span className="text-[11px] text-[#72524E] tabular-nums font-semibold">
                    $8.50 · Limited 40 batches
                  </span>
                </div>
              </div>

              {/* Little Stamp Badge */}
              <div className="absolute -top-4 -right-4 bg-[#FF3B77] text-white p-3 rounded-full shadow-md rotate-12 flex flex-col items-center justify-center w-16 h-16 border-2 border-white">
                <span className="text-[9px] uppercase tracking-wider font-bold">100%</span>
                <span className="font-serif font-bold text-xs">Artisan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
