import React, { useState } from "react";
import { useHotel } from "../context/HotelContext";
import {
  CloseIcon,
  MapPinIcon,
  StarIcon,
  UsersIcon,
  CheckIcon,
  HeartIcon,
  ChevronRightIcon
} from "./Icons";

export const HotelDetailModal = () => {
  const {
    selectedHotel,
    setSelectedHotel,
    setBookingModalHotel,
    formatPrice,
    wishlist,
    toggleWishlist,
    addReview
  } = useHotel();

  if (!selectedHotel) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    author: "",
    rating: 5,
    comment: ""
  });

  const isSaved = wishlist.includes(selectedHotel.id);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.author.trim() || !reviewForm.comment.trim()) return;

    addReview(selectedHotel.id, reviewForm);
    setReviewForm({ author: "", rating: 5, comment: "" });
  };

  return (
    <div className="modal-overlay" onClick={() => setSelectedHotel(null)}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "1000px" }}
      >
        {/* Modal Close & Wishlist Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: "1px solid var(--border-subtle)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="badge badge-gold">{selectedHotel.roomType}</span>
            <span className="badge badge-emerald">Available for Instant Booking</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => toggleWishlist(selectedHotel.id)}
              className="btn btn-outline btn-sm"
            >
              <HeartIcon size={16} fill={isSaved ? "var(--accent-gold)" : "none"} />
              <span>{isSaved ? "Saved" : "Save Favorite"}</span>
            </button>
            <button
              onClick={() => setSelectedHotel(null)}
              className="btn btn-outline btn-icon"
            >
              <CloseIcon size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "28px" }}>
          
          {/* Main Title & Location */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent-gold-light)", fontSize: "0.9rem", marginBottom: "4px" }}>
              <MapPinIcon size={16} />
              <span>{selectedHotel.location}</span>
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>
              {selectedHotel.name}
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginTop: "4px" }}>
              {selectedHotel.tagline}
            </p>
          </div>

          {/* Image Gallery Switcher */}
          <div>
            <div
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                marginBottom: "12px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <img
                src={selectedHotel.gallery[activeImageIndex] || selectedHotel.image}
                alt={selectedHotel.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Gallery Thumbnails */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
              {selectedHotel.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    height: "80px",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: `2px solid ${activeImageIndex === idx ? "var(--accent-gold)" : "transparent"}`,
                    opacity: activeImageIndex === idx ? 1 : 0.75,
                    transition: "all var(--transition-fast)"
                  }}
                >
                  <img src={imgUrl} alt="gallery thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              padding: "20px",
              backgroundColor: "var(--bg-input)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-subtle)"
            }}
          >
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
                Star Rating
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                <StarIcon size={16} fill="var(--accent-gold-light)" />
                <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{selectedHotel.ratingScore}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>({selectedHotel.reviewCount} reviews)</span>
              </div>
            </div>

            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
                Room Size
              </span>
              <span style={{ fontWeight: 700, fontSize: "1.05rem", display: "block", marginTop: "4px" }}>
                {selectedHotel.roomSize}
              </span>
            </div>

            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
                Bed Layout
              </span>
              <span style={{ fontWeight: 700, fontSize: "1.05rem", display: "block", marginTop: "4px" }}>
                {selectedHotel.bedType}
              </span>
            </div>

            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
                Max Occupancy
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                <UsersIcon size={16} />
                <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{selectedHotel.maxGuests} Guests</span>
              </div>
            </div>
          </div>

          {/* Description & Highlights */}
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>About this Resort</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
              {selectedHotel.description}
            </p>

            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>Key Highlights</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
              {selectedHotel.highlights.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                  <div style={{ color: "var(--accent-emerald)" }}><CheckIcon size={16} /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px" }}>Resort Amenities</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {selectedHotel.amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--bg-input)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.85rem",
                    fontWeight: 600
                  }}
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Guest Reviews Section */}
          <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>
                Verified Guest Reviews ({selectedHotel.reviewsList.length})
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "1rem", fontWeight: 700, color: "var(--accent-gold-light)" }}>
                <StarIcon size={18} fill="var(--accent-gold-light)" />
                <span>{selectedHotel.ratingScore} / 5.0</span>
              </div>
            </div>

            {/* Reviews List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
              {selectedHotel.reviewsList.map((rev) => (
                <div
                  key={rev.id}
                  style={{
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-input)",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          backgroundColor: "var(--accent-gold)",
                          color: "#ffffff",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.85rem"
                        }}
                      >
                        {rev.avatar}
                      </div>
                      <div>
                        <span style={{ fontWeight: 700, display: "block", fontSize: "0.95rem" }}>{rev.author}</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{rev.date}</span>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                      {Array.from({ length: Math.round(rev.rating) }).map((_, i) => (
                        <StarIcon key={i} size={14} fill="var(--accent-gold-light)" />
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-main)", margin: 0 }}>
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>

            {/* Write a Review Form */}
            <form
              onSubmit={handleReviewSubmit}
              style={{
                padding: "20px",
                borderRadius: "var(--radius-md)",
                border: "1px dashed var(--border-gold)",
                backgroundColor: "rgba(217, 119, 6, 0.05)"
              }}
            >
              <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>Write a Guest Review</h4>
              
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px", marginBottom: "12px" }}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Evelyn Reed"
                    value={reviewForm.author}
                    onChange={(e) => setReviewForm((prev) => ({ ...prev, author: e.target.value }))}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Rating</label>
                  <select
                    value={reviewForm.rating}
                    onChange={(e) => setReviewForm((prev) => ({ ...prev, rating: parseFloat(e.target.value) }))}
                    className="form-select"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Average</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "14px" }}>
                <label className="form-label">Review Comment</label>
                <textarea
                  rows={3}
                  placeholder="Share details of your stay..."
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm((prev) => ({ ...prev, comment: e.target.value }))}
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="btn btn-secondary btn-sm">
                Post Guest Review
              </button>
            </form>

          </div>

        </div>

        {/* Modal Sticky Footer Action Bar */}
        <div
          style={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "var(--bg-card)",
            borderTop: "1px solid var(--border-gold)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "0 0 var(--radius-lg) var(--radius-lg)"
          }}
        >
          <div>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>
              Total Nightly Rate
            </span>
            <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--accent-gold-light)", fontFamily: "var(--font-serif)" }}>
              {formatPrice(selectedHotel.pricePerNight)}
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}> / night</span>
          </div>

          <button
            onClick={() => {
              const h = selectedHotel;
              setSelectedHotel(null);
              setBookingModalHotel(h);
            }}
            className="btn btn-primary btn-lg"
          >
            <span>Proceed to Booking</span>
            <ChevronRightIcon size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};
