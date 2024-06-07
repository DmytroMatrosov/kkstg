/* Show Menu */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist.
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav_menu class.
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* Hide menu mobile */
const navLink = document.querySelectorAll(".nav_link");
const linesMobileMenu = document.querySelector(".menu");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When click on each nav_link, remove the show-menu class,
  navMenu.classList.remove("show-menu");
  // class "opened" on each line from the animated hamburger menu:
  linesMobileMenu.classList.remove("opened");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Scroll sections active link */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 64;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* Header background change */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag.
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* Show scroll top */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class.
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");

  //Remove navMenu when scroll to top:
  scrollTop.addEventListener("click", linkAction);
}
window.addEventListener("scroll", scrollTop);

/* Scroll reveal animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true,
});

sr.reveal(
  `.home_data, .home_img,
          .team_content,
          .arena_data, .arena_img,
          .shop_content, .menu_content,
          .partners-container, .footer_content`,
  {
    interval: 50,
  }
);
