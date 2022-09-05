const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const navSlide = () => {
  // toggle burger menu
  burger.addEventListener("click", () => {
    burgerMenu.classList.toggle("nav-active");

    // keyframes for nav links
    navLinks.forEach((links, index) => {
      if (links.style.animation) {
        links.style.animation = "";
      } else {
        links.style.animation = `nav-links-fade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //  burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
