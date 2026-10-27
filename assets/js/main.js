/* Aaron Lysaght Walsh portfolio: small enhancements only.
   The site works without JavaScript; this adds:
   1. the hero load sequence   2. the mobile menu
   3. the screenshot lightbox  4. local-preview link fix (file://) */
(function () {
  "use strict";
  var doc = document.documentElement;
  var body = document.body;

  // 1. Hero load sequence (CSS handles reduced motion)
  doc.classList.add("js");
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { body.classList.add("is-loaded"); });
  });

  // 2. Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
    nav.classList.toggle("is-open", open);
    body.classList.toggle("nav-open", open);
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 761px)").addEventListener("change", function (m) {
      if (m.matches) setMenu(false);
    });
  }

  // 3. Lightbox for full-size screenshots (native <dialog>: Esc closes, focus is managed)
  var box = document.querySelector(".lightbox");
  if (box && typeof box.showModal === "function") {
    var boxImg = box.querySelector(".lightbox__img");
    var boxCaption = box.querySelector(".lightbox__caption");
    document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        boxImg.src = btn.getAttribute("data-lightbox");
        boxImg.alt = btn.getAttribute("data-lightbox-alt") || "";
        boxCaption.textContent = btn.getAttribute("data-lightbox-caption") || "";
        box.showModal();
      });
    });
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
    box.addEventListener("close", function () { boxImg.removeAttribute("src"); });
  } else {
    // Older browsers: open the image directly
    document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", function () { window.open(btn.getAttribute("data-lightbox"), "_blank"); });
    });
  }

  // 4. When previewing by double-clicking index.html, folder links need "index.html"
  if (location.protocol === "file:") {
    document.querySelectorAll("a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (/^(?![a-z]+:|#|\/\/).*\/$/i.test(href) || href === "./" || href === "../") {
        a.setAttribute("href", href + "index.html");
      }
    });
  }
})();
