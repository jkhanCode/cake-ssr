import React, { useState } from 'react';
import { Product } from '../types';
import { BakeryImage } from './BakeryImage';
import { X, Plus, Minus, ShoppingBag, Sparkles, Check, Heart } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, sizeName?: string, quantity?: number, note?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [personalization, setPersonalization] = useState('');
  const [added, setAdded] = useState(false);

  const selectedSize = product.sizes ? product.sizes[selectedSizeIndex] : undefined;
  const currentPrice = selectedSize ? product.price * selectedSize.priceMultiplier : product.price;

  const handleAdd = () => {
    onAddToCart(product, selectedSize?.name, quantity, personalization);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#FFE3EC] animate-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-[#3D2624] hover:bg-[#FF3B77] hover:text-white transition-all flex items-center justify-center shadow-md cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left: Product Image */}
          <div className="md:col-span-6 bg-[#FAF7F2] relative">
            <BakeryImage
              src={product.image}
              alt={product.name}
              aspectRatioClass="aspect-square md:aspect-[4/5] h-full"
              badge={product.badgeText}
            />
          </div>

          {/* Right: Details & Order Module */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & Servings */}
              <div className="flex items-center gap-2 text-xs text-[#93726D] mb-1.5">
                <span className="uppercase font-bold tracking-wider text-[11px] text-[#FF3B77]">
                  {product.category === 'fresh-cakes'
                    ? 'Fresh Cake'
                    : product.category === 'sweet-pastries'
                    ? 'Sweet Pastry'
                    : 'Custom Celebration'}
                </span>
                {product.servings && (
                  <>
                    <span aria-hidden="true" className="text-[#C2ABA7]">·</span>
                    <span>{product.servings}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="font-serif font-bold text-2xl text-[#3D2624] leading-snug mb-2">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif font-bold text-2xl text-[#3D2624] tabular-nums">
                  ${(currentPrice * quantity).toFixed(2)}
                </span>
                {quantity > 1 && (
                  <span className="text-xs text-[#93726D]">
                    (${currentPrice.toFixed(2)} each)
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#553936] leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Flavor Profile */}
              <div className="mb-5 p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#F3ECE2]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#72524E] block mb-1.5">
                  Tasting Notes & Palate
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#3D2624]">
                  {product.flavorNotes.map((note, idx) => (
                    <span key={note} className="inline-block bg-white px-2.5 py-1 rounded-md border border-[#EEDBCC] text-[11px]">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Size Selector if available */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D2624] block mb-2">
                    Select Celebration Size
                  </span>
                  <div className="space-y-2">
                    {product.sizes.map((s, index) => (
                      <button
                        type="button"
                        key={s.name}
                        onClick={() => setSelectedSizeIndex(index)}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                          selectedSizeIndex === index
                            ? 'bg-[#FFF0F4] border-[#FF3B77] text-[#3D2624] font-medium'
                            : 'bg-white border-[#E6DACD] text-[#553936] hover:border-[#FF3B77]/50'
                        }`}
                      >
                        <span>{s.name}</span>
                        <span className="font-semibold text-[#FF3B77] tabular-nums">
                          ${(product.price * s.priceMultiplier).toFixed(2)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Personalization Note */}
              <div className="mb-5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#3D2624] block mb-1">
                  Complimentary Gift Inscription (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 'Happy 30th Birthday, Chloe! ♡'"
                  maxLength={60}
                  value={personalization}
                  onChange={(e) => setPersonalization(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                />
              </div>

              {/* Ingredients Transparency */}
              <div className="text-[11px] text-[#93726D] mb-6">
                <span className="font-medium text-[#72524E]">Key Ingredients: </span>
                {product.ingredients.join(', ')}.
              </div>
            </div>

            {/* Bottom Actions: Quantity Stepper & Add to Bag Button */}
            <div className="pt-4 border-t border-[#F3ECE2] flex items-center gap-3">
              <div className="flex items-center border border-[#E6DACD] rounded-full p-1 bg-[#FAF7F2]">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-[#3D2624] transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs font-semibold tabular-nums text-[#3D2624]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-[#3D2624] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                disabled={added}
                className="flex-grow bg-[#FF3B77] hover:bg-[#E62562] text-white py-3 px-6 rounded-full text-xs font-semibold rose-shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:bg-emerald-600"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag · ${(currentPrice * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
