document.addEventListener("DOMContentLoaded", () => {
      const menu = document.getElementById("menu");
      const closeMenu = document.getElementById("closeMenu");
      const mobileMenu = document.querySelector("div.mobile-menu");
      // Show mobile menu
      menu.addEventListener("click", () => {
        mobileMenu.style.display = "flex";
      });
      closeMenu.addEventListener("click", () => {
        mobileMenu.style.display = "none";
      });
})