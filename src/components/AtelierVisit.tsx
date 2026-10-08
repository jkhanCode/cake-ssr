import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Calendar, CheckCircle2, Coffee } from 'lucide-react';
import { BakeryImage } from './BakeryImage';

export const AtelierVisit: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('2026-10-18');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [guestCount, setGuestCount] = useState('2 Guests');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [clientName, setClientName] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      alert('Please enter your name to reserve the tasting salon.');
      return;
    }
    setBookingSuccess(true);
  };

  return (
    <section id="atelier-section" className="py-20 lg:py-28 bg-[#FFF9F6] border-b border-[#F0E4D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Atelier Overview & Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-script text-2xl text-[#FF3B77] font-semibold">
                  welcome to our sanctuary
                </span>
                <span className="text-[#FFC0D3]" aria-hidden="true">✦</span>
                <span className="text-xs uppercase tracking-widest text-[#72524E] font-medium">
                  The Rosewood Atelier
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2624] tracking-tight mb-4">
                Visit the Cakelab Atelier & Tasting Room
              </h2>
              <p className="text-base text-[#553936] leading-relaxed [text-wrap:balance]">
                Step into our sunlit patisserie kitchen scented with roasted vanilla beans and browned Normandy butter. Enjoy warm morning pastries fresh from our stone deck ovens, or reserve an intimate seated cake tasting session with our pastry team.
              </p>
            </div>

            {/* Atelier Key Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-2xl border border-[#F0E4D7] shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F4] text-[#FF3B77] flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#3D2624] mb-1">
                  Atelier Address
                </h4>
                <p className="text-xs text-[#72524E] leading-relaxed">
                  142 Rosewood Lane, Confectionery Quarter<br />
                  Complimentary visitor parking at rear
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#F0E4D7] shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#FFF0F4] text-[#FF3B77] flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#3D2624] mb-1">
                  Operating Hours
                </h4>
                <p className="text-xs text-[#72524E] leading-relaxed">
                  Tue – Sun: 8:00 AM – 6:00 PM<br />
                  Monday: Closed for recipe laboratory
                </p>
              </div>
            </div>

            {/* Direct Contact Line */}
            <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#EEDBCC] flex items-center justify-between text-xs text-[#553936]">
              <div>
                <span className="font-semibold text-[#3D2624] block">Concierge & Event Inquiries:</span>
                <span className="text-[#72524E]">hello@cakelab-atelier.com · (555) 849-2253</span>
              </div>
              <span className="font-script text-lg text-[#FF3B77] font-semibold">
                pickups ready in 15m
              </span>
            </div>
          </div>

          {/* Right Column: Private Tasting Salon Booking Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#FFE3EC] shadow-xl shadow-[#3D2624]/5">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F3ECE2]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF3B77]">
                    By Appointment
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#3D2624]">
                    Reserve a Private Tasting Salon
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#FFF0F4] text-[#FF3B77] flex items-center justify-center">
                  <Coffee className="w-6 h-6" />
                </div>
              </div>

              {bookingSuccess ? (
                <div className="text-center py-6 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#FFF0F4] text-[#FF3B77] flex items-center justify-center mx-auto mb-3 border border-[#FFC0D3]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <span className="font-script text-2xl text-[#FF3B77] font-semibold block">
                    Reserved for {clientName}
                  </span>
                  <h4 className="font-serif font-bold text-xl text-[#3D2624] mt-1 mb-2">
                    Tasting Salon Appointment Confirmed
                  </h4>
                  <p className="text-xs text-[#553936] leading-relaxed max-w-sm mx-auto mb-6">
                    We look forward to welcoming you on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> ({guestCount}). A tasting menu of four freshly-cut seasonal creations paired with botanical floral teas will be prepared for you.
                  </p>
                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setClientName('');
                    }}
                    className="bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#3D2624] text-xs font-semibold px-6 py-2.5 rounded-full border border-[#EEDBCC] transition-all cursor-pointer"
                  >
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <p className="text-xs text-[#72524E] leading-relaxed">
                    Enjoy a dedicated 45-minute seated consultation with our master cake artist, including 4 artisan cake samples and organic French tea pairings.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                        Select Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                        Tasting Time
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77] cursor-pointer"
                      >
                        <option value="10:00 AM">10:00 AM (Morning Salon)</option>
                        <option value="11:30 AM">11:30 AM (Mid-day Salon)</option>
                        <option value="2:00 PM">2:00 PM (Afternoon Tea)</option>
                        <option value="4:00 PM">4:00 PM (Golden Hour Salon)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                        Party Size
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77] cursor-pointer"
                      >
                        <option value="2 Guests">2 Guests (Couple)</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests (Max Salon Capacity)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#3D2624] block mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#E6DACD] rounded-xl px-3 py-2 text-xs text-[#3D2624] focus:outline-none focus:border-[#FF3B77]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#3D2624] hover:bg-[#261614] text-white py-3 rounded-full text-xs font-semibold shadow transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Calendar className="w-4 h-4 text-[#FF3B77]" />
                      <span>Confirm Tasting Salon Reservation</span>
                    </button>
                    <span className="text-[11px] text-[#93726D] text-center block mt-2">
                      $35 deposit deducted from your custom cake order.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
