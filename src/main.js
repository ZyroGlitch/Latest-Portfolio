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


lucide.createIcons();

/* =========================
   TYPING ANIMATION
========================= */
function startTyping() {
  const typingEl = document.getElementById("typingText");
  if (!typingEl) return;

  const words = ["Aspiring Azure Data Engineer", "Aspiring Laravel Developer"];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseAfterType = 2000;
  const pauseAfterDelete = 500;

  function tick() {
    const word = words[wordIndex];

    if (!isDeleting) {
      charIndex++;
      typingEl.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        isDeleting = true;
        setTimeout(tick, pauseAfterType);
        return;
      }
      setTimeout(tick, typeSpeed);
      return;
    }

    charIndex--;
    typingEl.textContent = word.slice(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(tick, pauseAfterDelete);
      return;
    }

    setTimeout(tick, deleteSpeed);
  }

  tick();
}

// Start typing animation when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startTyping);
} else {
  startTyping();
}

