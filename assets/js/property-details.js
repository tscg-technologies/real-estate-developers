/**
 * ESTATE HUB - Property Details Controller
 * Extracts ?id= from URL parameters, populates property details,
 * powers the image lightbox gallery, and displays related properties.
 */

let currentProperty = null;
let currentLightboxIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get("id");

  const notFoundEl = document.getElementById("propertyNotFound");
  const detailsEl = document.getElementById("propertyDetailsContent");

  if (!propertyId || typeof propertiesData === "undefined") {
    showNotFound();
    return;
  }

  currentProperty = getPropertyById(propertyId);

  if (!currentProperty) {
    showNotFound();
    return;
  }

  // Populate Details
  if (notFoundEl) notFoundEl.style.display = "none";
  if (detailsEl) detailsEl.style.display = "block";

  renderPropertyDetails(currentProperty);
  renderRelatedProperties(currentProperty);
  setupLightbox();
  setupEnquiryForm(currentProperty);
});

function showNotFound() {
  const notFoundEl = document.getElementById("propertyNotFound");
  const detailsEl = document.getElementById("propertyDetailsContent");
  if (notFoundEl) notFoundEl.style.display = "block";
  if (detailsEl) detailsEl.style.display = "none";
  document.title = "Property Not Found | ESTATE HUB";
}

function renderPropertyDetails(prop) {
  // Update Title
  document.title = `${prop.title} | ESTATE HUB`;

  // Breadcrumb
  const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = prop.title;

  // Header texts
  const propTitle = document.getElementById("propTitle");
  if (propTitle) propTitle.textContent = prop.title;

  const propLocality = document.getElementById("propLocality");
  if (propLocality) propLocality.textContent = `${prop.locality}, ${prop.city}, ${prop.state}`;

  const propPrice = document.getElementById("propPrice");
  if (propPrice) propPrice.textContent = prop.priceFormatted;

  const propStatusBadge = document.getElementById("propStatusBadge");
  if (propStatusBadge) {
    propStatusBadge.textContent = prop.status;
    propStatusBadge.className = `badge ${prop.status === 'Ready to Move' ? 'badge-success' : 'badge-navy'}`;
  }

  const propTypeBadge = document.getElementById("propTypeBadge");
  if (propTypeBadge) propTypeBadge.textContent = prop.type;

  // Overview Specs
  const specBeds = document.getElementById("specBeds");
  if (specBeds) specBeds.textContent = prop.bedrooms > 0 ? `${prop.bedrooms} BHK` : "N/A (Plot/Commercial)";

  const specBaths = document.getElementById("specBaths");
  if (specBaths) specBaths.textContent = prop.bathrooms > 0 ? `${prop.bathrooms} Baths` : "Restrooms in Complex";

  const specArea = document.getElementById("specArea");
  if (specArea) specArea.textContent = `${prop.area.toLocaleString('en-IN')} sq.ft.`;

  const specPurpose = document.getElementById("specPurpose");
  if (specPurpose) specPurpose.textContent = prop.purpose === 'rent' ? "For Rent / Lease" : "For Immediate Sale";

  // Description
  const propDesc = document.getElementById("propDescription");
  if (propDesc) propDesc.textContent = prop.description;

  // Features list
  const featuresContainer = document.getElementById("propFeaturesList");
  if (featuresContainer && prop.features) {
    featuresContainer.innerHTML = prop.features.map(f => `
      <div class="feature-list-item">
        <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
        <span>${f}</span>
      </div>
    `).join("");
  }

  // Info Table
  const infoTable = document.getElementById("propInfoTable");
  if (infoTable && prop.info) {
    infoTable.innerHTML = `
      <tr><td>Property ID</td><td>${prop.id.toUpperCase()}</td></tr>
      <tr><td>Category</td><td style="text-transform: capitalize;">${prop.category}</td></tr>
      <tr><td>Super Built-up Area</td><td>${prop.info.builtUpArea}</td></tr>
      <tr><td>Carpet Area</td><td>${prop.info.carpetArea}</td></tr>
      <tr><td>Furnishing Status</td><td>${prop.info.furnishingStatus}</td></tr>
      <tr><td>Floor Level</td><td>${prop.info.floor}</td></tr>
      <tr><td>Possession Status</td><td>${prop.info.possession}</td></tr>
      <tr><td>Orientation</td><td>${prop.info.facing}</td></tr>
    `;
  }

  // Agent Card
  if (prop.agent) {
    const agentName = document.getElementById("agentName");
    const agentTitle = document.getElementById("agentTitle");
    const agentInitials = document.getElementById("agentInitials");
    if (agentName) agentName.textContent = prop.agent.name;
    if (agentTitle) agentTitle.textContent = prop.agent.title;
    if (agentInitials) {
      const parts = prop.agent.name.split(" ");
      agentInitials.textContent = parts.length > 1 ? (parts[0][0] + parts[1][0]) : "EH";
    }
  }

  // Gallery Images
  renderGallery(prop.gallery || [prop.image]);
}

function renderGallery(gallery) {
  const mainImgEl = document.getElementById("galleryMainImg");
  const thumbsContainer = document.getElementById("galleryThumbs");

  if (mainImgEl && gallery.length > 0) {
    mainImgEl.src = gallery[0];
    mainImgEl.alt = "Featured view";
  }

  if (thumbsContainer) {
    const remaining = gallery.slice(1, 5);
    thumbsContainer.innerHTML = remaining.map((imgUrl, idx) => `
      <div class="gallery-thumb" onclick="openLightbox(${idx + 1})">
        <img src="${imgUrl}" alt="Gallery photograph ${idx + 2}" onerror="this.src='assets/images/hero-real-estate.webp'">
      </div>
    `).join("");
  }

  // Gallery main click
  const galleryMain = document.getElementById("galleryMain");
  if (galleryMain) {
    galleryMain.addEventListener("click", () => openLightbox(0));
  }
}

// Lightbox Handlers
function setupLightbox() {
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  const lightbox = document.getElementById("lightbox");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => navigateLightbox(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => navigateLightbox(1));
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(index = 0) {
  if (!currentProperty || !currentProperty.gallery) return;
  currentLightboxIndex = index;
  const lightbox = document.getElementById("lightbox");
  const imgEl = document.getElementById("lightboxImg");
  const countEl = document.getElementById("lightboxCounter");

  if (imgEl) {
    imgEl.src = currentProperty.gallery[currentLightboxIndex] || currentProperty.image;
  }
  if (countEl) {
    countEl.textContent = `${currentLightboxIndex + 1} / ${currentProperty.gallery.length}`;
  }
  if (lightbox) {
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function navigateLightbox(step) {
  if (!currentProperty || !currentProperty.gallery) return;
  const len = currentProperty.gallery.length;
  currentLightboxIndex = (currentLightboxIndex + step + len) % len;

  const imgEl = document.getElementById("lightboxImg");
  const countEl = document.getElementById("lightboxCounter");
  if (imgEl) {
    imgEl.src = currentProperty.gallery[currentLightboxIndex];
  }
  if (countEl) {
    countEl.textContent = `${currentLightboxIndex + 1} / ${len}`;
  }
}

// Similar Properties Listing
function renderRelatedProperties(prop) {
  const container = document.getElementById("relatedPropertiesGrid");
  if (!container || typeof propertiesData === "undefined") return;

  const related = propertiesData
    .filter(p => p.id !== prop.id && (p.category === prop.category || p.city === prop.city))
    .slice(0, 3);

  if (related.length === 0) {
    container.innerHTML = `<p class="text-muted">No additional similar listings available at this moment.</p>`;
    return;
  }

  container.innerHTML = related.map(item => createPropertyCardHTML(item)).join("");
  updateFavouriteButtonsUI();
}

// Contact Agent Enquiry Form
function setupEnquiryForm(prop) {
  const form = document.getElementById("propertyEnquiryForm");
  const alertBox = document.getElementById("propertyEnquiryAlert");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (alertBox) {
      alertBox.textContent = `Thank you! Your demo enquiry regarding "${prop.title}" (${prop.id.toUpperCase()}) has been validated successfully. No information has been transmitted or stored.`;
      alertBox.classList.add("active");
    }
    form.reset();
    setTimeout(() => {
      if (alertBox) alertBox.classList.remove("active");
    }, 4500);
  });
}
