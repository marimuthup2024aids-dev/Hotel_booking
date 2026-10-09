import React, { useState } from "react";
import { useHotel } from "../context/HotelContext";
import {
  CloseIcon,
  CheckIcon,
  CalendarIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  PrinterIcon,
  ChevronRightIcon
} from "./Icons";

export const BookingWizardModal = () => {
  const {
    bookingModalHotel,
    setBookingModalHotel,
    filters,
    formatPrice,
    addBooking,
    setIsMyBookingsOpen
  } = useHotel();

  if (!bookingModalHotel) return null;

  // Step state (1: Dates & Add-ons, 2: Guest Info, 3: Payment, 4: Confirmed Pass)
  const [step, setStep] = useState(1);

  // Dates & Guests
  const [checkIn, setCheckIn] = useState(filters.checkIn || "2026-11-15");
  const [checkOut, setCheckOut] = useState(filters.checkOut || "2026-11-18");
  const [guests, setGuests] = useState(filters.guests || 2);

  // Add-ons selection
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Guest Details
  const [guestInfo, setGuestInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialRequests: ""
  });

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    exp: "",
    cvv: "",
    name: ""
  });

  // Coupon state
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0); // percentage 0 or 20
  const [promoMessage, setPromoMessage] = useState("");

  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Calculate nights
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end - start);
  const calculatedNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))) || 3;

  // Calculate pricing in USD
  const baseTotalUSD = bookingModalHotel.pricePerNight * calculatedNights;
  
  const addOnsTotalUSD = selectedAddOns.reduce((sum, item) => {
    if (item === "Airport Shuttle") return sum + 45;
    if (item === "VIP Spa Pass") return sum + 60;
    if (item === "Champagne Breakfast") return sum + 30 * calculatedNights;
    return sum;
  }, 0);

  const subtotalUSD = baseTotalUSD + addOnsTotalUSD;
  const discountUSD = (subtotalUSD * appliedDiscount) / 100;
  const taxUSD = Math.round((subtotalUSD - discountUSD) * 0.12);
  const finalTotalUSD = subtotalUSD - discountUSD + taxUSD;

  const handleAddOnToggle = (addonName) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonName)
        ? prev.filter((a) => a !== addonName)
        : [...prev, addonName]
    );
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "LUXE20") {
      setAppliedDiscount(20);
      setPromoMessage("Coupon LUXE20 Applied! 20% Discount Activated.");
    } else {
      setPromoMessage("Invalid coupon code. Try 'LUXE20' for 20% off.");
    }
  };

  const handleCompletePayment = (e) => {
    e.preventDefault();
    if (!guestInfo.fullName || !guestInfo.email) return;

    const bookingData = {
      hotelId: bookingModalHotel.id,
      hotelName: bookingModalHotel.name,
      city: bookingModalHotel.city,
      country: bookingModalHotel.country,
      roomType: bookingModalHotel.roomType,
      image: bookingModalHotel.image,
      checkIn,
      checkOut,
      nights: calculatedNights,
      guests,
      guestName: guestInfo.fullName,
      guestEmail: guestInfo.email,
      guestPhone: guestInfo.phone,
      totalUSD: finalTotalUSD,
      paymentMethod: paymentMethod === "card" ? "Credit Card (**** " + (cardDetails.number.slice(-4) || "4242") + ")" : paymentMethod.toUpperCase(),
      specialRequests: guestInfo.specialRequests,
      addOns: selectedAddOns
    };

    const newBooking = addBooking(bookingData);
    setConfirmedBooking(newBooking);
    setStep(4);
  };

  return (
    <div className="modal-overlay" onClick={() => setBookingModalHotel(null)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "850px" }}>
        
        {/* Wizard Header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold-light)", fontWeight: 700, textTransform: "uppercase" }}>
              Instant Booking Engine
            </span>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0 }}>
              {bookingModalHotel.name}
            </h3>
          </div>

          <button onClick={() => setBookingModalHotel(null)} className="btn btn-outline btn-icon">
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Wizard Progress Steps Bar */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-input)" }}>
          {[
            { num: 1, label: "1. Dates & Add-ons" },
            { num: 2, label: "2. Guest Info" },
            { num: 3, label: "3. Payment" },
            { num: 4, label: "4. Confirmation" }
          ].map((s) => (
            <div
              key={s.num}
              style={{
                flex: 1,
                padding: "12px",
                textAlign: "center",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: step === s.num ? "var(--accent-gold-light)" : step > s.num ? "var(--accent-emerald)" : "var(--text-muted)",
                borderBottom: `3px solid ${step === s.num ? "var(--accent-gold)" : step > s.num ? "var(--accent-emerald)" : "transparent"}`
              }}
            >
              {s.label}
            </div>
          ))}
        </div>

        {/* Step 1: Dates & Add-ons */}
        {step === 1 && (
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }}>
              <div className="form-group">
                <label className="form-label">Check-In Date</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Check-Out Date</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Guests Count</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="form-select"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>
            </div>

            <div style={{ padding: "12px 16px", backgroundColor: "rgba(217, 119, 6, 0.1)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-gold)" }}>
              <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent-gold-light)" }}>
                Selected Stay Duration: {calculatedNights} Night(s)
              </span>
            </div>

            {/* Optional Add-ons */}
            <div>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>Optional Luxury Add-ons</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { id: "Airport Shuttle", name: "VIP Airport Chauffeur Shuttle", price: 45, desc: "Private luxury sedan transfer to/from airport." },
                  { id: "VIP Spa Day Pass", name: "Thermal Spa & Hydrotherapy Day Pass", price: 60, desc: "Full access to steam rooms, thermal pools, and aromatherapy." },
                  { id: "Champagne Breakfast", name: "All-Inclusive Champagne Breakfast", price: 30 * calculatedNights, desc: "Daily gourmet breakfast delivered to room or balcony." }
                ].map((addon) => {
                  const isSelected = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleAddOnToggle(addon.id)}
                      style={{
                        padding: "14px",
                        borderRadius: "var(--radius-md)",
                        border: `1px solid ${isSelected ? "var(--accent-gold)" : "var(--border-subtle)"}`,
                        backgroundColor: isSelected ? "rgba(217, 119, 6, 0.1)" : "var(--bg-input)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <input type="checkbox" checked={isSelected} readOnly style={{ accentColor: "var(--accent-gold)" }} />
                        <div>
                          <span style={{ fontWeight: 700, fontSize: "0.95rem", display: "block" }}>{addon.name}</span>
                          <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{addon.desc}</span>
                        </div>
                      </div>
                      <span style={{ fontWeight: 700, color: "var(--accent-gold-light)" }}>
                        +{formatPrice(addon.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
              <button onClick={() => setStep(2)} className="btn btn-primary btn-lg">
                <span>Continue to Guest Details</span>
                <ChevronRightIcon size={18} />
              </button>
            </div>

          </div>
        )}

        {/* Step 2: Guest Details */}
        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Primary Guest Details</h4>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Victoria Sterling"
                  value={guestInfo.fullName}
                  onChange={(e) => setGuestInfo((prev) => ({ ...prev, fullName: e.target.value }))}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. victoria@example.com"
                  value={guestInfo.email}
                  onChange={(e) => setGuestInfo((prev) => ({ ...prev, email: e.target.value }))}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 019-2834"
                value={guestInfo.phone}
                onChange={(e) => setGuestInfo((prev) => ({ ...prev, phone: e.target.value }))}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Special Requests (Optional)</label>
              <textarea
                rows={3}
                placeholder="High floor request, quiet room, late check-in..."
                value={guestInfo.specialRequests}
                onChange={(e) => setGuestInfo((prev) => ({ ...prev, specialRequests: e.target.value }))}
                className="form-textarea"
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button type="button" onClick={() => setStep(1)} className="btn btn-outline">
                Back
              </button>
              <button type="submit" className="btn btn-primary btn-lg">
                <span>Proceed to Payment</span>
                <ChevronRightIcon size={18} />
              </button>
            </div>

          </form>
        )}

        {/* Step 3: Payment & Coupon */}
        {step === 3 && (
          <form onSubmit={handleCompletePayment} style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Promo Code Box */}
            <div style={{ padding: "16px", backgroundColor: "var(--bg-input)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
              <label className="form-label">Have a Promo Coupon?</label>
              <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
                <input
                  type="text"
                  placeholder="Enter code e.g. LUXE20"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="form-input"
                  style={{ textTransform: "uppercase" }}
                />
                <button type="button" onClick={handleApplyPromo} className="btn btn-secondary">
                  Apply
                </button>
              </div>
              {promoMessage && (
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: appliedDiscount > 0 ? "var(--accent-emerald)" : "var(--accent-danger)", marginTop: "6px", display: "block" }}>
                  {promoMessage}
                </span>
              )}
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="form-label">Select Payment Method</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "6px" }}>
                {["card", "upi", "paypal"].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method)}
                    className={`btn ${paymentMethod === method ? "btn-primary" : "btn-outline"}`}
                    style={{ textTransform: "uppercase" }}
                  >
                    <CreditCardIcon size={16} /> {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Card Form */}
            {paymentMethod === "card" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div className="form-group">
                  <label className="form-label">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="Name on card"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails((prev) => ({ ...prev, name: e.target.value }))}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    placeholder="4532 8920 1234 4242"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails((prev) => ({ ...prev, number: e.target.value }))}
                    className="form-input"
                    required
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div className="form-group">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={cardDetails.exp}
                      onChange={(e) => setCardDetails((prev) => ({ ...prev, exp: e.target.value }))}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVV Code</label>
                    <input
                      type="password"
                      placeholder="123"
                      maxLength={4}
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails((prev) => ({ ...prev, cvv: e.target.value }))}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Final Price Breakdown Table */}
            <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>Order Price Summary</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Base Rate ({calculatedNights} Nights x {formatPrice(bookingModalHotel.pricePerNight)})</span>
                  <span>{formatPrice(baseTotalUSD)}</span>
                </div>
                {addOnsTotalUSD > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--text-muted)" }}>Selected Luxury Add-ons</span>
                    <span>+{formatPrice(addOnsTotalUSD)}</span>
                  </div>
                )}
                {discountUSD > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--accent-emerald)" }}>
                    <span>Promo Discount (20%)</span>
                    <span>-{formatPrice(discountUSD)}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Resort Fees & Taxes (12%)</span>
                  <span>+{formatPrice(taxUSD)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.25rem", fontWeight: 800, marginTop: "8px", borderTop: "1px solid var(--border-gold)", paddingTop: "8px" }}>
                  <span>Total Amount</span>
                  <span style={{ color: "var(--accent-gold-light)" }}>{formatPrice(finalTotalUSD)}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button type="button" onClick={() => setStep(2)} className="btn btn-outline">
                Back
              </button>
              <button type="submit" className="btn btn-primary btn-lg">
                <ShieldCheckIcon size={18} />
                <span>Confirm & Pay {formatPrice(finalTotalUSD)}</span>
              </button>
            </div>

          </form>
        )}

        {/* Step 4: Digital Booking Voucher Pass */}
        {step === 4 && confirmedBooking && (
          <div style={{ padding: "32px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(16, 185, 129, 0.2)", color: "var(--accent-emerald)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckIcon size={36} />
            </div>

            <div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 700, margin: 0, color: "var(--accent-emerald)" }}>
                Booking Confirmed!
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                A confirmation digital receipt has been issued to {confirmedBooking.guestEmail}
              </p>
            </div>

            {/* Digital Pass Card */}
            <div
              style={{
                width: "100%",
                padding: "24px",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--bg-input)",
                border: "1px solid var(--border-gold)",
                textAlign: "left"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "12px", marginBottom: "16px" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Booking Reference</span>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--accent-gold-light)", margin: 0 }}>{confirmedBooking.id}</h4>
                </div>
                <span className="badge badge-emerald">STATUS: CONFIRMED</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "0.9rem" }}>
                <div>
                  <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.78rem" }}>HOTEL</span>
                  <strong>{confirmedBooking.hotelName}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.78rem" }}>GUEST NAME</span>
                  <strong>{confirmedBooking.guestName}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.78rem" }}>DATES</span>
                  <strong>{confirmedBooking.checkIn} to {confirmedBooking.checkOut} ({confirmedBooking.nights} Nights)</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.78rem" }}>TOTAL PAID</span>
                  <strong style={{ color: "var(--accent-gold-light)" }}>{confirmedBooking.paidAmount}</strong>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
              <button
                onClick={() => window.print()}
                className="btn btn-outline"
              >
                <PrinterIcon size={16} /> Print Receipt
              </button>
              
              <button
                onClick={() => {
                  setBookingModalHotel(null);
                  setIsMyBookingsOpen(true);
                }}
                className="btn btn-primary"
              >
                <CalendarIcon size={16} /> View All My Bookings
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
