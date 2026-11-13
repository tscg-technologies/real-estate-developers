/**
 * ESTATE HUB - Global Demo Properties Data
 * Fictional property catalog for Indian market demonstration.
 */

const propertiesData = [
  {
    id: "property-001",
    title: "Modern Luxury Apartment",
    slug: "modern-luxury-apartment",
    category: "apartments",
    type: "Apartment",
    purpose: "buy",
    price: 8500000,
    priceFormatted: "₹85 Lakh",
    locality: "Silver Oak Residency",
    city: "Bengaluru",
    state: "Karnataka",
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    status: "Ready to Move",
    featured: true,
    residential: true,
    commercial: false,
    image: "assets/images/luxury-apartment.webp",
    gallery: [
      "assets/images/luxury-apartment.webp",
      "assets/images/living-room.webp",
      "assets/images/bedroom-interior.webp",
      "assets/images/kitchen-interior.webp",
      "assets/images/luxury-bathroom.webp"
    ],
    description: "An architecturally refined 3-BHK luxury apartment located in the prestigious Silver Oak Residency. Featuring expansive floor-to-ceiling double-glazed windows, Italian marble flooring, and an open-concept living and dining pavilion that welcomes abundant natural light. The residence is equipped with high-grade modular fittings, centralized air conditioning, and a generous balcony offering sunset views over manicured community gardens.",
    features: [
      "2 Covered Car Parking",
      "Wide Wrap-around Balcony",
      "24/7 Multi-tier Security & CCTV",
      "High-speed Passenger & Service Lifts",
      "Designer Landscaped Gardens",
      "100% Power Backup",
      "Fully Fitted Modular Kitchen",
      "Clubhouse & Infinity Pool Access"
    ],
    info: {
      builtUpArea: "1,850 sq.ft.",
      carpetArea: "1,520 sq.ft.",
      furnishingStatus: "Semi-Furnished",
      floor: "7th of 14 Floors",
      possession: "Immediate (Ready to Move)",
      facing: "East Facing"
    },
    agent: {
      name: "Rohit Verma",
      title: "Senior Property Advisor",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-002",
    title: "Premium Garden Villa",
    slug: "premium-garden-villa",
    category: "villas",
    type: "Villa",
    purpose: "buy",
    price: 24000000,
    priceFormatted: "₹2.4 Crore",
    locality: "Lakeview Gardens",
    city: "Hyderabad",
    state: "Telangana",
    bedrooms: 4,
    bathrooms: 5,
    area: 3600,
    status: "Under Construction",
    featured: true,
    residential: true,
    commercial: false,
    image: "assets/images/garden-villa.webp",
    gallery: [
      "assets/images/garden-villa.webp",
      "assets/images/modern-villa.webp",
      "assets/images/swimming-pool.webp",
      "assets/images/living-room.webp",
      "assets/images/bedroom-interior.webp"
    ],
    description: "A masterwork of contemporary architecture, this private 4-BHK villa is nestled within the serene Lakeview Gardens enclave. Spread across three levels with private elevator access, it boasts a double-height living foyer, a tranquil courtyard, and a private plunge pool flanked by tropical landscaping. Designed for connoisseurs seeking tranquility without compromising urban connectivity.",
    features: [
      "3 Covered Parking Bays",
      "Private Landscaped Garden & Lawn",
      "Private Plunge Pool",
      "Dedicated Home Theatre Room",
      "Smart Home Automation",
      "Servant Quarters with Bath",
      "Solar Water Heating & 100% Backup",
      "Gated Community with 24/7 Patrol"
    ],
    info: {
      builtUpArea: "3,600 sq.ft.",
      carpetArea: "3,150 sq.ft.",
      furnishingStatus: "Unfurnished (Customizable)",
      floor: "G + 2 Independent Floors",
      possession: "December 2027",
      facing: "North-East Facing"
    },
    agent: {
      name: "Ananya Deshmukh",
      title: "Luxury Homes Specialist",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-003",
    title: "Contemporary Family Home",
    slug: "contemporary-family-home",
    category: "houses",
    type: "Independent House",
    purpose: "buy",
    price: 11500000,
    priceFormatted: "₹1.15 Crore",
    locality: "Maple Grove Estate",
    city: "Pune",
    state: "Maharashtra",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    status: "Ready to Move",
    featured: true,
    residential: true,
    commercial: false,
    image: "assets/images/family-house.webp",
    gallery: [
      "assets/images/family-house.webp",
      "assets/images/apartment-interior.webp",
      "assets/images/living-room.webp",
      "assets/images/kitchen-interior.webp"
    ],
    description: "Thoughtfully conceived for modern family life, this standalone residence in Maple Grove Estate combines aesthetic warmth with functional utility. It features spacious en-suite bedrooms, an expansive rooftop terrace ideal for entertaining, and a private driveway. Situated close to top international schools, healthcare centres, and gourmet retail avenues.",
    features: [
      "2 Covered Parking Spaces",
      "Private Rooftop Terrace",
      "Modular Kitchen with Pantry",
      "Perimeter Security Wall & CCTV",
      "Rainwater Harvesting System",
      "100% Inverter Power Backup",
      "Separate Utility & Laundry Yard",
      "Quiet Tree-lined Residential Lane"
    ],
    info: {
      builtUpArea: "2,200 sq.ft.",
      carpetArea: "1,880 sq.ft.",
      furnishingStatus: "Semi-Furnished",
      floor: "Ground + 1 Floor",
      possession: "Immediate (Ready to Move)",
      facing: "North Facing"
    },
    agent: {
      name: "Vikram Malhotra",
      title: "Senior Residential Consultant",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-004",
    title: "Spacious Urban Apartment",
    slug: "spacious-urban-apartment",
    category: "apartments",
    type: "Apartment",
    purpose: "rent",
    price: 6800000,
    priceFormatted: "₹68 Lakh (Buy) / ₹45,000/mo (Rent)",
    locality: "Green Valley Enclave",
    city: "Gurugram",
    state: "Haryana",
    bedrooms: 2,
    bathrooms: 2,
    area: 1350,
    status: "Ready to Move",
    featured: true,
    residential: true,
    commercial: false,
    image: "assets/images/apartment-interior.webp",
    gallery: [
      "assets/images/apartment-interior.webp",
      "assets/images/living-room.webp",
      "assets/images/bedroom-interior.webp",
      "assets/images/luxury-bathroom.webp"
    ],
    description: "An urban retreat designed for working professionals and young families in Green Valley Enclave. Offers seamless metro connectivity, minimalist Scandinavian-inspired interior styling, energy-efficient LED fixtures, and an open layout that maximizes every square foot. Complete with access to a vibrant community club and indoor sports pavilion.",
    features: [
      "1 Dedicated Covered Parking",
      "Panoramic City-view Balcony",
      "Security Intercom & Access Cards",
      "High-speed Elevators with ARD",
      "Clubhouse, Gym & Yoga Deck",
      "Full Power Backup 24/7",
      "Centralized Piped Gas Facility",
      "On-site Maintenance Desk"
    ],
    info: {
      builtUpArea: "1,350 sq.ft.",
      carpetArea: "1,080 sq.ft.",
      furnishingStatus: "Fully Furnished",
      floor: "11th of 22 Floors",
      possession: "Immediate (Ready to Move)",
      facing: "East Facing"
    },
    agent: {
      name: "Rohit Verma",
      title: "Senior Property Advisor",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-005",
    title: "Luxury Duplex Residence",
    slug: "luxury-duplex-residence",
    category: "apartments",
    type: "Duplex Penthouse",
    purpose: "buy",
    price: 17500000,
    priceFormatted: "₹1.75 Crore",
    locality: "Harmony Heights",
    city: "Bengaluru",
    state: "Karnataka",
    bedrooms: 4,
    bathrooms: 4,
    area: 2850,
    status: "Under Construction",
    featured: true,
    residential: true,
    commercial: false,
    image: "assets/images/living-room.webp",
    gallery: [
      "assets/images/living-room.webp",
      "assets/images/luxury-apartment.webp",
      "assets/images/bedroom-interior.webp",
      "assets/images/swimming-pool.webp"
    ],
    description: "Crowning the prestigious Harmony Heights tower, this grand duplex residence offers double-height ceilings, a cantilevered wooden staircase, and an expansive private sky deck. Crafted for elevated luxury, the property features imported hardwood floors, smart lighting presets, and hotel-grade bathroom suites with free-standing soaking tubs.",
    features: [
      "2 Reserved Stilt Parking Slots",
      "Private Sky Terrace & BBQ Corner",
      "Double-height Living Lounge",
      "Biometric Access System",
      "Infinity Sky Pool & Fitness Lounge",
      "100% DG Back-up for Entire Unit",
      "European Designer Kitchen",
      "Concierge & Valet Desk"
    ],
    info: {
      builtUpArea: "2,850 sq.ft.",
      carpetArea: "2,420 sq.ft.",
      furnishingStatus: "Semi-Furnished",
      floor: "19th & 20th Penthouse Levels",
      possession: "September 2027",
      facing: "North-West Facing"
    },
    agent: {
      name: "Ananya Deshmukh",
      title: "Luxury Homes Specialist",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-006",
    title: "Premium Residential Plot",
    slug: "premium-residential-plot",
    category: "plots",
    type: "Residential Plot",
    purpose: "buy",
    price: 5500000,
    priceFormatted: "₹55 Lakh",
    locality: "Sunrise Park",
    city: "Chennai",
    state: "Tamil Nadu",
    bedrooms: 0,
    bathrooms: 0,
    area: 2400,
    status: "Ready to Move",
    featured: true,
    residential: true,
    commercial: false,
    image: "assets/images/residential-plot.webp",
    gallery: [
      "assets/images/residential-plot.webp",
      "assets/images/hero-real-estate.webp",
      "assets/images/modern-villa.webp"
    ],
    description: "An exceptional freehold residential plot situated within the fully developed, gated Sunrise Park layout. Features wide 40-foot asphalt internal roads, underground electrical conduits, pre-installed water connections, and lush tree plantations. A rare opportunity to design and construct your bespoke dream home in a rapidly appreciating micro-market.",
    features: [
      "Gated Community with Boundary Wall",
      "40-ft Asphalt Roads with LED Lighting",
      "Underground Cabling & Drainage",
      "Dedicated Water Supply Line",
      "Clear Title & Fictional Plan Approvals",
      "Lush Landscaped Central Park",
      "Ready for Immediate Construction",
      "24/7 Security Post at Gate"
    ],
    info: {
      builtUpArea: "2,400 sq.ft. (60 x 40 ft)",
      carpetArea: "2,400 sq.ft. Plot Area",
      furnishingStatus: "Vacant Freehold Land",
      floor: "Ground Level / Ready to Build",
      possession: "Immediate (Ready to Register)",
      facing: "North-East Corner Plot"
    },
    agent: {
      name: "Vikram Malhotra",
      title: "Senior Residential Consultant",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-007",
    title: "Signature Architecture Villa",
    slug: "signature-architecture-villa",
    category: "villas",
    type: "Villa",
    purpose: "buy",
    price: 32000000,
    priceFormatted: "₹3.20 Crore",
    locality: "Silver Oak Residency",
    city: "Bengaluru",
    state: "Karnataka",
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    status: "Ready to Move",
    featured: false,
    residential: true,
    commercial: false,
    image: "assets/images/modern-villa.webp",
    gallery: [
      "assets/images/modern-villa.webp",
      "assets/images/living-room.webp",
      "assets/images/bedroom-interior.webp",
      "assets/images/swimming-pool.webp"
    ],
    description: "An iconic luxury villa featuring exposed concrete textures, warm teak elements, and private reflection pools. Offers five palatial bedroom suites, a double-height art gallery corridor, staff quarters, and comprehensive acoustic insulation for absolute privacy and comfort.",
    features: [
      "4 Covered Car Parking Bays",
      "Private Heated Swimming Pool",
      "Custom Italian Kitchen & Island",
      "Full Solar Array & Battery Storage",
      "Private Elevator & Smart Home Suite",
      "Landscaped Zen Garden with Deck",
      "Walk-in Dressing Suites for All Rooms",
      "Guarded Premium Villa Enclave"
    ],
    info: {
      builtUpArea: "4,500 sq.ft.",
      carpetArea: "3,950 sq.ft.",
      furnishingStatus: "Fully Furnished",
      floor: "Ground + 2 Floors",
      possession: "Immediate (Ready to Move)",
      facing: "East Facing"
    },
    agent: {
      name: "Ananya Deshmukh",
      title: "Luxury Homes Specialist",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-008",
    title: "Executive Corporate Office Suite",
    slug: "executive-corporate-office-suite",
    category: "commercial",
    type: "Office Spaces",
    purpose: "rent",
    price: 180000,
    priceFormatted: "₹1.80 Lakh / month",
    locality: "The Urban Square",
    city: "Gurugram",
    state: "Haryana",
    bedrooms: 0,
    bathrooms: 2,
    area: 2500,
    status: "Ready to Move",
    featured: false,
    residential: false,
    commercial: true,
    image: "assets/images/office-space.webp",
    gallery: [
      "assets/images/office-space.webp",
      "assets/images/commercial-building.webp",
      "assets/images/retail-space.webp"
    ],
    description: "A grade-A corporate office floor in the landmark Urban Square business complex. Fully plug-and-play setup featuring 45 ergonomic workstations, 2 executive boardrooms equipped with conference AV, private executive cabins, breakout cafeteria lounge, and high-speed fiber redundancy.",
    features: [
      "Grade-A Commercial Certification (Demo)",
      "Dedicated High-Speed Fiber Lines",
      "Central HVAC & Air Filtration",
      "4 High-Speed Passenger Elevators",
      "Multi-level Basement Parking",
      "Cafeteria & Food Court in Complex",
      "24/7 Facility Management & Security",
      "LEED Gold Rated Green Building"
    ],
    info: {
      builtUpArea: "2,500 sq.ft.",
      carpetArea: "2,050 sq.ft.",
      furnishingStatus: "Fully Fitted (Plug & Play)",
      floor: "8th Floor of 18 Floors",
      possession: "Immediate (Ready to Occupy)",
      facing: "North-East Facing"
    },
    agent: {
      name: "Siddharth Rao",
      title: "Commercial Asset Director",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-009",
    title: "Prime High-Street Retail Showroom",
    slug: "prime-high-street-retail-showroom",
    category: "commercial",
    type: "Retail Shops",
    purpose: "rent",
    price: 320000,
    priceFormatted: "₹3.20 Lakh / month",
    locality: "Central Avenue Promenade",
    city: "Mumbai",
    state: "Maharashtra",
    bedrooms: 0,
    bathrooms: 1,
    area: 1600,
    status: "Ready to Move",
    featured: false,
    residential: false,
    commercial: true,
    image: "assets/images/retail-space.webp",
    gallery: [
      "assets/images/retail-space.webp",
      "assets/images/commercial-building.webp",
      "assets/images/office-space.webp"
    ],
    description: "Exceptional ground-floor retail showroom unit commanding prime frontage on a bustling high-street boulevard. Boasts 35 feet of uninterrupted clear glass display frontage, soaring 14-foot ceiling height, dedicated customer parking bays, and high footfall from affluent surrounding residential communities.",
    features: [
      "35-Foot Clear Glass Frontage",
      "Soaring 14-Foot Clear Ceilings",
      "Dedicated Customer Front Parking",
      "Heavy Power Load Sanction (35 kVA)",
      "High Visibility Signage Band",
      "Rear Loading & Service Access",
      "Round-the-Clock Security Guarding",
      "Ideal for Fashion, Jewellery or Cafe"
    ],
    info: {
      builtUpArea: "1,600 sq.ft.",
      carpetArea: "1,420 sq.ft.",
      furnishingStatus: "Warm Shell with Flooring",
      floor: "Ground Floor Frontage",
      possession: "Immediate (Ready to Fit-out)",
      facing: "Main Boulevard Facing"
    },
    agent: {
      name: "Siddharth Rao",
      title: "Commercial Asset Director",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-010",
    title: "Independent Commercial Tower Floor",
    slug: "independent-commercial-tower-floor",
    category: "commercial",
    type: "Commercial Buildings",
    purpose: "buy",
    price: 48000000,
    priceFormatted: "₹4.80 Crore",
    locality: "Skyline Business Hub",
    city: "Hyderabad",
    state: "Telangana",
    bedrooms: 0,
    bathrooms: 4,
    area: 5200,
    status: "Ready to Move",
    featured: false,
    residential: false,
    commercial: true,
    image: "assets/images/commercial-building.webp",
    gallery: [
      "assets/images/commercial-building.webp",
      "assets/images/office-space.webp",
      "assets/images/retail-space.webp"
    ],
    description: "A premier commercial asset consisting of an entire private floor plate in the iconic Skyline Business Hub. Designed for technology enterprises, multinational regional headquarters, or financial advisory institutions. Features flexible column spans and advanced building automation systems.",
    features: [
      "Entire Private Floor Plate",
      "Colum-free Flexible Floor Plan",
      "8 Dedicated Car Stalls in Basement",
      "Dedicated High-Speed Fiber Backbone",
      "Integrated BMS & Energy Metering",
      "Double-glazed Heat-reflective Glass",
      "Multi-cuisine Cafeteria in Tower",
      "State-of-the-Art Fire Suppression"
    ],
    info: {
      builtUpArea: "5,200 sq.ft.",
      carpetArea: "4,450 sq.ft.",
      furnishingStatus: "Bare Shell (Custom Fitout)",
      floor: "12th Floor of 24 Floors",
      possession: "Immediate (Ready for Fitout)",
      facing: "360-degree City Views"
    },
    agent: {
      name: "Siddharth Rao",
      title: "Commercial Asset Director",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-011",
    title: "Serene Lakeview Penthouse",
    slug: "serene-lakeview-penthouse",
    category: "apartments",
    type: "Apartment",
    purpose: "buy",
    price: 19500000,
    priceFormatted: "₹1.95 Crore",
    locality: "Lakeview Gardens",
    city: "Hyderabad",
    state: "Telangana",
    bedrooms: 3,
    bathrooms: 4,
    area: 2650,
    status: "Ready to Move",
    featured: false,
    residential: true,
    commercial: false,
    image: "assets/images/hero-real-estate.webp",
    gallery: [
      "assets/images/hero-real-estate.webp",
      "assets/images/living-room.webp",
      "assets/images/bedroom-interior.webp",
      "assets/images/luxury-bathroom.webp"
    ],
    description: "Perched gracefully above the tranquil waters of Lakeview Gardens, this single-level penthouse commands panoramic water views and gentle breezes. Designed with double master suites, imported Italian quartz counters, concealed cove lighting, and private lift landing directly into the residence.",
    features: [
      "Direct Private Elevator Access",
      "Panoramic Lake-Facing Deck",
      "Dual Master Bedroom Suites",
      "Smart Temperature & Mood Controls",
      "Resort Clubhouse & Lap Pool",
      "Dedicated 2 EV Charging Slots",
      "24/7 Armed Security & CCTV",
      "Concierge and Parcel Locker Service"
    ],
    info: {
      builtUpArea: "2,650 sq.ft.",
      carpetArea: "2,280 sq.ft.",
      furnishingStatus: "Fully Furnished",
      floor: "15th Floor (Top Floor)",
      possession: "Immediate (Ready to Move)",
      facing: "South-East Facing"
    },
    agent: {
      name: "Ananya Deshmukh",
      title: "Luxury Homes Specialist",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-012",
    title: "Gated Enclave Custom Villa",
    slug: "gated-enclave-custom-villa",
    category: "villas",
    type: "Villa",
    purpose: "buy",
    price: 16500000,
    priceFormatted: "₹1.65 Crore",
    locality: "Green Valley Enclave",
    city: "Pune",
    state: "Maharashtra",
    bedrooms: 4,
    bathrooms: 4,
    area: 3100,
    status: "Ready to Move",
    featured: false,
    residential: true,
    commercial: false,
    image: "assets/images/project-04.webp",
    gallery: [
      "assets/images/project-04.webp",
      "assets/images/living-room.webp",
      "assets/images/kitchen-interior.webp",
      "assets/images/bedroom-interior.webp"
    ],
    description: "An elegant two-storey villa situated inside a low-density gated community in Green Valley Enclave. Highlights include a warm wooden sun-deck, manicured side gardens, open-concept kitchen with breakfast island, and private family lounges on both levels.",
    features: [
      "2 Covered Car Parking Spaces",
      "Private Side Lawn & Herb Garden",
      "Open Concept Gourmet Kitchen",
      "Separate Servant Room with Toilet",
      "Solar Water Heating System",
      "100% Inverter & Generator Backup",
      "Gated Community Security Patrol",
      "Children's Play Park & Tennis Court"
    ],
    info: {
      builtUpArea: "3,100 sq.ft.",
      carpetArea: "2,650 sq.ft.",
      furnishingStatus: "Semi-Furnished",
      floor: "Ground + 1 Floor",
      possession: "Immediate (Ready to Move)",
      facing: "East Facing"
    },
    agent: {
      name: "Rohit Verma",
      title: "Senior Property Advisor",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-013",
    title: "Boutique Co-working Studio Floor",
    slug: "boutique-coworking-studio-floor",
    category: "commercial",
    type: "Co-working Spaces",
    purpose: "rent",
    price: 125000,
    priceFormatted: "₹1.25 Lakh / month",
    locality: "Silver Oak Residency",
    city: "Bengaluru",
    state: "Karnataka",
    bedrooms: 0,
    bathrooms: 2,
    area: 1950,
    status: "Ready to Move",
    featured: false,
    residential: false,
    commercial: true,
    image: "assets/images/office-space.webp",
    gallery: [
      "assets/images/office-space.webp",
      "assets/images/commercial-building.webp",
      "assets/images/retail-space.webp"
    ],
    description: "A turnkey designer collaborative workspace designed for boutique creative agencies, consultancies, or tech startups. Offers 30 ergonomic hot desks, 2 private sound-insulated phone booths, an 8-seater meeting room with interactive smart screen, and an espresso coffee lounge.",
    features: [
      "Turnkey Plug & Play Workstations",
      "2 Sound-Insulated Acoustic Pods",
      "Smart Interactive Conference Room",
      "Cafeteria & Espresso Bar Barista",
      "Dual Redundant Internet Lines",
      "Biometric Access & Visitor Log",
      "24/7 Access with Building Security",
      "Daily Professional Housekeeping"
    ],
    info: {
      builtUpArea: "1,950 sq.ft.",
      carpetArea: "1,600 sq.ft.",
      furnishingStatus: "Fully Furnished (Turnkey)",
      floor: "3rd Floor",
      possession: "Immediate (Ready to Work)",
      facing: "South Facing"
    },
    agent: {
      name: "Siddharth Rao",
      title: "Commercial Asset Director",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  },
  {
    id: "property-014",
    title: "Urban Corner Residential Plot",
    slug: "urban-corner-residential-plot",
    category: "plots",
    type: "Residential Plots",
    purpose: "buy",
    price: 8800000,
    priceFormatted: "₹88 Lakh",
    locality: "Maple Grove Estate",
    city: "Pune",
    state: "Maharashtra",
    bedrooms: 0,
    bathrooms: 0,
    area: 3200,
    status: "Ready to Move",
    featured: false,
    residential: true,
    commercial: false,
    image: "assets/images/project-06.webp",
    gallery: [
      "assets/images/project-06.webp",
      "assets/images/residential-plot.webp",
      "assets/images/hero-real-estate.webp"
    ],
    description: "A coveted dual-frontage corner plot offering high architectural freedom within the serene Maple Grove Estate. Surrounded by mature mahogany trees, the plot enjoys 50-ft front and 40-ft side road access with complete civil infrastructure already operational.",
    features: [
      "Dual Corner Road Frontage",
      "Clear Title with Fictional Sanctions",
      "Underground Water & Power Lines",
      "High Soil Bearing Capacity Certified",
      "Secured Gated Community",
      "Walking Track & Green Belt Border",
      "Ready for Immediate Registration",
      "Close to Premium Metro Station"
    ],
    info: {
      builtUpArea: "3,200 sq.ft.",
      carpetArea: "3,200 sq.ft. Plot Area",
      furnishingStatus: "Vacant Freehold Land",
      floor: "Ground Level / Ready to Build",
      possession: "Immediate (Ready to Register)",
      facing: "North-West Corner"
    },
    agent: {
      name: "Vikram Malhotra",
      title: "Senior Residential Consultant",
      phone: "+91 00000 00000",
      email: "hello@example.com"
    }
  }
];

// Helper to get property by ID
function getPropertyById(id) {
  if (!id) return null;
  return propertiesData.find(p => p.id.toLowerCase() === id.trim().toLowerCase()) || null;
}

// Helper to filter properties
function filterPropertiesList(filters = {}) {
  return propertiesData.filter(item => {
    // Search query matching title, locality, city, type
    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      const match = 
        item.title.toLowerCase().includes(q) ||
        item.locality.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Purpose (buy / rent / all)
    if (filters.purpose && filters.purpose !== "all") {
      if (item.purpose.toLowerCase() !== filters.purpose.toLowerCase()) return false;
    }

    // Category (apartments, villas, houses, plots, commercial, etc.)
    if (filters.category && filters.category !== "all") {
      if (item.category.toLowerCase() !== filters.category.toLowerCase()) return false;
    }

    // Location dropdown
    if (filters.location && filters.location !== "all") {
      const loc = filters.location.toLowerCase();
      const itemLoc = (item.locality + " " + item.city).toLowerCase();
      if (!itemLoc.includes(loc)) return false;
    }

    // Bedrooms
    if (filters.bedrooms && filters.bedrooms !== "all") {
      const reqBed = parseInt(filters.bedrooms, 10);
      if (reqBed === 4) {
        if (item.bedrooms < 4) return false;
      } else {
        if (item.bedrooms !== reqBed) return false;
      }
    }

    // Bathrooms
    if (filters.bathrooms && filters.bathrooms !== "all") {
      const reqBath = parseInt(filters.bathrooms, 10);
      if (item.bathrooms < reqBath) return false;
    }

    // Min Budget
    if (filters.minBudget) {
      const minB = parseFloat(filters.minBudget);
      if (!isNaN(minB) && item.price < minB) return false;
    }

    // Max Budget
    if (filters.maxBudget) {
      const maxB = parseFloat(filters.maxBudget);
      if (!isNaN(maxB) && item.price > maxB) return false;
    }

    // Min Area
    if (filters.minArea) {
      const minA = parseFloat(filters.minArea);
      if (!isNaN(minA) && item.area < minA) return false;
    }

    // Max Area
    if (filters.maxArea) {
      const maxA = parseFloat(filters.maxArea);
      if (!isNaN(maxA) && item.area > maxA) return false;
    }

    // Residential only filter
    if (filters.residentialOnly && !item.residential) return false;

    // Commercial only filter
    if (filters.commercialOnly && !item.commercial) return false;

    return true;
  });
}
