import React from "react";
import { useHotel } from "../context/HotelContext";
import { CITIES } from "../data/hotels";
import { SearchIcon, MapPinIcon, CalendarIcon, UsersIcon, ShieldCheckIcon } from "./Icons";

export const HeroSection = () => {
  const { filters, setFilters } = useHotel();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Scroll to hotel grid
    const target = document.getElementById("hotels-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "60px 0 80px 0",
        backgroundImage:
          "linear-gradient(to bottom, rgba(9, 13, 22, 0.7), rgba(9, 13, 22, 0.95)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottom: "1px solid var(--border-subtle)"
      }}
    >
      <div className="layout-container">
        
        {/* Top Tagline */}
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 40px auto" }}>
          <div className="badge badge-gold" style={{ marginBottom: "16px", padding: "6px 14px" }}>
            <ShieldCheckIcon size={14} /> EXCLUSIVE DIRECT BOOKING GUARANTEE
          </div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#ffffff",
              marginBottom: "16px",
              textShadow: "0 4px 20px rgba(0,0,0,0.5)"
            }}
          >
            Experience Extraordinary Stays Worldwide
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#e2e8f0",
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Hand-curated luxury suites, oceanfront villas, and historic estates with complimentary breakfast, spa credits, and flexible instant booking.
          </p>
        </div>

        {/* Interactive Search Card */}
        <form
          onSubmit={handleSearchSubmit}
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "24px",
            boxShadow: "var(--shadow-lg)",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              alignItems: "end"
            }}
          >
            
            {/* Destination Selector */}
            <div className="form-group">
              <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPinIcon size={14} style={{ color: "var(--accent-gold)" }} /> Destination
              </label>
              <select
                value={filters.city}
                onChange={(e) => setFilters((prev) => ({ ...prev, city: e.target.value }))}
                className="form-select"
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-In Date */}
            <div className="form-group">
              <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CalendarIcon size={14} style={{ color: "var(--accent-gold)" }} /> Check-In
              </label>
              <input
                type="date"
                value={filters.checkIn}
                onChange={(e) => setFilters((prev) => ({ ...prev, checkIn: e.target.value }))}
                className="form-input"
              />
            </div>

            {/* Check-Out Date */}
            <div className="form-group">
              <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CalendarIcon size={14} style={{ color: "var(--accent-gold)" }} /> Check-Out
              </label>
              <input
                type="date"
                value={filters.checkOut}
                onChange={(e) => setFilters((prev) => ({ ...prev, checkOut: e.target.value }))}
                className="form-input"
              />
            </div>

            {/* Guests Picker */}
            <div className="form-group">
              <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <UsersIcon size={14} style={{ color: "var(--accent-gold)" }} /> Guests & Rooms
              </label>
              <select
                value={filters.guests}
                onChange={(e) => setFilters((prev) => ({ ...prev, guests: parseInt(e.target.value) }))}
                className="form-select"
              >
                <option value={1}>1 Guest, 1 Room</option>
                <option value={2}>2 Guests, 1 Room</option>
                <option value={3}>3 Guests, 1 Suite</option>
                <option value={4}>4 Guests, 2 Rooms</option>
                <option value={5}>5+ Guests, Villa Suite</option>
              </select>
            </div>

            {/* Search Action Button */}
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", height: "48px" }}>
                <SearchIcon size={20} />
                <span>Search Hotels</span>
              </button>
            </div>

          </div>

          {/* Quick Destination Pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
              Popular Destinations:
            </span>
            {["Santorini", "Paris", "Kyoto", "Dubai", "New York", "Maldives"].map((city) => (
              <button
                type="button"
                key={city}
                onClick={() => setFilters((prev) => ({ ...prev, city }))}
                className={`btn btn-sm ${filters.city === city ? "btn-secondary" : "btn-outline"}`}
                style={{ padding: "4px 12px", fontSize: "0.8rem" }}
              >
                {city}
              </button>
            ))}
          </div>

        </form>

      </div>
    </div>
  );
};
