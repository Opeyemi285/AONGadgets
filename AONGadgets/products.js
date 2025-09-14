document.addEventListener("DOMContentLoaded", () => {
      const menu = document.getElementById("menu");
      const closeMenu = document.getElementById("closeMenu");
      const mobileMenu = document.querySelector("div.mobile-menu");
      const scrollLeft = document.querySelector(".left");
      const scrollRight = document.querySelector(".right");
      const scrollContainer = document.querySelector(".categories-list");
      const scrollItem = document.querySelector(".list");
      const scrollItemStyle = window.getComputedStyle(scrollItem);
      const scrollItemMargin = scrollItem.offsetWidth + parseInt(scrollItemStyle.marginRight);
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