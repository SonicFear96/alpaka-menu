const navMain = document.querySelector(".header__nav");
const navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("display-toggle");
});

const usedSubMenu = document.querySelector(".used-submenu");
const firstSubMenu = document.querySelector(".nav__sub-menu");
