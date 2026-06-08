/* =============================================
   SABZI MANDI FRESH - MAIN JAVASCRIPT
   Professional Pakistani Grocery Store
   ============================================= */

'use strict';

/* =============================================
   PRODUCT DATA
   ============================================= */
const products = [
  {
    id: 1,
    name: 'Premium Basmati Rice',
    category: 'grains',
    categoryLabel: 'Grains & Rice',
    price: 540,
    oldPrice: 650,
    unit: '5 kg Bag',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
    badge: 'Sale',
    rating: 4.8,
    reviews: 312,
    bestseller: true,
    rank: 1
  },
  {
    id: 2,
    name: 'Sunflower Cooking Oil',
    category: 'oil',
    categoryLabel: 'Cooking Oil',
    price: 890,
    oldPrice: 1050,
    unit: '5 Litre Bottle',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80',
    badge: 'Sale',
    rating: 4.6,
    reviews: 198,
    bestseller: true,
    rank: 2
  },
  {
    id: 3,
    name: 'Milk Pack (Full Cream)',
    category: 'dairy',
    categoryLabel: 'Dairy & Eggs',
    price: 95,
    oldPrice: null,
    unit: '1 Litre Pack',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80',
    badge: null,
    rating: 4.9,
    reviews: 524,
    bestseller: true,
    rank: 3
  },
  {
    id: 4,
    name: 'Farm Fresh Eggs',
    category: 'dairy',
    categoryLabel: 'Dairy & Eggs',
    price: 320,
    oldPrice: 380,
    unit: 'Dozen (12 pcs)',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80',
    badge: 'Sale',
    rating: 4.7,
    reviews: 286,
    bestseller: true,
    rank: 4
  },
  {
    id: 5,
    name: 'Alphonso Mangoes',
    category: 'fruits',
    categoryLabel: 'Fresh Fruits',
    price: 450,
    oldPrice: null,
    unit: '1 kg Box',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80',
    badge: 'New',
    rating: 4.9,
    reviews: 178,
    bestseller: true,
    rank: 5
  },
  {
    id: 6,
    name: 'Mix Fresh Vegetables',
    category: 'vegetables',
    categoryLabel: 'Vegetables',
    price: 280,
    oldPrice: 340,
    unit: '2 kg Assorted Box',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80',
    badge: 'Sale',
    rating: 4.5,
    reviews: 143,
    bestseller: false,
    rank: null
  },
  {
    id: 7,
    name: 'Tapal Danedar Tea',
    category: 'beverages',
    categoryLabel: 'Beverages',
    price: 185,
    oldPrice: 210,
    unit: '200g Packet',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
    badge: 'Sale',
    rating: 4.8,
    reviews: 641,
    bestseller: false,
    rank: null
  },
  {
    id: 8,
    name: 'Whole Wheat Flour',
    category: 'grains',
    categoryLabel: 'Grains & Rice',
    price: 360,
    oldPrice: 420,
    unit: '10 kg Bag',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80',
    badge: 'Sale',
    rating: 4.6,
    reviews: 392,
    bestseller: false,
    rank: null
  },
  {
    id: 9,
    name: 'Peek Freans Biscuits',
    category: 'snacks',
    categoryLabel: 'Snacks',
    price: 140,
    oldPrice: null,
    unit: '4 Pack Bundle',
    image: 'https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?w=400&q=80',
    badge: null,
    rating: 4.4,
    reviews: 211,
    bestseller: false,
    rank: null
  },
  {
    id: 10,
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    categoryLabel: 'Vegetables',
    price: 120,
    oldPrice: null,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80',
    badge: 'New',
    rating: 4.7,
    reviews: 88,
    bestseller: false,
    rank: null
  },
  {
    id: 11,
    name: 'Pepsi Soft Drink',
    category: 'beverages',
    categoryLabel: 'Beverages',
    price: 240,
    oldPrice: 280,
    unit: '6-Pack Cans',
    image: 'https://images.unsplash.com/photo-1625772452859-1c03d884dcd7?w=400&q=80',
    badge: 'Sale',
    rating: 4.3,
    reviews: 156,
    bestseller: false,
    rank: null
  },
  {
    id: 12,
    name: 'Bananas (Chaunsa)',
    category: 'fruits',
    categoryLabel: 'Fresh Fruits',
    price: 110,
    oldPrice: null,
    unit: '1 Dozen',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80',
    badge: null,
    rating: 4.5,
    reviews: 97,
    bestseller: false,
    rank: null
  },
  {
    id: 13,
    name: 'Canola Oil',
    category: 'oil',
    categoryLabel: 'Cooking Oil',
    price: 680,
    oldPrice: 780,
    unit: '3 Litre Bottle',
    image: 'https://images.unsplash.com/photo-1611784601736-2f0a39c3d59a?w=400&q=80',
    badge: 'Sale',
    rating: 4.5,
    reviews: 134,
    bestseller: false,
    rank: null
  },
  {
    id: 14,
    name: 'Potato Chips Lays',
    category: 'snacks',
    categoryLabel: 'Snacks',
    price: 180,
    oldPrice: null,
    unit: '5 Packs Multipack',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80',
    badge: null,
    rating: 4.2,
    reviews: 73,
    bestseller: false,
    rank: null
  },
  {
    id: 15,
    name: 'Garlic & Ginger Pack',
    category: 'vegetables',
    categoryLabel: 'Vegetables',
    price: 95,
    oldPrice: null,
    unit: '500g Each',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80',
    badge: 'New',
    rating: 4.8,
    reviews: 62,
    bestseller: false,
    rank: null
  },
  {
    id: 16,
    name: 'Medjool Dates (Khajoor)',
    category: 'fruits',
    categoryLabel: 'Fresh Fruits',
    price: 650,
    oldPrice: 780,
    unit: '500g Premium Box',
    image: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=400&q=80',
    badge: 'Sale',
    rating: 4.9,
    reviews: 205,
    bestseller: false,
    rank: null
  }
];

/* =============================================
   TESTIMONIALS DATA
   ============================================= */
const testimonials = [
  {
    text: 'Absolutely amazing service! My basmati rice and vegetables arrived within 2 hours of ordering. The quality is much better than what I usually get from the local market.',
    name: 'Ayesha Tariq',
    location: 'Lahore, Punjab',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80'
  },
  {
    text: 'I have been ordering from Sabzi Mandi Fresh for 6 months now. The eggs and milk pack are always fresh, and the pricing is very competitive compared to local stores.',
    name: 'Muhammad Usman',
    location: 'Karachi, Sindh',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
  },
  {
    text: 'The mango season deals are incredible. Got 5 kg of Alphonso mangoes delivered same day and the freshness was unmatched. Will definitely keep ordering every week.',
    name: 'Sana Mirza',
    location: 'Islamabad, ICT',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80'
  },
  {
    text: 'Great platform for ordering monthly grocery. The bulk deals on cooking oil and flour save me a lot of money. Customer support is also very responsive on WhatsApp.',
    name: 'Faisal Khan',
    location: 'Rawalpindi, Punjab',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80'
  },
  {
    text: 'Delivery is always on time and the produce is genuinely fresh. I specifically love the vegetable box — seasonal mix at a great price. Highly recommend to all families!',
    name: 'Rabia Noor',
    location: 'Faisalabad, Punjab',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&q=80'
  },
  {
    text: 'As a restaurant owner, I depend on consistent quality grocery supply. Sabzi Mandi Fresh has never disappointed me. Their bulk order pricing is the best in the city.',
    name: 'Bilal Ahmed',
    location: 'Lahore, Punjab',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&q=80'
  }
];

/* =============================================
   CART STATE
   ============================================= */
let cart = [];
let currentFilter = 'all';

/* =============================================
   UTILITY FUNCTIONS
   ============================================= */

/** Format number as PKR currency string */
function formatPKR(amount) {
  return 'PKR ' + amount.toLocaleString('en-PK');
}

/** Generate star HTML string */
function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '<i class="ph ph-star-fill"></i>';
  if (half) stars += '<i class="ph ph-star-half"></i>';
  return stars;
}

/** Show toast notification */
function showToast(message, icon = 'ph-check-circle') {
  const toast = document.getElementById('toast');
  toast.innerHTML = `<i class="ph ${icon}"></i> ${message}`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* =============================================
   NAVBAR BEHAVIOUR
   ============================================= */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  /* Sticky + shadow on scroll */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  /* Hamburger toggle */
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('active');
  });

  /* Close mobile menu on link click */
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('active');
    });
  });
})();

/* =============================================
   SCROLL-TO-TOP
   ============================================= */
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =============================================
   SCROLL REVEAL ANIMATION
   ============================================= */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  /* Observe all reveal elements */
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* =============================================
   PRODUCT RENDERING
   ============================================= */

/** Build a single product card HTML */
function buildProductCard(product) {
  const badgeHTML = product.badge
    ? `<span class="product-badge ${product.badge === 'New' ? 'new' : ''}">${product.badge}</span>`
    : '';
  const oldPriceHTML = product.oldPrice
    ? `<span class="product-old-price">${formatPKR(product.oldPrice)}</span>`
    : '';

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${badgeHTML}
        <button class="product-wishlist" aria-label="Add to wishlist" onclick="handleWishlist(${product.id})">
          <i class="ph ph-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="product-name">${product.name}</h3>
        <span class="product-unit">${product.unit}</span>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="price-wrap">
            ${oldPriceHTML}
            <span class="product-price">${formatPKR(product.price)}</span>
          </div>
          <button class="add-to-cart" onclick="addToCart(${product.id})">
            <i class="ph ph-shopping-cart-simple"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
}

/** Render the main products grid (with filter + search) */
function renderProducts(filter = 'all', searchTerm = '') {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const term = searchTerm.toLowerCase().trim();

  let filtered = products.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = !term ||
      p.name.toLowerCase().includes(term) ||
      p.categoryLabel.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    grid.innerHTML = filtered.map(buildProductCard).join('');
  }
}

/** Render best sellers section */
function renderBestsellers() {
  const grid = document.getElementById('bestsellersGrid');
  const bsProducts = products.filter(p => p.bestseller).slice(0, 5);

  const rankClass = rank => {
    if (rank === 1) return 'gold';
    if (rank === 2) return 'silver';
    if (rank === 3) return 'bronze';
    return '';
  };

  grid.innerHTML = bsProducts.map(p => `
    <div class="bs-card" onclick="addToCart(${p.id})">
      <span class="bs-rank ${rankClass(p.rank)}">#${p.rank}</span>
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <span class="bs-name">${p.name}</span>
      <span class="bs-price">${formatPKR(p.price)}</span>
      <button class="bs-add" onclick="addToCart(${p.id}); event.stopPropagation();">
        Add to Cart
      </button>
    </div>
  `).join('');
}

/** Render testimonials */
function renderTestimonials() {
  const grid = document.getElementById('reviewsGrid');
  grid.innerHTML = testimonials.map(t => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <p class="review-text">${t.text}</p>
      <div class="reviewer">
        <img class="reviewer-avatar" src="${t.avatar}" alt="${t.name}" loading="lazy" />
        <div class="reviewer-info">
          <strong>${t.name}</strong>
          <span>${t.location}</span>
        </div>
        <i class="ph ph-seal-check review-verified" title="Verified Purchase"></i>
      </div>
    </div>
  `).join('');
}

/* =============================================
   FILTER TABS
   ============================================= */
function filterProducts(filter) {
  currentFilter = filter;

  /* Update active tab */
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === filter);
  });

  /* Update active category card */
  document.querySelectorAll('.category-card').forEach(card => {
    card.classList.toggle('active', card.dataset.filter === filter);
  });

  const searchTerm = document.getElementById('searchInput').value;
  renderProducts(filter, searchTerm);
}

/* =============================================
   SEARCH FUNCTIONALITY
   ============================================= */
(function initSearch() {
  const input = document.getElementById('searchInput');
  const btn = document.getElementById('searchBtn');
  const dropdown = document.getElementById('searchDropdown');

  /* Live search dropdown */
  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();
    if (term.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    const matches = products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.categoryLabel.toLowerCase().includes(term)
    ).slice(0, 5);

    if (matches.length === 0) {
      dropdown.classList.remove('active');
      return;
    }

    dropdown.innerHTML = matches.map(p => `
      <div class="search-result-item" onclick="selectSearchResult(${p.id})">
        <img src="${p.image}" alt="${p.name}" />
        <div>
          <div class="sri-name">${p.name}</div>
          <div class="sri-price">${formatPKR(p.price)}</div>
        </div>
      </div>
    `).join('');
    dropdown.classList.add('active');
  });

  /* Search button */
  btn.addEventListener('click', executeSearch);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') executeSearch();
    if (e.key === 'Escape') dropdown.classList.remove('active');
  });

  /* Close dropdown on outside click */
  document.addEventListener('click', e => {
    if (!e.target.closest('#searchBar')) {
      dropdown.classList.remove('active');
    }
  });
})();

function executeSearch() {
  const term = document.getElementById('searchInput').value;
  document.getElementById('searchDropdown').classList.remove('active');
  renderProducts(currentFilter, term);
  /* Smooth scroll to products */
  document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

function selectSearchResult(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  document.getElementById('searchInput').value = product.name;
  document.getElementById('searchDropdown').classList.remove('active');
  renderProducts('all', product.name);
  document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

/* =============================================
   CART FUNCTIONALITY
   ============================================= */

/** Add product to cart */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`${product.name} added to cart`, 'ph-check-circle');
  animateCartCount();
}

/** Remove product from cart */
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

/** Change quantity in cart */
function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}

/** Animate cart count badge */
function animateCartCount() {
  const badge = document.getElementById('cartCount');
  badge.classList.remove('bump');
  void badge.offsetWidth; /* reflow */
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

/** Rerender cart UI */
function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  countEl.textContent = totalItems;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="ph ph-shopping-cart-simple"></i>
        <p>Your cart is empty</p>
        <span>Add items to get started</span>
      </div>
    `;
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class
