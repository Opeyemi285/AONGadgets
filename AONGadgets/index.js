const menu = document.getElementById('menu')
const closeMenu = document.getElementById('closeMenu')
const mobileMenu = document.querySelector('div.mobile-menu')
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

// Initialize the item count
let cartCount = 0;
let favCount = 0;

menu.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
})
closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
})

scrollLeft.addEventListener("click", () => {
    scrollContainer.scrollBy({
    left: -scrollItemMargin,
    behavior: "smooth"
    });
});
// Loop through each button and add a click event listener
favButtons.forEach(button => {
    button.addEventListener('click', () => {
        favCounter.style.display = 'inline';

        // Only proceed if the button is not already disabled
        if (!button.disabled) {
        // Change the SVG fill
        button.setAttribute('fill', '#481379');

        // Increment the item count
        favCount++;

        // Update the counter display
        favCounter.textContent = favCount;

        // Disable the button to prevent multiple clicks
        button.disabled = true;
        }
    });
    });
// Loop through each button and add a click event listener
addToCartBtns.forEach(button => {
    button.addEventListener('click', () => {
    cartCounter.style.display = 'inline'; // Show the cart counter when an item is added
    // Only proceed if the button is not already disabled
    if (!button.disabled) {
        // Increment the item count
        cartCount++;

        // Update the counter display
        cartCounter.textContent = cartCount;

        // Disable the button to prevent multiple clicks
        button.disabled = true;
    }
    });
});

scrollRight.addEventListener("click", () => {
    scrollContainer.scrollBy({
    left: scrollItemMargin,
    behavior: "smooth"
    });
});