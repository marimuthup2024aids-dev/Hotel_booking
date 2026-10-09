import React from "react";
import { useHotel } from "../context/HotelContext";
import { ROOM_TYPES, ALL_AMENITIES } from "../data/hotels";
import { FilterIcon, SearchIcon, StarIcon, CheckIcon, TrashIcon } from "./Icons";

export const FilterSidebar = () => {
  const { filters, setFilters, resetFilters, formatPrice, filteredHotels } = useHotel();

  const handleAmenityToggle = (amenity) => {
    setFilters((prev) => {
      const exists = prev.selectedAmenities.includes(amenity);
      if (exists) {
        return {
          ...prev,
          selectedAmenities: prev.selectedAmenities.filter((a) => a !== amenity)
        };
      } else {
        return {
          ...prev,
          selectedAmenities: [...prev.selectedAmenities, amenity]
        };
      }
    });
  };

  return (
    <aside
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FilterIcon size={18} style={{ color: "var(--accent-gold)" }} />
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>Filter Hotels</h3>
        </div>
        <button
          onClick={resetFilters}
          className="btn btn-outline btn-sm"
          style={{ gap: "4px", fontSize: "0.78rem" }}
          title="Reset all filters"
        >
          <TrashIcon size={14} /> Reset
        </button>
      </div>

      {/* Results Count Badge */}
      <div className="badge badge-gold" style={{ justifyContent: "center", padding: "8px" }}>
        {filteredHotels.length} Hotels Found
      </div>

      {/* Keyword Search */}
      <div className="form-group">
        <label className="form-label">Keyword Search</label>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Hotel name, city, location..."
            value={filters.searchQuery}
            onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
            className="form-input"
            style={{ paddingLeft: "38px" }}
          />
          <SearchIcon size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
        </div>
      </div>

      {/* Sort By */}
      <div className="form-group">
        <label className="form-label">Sort Results By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value }))}
          className="form-select"
        >
          <option value="recommended">Featured & Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Star Rating</option>
          <option value="reviews">Most Guest Reviews</option>
        </select>
      </div>

      {/* Max Nightly Rate Slider */}
      <div className="form-group">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label className="form-label">Max Price / Night</label>
          <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent-gold-light)" }}>
            {formatPrice(filters.priceRange[1])}
          </span>
        </div>
        <input
          type="range"
          min={100}
          max={1000}
          step={20}
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              priceRange: [prev.priceRange[0], parseInt(e.target.value)]
            }))
          }
          style={{ width: "100%", accentColor: "var(--accent-gold)", cursor: "pointer" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)" }}>
          <span>{formatPrice(100)}</span>
          <span>{formatPrice(1000)}+</span>
        </div>
      </div>

      {/* Star Rating Selector */}
      <div className="form-group">
        <label className="form-label">Hotel Rating</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[0, 5, 4, 3].map((stars) => (
            <button
              key={stars}
              type="button"
              onClick={() => setFilters((prev) => ({ ...prev, starRating: stars }))}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: filters.starRating === stars ? "rgba(217, 119, 6, 0.15)" : "var(--bg-input)",
                border: `1px solid ${filters.starRating === stars ? "var(--border-gold)" : "transparent"}`,
                color: "var(--text-main)",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {stars === 0 ? (
                  <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>All Star Ratings</span>
                ) : (
                  Array.from({ length: stars }).map((_, idx) => (
                    <StarIcon key={idx} size={14} fill="var(--accent-gold-light)" className="w-3.5 h-3.5 text-amber-500" />
                  ))
                )}
              </div>
              {filters.starRating === stars && <CheckIcon size={14} style={{ color: "var(--accent-gold-light)" }} />}
            </button>
          ))}
        </div>
      </div>

      {/* Room Type */}
      <div className="form-group">
        <label className="form-label">Room Type</label>
        <select
          value={filters.roomType}
          onChange={(e) => setFilters((prev) => ({ ...prev, roomType: e.target.value }))}
          className="form-select"
        >
          {ROOM_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Amenities Checkboxes */}
      <div className="form-group">
        <label className="form-label">Amenities & Features</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: "240px", overflowY: "auto", paddingRight: "4px" }}>
          {ALL_AMENITIES.map((amenity) => {
            const isChecked = filters.selectedAmenities.includes(amenity);
            return (
              <label
                key={amenity}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  color: isChecked ? "var(--text-main)" : "var(--text-muted)"
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleAmenityToggle(amenity)}
                  style={{
                    width: "16px",
                    height: "16px",
                    accentColor: "var(--accent-gold)",
                    cursor: "pointer"
                  }}
                />
                <span>{amenity}</span>
              </label>
            );
          })}
        </div>
      </div>

    </aside>
  );
};
