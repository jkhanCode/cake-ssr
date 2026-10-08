/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TreatsSection } from './components/TreatsSection';
import { AboutSection } from './components/AboutSection';
import { CustomCakeBuilder } from './components/CustomCakeBuilder';
import { TastingBoxBanner } from './components/TastingBoxBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AtelierVisit } from './components/AtelierVisit';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { Product, CartItem, ProductCategory } from './types';
import { BAKERY_PRODUCTS } from './data/bakeryData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      product: BAKERY_PRODUCTS[0], // Rose & Lychee Petal Chiffon
      selectedSize: '6" Petite Celebration (6–8 portions)',
      quantity: 1,
      unitPrice: 68,
      personalizationNote: 'Happy Birthday Juliette ♡',
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProductCategory>('all');

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'fresh-cakes-section') {
      setActiveFilter('fresh-cakes');
      const el = document.getElementById('treats-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'sweet-pastries-section') {
      setActiveFilter('sweet-pastries');
      const el = document.getElementById('treats-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'custom-cakes-section') {
      const el = document.getElementById('custom-cakes-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'about-section') {
      const el = document.getElementById('about-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'atelier-section') {
      const el = document.getElementById('atelier-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickAdd = (product: Product) => {
    const existing = cartItems.find(
      (item) => item.product.id === product.id && !item.selectedSize
    );
    if (existing) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${product.id}`,
        product,
        quantity: 1,
        unitPrice: product.price,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
    setIsCartOpen(true);
  };

  const handleAddDetailed = (
    product: Product,
    sizeName?: string,
    quantity: number = 1,
    note?: string
  ) => {
    let unitPrice = product.price;
    if (sizeName && product.sizes) {
      const matched = product.sizes.find((s) => s.name === sizeName);
      if (matched) {
        unitPrice = product.price * matched.priceMultiplier;
      }
    }

    const newItem: CartItem = {
      id: `cart-${Date.now()}-${product.id}`,
      product,
      selectedSize: sizeName,
      quantity,
      unitPrice,
      personalizationNote: note?.trim() || undefined,
    };

    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D2624] font-sans flex flex-col">
      {/* Top Bar Contract compliant Navigation */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateToSection={scrollToSection}
        onOpenCustomBuilder={() => scrollToSection('custom-cakes-section')}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => {
            setActiveFilter('all');
            const el = document.getElementById('treats-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onDiscoverStory={() => scrollToSection('about-section')}
          onOpenCustomBuilder={() => scrollToSection('custom-cakes-section')}
        />

        {/* Signature Treats Section: Fresh Cakes, Sweet Pastries, Custom Cakes */}
        <TreatsSection
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onQuickView={(prod) => setSelectedProduct(prod)}
          onQuickAdd={handleQuickAdd}
          onOpenCustomBuilder={() => scrollToSection('custom-cakes-section')}
        />

        {/* About Us Narrative & Parisian Patisserie Story */}
        <AboutSection
          onOpenCustomBuilder={() => scrollToSection('custom-cakes-section')}
          onExploreMenu={() => {
            setActiveFilter('all');
            const el = document.getElementById('treats-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Custom Cakes Configurator & Inquiry Builder */}
        <CustomCakeBuilder />

        {/* Tasting Flight Spotlight Banner */}
        <TastingBoxBanner onAddTastingBox={handleQuickAdd} />

        {/* Event Planner & Customer Testimonials */}
        <TestimonialsSection />

        {/* Atelier & Tasting Room Reservation */}
        <AtelierVisit />
      </main>

      {/* Boutique Footer */}
      <Footer onNavigateToSection={scrollToSection} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddDetailed}
      />

      {/* Slide-out Cart Drawer with Delivery/Pickup & Checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
