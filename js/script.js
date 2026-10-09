/**
 * Cakelab — Artisan Cakes & Confectionery
 * Vanilla JavaScript (Zero build step, Works with file://)
 */

(function () {
  'use strict';

  // --- 1. BAKERY PRODUCTS DATA (Local relative assets) ---
  const BAKERY_PRODUCTS = [
    // --- FRESH CAKES ---
    {
      id: 'rose-lychee-chiffon',
      name: 'Rose & Lychee Petal Chiffon',
      category: 'fresh-cakes',
      tagline: 'Delicate rosewater sponge with sweet lychee reduction and whipped mascarpone',
      description: 'Our signature romantic creation. Cloud-soft vanilla chiffon infused with Damask rose essence, layered with house-made whole lychee compote and silken white chocolate mascarpone mousse, crowned with crystallised rose petals.',
      price: 68,
      image: './assets/rose-chiffon.jpg',
      servings: '6–8 slices (6 inch)',
      flavorNotes: ['Damask Rose', 'Sweet Lychee', 'White Chocolate Cream', 'Crisp Pistachio Base'],
      dietary: 'Vegetarian · Contains Dairy & Eggs',
      badgeText: 'Atelier Signature',
      popular: true,
      sensory: { sweetness: 65, floral: 92, richness: 60, lightness: 95 },
      ingredients: ['French Cultured Butter', 'Organic Eggs', 'Damask Rose Water', 'Mauritian Lychees', 'Mascarpone Cream', 'Unbleached Wheat Flour'],
      sizes: [
        { name: '6" Petite Celebration (6–8 portions)', priceMultiplier: 1 },
        { name: '8" Feast Sharing (12–16 portions)', priceMultiplier: 1.5 },
        { name: '10" Grand Gala (20–24 portions)', priceMultiplier: 2.1 }
      ]
    },
    {
      id: 'wild-strawberry-pistachio',
      name: 'Wild Strawberry & Pistachio Charlotte',
      category: 'fresh-cakes',
      tagline: 'Sicilian pistachio frangipane sponge with Alpine wild strawberries and velvety cream',
      description: 'A vibrant, light spring celebration. Nutty Bronte pistachio sponge alternated with fresh wild strawberry jelly, surrounded by hand-piped ladyfinger biscuits and dusted with vibrant pistachio crumb and gold leaf.',
      price: 72,
      image: './assets/strawberry-pistachio.jpg',
      servings: '6–8 slices (6 inch)',
      flavorNotes: ['Bronte Pistachio', 'Alpine Wild Strawberry', 'Tahitian Vanilla', 'Citrus Zest'],
      dietary: 'Vegetarian · Contains Tree Nuts',
      popular: true,
      sensory: { sweetness: 58, floral: 65, richness: 75, lightness: 85 },
      ingredients: ['Sicilian Pistachio Paste', 'Alpine Wild Strawberries', 'Tahitian Vanilla Pods', 'Organic Dairy Cream', 'Cane Sugar'],
      sizes: [
        { name: '6" Petite Celebration (6–8 portions)', priceMultiplier: 1 },
        { name: '8" Feast Sharing (12–16 portions)', priceMultiplier: 1.5 }
      ]
    },
    {
      id: 'valrhona-cocoa-hazelnut',
      name: 'Valrhona Cocoa & Praliné Decadence',
      category: 'fresh-cakes',
      tagline: '70% Guanaja dark chocolate cake with roasted hazelnut praliné and sea salt ganache',
      description: 'For passionate cocoa devotees. Decadent dark chocolate layers soaked in warm espresso syrup, spread with Piedmont hazelnut feuilletine crunch, and enveloped in glossy cocoa mirror glaze with Maldon fleur de sel.',
      price: 66,
      image: './assets/valrhona-cocoa.jpg',
      servings: '8–10 slices (6 inch)',
      flavorNotes: ['70% Guanaja Cocoa', 'Piedmont Hazelnut', 'Maldon Flake Salt', 'Espresso Bloom'],
      dietary: 'Vegetarian · Halal Friendly',
      sensory: { sweetness: 55, floral: 20, richness: 95, lightness: 70 },
      ingredients: ['Valrhona 70% Dark Chocolate', 'Roasted Hazelnuts', 'French Sea Salt', 'Cultured Cream', 'Fairtrade Espresso'],
      sizes: [
        { name: '6" Petite Celebration (6–8 portions)', priceMultiplier: 1 },
        { name: '8" Feast Sharing (12–16 portions)', priceMultiplier: 1.5 },
        { name: '10" Grand Gala (20–24 portions)', priceMultiplier: 2.1 }
      ]
    },
    {
      id: 'lemon-verbena-elderflower',
      name: 'Lemon Verbena & Elderflower Cloud',
      category: 'fresh-cakes',
      tagline: 'Zesty Meyer lemon curd with elderflower soaked génoise and whipped ricotta',
      description: 'Refreshing, citrusy, and subtly floral. Fresh Meyer lemon sponge brushed with English elderflower liqueur, filled with tangy citrus curd and airy whipped sweet ricotta cream, topped with candied lemon peel and edible chamomile flowers.',
      price: 64,
      image: './assets/lemon-elderflower.jpg',
      servings: '6–8 slices (6 inch)',
      flavorNotes: ['Meyer Lemon', 'Wild Elderflower', 'Whipped Ricotta', 'Candied Verbena'],
      dietary: 'Vegetarian · Nut-Free Recipe',
      sensory: { sweetness: 50, floral: 85, richness: 55, lightness: 90 },
      ingredients: ['Meyer Lemon Zest & Juice', 'Elderflower Extract', 'Italian Ricotta', 'Organic Pasture Butter', 'Organic Eggs'],
      sizes: [
        { name: '6" Petite Celebration (6–8 portions)', priceMultiplier: 1 },
        { name: '8" Feast Sharing (12–16 portions)', priceMultiplier: 1.5 }
      ]
    },

    // --- SWEET PASTRIES ---
    {
      id: 'rose-framboise-croissant',
      name: 'Raspberry Rose Twice-Baked Croissant',
      category: 'sweet-pastries',
      tagline: '72-hour laminated French pastry with rosewater almond frangipane and fresh raspberries',
      description: 'Slow-fermented flaky pastry layers filled with a fragrant blend of organic almond cream and Damask rose petals, baked twice to caramelized perfection and finished with crushed freeze-dried raspberries.',
      price: 8.5,
      image: './assets/raspberry-croissant.jpg',
      servings: 'Individual treat (Pack of 2: $16)',
      flavorNotes: ['Crisp Butter Laminae', 'Wild Raspberry', 'Sweet Almond', 'Rosewater'],
      dietary: 'Vegetarian · Contains Tree Nuts',
      popular: true,
      sensory: { sweetness: 60, floral: 80, richness: 85, lightness: 75 },
      ingredients: ['AOP Charentes-Poitou Butter', 'T55 French Flour', 'Almond Frangipane', 'Raspberry Puree', 'Rose Petal Sugar']
    },
    {
      id: 'vanilla-fig-brioche',
      name: 'Tahitian Vanilla & Caramelized Fig Brioche',
      category: 'sweet-pastries',
      tagline: 'Rich buttery brioche feuilletée with bourbon vanilla custard and roasted Mission figs',
      description: 'Pillow-soft enriched dough spiraled with slow-simmered Black Mission figs, honey thyme glaze, and a dollop of Tahitian vanilla bean pastry cream.',
      price: 7.5,
      image: './assets/fig-brioche.jpg',
      servings: 'Individual treat',
      flavorNotes: ['Bourbon Vanilla', 'Mission Fig', 'Wild Honey', 'Caramelized Brioche Crust'],
      dietary: 'Vegetarian · Nut-Free Recipe',
      sensory: { sweetness: 68, floral: 35, richness: 90, lightness: 80 },
      ingredients: ['Normandy Butter', 'Black Mission Figs', 'Tahitian Vanilla Beans', 'Raw Wildflower Honey', 'Free-range Eggs']
    },
    {
      id: 'ruby-berry-tartlet',
      name: 'Ruby Berry & Orange Blossom Tartlet',
      category: 'sweet-pastries',
      tagline: 'Sablé crust with white chocolate ganache, orange blossom confit, and seasonal berries',
      description: 'A crisp sweet pastry shell blind-baked to golden amber, lined with silky orange blossom white chocolate ganache, and piled high with fresh blackberries, redcurrants, and raspberries.',
      price: 9.0,
      image: './assets/berry-tartlet.jpg',
      servings: 'Individual patisserie tart',
      flavorNotes: ['Orange Blossom Water', 'Ruby Redcurrants', 'Velvet White Chocolate', 'Buttery Sablé'],
      dietary: 'Vegetarian',
      popular: true,
      sensory: { sweetness: 62, floral: 70, richness: 70, lightness: 80 },
      ingredients: ['Almond Sablé Shell', 'Fresh Red Berries', 'Orange Blossom Essence', 'Valrhona Opalys Chocolate', 'Sea Salt Butter']
    },
    {
      id: 'rose-choux-craquelin',
      name: 'Petal Pink Choux au Craquelin',
      category: 'sweet-pastries',
      tagline: 'Crisp crackled choux pastry puffed with raspberry diplomat cream and lychee core',
      description: 'Crispy sugar-crusted French choux bun filled with airy raspberry diplomat cream and a surprising center of cold-pressed lychee coulis. Elegant, crunchy, and irresistibly creamy.',
      price: 6.5,
      image: './assets/rose-choux.jpg',
      servings: 'Box of 3: $18.50',
      flavorNotes: ['Crunchy Craquelin', 'Raspberry Diplomat', 'Lychee Coulis', 'Vanilla Bean'],
      dietary: 'Vegetarian',
      sensory: { sweetness: 65, floral: 75, richness: 78, lightness: 88 },
      ingredients: ['Choux Pastry', 'Pink Sugar Craquelin', 'Diplomat Cream', 'Lychee Reduction', 'Raspberry Glaze']
    },

    // --- CUSTOM CAKES ---
    {
      id: 'vintage-lambeth-romance',
      name: 'The Rose Petal Lambeth Romance',
      category: 'custom-cakes',
      tagline: 'Intricate Victorian piped swirls, blush Swiss meringue, and pressed edible botanical flowers',
      description: 'A breathtaking showstopper crafted for romantic weddings, 30th milestones, and editorial celebrations. Multi-layered over-piped vintage Lambeth scrollwork in shades of blush rose, framed with fresh organic garden florals and shimmering edible pearls.',
      price: 180,
      image: './assets/lambeth-romance.jpg',
      servings: '2 Tiers (Serves 28–36 guests)',
      flavorNotes: ['Custom Sponge Selection', 'Swiss Meringue Buttercream', 'Organic Pressed Florals', 'Bespoke Inscription'],
      dietary: 'Fully customizable dietary options',
      badgeText: 'Bespoke Celebration',
      popular: true,
      sensory: { sweetness: 70, floral: 85, richness: 82, lightness: 85 },
      ingredients: ['European Grass-fed Butter', 'Madagascar Vanilla Bean', 'Custom House Fillings', 'Edible Garden Blossoms'],
      sizes: [
        { name: '1-Tier Boutique (Serves 14–18 guests)', priceMultiplier: 0.65 },
        { name: '2-Tier Celebration (Serves 28–36 guests)', priceMultiplier: 1.0 },
        { name: '3-Tier Grand Gala (Serves 75–90 guests)', priceMultiplier: 2.2 }
      ]
    },
    {
      id: 'botanical-pressed-floral',
      name: 'Botanical Meadow & Gold Leaf Tier',
      category: 'custom-cakes',
      tagline: 'Minimalist smooth ivory ganache studded with pressed violas, chamomile, and 24k gold leaf',
      description: 'Effortlessly modern and poetic. Each tier is hand-decorated with individually pressed organic flowers sourced from local organic flower farms, paired with hand-torn 24-karat gold leaf accents.',
      price: 210,
      image: './assets/pressed-floral.jpg',
      servings: '2 Tiers (Serves 30–40 guests)',
      flavorNotes: ['Lavender Earl Grey Sponge', 'Blackberry Cardamom Curd', 'Silken White Ganache'],
      dietary: 'Gluten-Friendly Option Available',
      sensory: { sweetness: 58, floral: 90, richness: 75, lightness: 85 },
      ingredients: ['Locally Pressed Edible Violas', '24k Gold Leaf Flakes', 'Earl Grey Bergamot Tea', 'Wild Blackberry Coulis'],
      sizes: [
        { name: '1-Tier Modern (Serves 15–20 guests)', priceMultiplier: 0.65 },
        { name: '2-Tier Classic (Serves 30–40 guests)', priceMultiplier: 1.0 },
        { name: '3-Tier Archway (Serves 80–100 guests)', priceMultiplier: 2.3 }
      ]
    },
    {
      id: 'sculptural-textured-ganache',
      name: 'Textured Stucco & Silk Ribbon Arch',
      category: 'custom-cakes',
      tagline: 'Architectural textured buttercream palette-knife finish with trailing silk velvet ribbon',
      description: 'A contemporary art piece for modern brides and design-conscious event hosts. Hand-textured palette strokes mimic raw linen and Venetian stucco, accented by trailing rose velvet ribbon and fresh garden roses.',
      price: 195,
      image: './assets/textured-ganache.jpg',
      servings: '2 Tiers (Serves 25–32 guests)',
      flavorNotes: ['Salted Honey Sponge', 'Rosemary Roasted Peach Compote', 'Brown Butter Ganache'],
      dietary: 'Vegetarian · Custom Nut Options',
      sensory: { sweetness: 64, floral: 40, richness: 88, lightness: 80 },
      ingredients: ['French Brown Butter', 'Wild Sage Honey', 'White Peach Confit', 'Belgian White Chocolate'],
      sizes: [
        { name: '1-Tier Minimalist (Serves 12–16 guests)', priceMultiplier: 0.65 },
        { name: '2-Tier Atelier (Serves 25–32 guests)', priceMultiplier: 1.0 },
        { name: '3-Tier Monumental (Serves 70–85 guests)', priceMultiplier: 2.1 }
      ]
    }
  ];

  const TASTING_BOX = {
    id: 'atelier-tasting-box',
    name: 'The Cakelab Signature Weekend Tasting Flight',
    tagline: 'Four curated micro-portions to sample before your celebration',
    price: 42,
    image: './assets/tasting-box.jpg',
    description: 'Delivered in a rose-foiled presentation box with pairing notes and complimentary French tea sachet.'
  };

  // --- 2. STATE MANAGEMENT ---
  let cart = [
    {
      id: 'cart-init-1',
      productId: 'rose-lychee-chiffon',
      name: 'Rose & Lychee Petal Chiffon',
      sizeName: '6" Petite Celebration (6–8 portions)',
      unitPrice: 68,
      quantity: 1,
      image: './assets/rose-chiffon.jpg',
      note: 'Happy Birthday Juliette ♡'
    }
  ];

  let activeCategory = 'all';
  let activeFlavorFilter = 'all';
  let searchQuery = '';
  let deliveryMethod = 'pickup';
  let discountPercent = 0;
  let activeModalProduct = null;
  let selectedModalSizeIdx = 0;
  let modalQuantity = 1;

  // Custom cake builder state
  const customCakeState = {
    occasion: 'Wedding',
    date: '2026-10-18',
    guests: 32,
    tier: '2-tier',
    sponge: 'Damask Rose & Vanilla Chiffon',
    filling: 'Lychee Compote & Whipped Mascarpone',
    finish: 'Vintage Lambeth Piped Ruffles',
    finishPremium: 20,
    basePrice: 195,
    topper: 'rose-crown',
    isSpinning: false
  };

  const TIER_PRICES = {
    '1-tier': { label: '1-Tier Petite Elegance', guests: '14–18 guests', base: 125 },
    '2-tier': { label: '2-Tier Classic Celebration', guests: '28–36 guests', base: 195 },
    '3-tier': { label: '3-Tier Grand Gala Masterpiece', guests: '70–90 guests', base: 380 }
  };

  const FINISH_PRICES = {
    'vintage-lambeth': { name: 'Vintage Lambeth Piped Ruffles', premium: 20 },
    'pressed-botanical': { name: 'Pressed Edible Meadow Florals', premium: 25 },
    'textured-ganache': { name: 'Architectural Linen Stucco Ganache', premium: 15 },
    'gold-leaf': { name: '24k Gold Leaf Minimalist Shimmer', premium: 30 }
  };

  // --- 3. DOM ELEMENT REFERENCES ---
  const productsGrid = document.getElementById('products-grid');
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const cartBadge = document.getElementById('cart-badge');
  const cartDrawer = document.getElementById('cart-drawer');
  const overlayBackdrop = document.getElementById('overlay-backdrop');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartDrawerFoot = document.getElementById('cart-drawer-foot');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRow = document.getElementById('cart-discount-row');
  const discountAmountEl = document.getElementById('cart-discount-val');
  const deliveryFeeEl = document.getElementById('cart-delivery-fee');
  const grandTotalEl = document.getElementById('cart-grand-total');
  const freeShippingBar = document.getElementById('free-shipping-fill');
  const freeShippingMsg = document.getElementById('free-shipping-msg');

  // Product modal elements
  const productModal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalCat = document.getElementById('modal-category');
  const modalServings = document.getElementById('modal-servings');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalNotes = document.getElementById('modal-flavor-notes');
  const modalSizesWrap = document.getElementById('modal-sizes-wrap');
  const modalSizesList = document.getElementById('modal-sizes-list');
  const modalNoteInput = document.getElementById('modal-note-input');
  const modalQtyVal = document.getElementById('modal-qty-val');
  const modalIngredients = document.getElementById('modal-ingredients');

  // Custom cake preview elements
  const specOccasion = document.getElementById('spec-occasion');
  const specArchitecture = document.getElementById('spec-architecture');
  const specPortions = document.getElementById('spec-portions');
  const specSponge = document.getElementById('spec-sponge');
  const specFilling = document.getElementById('spec-filling');
  const specStyling = document.getElementById('spec-styling');
  const specDate = document.getElementById('spec-date');
  const specPrice = document.getElementById('spec-price');

  // Toast
  const toast = document.getElementById('toast-notice');
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-msg');

  // --- FLYING CART ITEM BEAD ANIMATION ---
  function flyItemToCart(trigger) {
    if (!trigger) return;
    const cartBtn = document.getElementById('cart-toggle-btn');
    if (!cartBtn) return;

    const startRect = trigger.getBoundingClientRect();
    const endRect = cartBtn.getBoundingClientRect();

    const bead = document.createElement('div');
    bead.className = 'flying-cart-bead';
    bead.style.left = `${startRect.left + startRect.width / 2}px`;
    bead.style.top = `${startRect.top + startRect.height / 2}px`;
    document.body.appendChild(bead);

    // Force browser reflow
    void bead.offsetWidth;

    const targetX = endRect.left + endRect.width / 2;
    const targetY = endRect.top + endRect.height / 2;

    bead.style.left = `${targetX}px`;
    bead.style.top = `${targetY}px`;
    bead.style.transform = 'translate(-50%, -50%) scale(0.3)';
    bead.style.opacity = '0.3';

    setTimeout(() => {
      bead.remove();
      cartBtn.classList.remove('cart-bounce-active');
      void cartBtn.offsetWidth;
      cartBtn.classList.add('cart-bounce-active');
    }, 650);
  }

  // --- 4. RENDER PRODUCTS WITH FILTERS & SEARCH ---
  function renderProducts() {
    if (!productsGrid) return;

    const filtered = BAKERY_PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;

      let matchesFlavor = true;
      if (activeFlavorFilter !== 'all') {
        const tag = activeFlavorFilter.toLowerCase();
        matchesFlavor = product.flavorNotes.some(n => n.toLowerCase().includes(tag)) ||
                        product.name.toLowerCase().includes(tag) ||
                        product.tagline.toLowerCase().includes(tag);
      }

      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        matchesSearch = product.name.toLowerCase().includes(q) ||
                        product.tagline.toLowerCase().includes(q) ||
                        product.description.toLowerCase().includes(q) ||
                        product.flavorNotes.some(n => n.toLowerCase().includes(q)) ||
                        (product.ingredients && product.ingredients.some(ing => ing.toLowerCase().includes(q)));
      }

      return matchesCategory && matchesFlavor && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background-color: #FFFFFF; border-radius: var(--radius-2xl); border: 1px dashed var(--color-cream-border);">
          <p style="font-family: var(--font-serif); font-size: 19px; color: var(--color-cocoa-900); font-weight: 700; margin-bottom: 6px;">No sweet creations match your search</p>
          <p style="font-size: 12px; color: var(--color-cocoa-600); margin-bottom: 16px;">Try searching for "lychee", "pistachio", "brioche", or reset your filters.</p>
          <button type="button" class="btn-secondary" onclick="window.Cakelab.resetSearchFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map((product, idx) => {
      const displayPrice = product.category === 'custom-cakes'
        ? `From $${product.price.toFixed(2)}`
        : `$${product.price.toFixed(2)}`;

      const notesHtml = product.flavorNotes.slice(0, 3).map(n =>
        `<span class="flavor-tag">${escapeHtml(n)}</span>`
      ).join('');

      return `
        <article class="product-card" data-id="${product.id}" data-reveal data-reveal-delay="${(idx % 3) + 1}">
          <div class="product-card-img-box" onclick="window.Cakelab.openProductModal('${product.id}')">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
            ${product.badgeText ? `<span class="card-badge">${escapeHtml(product.badgeText)}</span>` : ''}
          </div>
          <div class="product-card-body">
            <div class="product-meta-row">
              <span class="product-cat-tag">${formatCategory(product.category)}</span>
              ${product.servings ? `<span class="product-servings">${escapeHtml(product.servings)}</span>` : ''}
            </div>
            <h3 class="product-title" onclick="window.Cakelab.openProductModal('${product.id}')">
              ${escapeHtml(product.name)}
            </h3>
            <p class="product-tagline">${escapeHtml(product.tagline)}</p>
            <div class="flavor-tags">
              ${notesHtml}
            </div>
            <div class="product-footer-row">
              <div class="product-price-box">
                <span class="product-price-label">Price</span>
                <span class="product-price">${displayPrice}</span>
              </div>
              <div class="product-action-btns">
                <button type="button" class="btn-quick-view" onclick="window.Cakelab.openProductModal('${product.id}')">
                  Details
                </button>
                <button type="button" class="btn-quick-add" onclick="window.Cakelab.quickAdd('${product.id}', event)">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    initScrollReveal();
    init3DCardTilt();
  }

  function formatCategory(cat) {
    if (cat === 'fresh-cakes') return 'Fresh Cake';
    if (cat === 'sweet-pastries') return 'Sweet Pastry';
    if (cat === 'custom-cakes') return 'Bespoke Celebration';
    return 'Artisan Treat';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // --- 5. CART OPERATIONS ---
  function updateCartBadge() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
      cartBadge.textContent = totalCount;
    }
    const cartHeadCount = document.getElementById('cart-head-count');
    if (cartHeadCount) {
      cartHeadCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    }
  }

  function renderCart() {
    updateCartBadge();

    const checkoutForm = document.getElementById('cart-checkout-form');
    const orderReceipt = document.getElementById('cart-order-receipt');
    if (checkoutForm) checkoutForm.style.display = 'none';
    if (orderReceipt) orderReceipt.style.display = 'none';

    if (cart.length === 0) {
      if (cartItemsContainer) cartItemsContainer.style.display = 'none';
      if (cartEmptyState) cartEmptyState.style.display = 'flex';
      if (cartDrawerFoot) cartDrawerFoot.style.display = 'none';
      return;
    }

    if (cartItemsContainer) cartItemsContainer.style.display = 'flex';
    if (cartEmptyState) cartEmptyState.style.display = 'none';
    if (cartDrawerFoot) cartDrawerFoot.style.display = 'flex';

    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item-card" data-id="${item.id}">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-thumb">
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-title">${escapeHtml(item.name)}</h4>
            ${item.sizeName ? `<p class="cart-item-sub">${escapeHtml(item.sizeName)}</p>` : ''}
            ${item.note ? `<p class="cart-item-note">Inscription: ${escapeHtml(item.note)}</p>` : ''}
          </div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">$${(item.unitPrice * item.quantity).toFixed(2)}</span>
            <div class="stepper-wrap">
              <button type="button" class="stepper-btn" onclick="window.Cakelab.updateItemQty('${item.id}', -1)">-</button>
              <span class="stepper-val">${item.quantity}</span>
              <button type="button" class="stepper-btn" onclick="window.Cakelab.updateItemQty('${item.id}', 1)">+</button>
            </div>
            <button type="button" class="cart-item-remove" onclick="window.Cakelab.removeItem('${item.id}')" title="Remove">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    calculateTotals();
  }

  function calculateTotals() {
    const rawSubtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const discount = (rawSubtotal * discountPercent) / 100;
    const isFreeDelivery = rawSubtotal >= 75 || deliveryMethod === 'pickup';
    const deliveryFee = deliveryMethod === 'delivery' ? (isFreeDelivery ? 0 : 12) : 0;
    const grandTotal = Math.max(0, rawSubtotal - discount + deliveryFee);

    if (subtotalEl) subtotalEl.textContent = `$${rawSubtotal.toFixed(2)}`;

    if (discountRow && discountAmountEl) {
      if (discountPercent > 0) {
        discountRow.style.display = 'flex';
        discountAmountEl.textContent = `-$${discount.toFixed(2)} (${discountPercent}%)`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (deliveryFeeEl) {
      if (deliveryMethod === 'pickup') {
        deliveryFeeEl.textContent = 'Free (Atelier)';
      } else if (rawSubtotal >= 75) {
        deliveryFeeEl.textContent = 'Free (Orders > $75)';
      } else {
        deliveryFeeEl.textContent = `$${deliveryFee.toFixed(2)}`;
      }
    }

    if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;

    // Free shipping progress
    if (freeShippingBar && freeShippingMsg) {
      if (rawSubtotal >= 75) {
        freeShippingBar.style.width = '100%';
        freeShippingMsg.textContent = '✦ You qualified for complimentary courier delivery!';
      } else {
        const remaining = 75 - rawSubtotal;
        const pct = Math.min(100, Math.round((rawSubtotal / 75) * 100));
        freeShippingBar.style.width = `${pct}%`;
        freeShippingMsg.textContent = `Add $${remaining.toFixed(2)} more for free courier delivery`;
      }
    }
  }

  function addToCart(item) {
    const existing = cart.find(i =>
      i.productId === item.productId &&
      i.sizeName === item.sizeName &&
      i.note === item.note
    );

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cart.push({
        id: `cart-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        ...item
      });
    }

    renderCart();
    openCart();
    showToast('Added to Treat Bag', `${item.name} is in your bag ♡`);
  }

  function quickAdd(productId, evt) {
    const trigger = evt && evt.currentTarget ? evt.currentTarget : (window.event && window.event.currentTarget ? window.event.currentTarget : null);
    if (trigger) {
      flyItemToCart(trigger);
    }

    if (productId === 'atelier-tasting-box') {
      addToCart({
        productId: TASTING_BOX.id,
        name: TASTING_BOX.name,
        sizeName: '4 Micro Slices Flight',
        unitPrice: TASTING_BOX.price,
        quantity: 1,
        image: TASTING_BOX.image,
        note: ''
      });
      return;
    }

    const product = BAKERY_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const defaultSize = product.sizes ? product.sizes[0] : null;
    const unitPrice = defaultSize ? product.price * defaultSize.priceMultiplier : product.price;

    addToCart({
      productId: product.id,
      name: product.name,
      sizeName: defaultSize ? defaultSize.name : undefined,
      unitPrice: unitPrice,
      quantity: 1,
      image: product.image,
      note: ''
    });
  }

  function updateItemQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    renderCart();
  }

  function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
    showToast('Item Removed', 'Your treat bag was updated.');
  }

  function clearCart() {
    cart = [];
    renderCart();
  }

  // --- 6. OVERLAYS (MODAL & DRAWER) ---
  function openCart() {
    if (cartDrawer) cartDrawer.classList.add('open');
    if (overlayBackdrop) overlayBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (overlayBackdrop && !productModal.classList.contains('active')) {
      overlayBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function openProductModal(productId) {
    const product = BAKERY_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    activeModalProduct = product;
    selectedModalSizeIdx = 0;
    modalQuantity = 1;

    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalBadge.style.display = product.badgeText ? 'inline-block' : 'none';
    modalBadge.textContent = product.badgeText || '';
    modalCat.textContent = formatCategory(product.category);
    modalServings.textContent = product.servings ? ` · ${product.servings}` : '';
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.description;

    modalNotes.innerHTML = product.flavorNotes.map(n =>
      `<span class="flavor-tag">${escapeHtml(n)}</span>`
    ).join('');

    // Dynamic Sensory Spectrum Radar Bars
    const sensoryBarsEl = document.getElementById('modal-sensory-bars');
    if (sensoryBarsEl) {
      const s = product.sensory || { sweetness: 65, floral: 75, richness: 75, lightness: 85 };
      sensoryBarsEl.innerHTML = `
        <div class="sensory-bar-row">
          <span class="sensory-bar-label">Sweetness Balance</span>
          <div class="sensory-bar-track">
            <div class="sensory-bar-fill" style="width: 0%;" data-target="${s.sweetness}%"></div>
          </div>
          <span class="sensory-bar-val">${s.sweetness}%</span>
        </div>
        <div class="sensory-bar-row">
          <span class="sensory-bar-label">Floral &amp; Aroma</span>
          <div class="sensory-bar-track">
            <div class="sensory-bar-fill" style="width: 0%;" data-target="${s.floral}%"></div>
          </div>
          <span class="sensory-bar-val">${s.floral}%</span>
        </div>
        <div class="sensory-bar-row">
          <span class="sensory-bar-label">Velvety Richness</span>
          <div class="sensory-bar-track">
            <div class="sensory-bar-fill" style="width: 0%;" data-target="${s.richness}%"></div>
          </div>
          <span class="sensory-bar-val">${s.richness}%</span>
        </div>
        <div class="sensory-bar-row">
          <span class="sensory-bar-label">Airy Fluffiness</span>
          <div class="sensory-bar-track">
            <div class="sensory-bar-fill" style="width: 0%;" data-target="${s.lightness}%"></div>
          </div>
          <span class="sensory-bar-val">${s.lightness}%</span>
        </div>
      `;
      setTimeout(() => {
        sensoryBarsEl.querySelectorAll('.sensory-bar-fill').forEach(fill => {
          fill.style.width = fill.dataset.target;
        });
      }, 140);
    }

    modalIngredients.textContent = product.ingredients ? product.ingredients.join(', ') : 'Organic butter, flour, sugar, farm eggs';
    modalNoteInput.value = '';
    modalQtyVal.textContent = '1';

    if (product.sizes && product.sizes.length > 0) {
      modalSizesWrap.style.display = 'block';
      renderModalSizes();
    } else {
      modalSizesWrap.style.display = 'none';
    }

    updateModalPrice();

    productModal.classList.add('active');
    overlayBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function renderModalSizes() {
    if (!activeModalProduct || !activeModalProduct.sizes) return;

    modalSizesList.innerHTML = activeModalProduct.sizes.map((s, idx) => `
      <button type="button" class="size-opt-btn ${idx === selectedModalSizeIdx ? 'active' : ''}" onclick="window.Cakelab.setModalSize(${idx})">
        <span>${escapeHtml(s.name)}</span>
        <span style="color: var(--color-rose-500); font-weight: 700;">$${(activeModalProduct.price * s.priceMultiplier).toFixed(2)}</span>
      </button>
    `).join('');
  }

  function setModalSize(idx) {
    selectedModalSizeIdx = idx;
    renderModalSizes();
    updateModalPrice();
  }

  function updateModalQty(delta) {
    modalQuantity = Math.max(1, modalQuantity + delta);
    modalQtyVal.textContent = modalQuantity;
    updateModalPrice();
  }

  function updateModalPrice() {
    if (!activeModalProduct) return;
    let unit = activeModalProduct.price;
    if (activeModalProduct.sizes && activeModalProduct.sizes[selectedModalSizeIdx]) {
      unit = activeModalProduct.price * activeModalProduct.sizes[selectedModalSizeIdx].priceMultiplier;
    }
    const total = unit * modalQuantity;
    modalPrice.textContent = `$${total.toFixed(2)}`;
  }

  function addModalItemToCart() {
    if (!activeModalProduct) return;

    let sizeName = undefined;
    let unit = activeModalProduct.price;
    if (activeModalProduct.sizes && activeModalProduct.sizes[selectedModalSizeIdx]) {
      const s = activeModalProduct.sizes[selectedModalSizeIdx];
      sizeName = s.name;
      unit = activeModalProduct.price * s.priceMultiplier;
    }

    addToCart({
      productId: activeModalProduct.id,
      name: activeModalProduct.name,
      sizeName: sizeName,
      unitPrice: unit,
      quantity: modalQuantity,
      image: activeModalProduct.image,
      note: modalNoteInput.value.trim()
    });

    closeProductModal();
  }

  function closeProductModal() {
    if (productModal) productModal.classList.remove('active');
    if (overlayBackdrop && !cartDrawer.classList.contains('open')) {
      overlayBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- 7. CHECKOUT & ORDERS ---
  function showCheckout() {
    const itemsView = document.getElementById('cart-items-container');
    const footView = document.getElementById('cart-drawer-foot');
    const checkoutForm = document.getElementById('cart-checkout-form');

    if (itemsView) itemsView.style.display = 'none';
    if (footView) footView.style.display = 'none';
    if (checkoutForm) checkoutForm.style.display = 'block';
  }

  function backToCartItems() {
    renderCart();
  }

  function submitOrder(e) {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('checkout-name');
    const emailInput = document.getElementById('checkout-email');

    if (!nameInput.value.trim() || !emailInput.value.trim()) {
      alert('Please fill in your name and email to confirm your order.');
      return;
    }

    const orderNumber = `CKL-${Math.floor(1000 + Math.random() * 9000)}`;
    const checkoutForm = document.getElementById('cart-checkout-form');
    const orderReceipt = document.getElementById('cart-order-receipt');

    if (checkoutForm) checkoutForm.style.display = 'none';
    if (orderReceipt) {
      orderReceipt.style.display = 'block';
      document.getElementById('receipt-order-no').textContent = `#${orderNumber}`;
      document.getElementById('receipt-name').textContent = nameInput.value;
      document.getElementById('receipt-email').textContent = emailInput.value;
      document.getElementById('receipt-method').textContent = deliveryMethod === 'pickup' ? 'Atelier Counter Pickup' : 'Chilled Courier Delivery';
      document.getElementById('receipt-total').textContent = grandTotalEl ? grandTotalEl.textContent : '$0.00';
    }

    // Reset cart
    cart = [];
    updateCartBadge();
    showToast('Order Placed!', `Receipt sent to ${emailInput.value}`);
  }

  function finishOrder() {
    closeCart();
    renderCart();
  }

  // --- 8. CUSTOM CAKE ESTIMATOR & LIVE VISUALIZER ---
  function updateCakeVisualizer() {
    const stage = document.getElementById('cake-stage');
    const tierLabel = document.getElementById('cake-stage-tier-label');
    const finishLabel = document.getElementById('cake-stage-finish-label');
    const tierTop = document.getElementById('svg-tier-top');
    const tierMid = document.getElementById('svg-tier-middle');
    const tierBot = document.getElementById('svg-tier-bottom');
    const topper = document.getElementById('svg-cake-topper');

    const botBody = document.getElementById('svg-bot-body');
    const midBody = document.getElementById('svg-mid-body');
    const topBody = document.getElementById('svg-top-body');

    const botFinish = document.getElementById('svg-bot-finish');
    const midFinish = document.getElementById('svg-mid-finish');
    const topFinish = document.getElementById('svg-top-finish');

    if (!stage) return;

    // Bump tactile animation on stage
    stage.classList.remove('bump');
    void stage.offsetWidth;
    stage.classList.add('bump');

    // Label updates
    const tierInfo = TIER_PRICES[customCakeState.tier] || TIER_PRICES['2-tier'];
    if (tierLabel) {
      tierLabel.textContent = `${tierInfo.label.split(' ')[0]} (${customCakeState.tier === '1-tier' ? '1 Tier' : customCakeState.tier === '2-tier' ? '2 Tiers' : '3 Tiers'})`;
    }
    if (finishLabel) {
      finishLabel.textContent = customCakeState.finish;
    }

    // Tier visibility & topper positioning
    if (customCakeState.tier === '1-tier') {
      if (tierTop) { tierTop.style.opacity = '0'; tierTop.style.transform = 'scaleY(0)'; }
      if (tierMid) { tierMid.style.opacity = '0'; tierMid.style.transform = 'scaleY(0)'; }
      if (topper) { topper.style.transform = 'translateY(112px)'; }
    } else if (customCakeState.tier === '2-tier') {
      if (tierTop) { tierTop.style.opacity = '0'; tierTop.style.transform = 'scaleY(0)'; }
      if (tierMid) { tierMid.style.opacity = '1'; tierMid.style.transform = 'scaleY(1)'; }
      if (topper) { topper.style.transform = 'translateY(68px)'; }
    } else {
      // 3-tier
      if (tierTop) { tierTop.style.opacity = '1'; tierTop.style.transform = 'scaleY(1)'; }
      if (tierMid) { tierMid.style.opacity = '1'; tierMid.style.transform = 'scaleY(1)'; }
      if (topper) { topper.style.transform = 'translateY(30px)'; }
    }

    // Dynamic Topper Crown Rendering
    if (topper) {
      if (customCakeState.topper === 'sparkler-candle') {
        topper.innerHTML = `
          <rect x="157" y="-2" width="6" height="18" rx="2" fill="#FAF7F2" stroke="#E6DACD" stroke-width="0.8"/>
          <line x1="160" y1="-2" x2="160" y2="-7" stroke="#553936" stroke-width="1.2"/>
          <path class="candle-flame" d="M160 -19 Q164 -12 160 -7 Q156 -12 160 -19" fill="#FF3B77"/>
          <circle cx="160" cy="-10" r="2.5" fill="#FFE3EC"/>
          <circle cx="152" cy="-15" r="1.5" fill="#F59E0B" class="cake-sparkle"/>
          <circle cx="168" cy="-16" r="1.5" fill="#FF85A8" class="cake-sparkle"/>
          <circle cx="165" cy="-23" r="1.2" fill="#FFD700" class="cake-sparkle"/>
        `;
      } else if (customCakeState.topper === 'gold-meadow') {
        topper.innerHTML = `
          <circle cx="160" cy="2" r="7" fill="#F59E0B" opacity="0.9"/>
          <circle cx="153" cy="0" r="5" fill="#FF5C8D" opacity="0.85"/>
          <circle cx="167" cy="1" r="5.5" fill="#9B51E0" opacity="0.85"/>
          <circle cx="160" cy="-4" r="4.5" fill="#10B981" opacity="0.8"/>
          <circle cx="160" cy="1" r="2.5" fill="#FFD700"/>
        `;
      } else {
        topper.innerHTML = `
          <circle cx="160" cy="0" r="10" fill="#FF3B77" opacity="0.9"/>
          <circle cx="157" cy="-2" r="6" fill="#FF85A8"/>
          <circle cx="162" cy="1" r="5" fill="#FFE3EC"/>
          <path d="M152 -2 Q144 -6 150 -10 Q156 -6 152 -2" fill="#88A07A" opacity="0.85"/>
          <path d="M168 -2 Q176 -6 170 -10 Q164 -6 168 -2" fill="#88A07A" opacity="0.85"/>
          <circle cx="160" cy="-2" r="2.5" fill="#FFD700"/>
        `;
      }
    }

    // Dynamic Sponge & Frosting palette
    let frostingFill = 'url(#frosting-rose)';
    let borderColor = '#FFC0D3';

    if (customCakeState.sponge.includes('Pistachio')) {
      frostingFill = '#EAEFD8';
      borderColor = '#C5D4AD';
    } else if (customCakeState.sponge.includes('Chocolate') || customCakeState.sponge.includes('Cocoa')) {
      frostingFill = '#5A3D39';
      borderColor = '#3D2624';
    } else if (customCakeState.sponge.includes('Lavender')) {
      frostingFill = '#F3E8FA';
      borderColor = '#D5BCE6';
    } else if (customCakeState.sponge.includes('Brown Butter')) {
      frostingFill = '#FAF0D7';
      borderColor = '#E6CCA0';
    }

    [botBody, midBody, topBody].forEach(el => {
      if (el) {
        el.setAttribute('fill', frostingFill);
        el.setAttribute('stroke', borderColor);
      }
    });

    // Decorative Finish Artwork Overlays
    let finishDecorBot = '';
    let finishDecorMid = '';
    let finishDecorTop = '';

    if (customCakeState.finish.includes('Vintage Lambeth')) {
      finishDecorBot = `
        <path d="M85 150 Q97 156 110 150 Q122 156 135 150 Q147 156 160 150 Q172 156 185 150 Q197 156 210 150 Q222 156 235 150" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.9"/>
        <path d="M90 135 Q107 142 125 135 Q142 142 160 135 Q177 142 195 135 Q212 142 230 135" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.8"/>
      `;
      finishDecorMid = `
        <path d="M105 104 Q118 109 132 104 Q146 109 160 104 Q174 109 188 104 Q201 109 215 104" fill="none" stroke="#FFFFFF" stroke-width="2.2" opacity="0.9"/>
        <path d="M110 90 Q122 96 135 90 Q147 96 160 90 Q172 96 185 90 Q197 96 210 90" fill="none" stroke="#FFFFFF" stroke-width="1.8" opacity="0.8"/>
      `;
      finishDecorTop = `
        <path d="M122 62 Q135 66 147 62 Q160 66 172 62 Q185 66 198 62" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.9"/>
      `;
    } else if (customCakeState.finish.includes('Pressed')) {
      finishDecorBot = `
        <circle cx="100" cy="130" r="3.5" fill="#FF5C8D" opacity="0.85"/>
        <circle cx="120" cy="142" r="3" fill="#F59E0B" opacity="0.85"/>
        <circle cx="150" cy="134" r="4" fill="#9B51E0" opacity="0.85"/>
        <circle cx="180" cy="144" r="3" fill="#FF5C8D" opacity="0.85"/>
        <circle cx="210" cy="132" r="3.5" fill="#10B981" opacity="0.85"/>
      `;
      finishDecorMid = `
        <circle cx="120" cy="90" r="3" fill="#F59E0B" opacity="0.85"/>
        <circle cx="145" cy="84" r="3.5" fill="#FF5C8D" opacity="0.85"/>
        <circle cx="175" cy="94" r="3" fill="#9B51E0" opacity="0.85"/>
        <circle cx="195" cy="85" r="2.5" fill="#10B981" opacity="0.85"/>
      `;
      finishDecorTop = `
        <circle cx="138" cy="48" r="2.5" fill="#FF5C8D" opacity="0.85"/>
        <circle cx="160" cy="52" r="3" fill="#F59E0B" opacity="0.85"/>
        <circle cx="182" cy="46" r="2.5" fill="#9B51E0" opacity="0.85"/>
      `;
    } else if (customCakeState.finish.includes('Gold Leaf')) {
      finishDecorBot = `
        <polygon points="105,125 112,122 110,132" fill="#F59E0B" opacity="0.9"/>
        <polygon points="140,140 148,136 144,146" fill="#F59E0B" opacity="0.9"/>
        <polygon points="175,128 184,124 180,135" fill="#F59E0B" opacity="0.9"/>
        <polygon points="215,138 222,132 218,144" fill="#F59E0B" opacity="0.9"/>
      `;
      finishDecorMid = `
        <polygon points="125,85 133,80 130,90" fill="#F59E0B" opacity="0.9"/>
        <polygon points="160,95 168,90 165,102" fill="#F59E0B" opacity="0.9"/>
        <polygon points="190,82 198,78 194,88" fill="#F59E0B" opacity="0.9"/>
      `;
      finishDecorTop = `
        <polygon points="145,45 152,42 149,50" fill="#F59E0B" opacity="0.9"/>
        <polygon points="172,48 178,44 175,54" fill="#F59E0B" opacity="0.9"/>
      `;
    } else {
      finishDecorBot = `
        <line x1="90" y1="126" x2="230" y2="126" stroke="#FFFFFF" stroke-width="2" opacity="0.45" stroke-dasharray="20,10,35,8"/>
        <line x1="95" y1="142" x2="225" y2="142" stroke="#FFFFFF" stroke-width="2" opacity="0.45" stroke-dasharray="14,12,28,10"/>
      `;
      finishDecorMid = `
        <line x1="110" y1="82" x2="210" y2="82" stroke="#FFFFFF" stroke-width="1.8" opacity="0.45" stroke-dasharray="16,8,24,6"/>
        <line x1="115" y1="96" x2="205" y2="96" stroke="#FFFFFF" stroke-width="1.8" opacity="0.45" stroke-dasharray="12,14,20,8"/>
      `;
      finishDecorTop = `
        <line x1="126" y1="46" x2="194" y2="46" stroke="#FFFFFF" stroke-width="1.5" opacity="0.45" stroke-dasharray="10,6,18,5"/>
      `;
    }

    if (botFinish) botFinish.innerHTML = finishDecorBot;
    if (midFinish) midFinish.innerHTML = finishDecorMid;
    if (topFinish) topFinish.innerHTML = finishDecorTop;
  }

  function updateCustomCakeSummary() {
    const tierInfo = TIER_PRICES[customCakeState.tier] || TIER_PRICES['2-tier'];
    customCakeState.basePrice = tierInfo.base;
    const estTotal = customCakeState.basePrice + customCakeState.finishPremium;

    if (specOccasion) specOccasion.textContent = `${customCakeState.occasion} Celebration`;
    if (specArchitecture) specArchitecture.textContent = tierInfo.label;
    if (specPortions) specPortions.textContent = `${tierInfo.guests} (${customCakeState.guests} guests)`;
    if (specSponge) specSponge.textContent = customCakeState.sponge;
    if (specFilling) specFilling.textContent = customCakeState.filling;
    if (specStyling) specStyling.textContent = customCakeState.finish;
    if (specDate) specDate.textContent = customCakeState.date || 'Pending';
    if (specPrice) specPrice.textContent = `$${estTotal}.00`;

    const dynamicPriceDisplay = document.getElementById('builder-est-price');
    if (dynamicPriceDisplay) dynamicPriceDisplay.textContent = `$${estTotal}.00`;

    updateCakeVisualizer();
  }

  function handleOccasionSelect(occ) {
    customCakeState.occasion = occ;
    document.querySelectorAll('.occasion-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.occasion === occ);
    });
    updateCustomCakeSummary();
  }

  function handleTierSelect(tierKey) {
    customCakeState.tier = tierKey;
    document.querySelectorAll('.tier-card-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tier === tierKey);
    });
    updateCustomCakeSummary();
  }

  function handleFinishSelect(finishKey) {
    const fin = FINISH_PRICES[finishKey];
    if (!fin) return;
    customCakeState.finish = fin.name;
    customCakeState.finishPremium = fin.premium;

    document.querySelectorAll('.finish-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.finish === finishKey);
    });
    updateCustomCakeSummary();
  }

  function setTopper(topperKey) {
    customCakeState.topper = topperKey;
    document.querySelectorAll('.topper-pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.topper === topperKey);
    });
    updateCakeVisualizer();
  }

  function toggleCakeSpin() {
    customCakeState.isSpinning = !customCakeState.isSpinning;
    const stage = document.getElementById('cake-stage');
    const spinBtn = document.getElementById('btn-turntable-spin');
    const btnText = document.getElementById('turntable-btn-text');

    if (stage) {
      stage.classList.toggle('turntable-spinning', customCakeState.isSpinning);
    }
    if (spinBtn) {
      spinBtn.classList.toggle('active', customCakeState.isSpinning);
    }
    if (btnText) {
      btnText.textContent = customCakeState.isSpinning ? 'Pause Rotation ⏸' : 'Turntable Spin';
    }
  }

  function filterReviews(cat) {
    const buttons = document.querySelectorAll('.review-tab-btn');
    buttons.forEach(b => b.classList.toggle('active', b.dataset.revCat === cat));

    const cards = document.querySelectorAll('.review-card');
    cards.forEach(card => {
      const cardCat = card.dataset.revCat;
      if (cat === 'all' || cardCat === cat) {
        card.classList.remove('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        void card.offsetWidth;
        card.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.classList.add('hidden');
      }
    });
  }

  function updateSalonDateNotice() {
    const dateInput = document.getElementById('salon-date');
    const noticeText = document.getElementById('salon-avail-text');
    if (!dateInput || !noticeText) return;

    const val = dateInput.value;
    if (!val) return;
    try {
      const parts = val.split('-');
      if (parts.length === 3) {
        const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        const formatted = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        noticeText.textContent = `3 intimate tasting salon appointments open for ${formatted}`;
      }
    } catch (_) {}
  }

  function submitBespokeConsultation(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('builder-name').value.trim();
    const email = document.getElementById('builder-email').value.trim();

    if (!name || !email) {
      alert('Please provide your name and email so our pastry chef can review your custom cake design.');
      return;
    }

    const form = document.getElementById('builder-form');
    const successBox = document.getElementById('builder-success-box');

    if (form) form.style.display = 'none';
    if (successBox) {
      successBox.style.display = 'block';
      document.getElementById('builder-success-name').textContent = name;
      document.getElementById('builder-success-details').textContent =
        `${customCakeState.occasion} · ${customCakeState.tier.toUpperCase()} · ${customCakeState.sponge} with ${customCakeState.finish}`;
      document.getElementById('builder-success-est').textContent = specPrice.textContent;
    }

    showToast('Consultation Requested', 'Chef Aria will email your custom cake sketch within 24 hours.');
  }

  function resetBespokeForm() {
    const form = document.getElementById('builder-form');
    const successBox = document.getElementById('builder-success-box');
    if (form) form.style.display = 'block';
    if (successBox) successBox.style.display = 'none';
  }

  function addBespokeCakeToCart() {
    const estTotal = customCakeState.basePrice + customCakeState.finishPremium;
    addToCart({
      productId: 'bespoke-custom-cake',
      name: `Bespoke ${customCakeState.tier.toUpperCase()} ${customCakeState.occasion} Cake`,
      sizeName: `${customCakeState.sponge} · ${customCakeState.finish}`,
      unitPrice: estTotal,
      quantity: 1,
      image: './assets/lambeth-romance.jpg',
      note: `Event Date: ${customCakeState.date} · Guests: ${customCakeState.guests}`
    });
  }

  // --- 9. ATELIER SALON RESERVATION ---
  function submitSalonBooking(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('salon-name').value.trim();
    const date = document.getElementById('salon-date').value;
    const time = document.getElementById('salon-time').value;
    const size = document.getElementById('salon-party-size').value;

    if (!name) {
      alert('Please enter your name to reserve the tasting salon.');
      return;
    }

    const form = document.getElementById('salon-booking-form');
    const success = document.getElementById('salon-booking-success');

    if (form) form.style.display = 'none';
    if (success) {
      success.style.display = 'block';
      document.getElementById('salon-success-name').textContent = name;
      document.getElementById('salon-success-details').textContent = `${date} at ${time} (${size})`;
    }

    showToast('Salon Reserved', `Tasting appointment confirmed for ${name}.`);
  }

  function resetSalonBooking() {
    const form = document.getElementById('salon-booking-form');
    const success = document.getElementById('salon-booking-success');
    if (form) form.style.display = 'block';
    if (success) success.style.display = 'none';
    const nameInput = document.getElementById('salon-name');
    if (nameInput) nameInput.value = '';
  }

  // --- 10. NEWSLETTER & PROMO ---
  function submitNewsletter(e) {
    if (e) e.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();
    if (!email) return;

    showToast('Welcome to Tasting Club!', 'Your 10% welcome coupon code is ROSEWOOD10');
    document.getElementById('newsletter-email').value = '';
  }

  function applyPromoCode(e) {
    if (e) e.preventDefault();
    const code = document.getElementById('cart-promo-input').value.trim().toUpperCase();
    const msg = document.getElementById('cart-promo-msg');

    if (code === 'ROSEWOOD10' || code === 'CAKELAB10' || code === 'SWEET10') {
      discountPercent = 10;
      if (msg) {
        msg.textContent = '10% Sweet Welcome discount applied!';
        msg.style.color = 'var(--color-rose-500)';
      }
      showToast('Promo Code Applied', '10% discount subtracted from your total.');
    } else {
      discountPercent = 0;
      if (msg) {
        msg.textContent = 'Invalid code. Try "ROSEWOOD10"';
        msg.style.color = '#EF4444';
      }
    }
    calculateTotals();
  }

  // --- 11. TOAST SYSTEM ---
  let toastTimer = null;
  function showToast(title, message) {
    if (!toast) return;
    if (toastTitle) toastTitle.textContent = title;
    if (toastMsg) toastMsg.textContent = message;

    const bar = document.getElementById('toast-progress-bar');
    if (bar) {
      bar.style.transition = 'none';
      bar.style.transform = 'scaleX(1)';
      void bar.offsetWidth;
      bar.style.transition = 'transform 3.5s linear';
      bar.style.transform = 'scaleX(0)';
    }

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // --- 12. AMBIENT BOTANICAL PETALS & GOLDEN STARDUST CANVAS ENGINE ---
  function initAmbientPetalsCanvas() {
    const canvas = document.getElementById('ambient-petals-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || 600;
    };
    window.addEventListener('resize', onResize);

    // Mouse coordinates tracker for interactive breeze reaction
    let mouseX = -9999;
    let mouseY = -9999;
    let mouseActive = false;

    const hero = canvas.parentElement;
    if (hero) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        mouseActive = true;
      });
      hero.addEventListener('mouseleave', () => {
        mouseActive = false;
        mouseX = -9999;
        mouseY = -9999;
      });
    }

    const petals = [];
    const PETAL_COUNT = 24;

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 5 + Math.random() * 8,
        speedY: 0.35 + Math.random() * 0.65,
        speedX: (Math.random() - 0.5) * 0.3,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        oscillationSpeed: 0.01 + Math.random() * 0.02,
        oscillationRadius: 18 + Math.random() * 26,
        color: Math.random() > 0.35
          ? `rgba(255, 140, 180, ${(0.22 + Math.random() * 0.28).toFixed(2)})`
          : `rgba(245, 180, 80, ${(0.18 + Math.random() * 0.25).toFixed(2)})`,
        phase: Math.random() * Math.PI * 2,
        vx: 0,
        vy: 0
      });
    }

    // Shimmering gold edible stardust particles
    const sparkles = [];
    for (let i = 0; i < 18; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1 + Math.random() * 1.8,
        speedY: 0.2 + Math.random() * 0.35,
        twinkleSpeed: 0.02 + Math.random() * 0.04,
        twinklePhase: Math.random() * Math.PI * 2,
        color: 'rgba(245, 158, 11, '
      });
    }

    let isRunning = true;
    document.addEventListener('visibilitychange', () => {
      isRunning = !document.hidden;
    });

    function renderLoop() {
      if (isRunning) {
        ctx.clearRect(0, 0, width, height);

        // Render sparkles
        for (let i = 0; i < sparkles.length; i++) {
          const s = sparkles[i];
          s.y += s.speedY;
          s.twinklePhase += s.twinkleSpeed;
          if (s.y > height + 10) {
            s.y = -10;
            s.x = Math.random() * width;
          }
          const alpha = 0.2 + Math.sin(s.twinklePhase) * 0.25;
          if (alpha > 0) {
            ctx.fillStyle = s.color + Math.min(1, Math.max(0, alpha)).toFixed(2) + ')';
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Render petals with mouse proximity breeze
        for (let i = 0; i < petals.length; i++) {
          const p = petals[i];
          p.y += p.speedY + p.vy;
          p.x += p.speedX + p.vx;
          p.phase += p.oscillationSpeed;
          p.angle += p.angularSpeed;

          // Dampen external velocity
          p.vx *= 0.94;
          p.vy *= 0.94;

          const currentX = p.x + Math.sin(p.phase) * p.oscillationRadius;

          // Interactive mouse breeze reaction
          if (mouseActive) {
            const dx = currentX - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130 && dist > 0) {
              const force = (130 - dist) / 130;
              p.vx += (dx / dist) * force * 1.5;
              p.vy += (dy / dist) * force * 1.5;
              p.angle += 0.05;
            }
          }

          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
            p.vx = 0;
            p.vy = 0;
          } else if (p.y < -30) {
            p.y = height + 10;
          }

          if (p.x < -30) p.x = width + 20;
          if (p.x > width + 30) p.x = -20;

          ctx.save();
          ctx.translate(currentX, p.y);
          ctx.rotate(p.angle);
          ctx.fillStyle = p.color;

          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.85, -p.size * 0.6, p.size * 0.85, p.size * 0.6, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.85, p.size * 0.6, -p.size * 0.85, -p.size * 0.6, 0, -p.size);
          ctx.fill();
          ctx.restore();
        }
      }
      requestAnimationFrame(renderLoop);
    }

    requestAnimationFrame(renderLoop);
  }

  // --- 13. 3D CARD TILT & SPECULAR SHINE SYSTEM ---
  function init3DCardTilt() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if ('ontouchstart' in window) return;

    const cards = document.querySelectorAll(
      '.product-card, .hero-showcase-card, .tasting-flight-card, .spec-summary-card, .review-card, .info-card-box'
    );

    cards.forEach(card => {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(850px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        card.style.setProperty('--mouse-x', `${((x / rect.width) * 100).toFixed(1)}%`);
        card.style.setProperty('--mouse-y', `${((y / rect.height) * 100).toFixed(1)}%`);
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // --- 14. TOP SCROLL PROGRESS INDICATOR ---
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      const pct = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
      bar.style.width = `${pct}%`;
    }, { passive: true });
  }

  // --- 13. SCROLL REVEAL OBSERVER ---
  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -25px 0px'
    });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }

  // --- 14. STICKY NAVBAR DETECTOR ---
  function initStickyNavbar() {
    const header = document.querySelector('.navbar-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- 15. SEARCH & FLAVOR FILTER INITIALIZER ---
  function initSearchAndFlavorFilter() {
    const searchInput = document.getElementById('treats-search-input');
    const searchClear = document.getElementById('treats-search-clear');
    const flavorChips = document.querySelectorAll('.flavor-chip-btn');

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchQuery = this.value;
        if (searchClear) {
          searchClear.classList.toggle('active', searchQuery.length > 0);
        }
        renderProducts();
      });
    }

    if (searchClear && searchInput) {
      searchClear.addEventListener('click', function () {
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.remove('active');
        renderProducts();
      });
    }

    flavorChips.forEach(chip => {
      chip.addEventListener('click', function () {
        flavorChips.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        activeFlavorFilter = this.dataset.flavor;
        renderProducts();
      });
    });
  }

  function resetSearchFilters() {
    activeCategory = 'all';
    activeFlavorFilter = 'all';
    searchQuery = '';

    const searchInput = document.getElementById('treats-search-input');
    const searchClear = document.getElementById('treats-search-clear');
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.classList.remove('active');

    filterButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === 'all');
    });

    document.querySelectorAll('.flavor-chip-btn').forEach(c => {
      c.classList.toggle('active', c.dataset.flavor === 'all');
    });

    renderProducts();
  }

  // --- 16. INITIALIZATION & LISTENERS ---
  document.addEventListener('DOMContentLoaded', function () {
    // Render initial products with search & filters
    renderProducts();

    // Initial cart render
    renderCart();

    // Initial custom cake preview & live SVG visualizer
    updateCustomCakeSummary();

    // Init ambient canvas motion
    initAmbientPetalsCanvas();

    // Init scroll reveal
    initScrollReveal();

    // Init sticky compact navbar
    initStickyNavbar();

    // Init live search and flavor tags
    initSearchAndFlavorFilter();

    // Init 3D card perspective tilt
    init3DCardTilt();

    // Init top scroll progress bar
    initScrollProgress();

    // Init salon availability feedback
    updateSalonDateNotice();
    const salonDateInput = document.getElementById('salon-date');
    if (salonDateInput) {
      salonDateInput.addEventListener('change', updateSalonDateNotice);
    }

    // Filter tabs
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeCategory = this.dataset.category;
        renderProducts();
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavPanel = document.getElementById('mobile-nav-panel');
    if (mobileMenuBtn && mobileNavPanel) {
      mobileMenuBtn.addEventListener('click', function () {
        mobileNavPanel.classList.toggle('open');
      });
      // Close mobile nav when clicking a link
      mobileNavPanel.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileNavPanel.classList.remove('open'));
      });
    }

    // Delivery toggle buttons in cart
    const deliveryPickupBtn = document.getElementById('btn-delivery-pickup');
    const deliveryCourierBtn = document.getElementById('btn-delivery-courier');
    if (deliveryPickupBtn && deliveryCourierBtn) {
      deliveryPickupBtn.addEventListener('click', function () {
        deliveryMethod = 'pickup';
        deliveryPickupBtn.classList.add('active');
        deliveryCourierBtn.classList.remove('active');
        calculateTotals();
      });
      deliveryCourierBtn.addEventListener('click', function () {
        deliveryMethod = 'delivery';
        deliveryCourierBtn.classList.add('active');
        deliveryPickupBtn.classList.remove('active');
        calculateTotals();
      });
    }

    // Custom cake interactive inputs
    const guestRange = document.getElementById('builder-guests');
    const guestLabel = document.getElementById('builder-guests-val');
    if (guestRange && guestLabel) {
      guestRange.addEventListener('input', function () {
        customCakeState.guests = Number(this.value);
        guestLabel.textContent = this.value;
        updateCustomCakeSummary();
      });
    }

    const dateInput = document.getElementById('builder-date');
    if (dateInput) {
      dateInput.addEventListener('change', function () {
        customCakeState.date = this.value;
        updateCustomCakeSummary();
      });
    }

    const spongeSelect = document.getElementById('builder-sponge');
    if (spongeSelect) {
      spongeSelect.addEventListener('change', function () {
        customCakeState.sponge = this.value;
        updateCustomCakeSummary();
      });
    }

    const fillingSelect = document.getElementById('builder-filling');
    if (fillingSelect) {
      fillingSelect.addEventListener('change', function () {
        customCakeState.filling = this.value;
        updateCustomCakeSummary();
      });
    }

    // Backdrop click closes overlays
    if (overlayBackdrop) {
      overlayBackdrop.addEventListener('click', function () {
        closeCart();
        closeProductModal();
      });
    }

    // ESC key closes overlays
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeCart();
        closeProductModal();
      }
    });
  });

  // Expose methods to global Cakelab namespace for inline handlers
  window.Cakelab = {
    openCart: openCart,
    closeCart: closeCart,
    openProductModal: openProductModal,
    closeProductModal: closeProductModal,
    setModalSize: setModalSize,
    updateModalQty: updateModalQty,
    addModalItemToCart: addModalItemToCart,
    quickAdd: quickAdd,
    updateItemQty: updateItemQty,
    removeItem: removeItem,
    clearCart: clearCart,
    showCheckout: showCheckout,
    backToCartItems: backToCartItems,
    submitOrder: submitOrder,
    finishOrder: finishOrder,
    handleOccasionSelect: handleOccasionSelect,
    handleTierSelect: handleTierSelect,
    handleFinishSelect: handleFinishSelect,
    submitBespokeConsultation: submitBespokeConsultation,
    resetBespokeForm: resetBespokeForm,
    addBespokeCakeToCart: addBespokeCakeToCart,
    submitSalonBooking: submitSalonBooking,
    resetSalonBooking: resetSalonBooking,
    submitNewsletter: submitNewsletter,
    applyPromoCode: applyPromoCode,
    resetSearchFilters: resetSearchFilters,
    flyItemToCart: flyItemToCart,
    setTopper: setTopper,
    toggleCakeSpin: toggleCakeSpin,
    filterReviews: filterReviews,
    updateSalonDateNotice: updateSalonDateNotice
  };

})();

