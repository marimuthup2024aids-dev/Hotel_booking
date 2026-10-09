import React, { useState } from "react";
import { useHotel } from "../context/HotelContext";
import {
  CloseIcon,
  CalendarIcon,
  PrinterIcon,
  TrashIcon,
  BuildingIcon,
  MapPinIcon,
  CheckIcon
} from "./Icons";

export const MyBookingsModal = () => {
  const {
    bookings,
    isMyBookingsOpen,
    setIsMyBookingsOpen,
    cancelBooking,
    setSelectedHotel,
    hotels
  } = useHotel();

  if (!isMyBookingsOpen) return null;

  const [activeTab, setActiveTab] = useState("all"); // 'all', 'Confirmed', 'Cancelled'

  const filteredBookings = bookings.filter((b) => {
    if (activeTab === "all") return true;
    return b.status === activeTab;
  });

  return (
    <div className="modal-overlay" onClick={() => setIsMyBookingsOpen(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "900px" }}>
        
        {/* Header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <CalendarIcon size={22} style={{ color: "var(--accent-gold)" }} />
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0 }}>My Reservations & Receipts</h3>
          </div>
          <button onClick={() => setIsMyBookingsOpen(false)} className="btn btn-outline btn-icon">
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Status Tabs */}
        <div style={{ display: "flex", gap: "10px", padding: "16px 24px", borderBottom: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-input)" }}>
          {[
            { id: "all", label: `All Bookings (${bookings.length})` },
            { id: "Confirmed", label: `Confirmed (${bookings.filter(b => b.status === "Confirmed").length})` },
            { id: "Cancelled", label: `Cancelled (${bookings.filter(b => b.status === "Cancelled").length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`btn btn-sm ${activeTab === tab.id ? "btn-primary" : "btn-outline"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div style={{ padding: "24px", minHeight: "350px", display: "flex", flexDirection: "column", gap: "16px" }}>
          
          {filteredBookings.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <BuildingIcon size={48} style={{ color: "var(--text-muted)", marginBottom: "12px" }} />
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700 }}>No Bookings Found</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                You have no reservations matching this category.
              </p>
            </div>
          ) : (
            filteredBookings.map((booking) => {
              const isConfirmed = booking.status === "Confirmed";
              return (
                <div
                  key={booking.id}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: `1px solid ${isConfirmed ? "var(--border-gold)" : "var(--border-subtle)"}`,
                    borderRadius: "var(--radius-md)",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span className="badge badge-gold">{booking.id}</span>
                        <span className={isConfirmed ? "badge badge-emerald" : "badge badge-muted"} style={{ color: isConfirmed ? "var(--accent-emerald)" : "var(--accent-danger)" }}>
                          STATUS: {booking.status.toUpperCase()}
                        </span>
                      </div>
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>{booking.hotelName}</h4>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <MapPinIcon size={14} /> {booking.city}, {booking.country}
                      </span>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>Total Amount Paid</span>
                      <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-gold-light)", fontFamily: "var(--font-serif)" }}>
                        {booking.paidAmount}
                      </span>
                    </div>
                  </div>

                  {/* Details Bar */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                      gap: "12px",
                      padding: "12px 16px",
                      backgroundColor: "var(--bg-input)",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "0.85rem"
                    }}
                  >
                    <div>
                      <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.75rem" }}>CHECK-IN / OUT</span>
                      <strong>{booking.checkIn} → {booking.checkOut} ({booking.nights} Nights)</strong>
                    </div>

                    <div>
                      <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.75rem" }}>GUEST NAME</span>
                      <strong>{booking.guestName} ({booking.guests} Guests)</strong>
                    </div>

                    <div>
                      <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.75rem" }}>PAYMENT METHOD</span>
                      <strong>{booking.paymentMethod}</strong>
                    </div>
                  </div>

                  {booking.specialRequests && (
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                      <strong>Special Requests:</strong> {booking.specialRequests}
                    </div>
                  )}

                  {/* Card Actions */}
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", borderTop: "1px solid var(--border-subtle)", paddingTop: "12px" }}>
                    <button
                      onClick={() => window.print()}
                      className="btn btn-outline btn-sm"
                    >
                      <PrinterIcon size={14} /> Print Receipt
                    </button>

                    {isConfirmed && (
                      <button
                        onClick={() => cancelBooking(booking.id)}
                        className="btn btn-danger btn-sm"
                      >
                        <TrashIcon size={14} /> Cancel Reservation
                      </button>
                    )}
                  </div>

                </div>
              );
            })
          )}

        </div>

      </div>
    </div>
  );
};
