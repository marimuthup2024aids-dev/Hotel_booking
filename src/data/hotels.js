export const INITIAL_HOTELS = [
  {
    id: "hotel-1",
    name: "Grand Horizon Luxury Resort",
    tagline: "Unrivaled oceanfront elegance & private infinity pools",
    city: "Santorini",
    country: "Greece",
    location: "Oia Cliffside, Santorini 84702",
    starRating: 5,
    ratingScore: 4.95,
    reviewCount: 428,
    pricePerNight: 480,
    roomType: "Ocean Villa",
    featured: true,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Private Pool", "Spa & Wellness", "Ocean View", "Free Breakfast", "Bar & Lounge", "Room Service"],
    maxGuests: 4,
    bedType: "King Size Bed",
    roomSize: "850 sq ft",
    cancellationPolicy: "Free cancellation up to 48h before check-in",
    description: "Perched dramatically on the volcanic cliffs of Oia, Grand Horizon Luxury Resort offers sweeping panoramic views of the Aegean Caldera. Featuring private heated infinity pools, bespoke butler service, and Michelin-starred dining experience.",
    highlights: [
      "Private Caldera View Infinity Pool",
      "Complimentary Champagne Breakfast",
      "Sunset Private Balcony",
      "Luxury Marble Bathrooms with Spa Jet Tub"
    ],
    reviewsList: [
      {
        id: "rev-101",
        author: "Eleanor Vance",
        avatar: "EV",
        date: "September 28, 2026",
        rating: 5,
        comment: "An unbelievable experience! The private pool view of the sunset was worth every single penny. Impeccable staff service."
      },
      {
        id: "rev-102",
        author: "Marcus Sterling",
        avatar: "MS",
        date: "August 14, 2026",
        rating: 4.9,
        comment: "Exceptional luxury accommodation. Breakfast delivered directly to our balcony every morning. Will definitely return!"
      }
    ]
  },
  {
    id: "hotel-2",
    name: "The Sovereign Manhattan Suites",
    tagline: "Iconic Fifth Avenue luxury overlooking Central Park",
    city: "New York",
    country: "USA",
    location: "768 5th Ave, Manhattan, New York, NY 10019",
    starRating: 5,
    ratingScore: 4.88,
    reviewCount: 612,
    pricePerNight: 550,
    roomType: "Executive Suite",
    featured: true,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Fitness Center", "Spa & Wellness", "City Skyline View", "Cocktail Lounge", "Valet Parking"],
    maxGuests: 2,
    bedType: "Super King Bed",
    roomSize: "620 sq ft",
    cancellationPolicy: "Free cancellation up to 24h before check-in",
    description: "Located in the heart of Manhattan, The Sovereign presents timeless architectural splendor matched with contemporary tech amenities. Enjoy private access to Central Park views and elite concierge services.",
    highlights: [
      "Floor-to-ceiling Central Park Skyline Views",
      "24/7 Personal Chauffeur & Concierge",
      "Custom Italian Silk Bedding",
      "State-of-the-Art Fitness Club"
    ],
    reviewsList: [
      {
        id: "rev-201",
        author: "Dr. Jonathan Thorne",
        avatar: "JT",
        date: "September 12, 2026",
        rating: 5,
        comment: "The pinnacle of New York hospitality. Room service was fast and the skyline view at night is mesmerizing."
      }
    ]
  },
  {
    id: "hotel-3",
    name: "Ryokan Sakura Sanctuary",
    tagline: "Serene bamboo groves & authentic geothermal hot springs",
    city: "Kyoto",
    country: "Japan",
    location: "Arashiyama Bamboo Forest District, Kyoto 616-8385",
    starRating: 5,
    ratingScore: 4.98,
    reviewCount: 380,
    pricePerNight: 420,
    roomType: "Luxury Suite",
    featured: true,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Geothermal Onsen", "Garden View", "Free Breakfast", "Tea Ceremony", "Free Parking"],
    maxGuests: 3,
    bedType: "Traditional Futon & Tatami Suite",
    roomSize: "700 sq ft",
    cancellationPolicy: "Free cancellation up to 72h before check-in",
    description: "Nestled alongside Kyoto's tranquil Bamboo Forest, Ryokan Sakura Sanctuary combines centuries of Omotenashi hospitality with private open-air mineral baths and multi-course Kaiseki dining.",
    highlights: [
      "Private In-room Natural Hot Spring Bath",
      "Multi-course Chef Kaiseki Dinner Included",
      "Private Zen Rock Garden View",
      "Traditional Yukata Robes Provided"
    ],
    reviewsList: [
      {
        id: "rev-301",
        author: "Akira Takahashi",
        avatar: "AT",
        date: "October 01, 2026",
        rating: 5,
        comment: "Pure tranquility. The private hot spring bath under the stars was an unmatched spiritual relaxation."
      }
    ]
  },
  {
    id: "hotel-4",
    name: "Al-Bahar Golden Sands Palace",
    tagline: "Ultra-luxury beachfront resort with private helipad",
    city: "Dubai",
    country: "UAE",
    location: "Palm Jumeirah East Crescent, Dubai",
    starRating: 5,
    ratingScore: 4.91,
    reviewCount: 890,
    pricePerNight: 650,
    roomType: "Penthouse",
    featured: true,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Private Beach", "Swimming Pool", "Spa & Wellness", "Helipad Access", "Free Breakfast", "Airport Shuttle"],
    maxGuests: 5,
    bedType: "King Size Bed",
    roomSize: "1100 sq ft",
    cancellationPolicy: "Free cancellation up to 48h before check-in",
    description: "Rising above the pristine sands of Palm Jumeirah, Al-Bahar Golden Sands Palace offers royal treatment with private beach cabanas, underwater aquariums, and world-class luxury dining.",
    highlights: [
      "Private White Sand Beach Access",
      "Personal Butler Available 24 Hours",
      "Private Jacuzzi & Sunset Terrace",
      "Vip Airport Transfer Service"
    ],
    reviewsList: [
      {
        id: "rev-401",
        author: "Sophia Al-Maktoum",
        avatar: "SA",
        date: "September 19, 2026",
        rating: 5,
        comment: "Spectacular hospitality. The penthouse suite has breathtaking views of the Dubai skyline and ocean."
      }
    ]
  },
  {
    id: "hotel-5",
    name: "Azure Lagoon Overwater Villas",
    tagline: "Glass-bottom villas suspended over crystal turquoise waters",
    city: "Male",
    country: "Maldives",
    location: "North Malé Atoll, Maldives",
    starRating: 5,
    ratingScore: 4.97,
    reviewCount: 510,
    pricePerNight: 780,
    roomType: "Ocean Villa",
    featured: false,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Private Pool", "Ocean View", "Snorkeling Equipment", "Free Breakfast", "Spa & Wellness", "Room Service"],
    maxGuests: 2,
    bedType: "King Size Bed",
    roomSize: "950 sq ft",
    cancellationPolicy: "Free cancellation up to 7 days before check-in",
    description: "Step directly from your bed into turquoise coral lagoons. Azure Lagoon features private wooden sundecks, glass floor viewing panels, and outdoor rainfall showers under tropical stars.",
    highlights: [
      "Direct Ocean Staircase into Reef Lagoon",
      "Glass Floor Panel for Marine Viewing",
      "Floating Breakfast Delivered Daily",
      "Sunset Dolphin Cruise Included"
    ],
    reviewsList: [
      {
        id: "rev-501",
        author: "David & Chloe Miller",
        avatar: "DM",
        date: "September 05, 2026",
        rating: 5,
        comment: "Our dream honeymoon stay! Snorkeling right off our private deck with sea turtles was unbelievable."
      }
    ]
  },
  {
    id: "hotel-6",
    name: "Alpine Zenith Chalet & Spa",
    tagline: "Panoramic alpine sanctuary with ski-in ski-out access",
    city: "Zermatt",
    country: "Switzerland",
    location: "Matterhorn Glacier Way, Zermatt 3920",
    starRating: 5,
    ratingScore: 4.89,
    reviewCount: 310,
    pricePerNight: 510,
    roomType: "Luxury Suite",
    featured: false,
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Heated Pool", "Sauna & Steam Room", "Mountain View", "Fireplace", "Free Breakfast", "Ski Storage"],
    maxGuests: 4,
    bedType: "King Size Bed",
    roomSize: "800 sq ft",
    cancellationPolicy: "Free cancellation up to 48h before check-in",
    description: "Surrounded by snow-capped Swiss Alps peaks, Alpine Zenith features cozy stone fireplaces, private cedar saunas, and unobstructed views of the iconic Matterhorn.",
    highlights: [
      "Direct Ski-in & Ski-out Convenience",
      "In-suite Fireplace & Heated Stone Floors",
      "Finnish Cedar Sauna & Hydrotherapy Pool",
      "Gourmet Swiss Fondue & Wine Cellar"
    ],
    reviewsList: [
      {
        id: "rev-601",
        author: "Hannah Lindqvist",
        avatar: "HL",
        date: "August 22, 2026",
        rating: 4.8,
        comment: "Waking up to the Matterhorn view every morning was magical. The heated outdoor pool amidst snow is perfection."
      }
    ]
  },
  {
    id: "hotel-7",
    name: "Ubud Forest Eco Resort & Spa",
    tagline: "Lush jungle sanctuary overlooking sacred river valleys",
    city: "Bali",
    country: "Indonesia",
    location: "Jalan Raya Sanggingan, Ubud, Bali 80571",
    starRating: 4,
    ratingScore: 4.86,
    reviewCount: 460,
    pricePerNight: 290,
    roomType: "Deluxe Room",
    featured: false,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Infinity Pool", "Yoga Pavilion", "Jungle View", "Free Breakfast", "Organic Restaurant", "Spa & Wellness"],
    maxGuests: 2,
    bedType: "Double Queen Bed",
    roomSize: "550 sq ft",
    cancellationPolicy: "Free cancellation up to 24h before check-in",
    description: "Immerse yourself in Balinese natural beauty. Ubud Forest Eco Resort offers handcrafted bamboo architecture, open-air rainforest showers, and daily sunrise yoga sessions.",
    highlights: [
      "Multi-tiered Jungle Infinity Pool",
      "Complimentary Daily Sunrise Yoga",
      "Organic Farm-to-Table Dining",
      "Traditional Balinese Massage Center"
    ],
    reviewsList: [
      {
        id: "rev-701",
        author: "Oliver Bennett",
        avatar: "OB",
        date: "September 02, 2026",
        rating: 4.9,
        comment: "So peaceful and refreshing! The sound of the jungle at night and the organic breakfast were wonderful."
      }
    ]
  },
  {
    id: "hotel-8",
    name: "The Royal Kensington Suites",
    tagline: "Victorian splendor steps from Hyde Park & Museums",
    city: "London",
    country: "UK",
    location: "De Vere Gardens, Kensington, London W8 5AG",
    starRating: 5,
    ratingScore: 4.87,
    reviewCount: 520,
    pricePerNight: 440,
    roomType: "Executive Suite",
    featured: false,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Traditional Afternoon Tea", "Bar & Lounge", "Fitness Center", "Concierge Service", "Room Service"],
    maxGuests: 3,
    bedType: "King Size Bed",
    roomSize: "600 sq ft",
    cancellationPolicy: "Free cancellation up to 48h before check-in",
    description: "Combining historic English heritage with modern luxury, The Royal Kensington offers mahogany paneling, bespoke velvet interiors, and award-winning traditional High Tea.",
    highlights: [
      "Classic English High Tea Service",
      "Walking Distance to Hyde Park & Harrods",
      "Marble Fireplace in Suite",
      "24/7 Library & Cocktail Bar"
    ],
    reviewsList: [
      {
        id: "rev-801",
        author: "Charlotte Hayes",
        avatar: "CH",
        date: "August 30, 2026",
        rating: 4.8,
        comment: "Superb location and traditional charm. Staff greeted us warmly and catered to every request."
      }
    ]
  },
  {
    id: "hotel-9",
    name: "Villa Imperial Colosseum Hotel",
    tagline: "Historic Italian courtyard estate with rooftop Colosseum view",
    city: "Rome",
    country: "Italy",
    location: "Via dei Fori Imperiali, 00184 Roma RM",
    starRating: 4,
    ratingScore: 4.82,
    reviewCount: 395,
    pricePerNight: 350,
    roomType: "Deluxe Room",
    featured: false,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Rooftop Terrace", "Wine Tasting", "Free Breakfast", "City View", "Air Conditioning"],
    maxGuests: 2,
    bedType: "Double Queen Bed",
    roomSize: "480 sq ft",
    cancellationPolicy: "Free cancellation up to 24h before check-in",
    description: "Experience Roman history from your balcony. Villa Imperial features original 17th-century frescoes, private courtyard gardens, and a rooftop terrace directly facing the ancient Colosseum.",
    highlights: [
      "Rooftop Sunset Lounge facing the Colosseum",
      "Sommelier-led Italian Wine Tastings",
      "Authentic Hand-painted Fresco Ceilings",
      "Complimentary Artisan Gelato Bar"
    ],
    reviewsList: [
      {
        id: "rev-901",
        author: "Matteo Rossi",
        avatar: "MR",
        date: "September 15, 2026",
        rating: 4.9,
        comment: "Unforgettable Roman rooftop experience. Sipping prosecco while gazing at the illuminated Colosseum was magic!"
      }
    ]
  },
  {
    id: "hotel-10",
    name: "Casa Mediterranean Luxury Loft",
    tagline: "Avant-garde design lofts near Gothic Quarter & Beach",
    city: "Barcelona",
    country: "Spain",
    location: "Passeig de Gràcia, 08007 Barcelona",
    starRating: 4,
    ratingScore: 4.79,
    reviewCount: 315,
    pricePerNight: 310,
    roomType: "Executive Suite",
    featured: false,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Rooftop Pool", "Tapas Lounge", "City View", "Air Conditioning", "Free Breakfast"],
    maxGuests: 3,
    bedType: "King Size Bed",
    roomSize: "580 sq ft",
    cancellationPolicy: "Free cancellation up to 48h before check-in",
    description: "Located on prestigious Passeig de Gràcia, Casa Mediterranean merges Catalan modernist architecture with sleek contemporary furnishings, rooftop tapas, and pool.",
    highlights: [
      "Rooftop Pool with Panoramic City Views",
      "Complimentary Evening Tapas & Sangria Hour",
      "Steps away from Gaudí Masterpieces",
      "Designer Rain Showers"
    ],
    reviewsList: [
      {
        id: "rev-1001",
        author: "Isabella Garcia",
        avatar: "IG",
        date: "August 18, 2026",
        rating: 4.7,
        comment: "Great modern vibes and fantastic rooftop pool. Location is unbeatable for shopping and dining."
      }
    ]
  },
  {
    id: "hotel-11",
    name: "Table Mountain Ocean Lodge",
    tagline: "Dramatic coastal views of Atlantic Ocean & Table Mountain",
    city: "Cape Town",
    country: "South Africa",
    location: "Victoria Road, Camps Bay, Cape Town 8005",
    starRating: 5,
    ratingScore: 4.93,
    reviewCount: 280,
    pricePerNight: 390,
    roomType: "Ocean Villa",
    featured: false,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Infinity Pool", "Ocean View", "Spa & Wellness", "Wine Bar", "Free Parking", "Free Breakfast"],
    maxGuests: 4,
    bedType: "King Size Bed",
    roomSize: "820 sq ft",
    cancellationPolicy: "Free cancellation up to 48h before check-in",
    description: "Nestled between the Twelve Apostles mountain range and Atlantic ocean breakers, Table Mountain Lodge offers sunset terraces, wine tasting safaris, and infinity pool views.",
    highlights: [
      "Unobstructed Atlantic Ocean Sunsets",
      "Private Wine Tasting Cellar Tours",
      "Infinity Pool Overlooking Camps Bay",
      "In-suite Fireplace"
    ],
    reviewsList: [
      {
        id: "rev-1101",
        author: "Liam van der Merwe",
        avatar: "LV",
        date: "September 24, 2026",
        rating: 5,
        comment: "Breathtaking location! Watching the sunset over Camps Bay while enjoying local Pinotage was unforgettable."
      }
    ]
  },
  {
    id: "hotel-12",
    name: "Le Grand Palais Hotel & Spa",
    tagline: "Opulent French elegance overlooking the River Seine & Eiffel Tower",
    city: "Paris",
    country: "France",
    location: "15 Avenue Montaigne, 75008 Paris",
    starRating: 5,
    ratingScore: 4.96,
    reviewCount: 740,
    pricePerNight: 620,
    roomType: "Presidential Suite",
    featured: true,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Free WiFi", "Eiffel Tower View", "Michelin Dining", "Spa & Wellness", "Bar & Lounge", "Room Service"],
    maxGuests: 3,
    bedType: "Super King Bed",
    roomSize: "880 sq ft",
    cancellationPolicy: "Free cancellation up to 48h before check-in",
    description: "Located on fashion avenue Montaigne, Le Grand Palais offers private balconies with direct views of the glittering Eiffel Tower, haute couture interiors, and Michelin three-star dining.",
    highlights: [
      "Direct Private Balcony View of Eiffel Tower",
      "Michelin 3-Star Dining Experience",
      "Bespoke Dior Spa & Wellness Center",
      "Chauffeur Service in Vintage Rolls Royce"
    ],
    reviewsList: [
      {
        id: "rev-1201",
        author: "Camille Dubois",
        avatar: "CD",
        date: "October 02, 2026",
        rating: 5,
        comment: "Pure Parisian luxury. Watching the Eiffel Tower light show from our private balcony was dreamlike!"
      }
    ]
  }
];

export const CITIES = [
  "All Destinations",
  "Santorini",
  "New York",
  "Kyoto",
  "Dubai",
  "Male",
  "Zermatt",
  "Bali",
  "London",
  "Rome",
  "Barcelona",
  "Cape Town",
  "Paris"
];

export const ROOM_TYPES = [
  "All Room Types",
  "Ocean Villa",
  "Executive Suite",
  "Luxury Suite",
  "Penthouse",
  "Deluxe Room",
  "Presidential Suite"
];

export const ALL_AMENITIES = [
  "Free WiFi",
  "Private Pool",
  "Spa & Wellness",
  "Ocean View",
  "Free Breakfast",
  "Fitness Center",
  "Rooftop Terrace",
  "City View",
  "Air Conditioning",
  "Free Parking"
];

export const CURRENCIES = {
  USD: { symbol: "$", rate: 1, name: "USD ($)" },
  EUR: { symbol: "€", rate: 0.92, name: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.79, name: "GBP (£)" },
  INR: { symbol: "₹", rate: 83.5, name: "INR (₹)" }
};
