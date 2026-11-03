/* ============================================================
   PT HAKA ENGINEERING INDONESIA - MAIN SCRIPT
   Vanilla JS — no frameworks, no backend.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function iconSvg(name) {
    const icons = {
      engineering: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      support: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      integrated: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
      shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      quality: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      safety: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
      reliability: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      improve: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
      partner: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
    };
    return icons[name] || "";
  }

  /* ---------- Navbar ---------- */
  function initNavbar() {
    const navbar = $(".navbar");
    const toggle = $(".nav-toggle");
    const links = $(".nav-links");

    if (navbar) {
      const onScroll = () => {
        if (window.scrollY > 40) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        links.classList.toggle("open");
        document.body.style.overflow = links.classList.contains("open") ? "hidden" : "";
      });
      $$(".nav-links a").forEach((a) => {
        a.addEventListener("click", () => {
          toggle.classList.remove("open");
          links.classList.remove("open");
          document.body.style.overflow = "";
        });
      });
    }

    // Active link based on current file
    const path = window.location.pathname.split("/").pop() || "index.html";
    $$(".nav-links a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path || (path === "index.html" && href === "./index.html")) {
        a.classList.add("active");
      }
    });
  }

  /* ---------- Scroll Reveal ---------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
  }

  /* ---------- Back to Top ---------- */
  function initBackTop() {
    const btn = $(".back-top");
    if (!btn) return;
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 500) btn.classList.add("show");
        else btn.classList.remove("show");
      },
      { passive: true }
    );
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- Smooth anchor scroll ---------- */
  function initSmoothAnchors() {
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (id === "#" || id.length < 2) return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });
  }

  /* ---------- Image fallback ---------- */
  function initImageFallback() {
    $$("img").forEach((img) => {
      img.addEventListener("error", () => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = "1";
        img.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect fill="#F3F4F4" width="800" height="600"/><text x="50%" y="50%" fill="#9aa0a6" font-family="sans-serif" font-size="24" text-anchor="middle" dy=".3em">Haka Engineering</text></svg>`
          );
      });
    });
  }

  function renderServicesOverview() {
    const el = $("#services-grid");
    if (!el || typeof SERVICES === "undefined") return;
    el.innerHTML = SERVICES.slice(0, 6)
      .map(
        (s) => `
      <a href="services.html#${escapeHtml(s.id)}" class="service-card reveal">
        <div class="service-card-img">
          <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.title)}" loading="lazy">
        </div>
        <div class="service-card-body">
          <div class="service-num">${escapeHtml(s.number)}</div>
          <h3>${escapeHtml(s.title)}</h3>
          <p>${escapeHtml(s.short)}</p>
          <span class="service-link">Learn more ${iconSvg("arrow")}</span>
        </div>
      </a>`
      )
      .join("");
  }

  function renderFeaturedProjects() {
    const el = $("#featured-projects");
    if (!el || typeof PROJECTS === "undefined") return;
    el.innerHTML = PROJECTS.slice(0, 3)
      .map(
        (p) => `
      <div class="project-card reveal">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" loading="lazy">
        <div class="project-overlay">
          <div class="project-cat">${escapeHtml(p.category)}</div>
          <h3>${escapeHtml(p.title)}</h3>
          <div class="project-year">${escapeHtml(p.year)}</div>
        </div>
      </div>`
      )
      .join("");
  }

  function renderWhyChooseUs() {
    const el = $("#why-grid");
    if (!el || typeof WHY_CHOOSE_US === "undefined") return;
    el.innerHTML = WHY_CHOOSE_US.map(
      (w) => `
      <div class="why-card reveal">
        <div class="why-icon">${iconSvg(w.icon)}</div>
        <h3>${escapeHtml(w.title)}</h3>
        <p>${escapeHtml(w.desc)}</p>
      </div>`
    ).join("");
  }


  /* ---------- Services page ---------- */
  function renderServicesPage() {
    const el = $("#services-detail-list");
    if (!el || typeof SERVICES === "undefined") return;
    el.innerHTML = SERVICES.map(
      (s, i) => `
      <div class="service-detail reveal" id="${escapeHtml(s.id)}">
        <div class="service-detail-img">
          <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.title)}" loading="lazy">
        </div>
        <div class="service-detail-body">
          <div class="service-num">Service ${escapeHtml(s.number)}</div>
          <h2>${escapeHtml(s.title)}</h2>
          <p>${escapeHtml(s.description)}</p>
          <ul class="service-features">
            ${s.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
          </ul>
          <a href="contact.html?service=${encodeURIComponent(s.title)}" class="btn btn-primary">
            Inquiry ${iconSvg("arrow")}
          </a>
        </div>
      </div>`
    ).join("");
  }

  /* ---------- Products page ---------- */
  function initProductsPage() {
    const grid = $("#products-grid");
    const filterBar = $("#product-filters");
    const modal = $("#product-modal");
    if (!grid || typeof PRODUCTS === "undefined") return;

    let activeCat = "All";

    function renderGrid() {
      const list = activeCat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCat);
      grid.innerHTML = list.length
        ? list
            .map(
              (p) => `
          <article class="product-card reveal" data-id="${escapeHtml(p.id)}" tabindex="0" role="button" aria-label="View ${escapeHtml(p.name)}">
            <div class="product-card-img">
              <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">
            </div>
            <div class="product-card-body">
              <div class="product-cat">${escapeHtml(p.category)}</div>
              <h3>${escapeHtml(p.name)}</h3>
              <p>${escapeHtml(p.short)}</p>
              <span class="product-view">View Details ${iconSvg("arrow")}</span>
            </div>
          </article>`
            )
            .join("")
        : `<p style="grid-column:1/-1;text-align:center;color:var(--mid);padding:40px 0">No products in this category.</p>`;

      initReveal();
      $$(".product-card", grid).forEach((card) => {
        const id = card.dataset.id;
        const open = () => openProductModal(id);
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        });
      });
    }

    function openProductModal(id) {
      const p = PRODUCTS.find((x) => x.id === id);
      if (!p || !modal) return;
      const specsHtml = Object.entries(p.specs)
        .map(
          ([k, v]) => `
        <div class="spec-item">
          <dt>${escapeHtml(k)}</dt>
          <dd>${escapeHtml(v)}</dd>
        </div>`
        )
        .join("");
      modal.innerHTML = `
        <div class="modal-content">
          <button class="modal-close" aria-label="Close">${closeIcon()}</button>
          <div class="modal-img"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}"></div>
          <div class="modal-body">
            <div class="modal-cat">${escapeHtml(p.category)}</div>
            <h2>${escapeHtml(p.name)}</h2>
            <p>${escapeHtml(p.description)}</p>
            <h3 style="font-size:1rem;margin-bottom:14px">Specifications</h3>
            <dl class="spec-list">${specsHtml}</dl>
            <a href="contact.html?product=${encodeURIComponent(p.name)}" class="btn btn-primary">Request Inquiry ${iconSvg("arrow")}</a>
          </div>
        </div>`;
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      modal.querySelector(".modal-close").addEventListener("click", closeProductModal);
    }

    function closeProductModal() {
      modal.classList.remove("open");
      modal.innerHTML = "";
      document.body.style.overflow = "";
    }

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeProductModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) closeProductModal();
      });
    }

    if (filterBar && typeof PRODUCT_CATEGORIES !== "undefined") {
      filterBar.innerHTML = PRODUCT_CATEGORIES.map(
        (c) =>
          `<button class="filter-btn${c === "All" ? " active" : ""}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`
      ).join("");
      $$(".filter-btn", filterBar).forEach((btn) => {
        btn.addEventListener("click", () => {
          activeCat = btn.dataset.cat;
          $$(".filter-btn", filterBar).forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderGrid();
        });
      });
    }

    renderGrid();
  }

  function closeIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  }

  /* ---------- Projects page ---------- */
  function initProjectsPage() {
    const grid = $("#projects-grid");
    const filterBar = $("#project-filters");
    const lightbox = $("#lightbox");
    if (!grid || typeof PROJECTS === "undefined") return;

    let activeCat = "All";

    function renderGrid() {
      const list = activeCat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCat);
      grid.innerHTML = list.length
        ? list
            .map(
              (p) => `
          <article class="project-card reveal" data-id="${escapeHtml(p.id)}" tabindex="0" role="button" aria-label="View ${escapeHtml(p.title)}">
            <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" loading="lazy">
            <div class="project-overlay">
              <div class="project-cat">${escapeHtml(p.category)}</div>
              <h3>${escapeHtml(p.title)}</h3>
              <div class="project-year">${escapeHtml(p.year)}</div>
            </div>
          </article>`
            )
            .join("")
        : `<p style="grid-column:1/-1;text-align:center;color:var(--mid);padding:40px 0">No projects in this category.</p>`;

      initReveal();
      $$(".project-card", grid).forEach((card) => {
        const id = card.dataset.id;
        const open = () => openLightbox(id);
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        });
      });
    }

    function openLightbox(id) {
      const p = PROJECTS.find((x) => x.id === id);
      if (!p || !lightbox) return;
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Close">${closeIcon()}</button>
          <img class="lightbox-img" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
          <div class="lightbox-caption">
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.category)} &middot; ${escapeHtml(p.year)}</p>
            <p style="max-width:640px;margin:12px auto 0">${escapeHtml(p.description)}</p>
          </div>
        </div>`;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    }

    function closeLightbox() {
      lightbox.classList.remove("open");
      lightbox.innerHTML = "";
      document.body.style.overflow = "";
    }

    if (lightbox) {
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
      });
    }

    if (filterBar && typeof PROJECT_CATEGORIES !== "undefined") {
      filterBar.innerHTML = PROJECT_CATEGORIES.map(
        (c) =>
          `<button class="filter-btn${c === "All" ? " active" : ""}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`
      ).join("");
      $$(".filter-btn", filterBar).forEach((btn) => {
        btn.addEventListener("click", () => {
          activeCat = btn.dataset.cat;
          $$(".filter-btn", filterBar).forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderGrid();
        });
      });
    }

    renderGrid();
  }

  /* ---------- Contact form ---------- */
  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;

    // Prefill subject from query params
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const product = params.get("product");
    const subjectInput = form.querySelector('[name="subject"]');
    if (subjectInput) {
      if (service) subjectInput.value = "Service Inquiry: " + service;
      else if (product) subjectInput.value = "Product Inquiry: " + product;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      const fields = ["name", "email", "message"];
      fields.forEach((name) => {
        const input = form.querySelector(`[name="${name}"]`);
        if (!input) return;
        const group = input.closest(".form-group");
        let ok = true;
        if (!input.value.trim()) ok = false;
        if (name === "email" && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) ok = false;
        group.classList.toggle("error", !ok);
        if (!ok) valid = false;
      });
      if (!valid) return;

      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const subject = subjectInput ? subjectInput.value.trim() : "Website Inquiry";
      const message = form.querySelector('[name="message"]').value.trim();

      // Use mailto — no backend required
      const to = (typeof COMPANY !== "undefined" && COMPANY.email) || "info@himura.co.id";
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(
        subject || "Website Inquiry"
      )}&body=${encodeURIComponent(body)}`;

      form.reset();
      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Opening your email client… Alternatively, contact us via WhatsApp.";
        note.style.color = "var(--orange)";
      }
    });

    // Clear error on input
    $$(".form-group input, .form-group textarea", form).forEach((input) => {
      input.addEventListener("input", () => {
        const group = input.closest(".form-group");
        if (group) group.classList.remove("error");
      });
    });
  }
  
  /* ---------- Certificate Modal (Pop-up) ---------- */
  function initCertModal() {
    if (!document.getElementById('cert-modal')) {
      const modal = document.createElement('div');
      modal.id = 'cert-modal';
      // Styling pop-up (z-index ditaruh paling atas)
      modal.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.9);display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px);cursor:zoom-out;';
      
      modal.innerHTML = `
        <button onclick="document.getElementById('cert-modal').style.display='none'" style="position:absolute;top:20px;right:20px;background:#fff;color:#000;border:none;width:44px;height:44px;border-radius:50%;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.5);">&times;</button>
        <img id="cert-modal-img" src="" style="max-width:100%;max-height:90vh;object-fit:contain;border-radius:6px;box-shadow:0 10px 40px rgba(0,0,0,0.5);background:#fff;padding:10px;">
      `;
      document.body.appendChild(modal);

      // Menutup modal jika area hitam di luar gambar diklik
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
      });
    }
  }

  // Fungsi global untuk memanggil modal
  window.openCertModal = function(imageSrc) {
    const modal = document.getElementById('cert-modal');
    const img = document.getElementById('cert-modal-img');
    if (modal && img) {
      img.src = imageSrc;
      modal.style.display = 'flex';
    }
  };
  /* ---------- Sound Effects ---------- */
  function initSoundEffects() {
    const audio = new Audio('assets/sound.mp3');
    audio.volume = 1.0;
    let hasPlayed = false; 

    const playSoundOnce = () => {
      if (hasPlayed) return; 
      
      audio.play().then(() => {
        hasPlayed = true; 
        // Hapus event listener setelah suara berhasil diputar sekali
        document.removeEventListener('click', playSoundOnce);
        window.removeEventListener('scroll', playSoundOnce);
      }).catch(error => {
        console.log("Browser memblokir audio otomatis.");
      });
    };

    // Dengarkan interaksi pertama (klik atau scroll)
    document.addEventListener('click', playSoundOnce);
    window.addEventListener('scroll', playSoundOnce, { passive: true });
  }

  /* ---------- Populate company info placeholders ---------- */
  function populateCompanyInfo() {
    if (typeof COMPANY === "undefined") return;
    $$("[data-company]").forEach((el) => {
      const key = el.dataset.company;
      if (COMPANY[key] != null) el.textContent = COMPANY[key];
    });
    $$("[data-wa-link]").forEach((el) => {
      el.href = `https://wa.me/${COMPANY.whatsapp}`;
    });
    $$("[data-mail-link]").forEach((el) => {
      el.href = `mailto:${COMPANY.email}`;
    });
    $$("[data-map-embed]").forEach((el) => {
      el.src = COMPANY.mapsEmbed;
    });
    $$("[data-map-link]").forEach((el) => {
      el.href = COMPANY.mapsLink;
    });
    $$("[data-tel-link]").forEach((el) => {
      el.href = `tel:${COMPANY.phone.replace(/\s/g, "")}`;
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    populateCompanyInfo();
    renderServicesOverview();
    renderFeaturedProjects();
    renderWhyChooseUs();
    renderServicesPage();
    initProductsPage();
    initProjectsPage();
    initContactForm();
    initBackTop();
    initSmoothAnchors();
    initImageFallback();    
    initReveal();
    initSoundEffects();
    initCertModal();
  });
})();