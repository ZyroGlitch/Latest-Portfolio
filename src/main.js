const navbar = document.getElementById("navbar");
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;
const video = document.getElementById("bgVideo");

/* =========================
   FORCE NIGHT MODE ON LOAD
========================= */
window.addEventListener("DOMContentLoaded", () => {
  html.setAttribute("data-theme", "night");
  toggle.checked = true;

  video.play().catch(() => {});

  // Cache navbar height for layout spacing
  const setNavbarHeight = () => {
    if (navbar) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navbar.offsetHeight}px`
      );
    }
  };
  setNavbarHeight();
  window.addEventListener("resize", setNavbarHeight);

  // Close drawer when clicking links or the X button
  const drawerToggle = document.getElementById("my-drawer-2");
  const drawerLinks = document.querySelectorAll(".drawer-side a");
  const drawerClose = document.getElementById("drawer-close");

  const closeDrawer = () => {
    if (drawerToggle) drawerToggle.checked = false;
  };

  drawerLinks.forEach((link) => link.addEventListener("click", closeDrawer));
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
});

/* =========================
   THEME SWITCHING
========================= */
function applyTheme(isDark) {
  if (isDark) {
    html.setAttribute("data-theme", "night");
    video.play().catch(() => {});
  } else {
    html.setAttribute("data-theme", "winter");
    video.pause();
    video.currentTime = 0;
  }
}

toggle.addEventListener("change", () => {
  applyTheme(toggle.checked);
});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
window.addEventListener("scroll", () => {
  navbar.setAttribute(
    "data-scrolled",
    window.scrollY > 50 ? "true" : "false"
  );
});


lucide.replace();