document.addEventListener("DOMContentLoaded", () => {
      const menu = document.getElementById("menu");
      const closeMenu = document.getElementById("closeMenu");
      const mobileMenu = document.querySelector("div.mobile-menu");
      const scrollLeft = document.querySelector(".left");
      const scrollRight = document.querySelector(".right");
      // Show mobile menu
      menu.addEventListener("click", () => {
        mobileMenu.style.display = "flex";
      });
      closeMenu.addEventListener("click", () => {
        mobileMenu.style.display = "none";
      });

      scrollRight.addEventListener("click", () => {
      scrollContainer.scrollBy({
      left: scrollItemMargin,
      behavior: "smooth"
      });
      })
      scrollLeft.addEventListener("click", () => {
      scrollContainer.scrollBy({
      left: -scrollItemMargin,
      behavior: "smooth"
      });
});

});