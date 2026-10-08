import React, { useState } from 'react';
import { Cake, Sparkles } from 'lucide-react';

interface BakeryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  badge?: string;
}

export const BakeryImage: React.FC<BakeryImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  badge,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#F3ECE2] ${aspectRatioClass} ${className}`}>
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#F3ECE2] animate-pulse">
              <Cake className="w-8 h-8 text-[#FF3B77]/30 animate-spin" />
            </div>
          )}
        </>
      ) : (
        /* Resilient Zero-Broken-Image Fallback Canvas */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#FFF5F7] via-[#FAF7F2] to-[#F3ECE2] text-center border border-[#FFE3EC]">
          <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#FF3B77] mb-3">
            <Cake className="w-7 h-7" />
          </div>
          <span className="font-serif font-medium text-sm text-[#3D2624] tracking-wide mb-1">
            Cakelab Atelier
          </span>
          <span className="text-xs text-[#72524E] line-clamp-1 italic font-script text-base">
            Baked with passion & love
          </span>
        </div>
      )}

      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/95 backdrop-blur-sm text-[#FF3B77] shadow-sm border border-[#FFE3EC]">
            <Sparkles className="w-3 h-3 text-[#FF3B77]" />
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
