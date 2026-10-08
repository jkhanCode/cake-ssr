import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Heart, CheckCircle2, ChevronRight, Cake } from 'lucide-react';
import { CustomCakeInquiry } from '../types';

interface CustomCakeBuilderProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const CustomCakeBuilder: React.FC<CustomCakeBuilderProps> = ({
  onClose,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<CustomCakeInquiry>({
    occasion: 'Wedding',
    tierCount: '2-tier',
    guestCount: 32,
    spongeFlavor: 'Damask Rose & Vanilla Chiffon',
    fillingFlavor: 'Lychee Compote & Mascarpone',
    finishStyle: 'Vintage Lambeth Piped Ruffles',
    colorPalette: 'Warm Cream & Rose Pink with Pearl Accents',
    eventDate: '2026-10-15',
    specialRequests: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Dynamic pricing estimator
  const baseTiers: Record<string, { label: string; guests: string; base: number }> = {
    '1-tier': { label: '1-Tier Petite Elegance', guests: '14–18 guests', base: 125 },
    '2-tier': { label: '2-Tier Classic Celebration', guests: '28–36 guests', base: 195 },
    '3-tier': { label: '3-Tier Grand Gala Masterpiece', guests: '70–90 guests', base: 380 },
  };

  const finishStyles = [
    { id: 'vintage-lambeth', name: 'Vintage Lambeth Piped Ruffles', premium: 20 },
    { id: 'pressed-botanical', name: 'Pressed Edible Meadow Florals', premium: 25 },
    { id: 'textured-ganache', name: 'Architectural Linen Stucco Ganache', premium: 15 },
    { id: 'gold-leaf-minimal', name: '24k Gold Leaf Minimalist Shimmer', premium: 30 },
  ];

  const spongeOptions = [
    'Damask Rose & Vanilla Chiffon',
    'Sicilian Pistachio Frangipane',
    'Valrhona 70% Dark Chocolate Ganache',
    'Lavender Earl Grey Bergamot',
    'Salted Brown Butter & Wild Honey',
  ];

  const fillingOptions = [
    'Lychee Compote & Whipped Mascarpone',
    'Alpine Wild Strawberry Reduction',
    'Roasted Hazelnut Praliné & Fleur de Sel',
    'Meyer Lemon Curd & Elderflower Whipped Ricotta',
    'Tahitian Vanilla Bean Pastry Mousse',
  ];

  const currentTier = baseTiers[formData.tierCount] || baseTiers['2-tier'];
  const selectedFinish = finishStyles.find((f) => f.name === formData.finishStyle) || finishStyles[0];
  const estimatedPrice = currentTier.base + selectedFinish.premium;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.contactEmail) {
      alert('Please provide your name and email so our pastry atelier can contact you.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="custom-cakes-section" className={`py-16 lg:py-24 bg-[#FFF9F6] border-b border-[#F0E4D7] ${isModal ? 'py-6 bg-transparent border-0' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-script text-2xl text-[#FF3B77] font-semibold">
              crafted for your milestone
            </span>
            <span className="text-[#FFC0D3]" aria-hidden="true">✦</span>
            <span className="text-xs uppercase tracking-widest text-[#72524E] font-medium">
              Bespoke Atelier Service
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2624] tracking-tight">
            Design Your Custom Cake
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#553936] leading-relaxed [text-wrap:balance]">
            Whether you are hosting an intimate rehearsal dinner, milestone 30th celebration, or grand botanical wedding, customize your dream cake below to receive an instant estimate and reserve your atelier slot.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto text-center border border-[#FFE3EC] shadow-md animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#FFF0F4] text-[#FF3B77] flex items-center justify-center mx-auto mb-4 border border-[#FFC0D3]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="font-script text-3xl text-[#FF3B77] font-semibold block mb-1">
              Thank you, {formData.contactName}!
            </span>
            <h3 className="font-serif font-bold text-2xl text-[#3D2624] mb-3">
              Your Custom Cake Consultation is Requested
            </h3>
            <p className="text-sm text-[#553936] leading-relaxed mb-6">
              We have received your celebration details for <strong>{formData.occasion}</strong> on <strong>{formData.eventDate}</strong>. Chef Aria will review your design proposal and email you a detailed styling sketch, complimentary tasting box invitation, and availability confirmation within 24 hours.
            </p>

            <div className="p-4 bg-[#FAF7F2] rounded-2xl text-left border border-[#F3ECE2] text-xs space-y-2 mb-6 text-[#553936]">
              <div className="flex justify-between">
                <span className="font-semibold text-[#3D2624]">Configuration:</span>
                <span>{formData.tierCount.toUpperCase()} · {formData.spongeFlavor}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#3D2624]">Finish Aesthetic:</span>
                <span>{formData.finishStyle}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#3D2624]">Estimated Investment:</span>
                <span className="font-bold text-[#FF3B77] tabular-nums">${estimatedPrice}.00</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                if (onClose) onClose();
              }}
              className="bg-[#FF3B77] hover:bg-[#E62562] text-white text-xs font-semibold px-8 py-3 rounded-full rose-shadow transition-all cursor-pointer"
            >
              Configure Another Creation
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#EEDBCC]/70 card-shadow space-y-6"
            >
              {/* Step 1: Occasion & Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2624] mb-2.5">
                  1. The Celebration & Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {['Wedding', 'Milestone Birthday', 'Anniversary', 'Gala / Brand'].map((occ) => (
                    <button
                      type="button"
                      key={occ}
                      onClick={() => setFormData({ ...formData, occasion: occ })}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        formData.occasion === occ
                          ? 'bg-[#FFF0F4] border-[#FF3B77] text-[#FF3B77] font-semibold'
                          : 'bg-white border-[#E6DACD] text-[#553936] hover:border-[#FF3B77]/50'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-[#72524E] block mb-1">Celebration Date</label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3.5 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#72524E] block mb-1">Expected Guests: {formData.guestCount}</label>
                    <input
                      type="range"
                      min={10}
                      max={120}
                      step={5}
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full accent-[#FF3B77] mt-2 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Tiers & Serving Size */}
              <div className="pt-4 border-t border-[#F3ECE2]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2624] mb-2.5">
                  2. Tier Architecture & Scale
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(baseTiers).map(([tierKey, info]) => (
                    <button
                      type="button"
                      key={tierKey}
                      onClick={() => setFormData({ ...formData, tierCount: tierKey })}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        formData.tierCount === tierKey
                          ? 'bg-[#FFF5F7] border-[#FF3B77] ring-1 ring-[#FF3B77]'
                          : 'bg-white border-[#E6DACD] hover:border-[#FF3B77]/50'
                      }`}
                    >
                      <span className="font-serif font-bold text-xs text-[#3D2624] block">
                        {info.label.split(' ')[0]}
                      </span>
                      <span className="text-[11px] text-[#72524E] block mt-0.5">{info.guests}</span>
                      <span className="text-xs font-semibold text-[#FF3B77] block mt-1 tabular-nums">
                        Base ${info.base}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Flavor & Sponge pairing */}
              <div className="pt-4 border-t border-[#F3ECE2]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2624] mb-2.5">
                  3. Signature Sponge & Cream Pairing
                </label>
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] text-[#72524E] block mb-1">Artisan Sponge Cake:</span>
                    <select
                      value={formData.spongeFlavor}
                      onChange={(e) => setFormData({ ...formData, spongeFlavor: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3.5 py-2.5 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77] cursor-pointer"
                    >
                      {spongeOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#72524E] block mb-1">House Filling & Ganache:</span>
                    <select
                      value={formData.fillingFlavor}
                      onChange={(e) => setFormData({ ...formData, fillingFlavor: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3.5 py-2.5 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77] cursor-pointer"
                    >
                      {fillingOptions.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Finish & Botanical Styling */}
              <div className="pt-4 border-t border-[#F3ECE2]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2624] mb-2.5">
                  4. Finish Aesthetic & Botanical Art
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {finishStyles.map((finish) => (
                    <button
                      type="button"
                      key={finish.id}
                      onClick={() => setFormData({ ...formData, finishStyle: finish.name })}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        formData.finishStyle === finish.name
                          ? 'bg-[#FFF0F4] border-[#FF3B77] text-[#3D2624] ring-1 ring-[#FF3B77]'
                          : 'bg-white border-[#E6DACD] text-[#553936] hover:border-[#FF3B77]/50'
                      }`}
                    >
                      <span className="font-medium text-xs block">{finish.name}</span>
                      <span className="text-[10px] text-[#FF3B77] font-semibold tabular-nums mt-0.5 block">
                        +${finish.premium} artisan finish
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 5: Contact Details */}
              <div className="pt-4 border-t border-[#F3ECE2]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2624] mb-2.5">
                  5. Contact & Delivery Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3.5 py-2.5 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3.5 py-2.5 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                    />
                  </div>
                </div>

                <textarea
                  placeholder="Special requests: dietary restrictions, floral color preferences, venue delivery address, or bespoke inscriptions..."
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl p-3 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF3B77] hover:bg-[#E62562] text-white py-3.5 rounded-full font-semibold text-sm rose-shadow transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Custom Cake Consultation</span>
              </button>
            </form>

            {/* Live Preview & Atelier Consultation Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#FFE3EC] shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#F3ECE2]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF3B77]">
                      Live Specification
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#3D2624]">
                      {formData.occasion} Celebration
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F4] text-[#FF3B77] flex items-center justify-center">
                    <Cake className="w-5 h-5" />
                  </div>
                </div>

                <div className="py-4 space-y-3 text-xs text-[#553936]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#72524E]">Architecture:</span>
                    <span className="font-semibold text-[#3D2624]">{currentTier.label}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#72524E]">Portions:</span>
                    <span className="font-semibold text-[#3D2624]">{currentTier.guests} (for {formData.guestCount} guests)</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[#72524E]">Sponge:</span>
                    <span className="font-semibold text-[#3D2624] text-right max-w-[65%]">{formData.spongeFlavor}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[#72524E]">Filling:</span>
                    <span className="font-semibold text-[#3D2624] text-right max-w-[65%]">{formData.fillingFlavor}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[#72524E]">Styling:</span>
                    <span className="font-semibold text-[#FF3B77] text-right max-w-[65%]">{formData.finishStyle}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#72524E]">Event Date:</span>
                    <span className="font-semibold text-[#3D2624]">{formData.eventDate || 'Pending'}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F3ECE2] flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-[#72524E] block">Estimated Base Price</span>
                    <span className="font-script text-base text-[#FF3B77] font-semibold">tasting flight included</span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-2xl text-[#3D2624] tabular-nums">
                      ${estimatedPrice}.00
                    </span>
                    <span className="text-[10px] text-[#93726D] block">Includes consultation & floral styling</span>
                  </div>
                </div>
              </div>

              {/* Tasting Box Callout for Event Planners */}
              <div className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#EEDBCC] text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-[#FF3B77]" />
                  <span className="font-serif font-semibold text-sm text-[#3D2624]">
                    Complimentary Tasting Flight
                  </span>
                </div>
                <p className="text-xs text-[#72524E] leading-relaxed mb-3">
                  All custom celebration cake reservations over $150 include our complimentary 4-slice Tasting Flight delivered right to your door so you can taste before finalizing.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF3B77]">
                  <span>4 micro-cakes · Pairing notes · Delivered in rose box</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
