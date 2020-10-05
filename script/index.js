const menuButton = document.querySelector(".menu-btn");
const burger = document.querySelector(".burger");
const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".categories-menu");
const menuItems = document.querySelectorAll(".categories-item");
const MOBILE = 768;

function openMenu() {
  menuButton.classList.toggle("open");
  burger.classList.toggle("open");

  const dropdownHeight = dropdown.getBoundingClientRect().height;
  const menuHeight = menu.getBoundingClientRect().height;

  if (dropdownHeight === 0) {
    dropdown.style.height = `${menuHeight}px`;
  } else {
    dropdown.style.height = 0;
  }
}

function openSidebar() {
  menuButton.classList.toggle("open");
  burger.classList.toggle("open");
  dropdown.classList.toggle("slide-out");
}

function closeSidebar(e) {
  if (dropdown.classList.contains("slide-out") && e.key === "Escape") {
    menuButton.classList.remove("open");
    burger.classList.remove("open");
    dropdown.classList.remove("slide-out");
  }
}

function openSubCategory(e) {
  e.currentTarget.classList.toggle("open");
}

if (window.innerWidth < MOBILE) {
  menuButton.addEventListener("click", openMenu);
} else {
  menuButton.addEventListener("click", openSidebar);
}

menuItems.forEach((item) => {
  item.addEventListener("click", openSubCategory);
});

window.addEventListener("keyup", closeSidebar);
