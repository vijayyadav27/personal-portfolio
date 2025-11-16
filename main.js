
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__list a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__list a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
});


const animatedSections = document.querySelectorAll(".section");

function animateSections() {
  const triggerBottom = window.innerHeight / 1.2;

  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateSections);
animateSections();

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});
