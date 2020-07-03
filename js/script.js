const hiddenMenu = document.querySelector(".show-menu");
const barsBtn = document.querySelector(".menu-bars");

// Show Hidden Navigation Bar At Mobile Screen
barsBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("hide");
});

const menuBars = document.querySelector(".menu-bars");

menuBars.addEventListener("click", () => {
  menuBars.classList.toggle("move");
  menuBars.classList.toggle("rotate");
});
