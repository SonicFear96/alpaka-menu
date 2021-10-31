const navMain = document.querySelector(".header__nav");
const navToggle = document.querySelector(".nav__toggle");
const usedSubMenu = document.querySelector(".used-submenu");
const usedSubMenuSub = document.querySelector(".used-sub-submenu");
const firstSubMenu = document.querySelector(".nav__sub-menu");
const secondSubMenu = document.querySelector(".sub-menu__sub");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("display-toggle");
});
/*MOBILE AND TABLET */
usedSubMenu.addEventListener("click", function () {
  if (document.documentElement.clientWidth < 1023) {
    firstSubMenu.classList.toggle("active");
    event.stopPropagation();
  }
});
usedSubMenuSub.addEventListener("click", function () {
  if (document.documentElement.clientWidth < 1023) {
    secondSubMenu.classList.toggle("active");
    event.stopPropagation();
  }
});
/*DESKTOP */

usedSubMenu
  .querySelector(".menu-link")
  .addEventListener("mouseenter", function () {
    if (document.documentElement.clientWidth > 1023) {
      console.log("мышка навелась");
      firstSubMenu.classList.add("active");
      usedSubMenu.classList.add("active");
    }
  });

usedSubMenu.addEventListener("mouseleave", function () {
  if (document.documentElement.clientWidth > 1023) {
    console.log("мышка навелась");
    firstSubMenu.classList.remove("active");
    usedSubMenu.classList.add("active");
  }
});

usedSubMenuSub
  .querySelector(".menu-link")
  .addEventListener("mouseenter", function () {
    if (document.documentElement.clientWidth > 1023) {
      console.log("мышка навелась");
      secondSubMenu.classList.add("active");
      usedSubMenu.classList.add("active");
    }
  });

usedSubMenuSub.addEventListener("mouseleave", function () {
  if (document.documentElement.clientWidth > 1023) {
    console.log("мышка навелась");
    secondSubMenu.classList.remove("active");
    usedSubMenu.classList.add("active");
  }
});
