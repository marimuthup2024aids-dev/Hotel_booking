import React from "react";
import { HotelProvider, useHotel } from "./context/HotelContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FilterSidebar } from "./components/FilterSidebar";
import { HotelCard } from "./components/HotelCard";
import { HotelDetailModal } from "./components/HotelDetailModal";
import { BookingWizardModal } from "./components/BookingWizardModal";
import { WishlistModal } from "./components/WishlistModal";
import { MyBookingsModal } from "./components/MyBookingsModal";
import { Toast } from "./components/Toast";
import { Footer } from "./components/Footer";
import { BuildingIcon, TrashIcon } from "./components/Icons";

const HotelBookingContent = () => {
  const { filteredHotels, filters, resetFilters } = useHotel();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Toast />
      <Navbar />
      <HeroSection />

      {/* Main Content Area */}
      <main id="hotels-section" className="layout-container" style={{ flex: 1, paddingTop: "60px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: "30px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold-light)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Handpicked Luxury Portfolio
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, margin: "4px 0 0 0" }}>
              Explore Premier Hotels & Resorts
            </h2>
          </div>

          {/* Filter Pills Summary */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {filters.city !== "All Destinations" && (
              <span className="badge badge-gold">
                City: {filters.city}
              </span>
            )}
            {filters.starRating > 0 && (
              <span className="badge badge-gold">
                Stars: {filters.starRating}+ Stars
              </span>
            )}
            {filters.roomType !== "All Room Types" && (
              <span className="badge badge-gold">
                Type: {filters.roomType}
              </span>
            )}
            {(filters.city !== "All Destinations" || filters.starRating > 0 || filters.roomType !== "All Room Types" || filters.searchQuery) && (
              <button onClick={resetFilters} className="btn btn-outline btn-sm" style={{ padding: "4px 10px", fontSize: "0.78rem" }}>
                <TrashIcon size={12} /> Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* 2-Column Responsive Layout: Sidebar Filters + Hotel Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "32px",
            alignItems: "start"
          }}
          className="content-grid-responsive"
        >
          {/* Left Column: Filters Sidebar */}
          <FilterSidebar />

          {/* Right Column: Hotel Listings Grid */}
          <div>
            {filteredHotels.length === 0 ? (
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "80px 20px",
                  textAlign: "center"
                }}
              >
                <BuildingIcon size={56} style={{ color: "var(--accent-gold)", marginBottom: "16px" }} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>
                  No Hotels Match Your Criteria
                </h3>
                <p style={{ color: "var(--text-muted)", maxWdith: "460px", margin: "0 auto 20px auto" }}>
                  Try widening your price range slider or clearing amenity filters to view available luxury stays.
                </p>
                <button onClick={resetFilters} className="btn btn-primary">
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "24px"
                }}
              >
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            )}
          </div>
        </div>

      </main>

      {/* Interactive Modals */}
      <HotelDetailModal />
      <BookingWizardModal />
      <WishlistModal />
      <MyBookingsModal />

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <HotelProvider>
      <HotelBookingContent />
    </HotelProvider>
  );
}
