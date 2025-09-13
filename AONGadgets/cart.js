document.addEventListener("DOMContentLoaded", () => {
      const menu = document.getElementById("menu");
      const closeMenu = document.getElementById("closeMenu");
      const mobileMenu = document.querySelector("div.mobile-menu");
      const cartBody = document.getElementById("cart-body");
      const totalPriceEl = document.querySelector(".price-para");

      // Cart data as an array of objects
      let cartItems = [
        {
          id: 1,
          name: "IPhone 11 Pro",
          price: 500000,
          quantity: 1,
          imgSrc: "/images/iphone13.svg",
          alt: "iPhone 13",
        },
        {
          id: 2,
          name: "Watch Series 2",
          price: 60000,
          quantity: 1,
          imgSrc: "/images/smartwatch.svg",
          alt: "Watch Series 2",
        },
        // Add new products here as objects
        // {
        //   id: 3,
        //   name: "New Product",
        //   price: 12345,
        //   quantity: 1,
        //   imgSrc: "/images/new-product.svg",
        //   alt: "New Product",
        // },
      ];

      // Show mobile menu
      menu.addEventListener("click", () => {
        mobileMenu.style.display = "flex";
      });
      closeMenu.addEventListener("click", () => {
        mobileMenu.style.display = "none";
      });

      // Format price helper
      const formatPrice = (price) => `₦${price.toLocaleString()}`;

      // Render cart items in the table
      const renderCart = () => {
        cartBody.innerHTML = ""; // Clear existing rows

        cartItems.forEach((item) => {
          const subtotal = item.price * item.quantity;

          const tr = document.createElement("tr");
          tr.classList.add("product");
          tr.dataset.id = item.id;

          tr.innerHTML = `
            <td class="d-flex align-items-center">
              <div><img height="90px" src="${item.imgSrc}" alt="${item.alt}" /></div>
              <div class="product-info">
                <p class="item-name">${item.name}</p>
                <p class="price">${formatPrice(item.price)}</p>
              </div>
            </td>
            <td style="white-space: nowrap;">
              <button class="minus">-</button>
              <input class="quantity-input" style="width: 30px; text-align: center;" value="${item.quantity}" min="1" readonly />
              <button class="plus">+</button>
            </td>
            <td class="subtotal" style="white-space: nowrap;">${formatPrice(subtotal)}</td>
            <td>
              <button class="cancel-button"><i class="bi bi-x-lg"></i></button>
            </td>
          `;

          cartBody.appendChild(tr);

          // Add event listeners for buttons inside this row
          const minusBtn = tr.querySelector(".minus");
          const plusBtn = tr.querySelector(".plus");
          const quantityInput = tr.querySelector(".quantity-input");
          const subtotalEl = tr.querySelector(".subtotal");
          const cancelBtn = tr.querySelector(".cancel-button");

          // Update subtotal and total
          const updateSubtotal = () => {
            const newSubtotal = item.price * item.quantity;
            subtotalEl.innerText = formatPrice(newSubtotal);
            updateCartTotal();
          };

          minusBtn.addEventListener("click", () => {
            if (item.quantity > 1) {
              item.quantity--;
              quantityInput.value = item.quantity;
              updateSubtotal();
            }
          });

          plusBtn.addEventListener("click", () => {
            item.quantity++;
            quantityInput.value = item.quantity;
            updateSubtotal();
          });

          cancelBtn.addEventListener("click", () => {
            // Remove item from cartItems array
            cartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
            renderCart();
            updateCartTotal();
          });
        });
      };

      // Calculate and update total price
      const updateCartTotal = () => {
        const total = cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        totalPriceEl.innerText = formatPrice(total);
      };

      // Initial render and total calculation
      renderCart();
      updateCartTotal();
    });