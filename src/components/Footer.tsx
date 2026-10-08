import React, { useState } from 'react';
import { Heart, Sparkles, Send, Check } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#2B1816] text-[#EADBCE] pt-16 pb-12 border-t border-[#3D2624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#3D2624]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-3xl font-serif font-bold tracking-tight text-white block">
              Cakelab
            </span>
            <span className="font-script text-2xl text-[#FF5C8D] block">
              baked with passion, served with love
            </span>
            <p className="text-xs text-[#C2ABA7] leading-relaxed max-w-sm">
              An artisan confectionery atelier blending classic French patisserie technique with organic botanicals, edible petals, and modern celebratory design.
            </p>
            <div className="pt-2 text-xs text-[#93726D]">
              <p>142 Rosewood Lane, Confectionery Quarter</p>
              <p className="mt-1">Tue – Sun: 8:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white tracking-wide">
              Creations
            </h4>
            <ul className="space-y-2 text-xs text-[#C2ABA7]">
              <li>
                <button
                  onClick={() => onNavigateToSection('fresh-cakes-section')}
                  className="hover:text-white transition-colors"
                >
                  Fresh Cakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('sweet-pastries-section')}
                  className="hover:text-white transition-colors"
                >
                  Sweet Pastries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('custom-cakes-section')}
                  className="hover:text-white transition-colors"
                >
                  Custom Cakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('treats-section')}
                  className="hover:text-white transition-colors"
                >
                  Tasting Flights
                </button>
              </li>
            </ul>
          </div>

          {/* Atelier Experience */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white tracking-wide">
              Atelier
            </h4>
            <ul className="space-y-2 text-xs text-[#C2ABA7]">
              <li>
                <button
                  onClick={() => onNavigateToSection('about-section')}
                  className="hover:text-white transition-colors"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('atelier-section')}
                  className="hover:text-white transition-colors"
                >
                  Tasting Salon
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('custom-cakes-section')}
                  className="hover:text-white transition-colors"
                >
                  Event Catering
                </button>
              </li>
              <li>
                <span className="text-[#93726D]">Allergen Directory</span>
              </li>
            </ul>
          </div>

          {/* Tasting Club Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white tracking-wide">
              The Secret Tasting Club
            </h4>
            <p className="text-xs text-[#C2ABA7] leading-relaxed">
              Receive secret weekend micro-batch drop notifications, seasonal tasting invitations, and 10% off your first cake order.
            </p>

            {subscribed ? (
              <div className="bg-[#3D2624] p-3 rounded-2xl border border-[#FF3B77]/30 flex items-center gap-2 text-xs text-[#FFE3EC]">
                <Check className="w-4 h-4 text-[#FF5C8D]" />
                <span>Welcome to the club! Use code <strong>ROSEWOOD10</strong> for 10% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#3D2624] border border-[#553936] text-xs text-white placeholder-[#93726D] px-4 py-2.5 rounded-full flex-grow focus:outline-none focus:border-[#FF5C8D]"
                />
                <button
                  type="submit"
                  className="bg-[#FF3B77] hover:bg-[#E62562] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Join</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Natural Prose */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#93726D] gap-4">
          <p>© 2026 Cakelab Confectionery Atelier. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-[#C2ABA7]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF5C8D] fill-current" />
            <span>and organic butter for sweet dreamers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
