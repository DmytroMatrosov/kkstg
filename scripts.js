/* Show Menu */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav_link");

/* Hide menu mobile */
const linesMobileMenu = document.querySelector(".menu");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When click on each nav_link, remove the show-menu class,
  navMenu.classList.remove("show-menu");
  // class "opened" on each line from the animated hamburger menu:
  linesMobileMenu.classList.remove("opened");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Set active link based on current URL on page load.
const setInitialActiveLink = () => {
  const currentUrl = window.location.href;
  navLink.forEach((link) => {
    const linkHref = link.href;
    if (currentUrl === linkHref) {
      link.classList.add("active");
    }
  });
};

setInitialActiveLink();

// Active links selection.
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav_menu a");
  const sections = document.querySelectorAll("section[id]");

  function removeActiveClasses() {
    links.forEach((link) => link.classList.remove("active-link"));
  }

  function addActiveClass(link) {
    removeActiveClasses();
    link.classList.add("active-link");
  }

  // Detect section in view.
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6, // Trigger when 60% of the section is visible.
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetId = entry.target.getAttribute("id");
        const activeLink = document.querySelector(
          `.nav_menu a[href="#${targetId}"]`
        );
        addActiveClass(activeLink);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => observer.observe(section));
});

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
  // When the scroll is higher than 500 viewport height, add the show-scroll class to the a tag with the scroll-top class.
  if (this.scrollY >= 500) scrollTop.classList.add("show-scroll");
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
    interval: 100,
  }
);

// Correction for scrolling to the height of the navbar.
function addTargetScrollMarginTop() {
  const style = document.createElement("style");
  const headerHeight = document.getElementById("header").offsetHeight;

  style.innerHTML = `
    :target {
      scroll-margin-top: ${headerHeight}px;
    }
  `;

  document.head.appendChild(style);
}

addTargetScrollMarginTop();
