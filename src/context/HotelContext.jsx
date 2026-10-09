import React, { createContext, useContext, useState, useEffect } from "react";
import { INITIAL_HOTELS, CURRENCIES } from "../data/hotels";

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  // Local storage initializations
  const [hotels, setHotels] = useState(() => {
    const saved = localStorage.getItem("aura_hotels");
    return saved ? JSON.parse(saved) : INITIAL_HOTELS;
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("aura_wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("aura_bookings");
    if (saved) return JSON.parse(saved);
    // Default sample booking for instant demonstration of My Bookings
    return [
      {
        id: "BK-89210",
        hotelId: "hotel-1",
        hotelName: "Grand Horizon Luxury Resort",
        city: "Santorini",
        country: "Greece",
        roomType: "Ocean Villa",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
        checkIn: "2026-11-10",
        checkOut: "2026-11-14",
        nights: 4,
        guests: 2,
        guestName: "Alexander Wright",
        guestEmail: "alexander.w@example.com",
        guestPhone: "+1 (555) 234-5678",
        totalUSD: 1920,
        currency: "USD",
        paidAmount: "$1,920",
        paymentMethod: "Credit Card (**** 4242)",
        status: "Confirmed",
        bookedAt: "2026-10-01",
        specialRequests: "High floor request, late check-in.",
        addOns: ["Airport Shuttle", "Champagne Package"]
      }
    ];
  });

  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem("aura_currency") || "USD";
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("aura_theme");
    return saved ? saved === "dark" : true;
  });

  // Filters State
  const [filters, setFilters] = useState({
    city: "All Destinations",
    checkIn: "",
    checkOut: "",
    guests: 2,
    priceRange: [0, 1000],
    starRating: 0,
    roomType: "All Room Types",
    selectedAmenities: [],
    sortBy: "recommended",
    searchQuery: ""
  });

  // Modal States
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingModalHotel, setBookingModalHotel] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("aura_hotels", JSON.stringify(hotels));
  }, [hotels]);

  useEffect(() => {
    localStorage.setItem("aura_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("aura_bookings", JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem("aura_currency", currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("aura_theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  const showToast = (message, type = "info") => {
    setToast({ message, type, id: Date.now() });
  };

  const closeToast = () => setToast(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Currency Converter Utility
  const formatPrice = (usdAmount) => {
    const curr = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = Math.round(usdAmount * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  // Wishlist Functions
  const toggleWishlist = (hotelId) => {
    setWishlist((prev) => {
      const exists = prev.includes(hotelId);
      if (exists) {
        showToast("Removed from Saved Favorites", "info");
        return prev.filter((id) => id !== hotelId);
      } else {
        showToast("Saved to Favorites", "success");
        return [...prev, hotelId];
      }
    });
  };

  // Booking Functions
  const addBooking = (newBookingData) => {
    const bookingId = "BK-" + Math.floor(10000 + Math.random() * 90000);
    const curr = CURRENCIES[currency] || CURRENCIES.USD;
    const formattedPaid = `${curr.symbol}${Math.round(newBookingData.totalUSD * curr.rate).toLocaleString()}`;

    const completeBooking = {
      ...newBookingData,
      id: bookingId,
      currency: currency,
      paidAmount: formattedPaid,
      status: "Confirmed",
      bookedAt: new Date().toISOString().split("T")[0]
    };

    setBookings((prev) => [completeBooking, ...prev]);
    showToast(`Booking Confirmed! ID: ${bookingId}`, "success");
    return completeBooking;
  };

  const cancelBooking = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "Cancelled" } : b))
    );
    showToast(`Booking ${bookingId} has been cancelled`, "warning");
  };

  // Add Review
  const addReview = (hotelId, reviewData) => {
    setHotels((prevHotels) =>
      prevHotels.map((h) => {
        if (h.id === hotelId) {
          const newReview = {
            id: "rev-" + Date.now(),
            author: reviewData.author,
            avatar: reviewData.author.substring(0, 2).toUpperCase(),
            date: "Today",
            rating: parseFloat(reviewData.rating),
            comment: reviewData.comment
          };
          const updatedList = [newReview, ...h.reviewsList];
          const avgScore = (
            updatedList.reduce((acc, r) => acc + r.rating, 0) / updatedList.length
          ).toFixed(2);

          return {
            ...h,
            reviewsList: updatedList,
            reviewCount: h.reviewCount + 1,
            ratingScore: parseFloat(avgScore)
          };
        }
        return h;
      })
    );

    // Also update selectedHotel if open
    if (selectedHotel && selectedHotel.id === hotelId) {
      setSelectedHotel((prev) => {
        const newReview = {
          id: "rev-" + Date.now(),
          author: reviewData.author,
          avatar: reviewData.author.substring(0, 2).toUpperCase(),
          date: "Today",
          rating: parseFloat(reviewData.rating),
          comment: reviewData.comment
        };
        const updatedList = [newReview, ...prev.reviewsList];
        return {
          ...prev,
          reviewsList: updatedList,
          reviewCount: prev.reviewCount + 1,
          ratingScore: parseFloat((updatedList.reduce((acc, r) => acc + r.rating, 0) / updatedList.length).toFixed(2))
        };
      });
    }

    showToast("Thank you! Your guest review has been posted.", "success");
  };

  // Filter Helper
  const resetFilters = () => {
    setFilters({
      city: "All Destinations",
      checkIn: "",
      checkOut: "",
      guests: 2,
      priceRange: [0, 1000],
      starRating: 0,
      roomType: "All Room Types",
      selectedAmenities: [],
      sortBy: "recommended",
      searchQuery: ""
    });
    showToast("Filters reset to default", "info");
  };

  // Computed Filtered Hotels List
  const filteredHotels = hotels
    .filter((hotel) => {
      // Search query (name, city, country, location)
      if (filters.searchQuery.trim() !== "") {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = hotel.name.toLowerCase().includes(q);
        const matchesCity = hotel.city.toLowerCase().includes(q);
        const matchesCountry = hotel.country.toLowerCase().includes(q);
        const matchesLocation = hotel.location.toLowerCase().includes(q);
        if (!matchesName && !matchesCity && !matchesCountry && !matchesLocation) return false;
      }

      // City filter
      if (filters.city !== "All Destinations" && hotel.city.toLowerCase() !== filters.city.toLowerCase()) {
        return false;
      }

      // Price filter
      if (hotel.pricePerNight < filters.priceRange[0] || hotel.pricePerNight > filters.priceRange[1]) {
        return false;
      }

      // Star rating filter
      if (filters.starRating > 0 && hotel.starRating < filters.starRating) {
        return false;
      }

      // Room Type filter
      if (filters.roomType !== "All Room Types" && hotel.roomType !== filters.roomType) {
        return false;
      }

      // Guest Capacity filter
      if (filters.guests > hotel.maxGuests) {
        return false;
      }

      // Amenities filter
      if (filters.selectedAmenities.length > 0) {
        const hasAllAmenities = filters.selectedAmenities.every((amenity) =>
          hotel.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (filters.sortBy === "price-low") return a.pricePerNight - b.pricePerNight;
      if (filters.sortBy === "price-high") return b.pricePerNight - a.pricePerNight;
      if (filters.sortBy === "rating") return b.ratingScore - a.ratingScore;
      if (filters.sortBy === "reviews") return b.reviewCount - a.reviewCount;
      // Default: featured first, then rating
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.ratingScore - a.ratingScore;
    });

  return (
    <HotelContext.Provider
      value={{
        hotels,
        filteredHotels,
        wishlist,
        bookings,
        currency,
        setCurrency,
        isDarkMode,
        toggleDarkMode,
        filters,
        setFilters,
        resetFilters,
        selectedHotel,
        setSelectedHotel,
        bookingModalHotel,
        setBookingModalHotel,
        isWishlistOpen,
        setIsWishlistOpen,
        isMyBookingsOpen,
        setIsMyBookingsOpen,
        toast,
        showToast,
        closeToast,
        formatPrice,
        toggleWishlist,
        addBooking,
        cancelBooking,
        addReview
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => useContext(HotelContext);
