import React from "react";
import { useHotel } from "../context/HotelContext";
import { CloseIcon, HeartIcon, MapPinIcon, TrashIcon, ChevronRightIcon } from "./Icons";

export const WishlistModal = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    hotels,
    setSelectedHotel,
    setBookingModalHotel,
    formatPrice
  } = useHotel();

  if (!isWishlistOpen) return null;

  const savedHotelsList = hotels.filter((h) => wishlist.includes(h.id));

  return (
    <div className="modal-overlay" onClick={() => setIsWishlistOpen(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "800px" }}>
        
        {/* Header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <HeartIcon size={22} fill="var(--accent-gold)" style={{ color: "var(--accent-gold)" }} />
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0 }}>Saved Favorite Hotels ({savedHotelsList.length})</h3>
          </div>
          <button onClick={() => setIsWishlistOpen(false)} className="btn btn-outline btn-icon">
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: "24px", minHeight: "300px", display: "flex", flexDirection: "column", gap: "16px" }}>
          
          {savedHotelsList.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <HeartIcon size={48} style={{ color: "var(--text-muted)", marginBottom: "12px" }} />
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Your Wishlist is Empty</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                Click the heart icon on any hotel card to save it for quick access later.
              </p>
            </div>
          ) : (
            savedHotelsList.map((hotel) => (
              <div
                key={hotel.id}
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    style={{ width: "90px", height: "70px", borderRadius: "var(--radius-sm)", objectFit: "cover" }}
                  />
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>{hotel.name}</h4>
                    <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPinIcon size={14} /> {hotel.city}, {hotel.country}
                    </span>
                    <span style={{ fontSize: "1rem", fontWeight: 800, color: "var(--accent-gold-light)", fontFamily: "var(--font-serif)" }}>
                      {formatPrice(hotel.pricePerNight)} / night
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setSelectedHotel(hotel);
                    }}
                    className="btn btn-outline btn-sm"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setBookingModalHotel(hotel);
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Book Now</span>
                    <ChevronRightIcon size={14} />
                  </button>

                  <button
                    onClick={() => toggleWishlist(hotel.id)}
                    className="btn btn-danger btn-icon"
                    title="Remove from Saved"
                  >
                    <TrashIcon size={16} />
                  </button>
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};
