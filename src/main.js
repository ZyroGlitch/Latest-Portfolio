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
