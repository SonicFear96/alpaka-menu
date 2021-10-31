const navMain = document.querySelector(".header__nav");
const navToggle = document.querySelector(".nav__toggle");

const usedSubMenu = document.querySelector(".used-submenu");
const usedSubMenuSub = document.querySelector(".used-sub-submenu");
const firstSubMenu = document.querySelector(".nav__sub-menu");
const secondSubMenu = document.querySelector(".sub-menu__sub");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("display-toggle");
});

usedSubMenu.addEventListener("click", function () {
  if (document.documentElement.clientWidth < 1023) {
    console.log("произошёл клик");
    firstSubMenu.classList.toggle("active");
    event.stopPropagation();
  }
});

usedSubMenuSub.addEventListener("click", function () {
  if (document.documentElement.clientWidth < 1023) {
    console.log("произошёл клик подподменю");
    secondSubMenu.classList.toggle("active");
    event.stopPropagation();
  }
});
