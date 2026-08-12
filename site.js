(() => {
  "use strict";
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });

  document.addEventListener("click", (e) => {
    if (!nav || !toggle || window.innerWidth > 980) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();