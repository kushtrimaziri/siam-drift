/* Shared navigation and demo form behaviour. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (toggle && nav) {
    const setMenuOpen = open => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("nav-open", open);
      document.body.classList.toggle("menu-open", open);
      nav.setAttribute("aria-hidden", String(!open));
    };

    setMenuOpen(false);
    toggle.addEventListener("click", () => {
      setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenuOpen(false)));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        toggle.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700 && toggle.getAttribute("aria-expanded") === "true") setMenuOpen(false);
    });
  }

  const toast = document.querySelector("#site-toast");
  const showToast = text => {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("toast-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("toast-visible"), 3600);
  };

  const newsletter = document.querySelector("#newsletter-form");
  newsletter?.addEventListener("submit", event => {
    event.preventDefault();
    if (!newsletter.reportValidity()) return;
    newsletter.querySelector(".form-message").textContent = "Thanks for testing the demo. No email has been collected or sent.";
    newsletter.reset();
  });

  const contact = document.querySelector("#contact-form");
  contact?.addEventListener("submit", event => {
    event.preventDefault();
    if (!contact.reportValidity()) return;
    contact.querySelector(".form-message").textContent = "Demo message validated. Nothing has been sent.";
    contact.reset();
  });

  document.querySelectorAll('a[href^="booking.html"]').forEach(link => {
    link.addEventListener("click", () => {
      /* Native link navigation is intentional; tour id is preserved in the URL. */
    });
  });

  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.classList.add("image-unavailable");
      img.alt = img.alt || "Image unavailable";
    });
  });

  // Reading progress and a discreet back-to-top control.
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.type = "button";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.title = "Back to top";
  backToTop.textContent = "↑";
  document.body.appendChild(backToTop);
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));

  let scrollTicking = false;
  const updateScrollUI = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const amount = maxScroll > 0 ? Math.min(100, Math.max(0, window.scrollY / maxScroll * 100)) : 0;
    progress.style.width = `${amount}%`;
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
    scrollTicking = false;
  };
  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScrollUI);
      scrollTicking = true;
    }
  }, { passive: true });
  window.addEventListener("resize", updateScrollUI);
  updateScrollUI();

  // Progressive enhancement: content stays visible if observers are unavailable.
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealTargets = document.querySelectorAll(
      ".section-heading, .tour-card, .story-band, .step-card, .quote-section blockquote, .newsletter-inner, .story-copy-layout, .values-grid article, .cta-inner, .detail-layout, .booking-layout, .contact-layout, .faq-layout, .canal-film-head, .canal-film-frame"
    );
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    revealTargets.forEach(target => {
      target.classList.add("reveal-on-scroll");
      revealObserver.observe(target);
    });
  }
});
