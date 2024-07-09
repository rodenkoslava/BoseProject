document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("hamburger");
  const navLinks = document.getElementById("menu__list");
  const closeIcon = document.getElementById("closeMenu");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (event) => {
    if (
      !burgerMenu.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {
      navLinks.classList.remove("active");
    }
  });

  // Закрытие меню при нажатии на кнопку ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navLinks.classList.remove("active");
    }
  });
});
