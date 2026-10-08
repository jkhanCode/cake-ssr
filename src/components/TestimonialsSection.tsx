import React from 'react';
import { REVIEWS } from '../data/bakeryData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#F0E4D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-script text-2xl text-[#FF3B77] font-semibold">
              sweet love notes
            </span>
            <span className="text-[#FFC0D3]" aria-hidden="true">✦</span>
            <span className="text-xs uppercase tracking-widest text-[#72524E] font-medium">
              Voices of Celebration
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2624] tracking-tight">
            Loved by Planners & Celebrants
          </h2>
          <p className="mt-3 text-base text-[#553936] leading-relaxed [text-wrap:balance]">
            From romantic garden vows to milestone birthdays, read how Cakelab brings sweet joy to extraordinary gatherings.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-7 border border-[#EEDBCC]/70 card-shadow flex flex-col justify-between relative group hover:border-[#FF3B77]/30 transition-all duration-300"
            >
              <div>
                {/* 5-Star Row */}
                <div className="flex items-center gap-1 text-[#FF3B77] mb-5">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm text-[#3D2624] font-serif leading-relaxed italic mb-6">
                  "{review.quote}"
                </blockquote>
              </div>

              {/* Author & Event Info: Clean unboxed metadata with typographic separators */}
              <div className="pt-4 border-t border-[#F3ECE2]">
                <span className="font-serif font-bold text-sm text-[#3D2624] block">
                  {review.author}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#72524E] mt-0.5">
                  <span>{review.role}</span>
                  <span aria-hidden="true" className="text-[#C2ABA7]">·</span>
                  <span className="text-[#FF3B77] font-medium">{review.cakeType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
