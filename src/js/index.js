const $btnOpen = document.querySelector(".btn-open");
const $btnClose = document.querySelector(".btn-close");
const $navLinks = document.querySelector(".menu-ul");

$btnOpen.addEventListener("click", () => {
  $navLinks.classList.toggle("mobile-menu");
});

$btnClose.addEventListener("click", () => {
  $navLinks.classList.toggle("mobile-menu");
});
