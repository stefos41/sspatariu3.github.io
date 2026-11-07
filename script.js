/* Small progressive enhancements. The site works fully without this file. */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  /* Mobile menu (hamburger) */
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
      document.body.classList.toggle("nav-open", open);
    };
    var isOpen = function () { return toggle.getAttribute("aria-expanded") === "true"; };

    toggle.addEventListener("click", function () { setOpen(!isOpen()); });

    // Close after choosing a link
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    // Close with Escape and return focus to the button
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close when clicking outside the header
    document.addEventListener("click", function (e) {
      if (isOpen() && header && !header.contains(e.target)) setOpen(false);
    });

    // Reset if the window grows past the mobile breakpoint
    var wide = window.matchMedia("(min-width: 721px)");
    var onWide = function (e) { if (e.matches) setOpen(false); };
    if (wide.addEventListener) wide.addEventListener("change", onWide);
    else if (wide.addListener) wide.addListener(onWide);
  }

  /* Header shadow once the page is scrolled */
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
