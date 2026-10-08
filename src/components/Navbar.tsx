import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenCustomBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  onOpenCart,
  onNavigateToSection,
  onOpenCustomBuilder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fresh Cakes', id: 'fresh-cakes-section' },
    { label: 'Sweet Pastries', id: 'sweet-pastries-section' },
    { label: 'Custom Cakes', id: 'custom-cakes-section' },
    { label: 'Our Story', id: 'about-section' },
    { label: 'Visit Atelier', id: 'atelier-section' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Ribbon */}
      <div className="bg-[#FFF0F4] border-b border-[#FFE3EC] text-[#3D2624] text-xs py-2 px-4 text-center font-medium">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <span className="font-script text-base text-[#FF3B77] font-semibold">Micro-batch notice:</span>
          <span>Fresh batches baked at 6 AM daily · Custom celebration cakes require 48h notice · Free city delivery over $75</span>
        </div>
      </div>

      {/* Main Header adhering to Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EEDBCC]/60 py-3.5'
            : 'bg-[#FAF7F2] border-b border-[#F0E4D7] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#3D2624] hover:text-[#FF3B77] transition-colors whitespace-nowrap"
          >
            Cakelab
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#553936]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:text-[#FF3B77] transition-colors relative py-1 text-sm tracking-wide whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Bag Button */}
            <button
              onClick={onOpenCart}
              aria-label="View shopping bag"
              className="relative p-2.5 rounded-full text-[#3D2624] hover:text-[#FF3B77] hover:bg-[#FFE3EC]/50 transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#FF3B77] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Primary Order Pill Button */}
            <button
              onClick={onOpenCustomBuilder}
              className="hidden sm:inline-flex items-center gap-2 bg-[#FF3B77] hover:bg-[#E62562] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design Custom Cake</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-full text-[#3D2624] hover:bg-[#F3ECE2] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E6DACD] px-6 py-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left font-serif text-lg text-[#3D2624] hover:text-[#FF3B77] py-1 border-b border-[#F3ECE2]"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    onOpenCustomBuilder();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#FF3B77] text-white text-center py-3 rounded-full font-medium text-sm shadow-sm"
                >
                  Design Custom Cake
                </button>
                <button
                  onClick={() => {
                    onOpenCart();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full border border-[#3D2624] text-[#3D2624] text-center py-2.5 rounded-full font-medium text-sm"
                >
                  View Shopping Bag ({cartItemCount})
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
