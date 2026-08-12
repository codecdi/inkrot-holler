/**
 * INKROT HOLLER — Official Web Architecture
 * Artist: August L. Soloman
 * ES6 JavaScript Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundStippleCanvas();
  initStippleTechniqueDemo();
  initGalleryFiltersAndModal();
  initQuoteForm();
});

/* ==========================================================================
   1. Dynamic Background Stipple Particle Canvas
   ========================================================================== */
function initBackgroundStippleCanvas() {
  const canvas = document.getElementById('stipple-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((width * height) / 12000); // Dynamic density
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        color: Math.random() > 0.4 ? '#d4af37' : '#8b0000'
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}

/* ==========================================================================
   2. Interactive Stippling Technique Density Visualizer
   ========================================================================== */
function initStippleTechniqueDemo() {
  const canvas = document.getElementById('stipple-demo-canvas');
  const slider = document.getElementById('stipple-density-slider');
  const countDisplay = document.getElementById('stipple-count-val');

  if (!canvas || !slider) return;

  const ctx = canvas.getContext('2d');
  
  function renderDemo(dotCount) {
    const w = canvas.width = canvas.parentElement.clientWidth;
    const h = canvas.height = canvas.parentElement.clientHeight;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#08080c';
    ctx.fillRect(0, 0, w, h);

    // Draw a gradient sphere rendered entirely through pointillism stippling
    const centerX = w / 2;
    const centerY = h / 2;
    const maxRadius = Math.min(w, h) * 0.38;

    for (let i = 0; i < dotCount; i++) {
      // Rejection sampling for spherical stipple distribution with light source from top-left
      let r = Math.sqrt(Math.random()) * maxRadius;
      let angle = Math.random() * Math.PI * 2;

      let x = centerX + r * Math.cos(angle);
      let y = centerY + r * Math.sin(angle);

      // Distance from shadow center (bottom-right of sphere)
      let distFromLight = Math.hypot(x - (centerX - maxRadius * 0.4), y - (centerY - maxRadius * 0.4));
      let shadowFactor = distFromLight / (maxRadius * 2);

      // Higher density in shadow region
      if (Math.random() < Math.pow(shadowFactor, 1.8)) {
        ctx.beginPath();
        let dotSize = Math.random() * 1.1 + 0.4;
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.85 ? '#d4af37' : '#e6dfd5';
        ctx.globalAlpha = Math.random() * 0.7 + 0.3;
        ctx.fill();
      }
    }
  }

  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    countDisplay.textContent = val.toLocaleString();
    renderDemo(val);
  });

  window.addEventListener('resize', () => renderDemo(parseInt(slider.value, 10)));
  renderDemo(parseInt(slider.value, 10));
}

/* ==========================================================================
   3. Gallery Filters and Lightbox Modal
   ========================================================================== */

const GALLERY_DATA = [
  {
    id: 'macabre_entity_1',
    title: 'The Sentinel of the Abyss',
    category: 'macabre-entity',
    categoryLabel: 'Macabre Entities',
    src: 'assets/images/gallery/macabre_entity_1.jpg',
    medium: 'Micro Stipple Ink & Charcoal on Heavyweight Vellum',
    dimensions: '24" x 36" (Original)',
    date: '2026',
    price: '$2,800 USD',
    description: 'An intricate manifestation of unseen sigils and void entities. Over 450,000 individually stippled ink points rendered with 0.05mm technical pens over 140 continuous hours.'
  },
  {
    id: 'obsidian_landscape_1',
    title: 'Nocturne in Obsidian',
    category: 'obsidian-landscape',
    categoryLabel: 'Obsidian Landscapes',
    src: 'assets/images/gallery/obsidian_landscape_1.jpg',
    medium: 'Archival Ink & Gold Leaf Stipple',
    dimensions: '18" x 24" (Original)',
    date: '2026',
    price: '$1,950 USD',
    description: 'A desolate atmospheric study of craggy peaks bathed in abyssal stipple gradients. Gold leaf accents interweave with micro-pointillist shadow work.'
  },
  {
    id: 'stipple_skull_1',
    title: 'Ossuary Monolith',
    category: 'anatomy-skull',
    categoryLabel: 'Anatomy & Skulls',
    src: 'assets/images/gallery/stipple_skull_1.jpg',
    medium: 'Digital Fine Stipple (Clip Studio Paint EX)',
    dimensions: '30" x 40" (Limited Edition Print 1/10)',
    date: '2026',
    price: '$850 USD',
    description: 'Hyper-detailed anatomical study exploring decay, bone grain texture, and eternal silence. Digitally inked in Clip Studio Paint using custom stipple brushes.'
  },
  {
    id: 'void_portrait_1',
    title: 'Visage of the Keykeeper',
    category: 'stipple-portrait',
    categoryLabel: 'Stipple Portraits',
    src: 'assets/images/gallery/void_portrait_1.jpg',
    medium: 'India Ink Stipple & Sepia Wash',
    dimensions: '20" x 24" (Original)',
    date: '2025',
    price: '$2,400 USD',
    description: 'A haunting portrait gazing beyond the threshold. Layered stippling yields smooth velvet skin tones contrasting with sharp chiseled bone contours.'
  },
  {
    id: 'chitin_sanctum_1',
    title: 'Chitin Sanctum',
    category: 'macabre-entity',
    categoryLabel: 'Macabre Entities',
    src: 'assets/images/gallery/chitin_sanctum_1.jpg',
    medium: 'Ink & Acrylic Glaze Stipple',
    dimensions: '24" x 30" (Original)',
    date: '2025',
    price: '$2,200 USD',
    description: 'Biomechanical entity emerging from dark stipple lattice structure. Intricate chitinous armor plates shaded point by point.'
  },
  {
    id: 'sigil_nocturne_1',
    title: 'Sigil of the Unspoken',
    category: 'obsidian-landscape',
    categoryLabel: 'Obsidian Landscapes',
    src: 'assets/images/gallery/sigil_nocturne_1.jpg',
    medium: 'Clip Studio Paint Digital Inking',
    dimensions: '24" x 36" (Archival Canvas Print)',
    date: '2026',
    price: '$750 USD',
    description: 'Abstract occult geometry woven through dense stipple clouds. Created exclusively in Clip Studio Paint using custom pressure-sensitive pointillism engine.'
  },
  {
    id: 'anatomy_bone_2',
    title: 'Reliquary Skull II',
    category: 'anatomy-skull',
    categoryLabel: 'Anatomy & Skulls',
    src: 'assets/images/gallery/anatomy_bone_2.jpg',
    medium: 'Pigment Ink on Cotton Rag',
    dimensions: '16" x 20" (Original)',
    date: '2026',
    price: '$1,650 USD',
    description: 'Miniature stipple masterwork focusing on cranial fissures and light diffusion across weathered bone surfaces.'
  },
  {
    id: 'macabre_entity_2',
    title: 'Apparition at the Gate',
    category: 'macabre-entity',
    categoryLabel: 'Macabre Entities',
    src: 'assets/images/gallery/macabre_entity_2.jpg',
    medium: 'Stipple Ink & Crimson Pigment',
    dimensions: '20" x 30" (Original)',
    date: '2026',
    price: '$2,500 USD',
    description: 'Spectral entity shrouded in crimson stipple mist. Features deep contrast gradients from absolute black to radiant bone highlights.'
  }
];

let currentModalIndex = 0;
let filteredGallery = [...GALLERY_DATA];

function initGalleryFiltersAndModal() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryGrid = document.getElementById('gallery-grid');
  const modal = document.getElementById('artwork-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');

  if (!galleryGrid) return;

  // Render Grid Cards
  function renderGrid(filter = 'all') {
    galleryGrid.innerHTML = '';

    filteredGallery = filter === 'all' 
      ? GALLERY_DATA 
      : GALLERY_DATA.filter(item => item.category === filter);

    filteredGallery.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'gallery-card';
      card.setAttribute('data-id', item.id);
      card.innerHTML = `
        <div class="gallery-image-wrapper">
          <img src="${item.src}" alt="${item.title}" class="gallery-img" loading="lazy" />
        </div>
        <div class="gallery-card-info">
          <span class="card-tag">${item.categoryLabel}</span>
          <h4 class="card-title">${item.title}</h4>
          <div class="card-meta">
            <span>${item.medium.split('(')[0]}</span>
            <span>${item.price}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openModal(index));
      galleryGrid.appendChild(card);
    });
  }

  // Filter Button Clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.getAttribute('data-filter'));
    });
  });

  // Modal Open
  function openModal(index) {
    currentModalIndex = index;
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Modal Content Update
  function updateModalContent() {
    const item = filteredGallery[currentModalIndex];
    if (!item) return;

    document.getElementById('modal-img').src = item.src;
    document.getElementById('modal-img').alt = item.title;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-subtitle').textContent = `${item.categoryLabel} • ${item.date}`;
    document.getElementById('modal-desc').textContent = item.description;
    document.getElementById('modal-medium').textContent = item.medium;
    document.getElementById('modal-dimensions').textContent = item.dimensions;
    document.getElementById('modal-price').textContent = item.price;
  }

  // Modal Close
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Lightbox Navigation
  prevBtn.addEventListener('click', () => {
    currentModalIndex = (currentModalIndex - 1 + filteredGallery.length) % filteredGallery.length;
    updateModalContent();
  });

  nextBtn.addEventListener('click', () => {
    currentModalIndex = (currentModalIndex + 1) % filteredGallery.length;
    updateModalContent();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  // Initial Grid Render
  renderGrid('all');
}

/* ==========================================================================
   4. Price Quote Contact Form (Targeting: Iamthekeytothegates@gmail.com)
   ========================================================================== */
function initQuoteForm() {
  const quoteForm = document.getElementById('commission-quote-form');
  const targetEmail = "Iamthekeytothegates@gmail.com";

  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('quote-name').value.trim();
    const clientEmail = document.getElementById('quote-email').value.trim();
    const type = document.getElementById('quote-type').value;
    const budget = document.getElementById('quote-budget').value;
    const subject = document.getElementById('quote-subject').value.trim();
    const message = document.getElementById('quote-message').value.trim();

    const mailtoSubject = encodeURIComponent(`[Inkrot Holler Commission Inquiry] ${type}: ${subject || 'New Quote Request'}`);
    const mailtoBody = encodeURIComponent(
      `INKROT HOLLER COMMISSION / PURCHASE INQUIRY\n` +
      `Artist: August L. Soloman\n` +
      `--------------------------------------------------\n` +
      `Client Name: ${name}\n` +
      `Client Email: ${clientEmail}\n` +
      `Commission Type: ${type}\n` +
      `Estimated Budget: ${budget}\n` +
      `Target Artwork / Subject: ${subject}\n\n` +
      `Project Details / Vision:\n${message}\n\n` +
      `--------------------------------------------------\n` +
      `Sent via Inkrot Holler Official Web Portal`
    );

    // Trigger Mailto Link to target email
    const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;

    alert(`Thank you, ${name}. Your commission quote inquiry is opening in your default mail application targeting ${targetEmail}.`);
  });
}
