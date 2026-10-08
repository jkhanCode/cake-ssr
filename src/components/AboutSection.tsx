import React from 'react';
import { BakeryImage } from './BakeryImage';
import { Sparkles, HeartHandshake, Flower2, Clock } from 'lucide-react';

interface AboutSectionProps {
  onOpenCustomBuilder: () => void;
  onExploreMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenCustomBuilder,
  onExploreMenu,
}) => {
  return (
    <section id="about-section" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#F0E4D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Montage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#F0E4D7]">
                  <BakeryImage
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
                    alt="Pastry chef frosting artisan cake"
                    aspectRatioClass="aspect-[3/4]"
                  />
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#F0E4D7] shadow-sm">
                  <span className="font-script text-2xl text-[#FF3B77] block font-semibold">
                    100% micro-batch
                  </span>
                  <p className="text-xs text-[#72524E] mt-1 leading-relaxed">
                    We never mass-freeze our sponges. Every layer is baked fresh on the morning of your event.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 bg-[#FFF5F7] rounded-2xl border border-[#FFE3EC] shadow-sm">
                  <div className="flex items-center gap-1.5 text-[#FF3B77] mb-1">
                    <Flower2 className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Edible Botanicals</span>
                  </div>
                  <p className="text-xs text-[#72524E] leading-relaxed">
                    Sourced from organic heirloom micro-farms: chamomile, elderflower, Damask roses, and lavender.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#F0E4D7]">
                  <BakeryImage
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                    alt="Fresh baked buttery brioche and pastries"
                    aspectRatioClass="aspect-[3/4]"
                  />
                </div>
              </div>
            </div>

            {/* Hand-signed seal */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-6 bg-white px-5 py-3 rounded-full shadow-lg border border-[#FFE3EC] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF3B77] text-white flex items-center justify-center font-serif font-bold text-sm">
                CL
              </div>
              <div className="text-left">
                <span className="text-[10px] text-[#93726D] uppercase tracking-wider block">Master Confectioner</span>
                <span className="font-serif font-semibold text-xs text-[#3D2624]">Aria & Julian Moreau</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Craft */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-script text-2xl text-[#FF3B77] font-semibold">
                our sweet laboratory
              </span>
              <span className="text-[#FFC0D3]" aria-hidden="true">✦</span>
              <span className="text-xs uppercase tracking-widest text-[#72524E] font-medium">
                The Cakelab Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2624] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Where French pastry precision meets modern romantic daydream.
            </h2>

            <div className="space-y-4 text-base text-[#553936] leading-relaxed mb-8">
              <p>
                Cakelab began with a rebellious idea: that celebration cakes should never taste like sugar-heavy fondant and dry crumbs. Having spent seven years training in historic Parisian patisseries, our founders wanted to create confectionery that tasted as sublime as it looked.
              </p>
              <p>
                Inside our sunny kitchen atelier, we treat baking like both an exact laboratory science and an expressive romantic art. We whip light Swiss meringue buttercream that carries only half the sweetness of traditional icing, allowing fragrant Damask rosewater, roasted Sicilian pistachios, and fresh tart berries to shine through.
              </p>
              <p>
                Whether you are celebrating a 30th birthday dinner with intimate friends, tying the knot under an arch of roses, or treating yourself on a quiet Sunday morning, every Cakelab creation is crafted to linger in your memory forever.
              </p>
            </div>

            {/* Adjacency of Proof: 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full py-6 border-y border-[#EEDBCC]/70 mb-8">
              <div>
                <span className="font-serif font-bold text-2xl text-[#FF3B77] block tabular-nums">
                  12,000+
                </span>
                <span className="text-xs font-semibold text-[#3D2624] block mt-0.5">Celebrations Made Sweet</span>
                <span className="text-[11px] text-[#93726D]">Weddings, galas, and milestones</span>
              </div>

              <div>
                <span className="font-serif font-bold text-2xl text-[#FF3B77] block tabular-nums">
                  72 Hours
                </span>
                <span className="text-xs font-semibold text-[#3D2624] block mt-0.5">Slow Fermentation</span>
                <span className="text-[11px] text-[#93726D]">For our flaky laminated pastries</span>
              </div>

              <div>
                <span className="font-serif font-bold text-2xl text-[#FF3B77] block tabular-nums">
                  4.9 / 5.0
                </span>
                <span className="text-xs font-semibold text-[#3D2624] block mt-0.5">Client Delight Score</span>
                <span className="text-[11px] text-[#93726D]">From 1,200+ verified patrons</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCustomBuilder}
                className="bg-[#FF3B77] hover:bg-[#E62562] text-white text-xs font-semibold px-6 py-3.5 rounded-full rose-shadow transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                Plan Your Custom Cake
              </button>
              <button
                onClick={onExploreMenu}
                className="bg-white hover:bg-[#FAF7F2] text-[#3D2624] border border-[#EEDBCC] text-xs font-semibold px-6 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                Explore Current Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
