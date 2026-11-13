# ESTATE HUB - Premium Indian Real Estate Website

**Tagline:** Find Your Place. Build Your Future.  
**Design Direction:** Luxury Indian Real Estate Marketplace & Architectural Property Showcase.

---

## 1. Project Overview
ESTATE HUB is a complete, multi-page, responsive real estate website engineered strictly with **HTML5, CSS3, and Vanilla JavaScript**. It contains zero dependencies on external frameworks, build tools, package managers, or backend databases.

The website represents a fictional luxury real estate firm operating in major metropolitan Indian markets (Bengaluru, Hyderabad, Pune, Gurugram, Mumbai, Chennai), showcasing:
- Luxury Apartments & Duplex Penthouses
- Independent Villas & Garden Estates
- Modern Family Homes
- Master-Planned Residential Plots
- Grade-A Commercial Office Suites & Co-working Studios
- High-Street Retail Showrooms

---

## 2. Technology Stack & Rules Compliance
- **HTML5:** Semantic architecture, accessible forms, descriptive image alt tags, ARIA labels, meta descriptions, and unique page titles.
- **CSS3:** Native CSS Grid, Flexbox, custom CSS Variables design system (`#20252B` Charcoal, `#182D43` Deep Navy, `#C6A15B` Warm Gold, `#F7F5F0` Cream, `#3E8063` Success Green), responsive media queries (`1440px`, `1280px`, `1024px`, `860px`, `480px`), and smooth micro-interactions.
- **Vanilla JavaScript:** Clean modular architecture across `properties.js`, `script.js`, and `property-details.js`.
- **Zero Frameworks:** No React, Vue, Angular, Next.js, Bootstrap, Tailwind, jQuery, TypeScript, Node.js, PHP, or Python.

---

## 3. Pages Included
1. **Home (`index.html`):** Full 14-section architectural showcase featuring dynamic search filtering, welcome intro, 6 category cards, 6 featured listings, Why Choose Us, luxury living editorial section, 3 project highlights, 6 services, 4-step process, customer testimonials, blog insights, and full footer.
2. **About Us (`about.html`):** Brand narrative, Vision & Mission, 6 Core Values (Trust, Transparency, Integrity, Customer Focus, Professionalism, Long-Term Relationships), and curated methodology.
3. **Properties Marketplace (`properties.html`):** Real-time multi-criteria filtering by Keyword/Locality, Category, Locality dropdown, Buy/Rent status, Bedrooms, Bathrooms, Min/Max Budget, and Area, with sorting (Price, Area, Newest, Featured), results count, reset button, and no-results fallback.
4. **Residential Properties (`residential.html`):** Dedicated showcase of apartments, villas, duplex homes, and residential plots with instant category chip filtering and lifestyle highlights.
5. **Commercial Properties (`commercial.html`):** Corporate towers, retail showrooms, co-working studios, and enterprise infrastructure standards.
6. **Property Details (`property-details.html`):** Dynamic query parameter reader (`?id=property-001`), interactive 5-image gallery with click-to-enlarge Lightbox, previous/next image navigation, detailed overview, key amenities, built-up specifications table, sticky advisor contact form, and related property listings. Graceful fallback on missing IDs.
7. **Services (`services.html`):** Comprehensive breakdown of 8 advisory services: Buying, Selling, Rental, Asset Management, Commercial Consulting, Investment Advisory, Consultation, and Listing Support.
8. **Our Projects (`projects.html`):** 6 master-planned development projects with category filtering (Luxury, Residential, Commercial, Plots).
9. **Blog & Insights (`blog.html`):** 6 real estate guides with search, category filtering, recent articles widget, and interactive modal reader.
10. **Contact Us (`contact.html`):** Fictional office address, interactive validation for name, email, phone (10+ digits), enquiry type, and message, with success confirmation.

---

## 4. Key Interactive Capabilities
- **Search & Filter Engine:** Fully functional JavaScript filtering over the fictional catalog array in `assets/js/properties.js`.
- **Favourites System:** One-click heart toggle on every property card. Persisted locally in browser `localStorage` as a client-side demo feature. Header badge counter updates in real-time, and a dedicated modal displays the user's shortlisted properties.
- **Image Lightbox:** Built with vanilla JS for responsive desktop and mobile interaction, including keyboard arrows and Escape key closing.
- **List Your Property Modal:** Accessible from any page header or hero CTA, featuring comprehensive property attribute inputs and validation.
- **Sticky Header & Mobile Drawer:** Smooth sticky navigation with active link highlighting and animated hamburger menu drawer.

---

## 5. Directory & File Structure
```
estate-hub/
│
├── index.html
├── about.html
├── properties.html
├── residential.html
├── commercial.html
├── property-details.html
├── services.html
├── projects.html
├── blog.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── properties.js
│   │   ├── script.js
│   │   └── property-details.js
│   │
│   └── images/
│       ├── hero-real-estate.webp
│       ├── about-estate.webp
│       ├── luxury-apartment.webp
│       ├── modern-villa.webp
│       ├── family-house.webp
│       ├── residential-plot.webp
│       ├── apartment-interior.webp
│       ├── living-room.webp
│       ├── bedroom-interior.webp
│       ├── kitchen-interior.webp
│       ├── luxury-bathroom.webp
│       ├── commercial-building.webp
│       ├── office-space.webp
│       ├── retail-space.webp
│       ├── swimming-pool.webp
│       ├── garden-villa.webp
│       ├── project-01.webp
│       ├── project-02.webp
│       ├── project-03.webp
│       ├── project-04.webp
│       ├── project-05.webp
│       ├── project-06.webp
│       ├── blog-01.webp
│       ├── blog-02.webp
│       └── blog-03.webp
│
└── README.md
```

---

## 6. How to Run
Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari). No web server, node installation, or build step is required.
