/* Alan Avila — portafolio
   Sin dependencias. Cada bloque comprueba que sus elementos existan, así que
   si falta uno la página sigue funcionando. */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Barra superior: se compacta al scrollear -------------------------- */

  const topbar = document.querySelector(".topbar");

  if (topbar) {
    const onScroll = () => topbar.classList.toggle("is-stuck", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --- Sección activa en la navegación ----------------------------------- */

  const links = [...document.querySelectorAll(".topbar__link")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = "#" + entry.target.id;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === id);
          });
        });
      },
      // La franja central evita que dos secciones se marquen a la vez.
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => spy.observe(section));
  }

  /* --- Aparición al hacer scroll ----------------------------------------- */

  const targets = [
    ...document.querySelectorAll(
      ".section__label, .section__title, .section__intro, .job, .project, .stack__group, .contact__links, .about__text, .about__facts"
    ),
  ];

  if (targets.length && !reduceMotion) {
    // Se usa un barrido en scroll y no IntersectionObserver: con un salto de
    // ancla o un scroll programático, el observer puede no entregar callback
    // y los elementos se quedan invisibles para siempre.
    document.documentElement.classList.add("reveal-ready");
    targets.forEach((target) => target.classList.add("reveal"));

    let pending = targets;
    let queued = false;

    const sweep = () => {
      queued = false;
      const limit = window.innerHeight * 0.92;

      pending = pending.filter((target) => {
        if (target.getBoundingClientRect().top > limit) return true;
        target.classList.add("is-visible");
        return false;
      });

      if (!pending.length) {
        window.removeEventListener("scroll", onMove);
        window.removeEventListener("resize", onMove);
      }
    };

    const onMove = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sweep);
    };

    window.addEventListener("scroll", onMove, { passive: true });
    window.addEventListener("resize", onMove, { passive: true });
    sweep();

    // Tras un salto de ancla el navegador reposiciona después del primer
    // frame, así que se vuelve a barrer.
    window.addEventListener("load", sweep);
    window.addEventListener("hashchange", onMove);
  }

  /* --- Correo armado en JS ----------------------------------------------- */

  // Partido para que los rastreadores de spam no lo encuentren en el HTML.
  const mailLink = document.getElementById("mailLink");
  const mailText = document.getElementById("mailText");

  if (mailLink && mailText) {
    const user = "g20160094";
    const domain = "gmail.com";
    mailLink.href = `mailto:${user}@${domain}`;
    mailText.textContent = `${user}@${domain}`;
  }
})();
