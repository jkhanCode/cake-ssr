export type ProductCategory = 'all' | 'fresh-cakes' | 'sweet-pastries' | 'custom-cakes';

export interface Product {
  id: string;
  name: string;
  category: 'fresh-cakes' | 'sweet-pastries' | 'custom-cakes';
  tagline: string;
  description: string;
  price: number;
  image: string;
  servings?: string;
  flavorNotes: string[];
  dietary: string; // e.g. "Vegetarian · Halal Friendly" or "Nut-Free Option"
  badgeText?: string;
  popular?: boolean;
  ingredients: string[];
  sizes?: { name: string; priceMultiplier: number; slices: string }[];
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize?: string;
  quantity: number;
  unitPrice: number;
  personalizationNote?: string;
}

export interface CustomCakeInquiry {
  occasion: string;
  tierCount: string;
  guestCount: number;
  spongeFlavor: string;
  fillingFlavor: string;
  finishStyle: string;
  colorPalette: string;
  eventDate: string;
  specialRequests: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}
