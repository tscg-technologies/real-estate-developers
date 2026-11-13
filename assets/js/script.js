/**
 * ESTATE HUB - Global Script
 * Manages sticky header, mobile nav, favourites system, list property modal,
 * contact forms, toast notifications, and interactive elements.
 */

// Global Favourites Management (Stored in localStorage as browser-local demo only)
const FAV_STORAGE_KEY = "estate_hub_demo_favourites";

function getFavourites() {
  try {
    const raw = localStorage.getItem(FAV_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveFavourites(favList) {
  try {
    localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(favList));
  } catch (e) {
    console.warn("localStorage unavailable for favourites.");
  }
}

function toggleFavourite(propertyId) {
  let favs = getFavourites();
  const index = favs.indexOf(propertyId);
  let isAdded = false;

  if (index > -1) {
    favs.splice(index, 1);
    isAdded = false;
  } else {
    favs.push(propertyId);
    isAdded = true;
  }

  saveFavourites(favs);
  updateFavouriteCountUI();
  updateFavouriteButtonsUI();

  showToast(isAdded ? "Added to your demo favourites" : "Removed from demo favourites");
  return isAdded;
}

function updateFavouriteCountUI() {
  const favs = getFavourites();
  const badges = document.querySelectorAll(".fav-count-badge");
  badges.forEach(b => {
    b.textContent = favs.length;
    b.style.display = favs.length > 0 ? "flex" : "none";
  });
}

function updateFavouriteButtonsUI() {
  const favs = getFavourites();
  const buttons = document.querySelectorAll(".fav-btn[data-id]");
  buttons.forEach(btn => {
    const id = btn.getAttribute("data-id");
    if (favs.includes(id)) {
      btn.classList.add("active");
      btn.setAttribute("title", "Remove from Favourites");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("title", "Add to Favourites");
    }
  });
}

// Toast notification
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Modal open/close helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Render Favourites in Modal
function renderFavouritesModal() {
  const container = document.getElementById("favModalList");
  if (!container) return;

  const favs = getFavourites();
  if (favs.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="padding: 2.5rem 1rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.5" style="margin-bottom: 1rem;">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-primary); margin-bottom: 0.5rem;">No favourites shortlisted yet</p>
        <p class="text-muted" style="font-size: 0.9rem;">Browse our residential and commercial collections and click the heart icon to save properties for later review.</p>
        <a href="properties.html" class="btn btn-primary btn-sm" style="margin-top: 1.25rem;" onclick="closeModal('favModal')">Browse Properties</a>
      </div>
    `;
    return;
  }

  // If propertiesData is defined
  if (typeof propertiesData !== "undefined") {
    const list = propertiesData.filter(p => favs.includes(p.id));
    let html = `<div style="display: flex; flex-direction: column; gap: 1rem;">`;
    list.forEach(item => {
      html += `
        <div style="display: flex; gap: 1rem; align-items: center; background: var(--color-cream); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
          <img src="${item.image}" alt="${item.title}" style="width: 80px; height: 60px; object-fit: cover; border-radius: var(--radius-sm);" onerror="this.src='assets/images/hero-real-estate.webp'">
          <div style="flex-grow: 1;">
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--color-gold); text-transform: uppercase;">${item.locality}</div>
            <a href="property-details.html?id=${item.id}" style="font-weight: 600; font-size: 0.95rem; color: var(--color-primary);">${item.title}</a>
            <div style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--color-navy);">${item.priceFormatted}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <a href="property-details.html?id=${item.id}" class="btn btn-outline btn-sm">View</a>
            <button class="btn btn-sm" style="color: #E63946; padding: 0.5rem;" onclick="toggleFavourite('${item.id}'); renderFavouritesModal();" title="Remove">✕</button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
  }
}

// Reusable card markup generator
function createPropertyCardHTML(item) {
  const isFav = getFavourites().includes(item.id);
  const specs = [];
  if (item.bedrooms > 0) specs.push(`<span class="spec-item"><svg viewBox="0 0 24 24"><path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"></path><path d="M21 10H3"></path><path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"></path></svg>${item.bedrooms} Beds</span>`);
  if (item.bathrooms > 0) specs.push(`<span class="spec-item"><svg viewBox="0 0 24 24"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z"></path><path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1"></path></svg>${item.bathrooms} Baths</span>`);
  specs.push(`<span class="spec-item"><svg viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>${item.area.toLocaleString('en-IN')} sq.ft</span>`);

  return `
    <article class="property-card" data-category="${item.category}" data-purpose="${item.purpose}" data-id="${item.id}">
      <div class="property-card-media">
        <img class="property-card-img" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='assets/images/hero-real-estate.webp'">
        <div class="property-card-badges">
          <span class="badge ${item.status === 'Ready to Move' ? 'badge-success' : 'badge-navy'}">${item.status}</span>
          <span class="badge badge-gold">${item.type}</span>
        </div>
        <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" onclick="toggleFavourite('${item.id}')" aria-label="Save to Favourites" title="${isFav ? 'Remove from Favourites' : 'Add to Favourites'}">
          <svg viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="property-card-content">
        <div class="property-card-locality">${item.locality}, ${item.city}</div>
        <h3 class="property-card-title">
          <a href="property-details.html?id=${item.id}">${item.title}</a>
        </h3>
        <div class="property-card-price">${item.priceFormatted}</div>
        <div class="property-card-specs">
          ${specs.join("")}
        </div>
        <div class="property-card-footer">
          <span class="badge badge-outline">${item.purpose === 'rent' ? 'For Rent' : 'For Sale'}</span>
          <a href="property-details.html?id=${item.id}" class="btn btn-primary btn-sm">View Details</a>
        </div>
      </div>
    </article>
  `;
}

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Header
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // 2. Mobile Nav Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mainNav.classList.toggle("active");
    });
  }

  // Mobile Dropdown click handler
  const navItems = document.querySelectorAll(".nav-item.has-dropdown");
  navItems.forEach(item => {
    const link = item.querySelector(".nav-link");
    if (link) {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 860) {
          e.preventDefault();
          item.classList.toggle("dropdown-open");
        }
      });
    }
  });

  // 3. Back to Top Button
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("active");
      } else {
        backToTopBtn.classList.remove("active");
      }
    });
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 4. Initial Favourite UI count
  updateFavouriteCountUI();

  // Favourites Header Button Trigger
  const favHeaderBtns = document.querySelectorAll(".fav-header-btn");
  favHeaderBtns.forEach(b => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      renderFavouritesModal();
      openModal("favModal");
    });
  });

  // 5. List Your Property Modal Form Submission
  const listPropertyForm = document.getElementById("listPropertyForm");
  if (listPropertyForm) {
    listPropertyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const alertBox = document.getElementById("listPropertyAlert");
      if (alertBox) {
        alertBox.textContent = "Thank you! Your demo property listing request has been validated successfully. No information has been transmitted or stored.";
        alertBox.classList.add("active");
      }
      listPropertyForm.reset();
      setTimeout(() => {
        if (alertBox) alertBox.classList.remove("active");
        closeModal("listPropertyModal");
      }, 3500);
    });
  }

  // 6. Newsletter Form validation
  const newsletterForms = document.querySelectorAll(".newsletter-form");
  newsletterForms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".newsletter-input");
      if (input && input.value.trim() && input.checkValidity()) {
        showToast("Demo newsletter subscription confirmed! (No data stored)");
        form.reset();
      } else {
        showToast("Please enter a valid email address.");
      }
    });
  });

  // 7. Modal overlay click to close
  const modals = document.querySelectorAll(".modal-overlay");
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // 8. Close buttons inside modals
  const closeBtns = document.querySelectorAll(".modal-close, .btn-modal-close");
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const parentModal = btn.closest(".modal-overlay");
      if (parentModal) {
        parentModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
});
