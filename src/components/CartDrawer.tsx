import React, { useState } from 'react';
import { CartItem } from '../types';
import { BakeryImage } from './BakeryImage';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Sparkles, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryDate, setDeliveryDate] = useState('2026-10-02');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    specialInstructions: '',
  });

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const deliveryFee = deliveryMethod === 'delivery' ? (rawSubtotal >= 75 ? 0 : 12) : 0;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + deliveryFee);

  const freeDeliveryThreshold = 75;
  const amountToFreeDelivery = Math.max(0, freeDeliveryThreshold - rawSubtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ROSEWOOD10' || promoCode.trim().toUpperCase() === 'CAKELAB10') {
      setDiscountPercent(10);
      setPromoMessage('10% Sweet Welcome discount applied!');
    } else {
      setPromoMessage('Invalid code. Try "ROSEWOOD10"');
    }
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.email) {
      alert('Please fill in your name and email to proceed.');
      return;
    }
    setOrderComplete(true);
  };

  const handleFinish = () => {
    setOrderComplete(false);
    setIsCheckingOut(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#FFE3EC] animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#F0E4D7] bg-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#FF3B77]" />
              <h2 className="font-serif font-bold text-lg text-[#3D2624]">
                Your Treat Bag
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FFE3EC] text-[#FF3B77]">
                {items.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="w-8 h-8 rounded-full bg-white text-[#553936] hover:text-[#3D2624] hover:bg-[#F3ECE2] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {orderComplete ? (
            /* Order Success Receipt View */
            <div className="p-6 overflow-y-auto flex-grow flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFF0F4] text-[#FF3B77] flex items-center justify-center mb-4 border border-[#FFC0D3]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="font-script text-3xl text-[#FF3B77] font-semibold block mb-1">
                Baked with love!
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#3D2624] mb-2">
                Order Confirmed
              </h3>
              <p className="text-xs text-[#553936] leading-relaxed mb-6">
                Thank you, <strong>{customerInfo.name}</strong>. Your order <strong>#CKL-{Math.floor(1000 + Math.random() * 9000)}</strong> has been received by our morning bake team. A confirmation receipt was dispatched to <strong>{customerInfo.email}</strong>.
              </p>

              <div className="w-full bg-[#FAF7F2] rounded-2xl p-4 text-left border border-[#F3ECE2] text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#72524E]">Method:</span>
                  <span className="font-semibold text-[#3D2624]">
                    {deliveryMethod === 'pickup' ? 'Atelier Counter Pickup' : 'Chilled Courier Delivery'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#72524E]">Date:</span>
                  <span className="font-semibold text-[#3D2624]">{deliveryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#72524E]">Total Paid:</span>
                  <span className="font-bold text-[#FF3B77] tabular-nums">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full bg-[#FF3B77] hover:bg-[#E62562] text-white py-3 rounded-full text-xs font-semibold rose-shadow transition-all cursor-pointer"
              >
                Back to Confectionery Gallery
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form View */
            <form onSubmit={handleConfirmOrder} className="p-6 overflow-y-auto flex-grow space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F3ECE2]">
                <h3 className="font-serif font-bold text-base text-[#3D2624]">
                  Fulfillment & Contact
                </h3>
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="text-xs text-[#FF3B77] hover:underline"
                >
                  ← Edit items
                </button>
              </div>

              {/* Delivery vs Pickup Toggle */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D2624] block mb-2">
                  Receiving Preference
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                      deliveryMethod === 'pickup'
                        ? 'bg-[#FFF0F4] border-[#FF3B77] text-[#FF3B77] font-semibold'
                        : 'bg-white border-[#E6DACD] text-[#553936]'
                    }`}
                  >
                    Atelier Pickup (Free)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                      deliveryMethod === 'delivery'
                        ? 'bg-[#FFF0F4] border-[#FF3B77] text-[#FF3B77] font-semibold'
                        : 'bg-white border-[#E6DACD] text-[#553936]'
                    }`}
                  >
                    Courier (${rawSubtotal >= 75 ? 'Free' : '$12'})
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                  Requested Date
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mia Alverez"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                  />
                </div>
              </div>

              {deliveryMethod === 'delivery' && (
                <div>
                  <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street, Suite, City & Zip Code"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                  />
                </div>
              )}

              <div>
                <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                  Delivery Notes / Candle Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Please include 5 gold birthday candles & leave with concierge."
                  value={customerInfo.specialInstructions}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, specialInstructions: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl p-2.5 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#FF3B77] hover:bg-[#E62562] text-white py-3.5 rounded-full text-xs font-semibold rose-shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Place Order · ${grandTotal.toFixed(2)}</span>
                </button>
              </div>
            </form>
          ) : (
            /* Items List View */
            <div className="flex-grow flex flex-col justify-between overflow-hidden">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-grow p-8 text-center text-[#72524E]">
                  <div className="w-16 h-16 rounded-full bg-[#FFF0F4] text-[#FF3B77] flex items-center justify-center mb-4">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#3D2624] mb-1">
                    Your bag is empty
                  </h4>
                  <p className="text-xs text-[#93726D] max-w-xs mb-6">
                    Our morning ovens are baking fresh batches. Explore our fresh cakes or flaky morning pastries.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-[#3D2624] hover:bg-[#261614] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    Explore Treats
                  </button>
                </div>
              ) : (
                <>
                  {/* Delivery Threshold Progress */}
                  <div className="bg-[#FFF5F7] p-3 px-6 border-b border-[#FFE3EC] text-xs">
                    {rawSubtotal >= freeDeliveryThreshold ? (
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <Truck className="w-3.5 h-3.5" />
                        <span>You unlocked free celebration courier delivery!</span>
                      </div>
                    ) : (
                      <div className="text-[#553936]">
                        Add <strong className="text-[#FF3B77]">${amountToFreeDelivery.toFixed(2)}</strong> more to unlock free courier delivery.
                      </div>
                    )}
                  </div>

                  {/* Scrollable Items */}
                  <div className="p-6 overflow-y-auto space-y-4 flex-grow">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3.5 pb-4 border-b border-[#F3ECE2] last:border-0"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#F3ECE2]">
                          <BakeryImage
                            src={item.product.image}
                            alt={item.product.name}
                            aspectRatioClass="aspect-square"
                          />
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4 className="font-serif font-bold text-xs text-[#3D2624] line-clamp-1">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              aria-label="Remove item"
                              className="text-[#C2ABA7] hover:text-[#FF3B77] transition-colors p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {item.selectedSize && (
                            <span className="text-[11px] text-[#93726D] block">
                              {item.selectedSize}
                            </span>
                          )}

                          {item.personalizationNote && (
                            <span className="text-[10px] text-[#FF3B77] italic line-clamp-1">
                              "{item.personalizationNote}"
                            </span>
                          )}

                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs font-semibold text-[#3D2624] tabular-nums">
                              ${(item.unitPrice * item.quantity).toFixed(2)}
                            </span>

                            {/* Mini stepper */}
                            <div className="flex items-center border border-[#E6DACD] rounded-full px-1.5 py-0.5 bg-[#FAF7F2]">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="text-[#72524E] hover:text-[#3D2624] px-1"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-[11px] font-semibold tabular-nums px-1.5">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="text-[#72524E] hover:text-[#3D2624] px-1"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary & Checkout Button Footer */}
                  <div className="p-6 bg-[#FAF7F2] border-t border-[#F0E4D7] space-y-3">
                    {/* Promo Code Input */}
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo code (ROSEWOOD10)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="bg-white border border-[#E6DACD] rounded-full px-3.5 py-1.5 text-xs text-[#3D2624] flex-grow focus:outline-none focus:border-[#FF3B77]"
                      />
                      <button
                        type="submit"
                        className="bg-[#3D2624] text-white text-xs font-medium px-4 py-1.5 rounded-full hover:bg-[#261614] transition-colors whitespace-nowrap"
                      >
                        Apply
                      </button>
                    </form>
                    {promoMessage && (
                      <span className="text-[11px] text-[#FF3B77] block font-medium">
                        {promoMessage}
                      </span>
                    )}

                    {/* Breakdown */}
                    <div className="space-y-1.5 text-xs text-[#553936] pt-1">
                      <div className="flex justify-between">
                        <span>Items Subtotal</span>
                        <span className="tabular-nums font-medium">${rawSubtotal.toFixed(2)}</span>
                      </div>
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-[#FF3B77]">
                          <span>Discount ({discountPercent}%)</span>
                          <span className="tabular-nums font-medium">-${discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between pt-1 border-t border-[#E6DACD]">
                        <span className="font-bold text-sm text-[#3D2624]">Total Due</span>
                        <span className="font-serif font-bold text-lg text-[#3D2624] tabular-nums">
                          ${grandTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsCheckingOut(true)}
                      className="w-full bg-[#FF3B77] hover:bg-[#E62562] text-white py-3.5 rounded-full text-xs font-semibold rose-shadow transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
