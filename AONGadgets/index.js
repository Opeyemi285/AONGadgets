const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.querySelector('div.mobile-menu');
const scrollLeft = document.querySelector(".left");
const scrollRight = document.querySelector(".right");
const scrollContainer = document.querySelector(".categories-list");
const scrollItem = document.querySelector(".list");
const cartCounter = document.getElementById('cartCounter');
const addToCartBtns = document.querySelectorAll('.cart-button');
const favCounter = document.getElementById('favCounter');
const favButtons = document.querySelectorAll('.add-to-wishlist');
const scrollItemStyle = window.getComputedStyle(scrollItem);
const scrollItemMargin = scrollItem.offsetWidth + parseInt(scrollItemStyle.marginRight);

// Initialize counters from localStorage (for sync across pages)
let cartCount = 0;
let favCount = 0;
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart
cartCount = cart.reduce((sum, item) => sum + item.quantity, 0); // Total quantity
if (cartCounter) cartCounter.textContent = cartCount;
if (cartCount > 0) cartCounter.style.display = 'inline';

// Function to extract product info from a button
function getProductInfo(button) {
  const productItem = button.closest('.product-item');
  const img = productItem.querySelector('.product-img img');
  const nameEl = productItem.querySelector('.product-details h3');
  const priceEl = productItem.querySelector('.product-details p');
  
  const name = nameEl ? nameEl.textContent.trim() : 'Unknown Product';
  const priceText = priceEl ? priceEl.textContent.trim() : '₦0';
  const price = parseInt(priceText.replace(/[^\d]/g, '')) || 0; // Remove ₦, commas, etc.
  const id = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''); // Simple unique ID from name
  
  return {
    id,
    name,
    price,
    quantity: 1,
    imgSrc: img ? img.src : '',
    alt: name
  };
}

// Function to save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCounter) {
    cartCounter.textContent = cartCount;
    cartCounter.style.display = cartCount > 0 ? 'inline' : 'none';
  }
}

// Mobile menu handlers (unchanged)
menu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});
closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

// Scroll handlers (unchanged)
scrollLeft.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -scrollItemMargin,
    behavior: "smooth"
  });
});

scrollRight.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: scrollItemMargin,
    behavior: "smooth"
  });
});

// Wishlist handlers (unchanged, but you could add localStorage similarly if needed)
favButtons.forEach(button => {
  button.addEventListener('click', () => {
    favCounter.style.display = 'inline';
    if (!button.disabled) {
      button.setAttribute('fill', '#481379');
      favCount++;
      favCounter.textContent = favCount;
      button.disabled = true;
    }
  });
});

// Add to cart handlers (updated for dynamic cart)
addToCartBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (button.disabled) return; // Prevent multiple adds

    const product = getProductInfo(button);
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity++; // Increment if exists
    } else {
      cart.push(product); // Add new
    }

    saveCart(); // Save and update counter
    button.disabled = true; // Disable button
    // Optional: Change button text to "Added!" or style it
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="bi bi-check-lg" viewBox="0 0 16 16" height="16" width="16"><path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/></svg> Added!';
  });
});
