import React from 'react';
import { Product } from '../types';
import { BakeryImage } from './BakeryImage';
import { Plus, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onQuickAdd,
}) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EEDBCC]/70 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Top Image Container */}
      <div className="relative overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <BakeryImage
          src={product.image}
          alt={product.name}
          aspectRatioClass="aspect-[4/3]"
          badge={product.badgeText}
        />

        {/* Subtle Quick View Overlay button */}
        <div className="absolute inset-0 bg-[#3D2624]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#3D2624] text-xs font-semibold px-4 py-2 rounded-full shadow-md backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <Eye className="w-3.5 h-3.5 text-[#FF3B77]" />
            View Details
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Unboxed clean metadata with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-[#93726D] mb-1.5">
            <span className="uppercase font-semibold tracking-wider text-[11px] text-[#FF3B77]">
              {product.category === 'fresh-cakes'
                ? 'Fresh Cake'
                : product.category === 'sweet-pastries'
                ? 'Sweet Pastry'
                : 'Custom Cake'}
            </span>
            {product.servings && (
              <>
                <span aria-hidden="true" className="text-[#C2ABA7]">·</span>
                <span className="truncate">{product.servings}</span>
              </>
            )}
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif font-bold text-lg text-[#3D2624] group-hover:text-[#FF3B77] transition-colors cursor-pointer leading-snug mb-2 line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Tagline / Tasting Notes */}
          <p className="text-xs text-[#72524E] leading-relaxed line-clamp-2 mb-3">
            {product.tagline}
          </p>

          {/* Key Flavor Notes: unboxed inline typography */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#93726D] mb-4">
            {product.flavorNotes.slice(0, 3).map((note, index) => (
              <React.Fragment key={note}>
                <span>{note}</span>
                {index < Math.min(product.flavorNotes.length - 1, 2) && (
                  <span aria-hidden="true" className="text-[#C2ABA7]">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Price & Order Action */}
        <div className="pt-3 border-t border-[#F3ECE2] flex items-center justify-between mt-auto">
          <div>
            <span className="text-[11px] text-[#93726D] block">Price</span>
            <span className="font-serif font-bold text-lg text-[#3D2624] tabular-nums">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickAdd(product)}
              className="inline-flex items-center gap-1.5 bg-[#FFF0F4] hover:bg-[#FF3B77] text-[#FF3B77] hover:text-white border border-[#FFC0D3] hover:border-[#FF3B77] text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
