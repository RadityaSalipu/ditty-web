// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger ditekan
document.querySelector("#hamburger-menu").onclick = function () {
  navbarNav.classList.toggle("active");
};

// klik untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
