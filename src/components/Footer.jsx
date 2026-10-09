import React, { useState } from "react";
import { useHotel } from "../context/HotelContext";
import { BuildingIcon, ShieldCheckIcon, AwardIcon } from "./Icons";

export const Footer = () => {
  const { showToast } = useHotel();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Subscribed! You will receive exclusive secret member deals.", "success");
    setEmail("");
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "60px",
        paddingBottom: "40px",
        marginTop: "80px"
      }}
    >
      <div className="layout-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "40px"
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-gold-grad)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff"
                }}
              >
                <BuildingIcon size={20} />
              </div>
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-serif)",
                  color: "var(--text-main)"
                }}
              >
                AURA LUXURY
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
              Curating extraordinary hospitality experiences worldwide with direct booking guarantees, complimentary perks, and 24/7 concierge assistance.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Destinations
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
              <li>Santorini Caldera Villas</li>
              <li>Manhattan Penthouse Suites</li>
              <li>Kyoto Forest Onsen Ryokan</li>
              <li>Dubai Palm Jumeirah Palace</li>
              <li>Maldives Overwater Bungalows</li>
            </ul>
          </div>

          {/* Col 3: Direct Booking Perks */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Member Direct Perks
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheckIcon size={14} style={{ color: "var(--accent-gold)" }} /> Best Rate Guarantee
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <AwardIcon size={14} style={{ color: "var(--accent-gold)" }} /> Complimentary Room Upgrade
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheckIcon size={14} style={{ color: "var(--accent-gold)" }} /> Flexible 48h Cancellation
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <AwardIcon size={14} style={{ color: "var(--accent-gold)" }} /> Early Check-in & Late Checkout
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Secret Deals Newsletter
            </h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "12px" }}>
              Subscribe to unlock private rate reductions up to 30% off.
            </p>
            <form onSubmit={handleNewsletterSubmit} style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                style={{ padding: "8px 12px", fontSize: "0.85rem" }}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.82rem",
            color: "var(--text-muted)"
          }}
        >
          <p>© 2026 AURA LUXURY HOTELS & RESORTS. All rights reserved.</p>

          <div style={{ display: "flex", gap: "16px" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
