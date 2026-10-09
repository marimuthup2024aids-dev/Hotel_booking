import React from "react";
import { useHotel } from "../context/HotelContext";
import {
  MapPinIcon,
  StarIcon,
  HeartIcon,
  UsersIcon,
  ChevronRightIcon
} from "./Icons";

export const HotelCard = ({ hotel }) => {
  const {
    wishlist,
    toggleWishlist,
    formatPrice,
    setSelectedHotel,
    setBookingModalHotel
  } = useHotel();

  const isSaved = wishlist.includes(hotel.id);

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      
      {/* Image Thumbnail Container */}
      <div style={{ position: "relative", width: "100%", height: "230px", overflow: "hidden" }}>
        <img
          src={hotel.image}
          alt={hotel.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        {/* Featured Badge */}
        {hotel.featured && (
          <div
            className="badge badge-gold"
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            Featured Luxury
          </div>
        )}

        {/* Room Type Pill */}
        <div
          className="badge badge-muted"
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            background: "rgba(15, 23, 42, 0.8)",
            color: "#ffffff",
            backdropFilter: "blur(6px)"
          }}
        >
          {hotel.roomType}
        </div>

        {/* Heart Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(hotel.id);
          }}
          className="btn btn-icon"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: isSaved ? "rgba(217, 119, 6, 0.9)" : "rgba(15, 23, 42, 0.65)",
            color: "#ffffff",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}
          title={isSaved ? "Remove from Favorites" : "Save to Favorites"}
        >
          <HeartIcon size={18} fill={isSaved ? "#ffffff" : "none"} />
        </button>
      </div>

      {/* Card Content Body */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
        
        <div>
          {/* Location & Star Rating */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.84rem", color: "var(--text-muted)" }}>
              <MapPinIcon size={14} style={{ color: "var(--accent-gold)" }} />
              <span>{hotel.city}, {hotel.country}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.85rem", fontWeight: 700 }}>
              <StarIcon size={15} fill="var(--accent-gold-light)" />
              <span>{hotel.ratingScore}</span>
              <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "0.78rem" }}>
                ({hotel.reviewCount})
              </span>
            </div>
          </div>

          {/* Hotel Name */}
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-main)",
              lineHeight: 1.3,
              marginBottom: "6px"
            }}
          >
            {hotel.name}
          </h3>

          {/* Tagline */}
          <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: 1.4, marginBottom: "14px" }}>
            {hotel.tagline}
          </p>

          {/* Key Amenities */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {hotel.amenities.slice(0, 3).map((amenity, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "0.76rem",
                  padding: "3px 8px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-input)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span style={{ fontSize: "0.76rem", color: "var(--accent-gold-light)", padding: "3px 4px" }}>
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
          
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "14px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
                Starting From
              </span>
              <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--accent-gold-light)", fontFamily: "var(--font-serif)" }}>
                {formatPrice(hotel.pricePerNight)}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}> / night</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <UsersIcon size={14} /> Max {hotel.maxGuests} Guests
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <button
              onClick={() => setSelectedHotel(hotel)}
              className="btn btn-outline"
              style={{ width: "100%", fontSize: "0.84rem" }}
            >
              View Details
            </button>

            <button
              onClick={() => setBookingModalHotel(hotel)}
              className="btn btn-primary"
              style={{ width: "100%", fontSize: "0.84rem" }}
            >
              <span>Book Now</span>
              <ChevronRightIcon size={14} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
