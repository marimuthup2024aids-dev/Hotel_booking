import React from "react";
import { useHotel } from "../context/HotelContext";
import { CURRENCIES } from "../data/hotels";
import {
  BuildingIcon,
  HeartIcon,
  CalendarIcon,
  SunIcon,
  MoonIcon
} from "./Icons";

export const Navbar = () => {
  const {
    wishlist,
    bookings,
    currency,
    setCurrency,
    isDarkMode,
    toggleDarkMode,
    setIsWishlistOpen,
    setIsMyBookingsOpen
  } = useHotel();

  const activeBookingsCount = bookings.filter((b) => b.status === "Confirmed").length;

  return (
    <header className="glass-header" style={{ position: "sticky", top: 0, zIndex: 50, width: "100%" }}>
      <div className="layout-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-md)",
            background: "var(--accent-gold-grad)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            boxShadow: "var(--shadow-gold)"
          }}>
            <BuildingIcon size={24} />
          </div>
          <div>
            <span style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
              background: "linear-gradient(135deg, #ffffff 0%, #f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: isDarkMode ? "transparent" : "#0f172a",
              display: "block",
              lineHeight: 1.1
            }}>
              AURA
            </span>
            <span style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              color: "var(--accent-gold-light)",
              letterSpacing: "0.22em",
              textTransform: "uppercase"
            }}>
              LUXURY HOTELS
            </span>
          </div>
        </a>

        {/* Quick Nav Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          
          {/* Currency Selector */}
          <div style={{ position: "relative" }}>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="form-select"
              style={{
                padding: "8px 12px",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--bg-card)",
                cursor: "pointer"
              }}
            >
              {Object.keys(CURRENCIES).map((c) => (
                <option key={c} value={c}>
                  {CURRENCIES[c].name}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleDarkMode}
            className="btn btn-outline btn-icon"
            title={isDarkMode ? "Switch to Light Luxury Theme" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          {/* Wishlist Favorites Button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="btn btn-outline"
            style={{ position: "relative", padding: "8px 16px" }}
          >
            <HeartIcon size={18} fill={wishlist.length > 0 ? "var(--accent-gold)" : "none"} />
            <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>Saved</span>
            {wishlist.length > 0 && (
              <span className="badge badge-gold" style={{ padding: "2px 6px", fontSize: "0.7rem", marginLeft: "4px" }}>
                {wishlist.length}
              </span>
            )}
          </button>

          {/* My Bookings Button */}
          <button
            onClick={() => setIsMyBookingsOpen(true)}
            className="btn btn-primary"
            style={{ padding: "10px 18px" }}
          >
            <CalendarIcon size={18} />
            <span>My Bookings</span>
            {activeBookingsCount > 0 && (
              <span style={{
                background: "rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                fontSize: "0.75rem",
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: "var(--radius-full)",
                marginLeft: "4px"
              }}>
                {activeBookingsCount}
              </span>
            )}
          </button>

        </div>

      </div>
    </header>
  );
};
