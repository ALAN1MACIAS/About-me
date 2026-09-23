/* Alan Avila — portafolio
   Diccionario bilingüe.

   Los dos idiomas van juntos en cada clave a propósito: así es imposible
   cambiar un texto en español y olvidarse del inglés.

   El inglés de la experiencia y del "sobre mí" es el del CV, no una
   traducción — para que la web y el PDF digan exactamente lo mismo. */

const STRINGS = {
  "meta.title": {
    es: "Alan Avila — Full Stack Developer",
    en: "Alan Avila — Full Stack Developer",
  },

  "a11y.skip": { es: "Ir al contenido", en: "Skip to content" },

  /* --- Navegación ------------------------------------------------------- */

  "nav.about": { es: "Sobre mí", en: "About" },
  "nav.experience": { es: "Experiencia", en: "Experience" },
  "nav.work": { es: "Proyectos", en: "Projects" },
  "nav.stack": { es: "Stack", en: "Stack" },
  "nav.cta": { es: "Hablemos", en: "Let's talk" },

  /* --- Hero ------------------------------------------------------------- */

  "hero.eyebrow": {
    es: "Desarrollador de software · desde 2020",
    en: "Software developer · since 2020",
  },
  "hero.role": { es: "Full Stack Developer", en: "Full Stack Developer" },
  "hero.role2": { es: "Analista de base de datos", en: "Database Analyst" },
  "hero.pitch": {
    es: "Desarrollador de software enfocado en resolver problemas, aprender de forma continua y construir soluciones prácticas.",
    en: "Software developer focused on problem-solving, continuous learning, and building practical solutions.",
  },
  "hero.status": {
    es: "Disponible de inmediato",
    en: "Available immediately",
  },
  "hero.cta.work": { es: "Ver proyectos", en: "View projects" },
  "hero.cta.cv": { es: "Descargar CV", en: "Download CV" },
  "hero.photoAlt": { es: "Alan Avila", en: "Alan Avila" },

  "stats.years": { es: "Años de experiencia", en: "Years of experience" },
  "stats.companies": { es: "Empresas", en: "Companies" },
  "stats.certs": { es: "Certificaciones", en: "Certifications" },

  /* --- Sobre mí --------------------------------------------------------- */

  "about.label": { es: "Sobre mí", en: "About me" },
  "about.title": {
    es: "Full Stack, bases de datos y modernización de sistemas",
    en: "Full Stack, databases and system modernization",
  },
  "about.p1": {
    es: "Soy desarrollador Full Stack con seis años de experiencia, principalmente con Ruby on Rails. Construyo APIs, Web Services e integraciones entre sistemas, como facturación electrónica y métodos de pago.",
    en: "I am a Full Stack developer with six years of experience, mainly with Ruby on Rails. I build APIs, Web Services and integrations between systems, such as electronic invoicing and payment methods.",
  },
  "about.p2": {
    es: "También me dedico al análisis de bases de datos: consultas avanzadas, extracción de información y administración en PostgreSQL, MySQL y SQL Server.",
    en: "I also work on database analysis: advanced queries, data extraction and administration in PostgreSQL, MySQL and SQL Server.",
  },
  "about.p3": {
    es: "Lo que más disfruto es modernizar sistemas que ya existen: integrar nuevas tecnologías, mejorar procesos y mantenerlos al día.",
    en: "What I enjoy most is modernizing existing systems: integrating new technologies, improving processes and keeping them up to date.",
  },
  "about.education": { es: "Formación", en: "Education" },
  "about.university": {
    es: "Universidad Tecnológica de Manzanillo · 2016—2020 · Titulado",
    en: "Universidad Tecnológica de Manzanillo · 2016—2020 · Graduated",
  },
  "about.certs": { es: "Certificaciones", en: "Certifications" },
  "about.languages": { es: "Idiomas", en: "Languages" },
  "about.languagesValue": {
    es: "Español nativo · Inglés técnico",
    en: "Native Spanish · Technical English",
  },

  /* --- Experiencia ------------------------------------------------------ */

  "exp.label": { es: "Experiencia", en: "Experience" },
  "exp.title": { es: "Dónde he trabajado", en: "Where I have worked" },

  "exp.jetty.role": { es: "Full Stack Developer", en: "Full Stack Developer" },
  "exp.jetty.b1": {
    es: "Desarrollo backend y full stack principalmente con Ruby on Rails, manteniendo y añadiendo nuevas funcionalidades a distintos sistemas.",
    en: "Backend and Full Stack development, primarily with Ruby on Rails, maintaining and adding new features to different systems.",
  },
  "exp.jetty.b2": { es: "Corrección de errores.", en: "Bug fixing." },
  "exp.jetty.b3": {
    es: "Desarrollo e integración de APIs y Web Services.",
    en: "API and Web Services development and integration.",
  },
  "exp.jetty.b4": {
    es: "Integraciones de facturación electrónica y de métodos de pago.",
    en: "Electronic invoicing and payment method integrations.",
  },
  "exp.jetty.b5": {
    es: "Administración de bases de datos.",
    en: "Database administration.",
  },
  "exp.jetty.b6": {
    es: "Despliegues y mantenimiento de aplicaciones en Heroku.",
    en: "Deployments and Heroku application maintenance.",
  },
  "exp.jetty.b7": {
    es: "Análisis de requerimientos y resolución de problemas dentro de los proyectos.",
    en: "Requirements analysis and problem-solving within projects.",
  },

  "exp.ecto.role": { es: "Backend Developer", en: "Backend Developer" },
  "exp.ecto.b1": {
    es: "Desarrollo backend con Symfony, enfocado en crear y mantener APIs REST.",
    en: "Backend development with Symfony, mainly focused on creating and maintaining REST APIs.",
  },
  "exp.ecto.b2": {
    es: "Integración de servicios externos, incluido el inicio de sesión con Microsoft y Google.",
    en: "Integration of external services, including Microsoft and Google login.",
  },
  "exp.ecto.b3": {
    es: "Desarrollo de generadores automáticos de formularios para distintos procesos del sistema.",
    en: "Automated form generators for different processes within the system.",
  },

  "exp.corp.role": { es: "Full Stack Developer", en: "Full Stack Developer" },
  "exp.corp.b1": {
    es: "Desarrollo y mantenimiento de aplicaciones web y administración de servidores Linux.",
    en: "Developed and maintained web applications and managed Linux servers.",
  },
  "exp.corp.b2": {
    es: "Consultas avanzadas y extracción de datos contables con MySQL y SQL Server.",
    en: "Created advanced queries and extracted accounting data using MySQL and SQL Server.",
  },
  "exp.corp.b3": {
    es: "Sistemas internos en Laravel: gestión documental de Recursos Humanos, seguimiento de transporte y gestión aduanal con generación de PDF, y tickets de soporte.",
    en: "Internal Laravel systems: Human Resources document management, transportation tracking and customs management with PDF generation, and support tickets.",
  },
  "exp.corp.b4": {
    es: "Sistema de asignación de referencias por sucursal con MySQL y Firebird.",
    en: "Branch reference assignment system using MySQL and Firebird.",
  },

  /* --- Proyectos -------------------------------------------------------- */

  "work.label": { es: "Proyectos", en: "Projects" },
  "work.title": {
    es: "Proyectos en los que he trabajado",
    en: "Projects I have worked on",
  },
  "work.intro": {
    es: "Sitios y sistemas en los que he participado y que están en línea.",
    en: "Sites and systems I have worked on that are live.",
  },
  "work.visit": { es: "Visitar el sitio", en: "Visit the site" },

  "work.site": { es: "Sitio completo", en: "Full site" },
  "work.internal": { es: "Sistemas internos", en: "Internal systems" },

  "work.cancun": {
    es: "Sitio oficial del torneo de tenis ATP Challenger 125 celebrado en el Cancun Country Club. Información del torneo, jugadores, venta de boletos, noticias, galerías y sala de prensa. Proyecto freelance.",
    en: "Official site of the ATP Challenger 125 tennis tournament held at Cancun Country Club. Tournament information, players, ticket sales, news, galleries and press room. Freelance project.",
  },
  "work.heartcraft": {
    es: "Tienda en línea de flores, papelería creativa e invitaciones digitales. Catálogo por categorías y ocasiones, carrito con variantes, cotizaciones personalizadas y pedidos a medida. Proyecto freelance.",
    en: "Online store for flowers, creative stationery and digital invitations. Catalog by category and occasion, cart with variants, custom quotes and made-to-order requests. Freelance project.",
  },
  "work.rams": {
    es: "Sitio de una empresa de retiro de escombro y reciclaje en Fresno, California. Servicios, trabajos realizados y un formulario de orden de trabajo para pedir cotización sin compromiso. Proyecto freelance.",
    en: "Site for a junk removal and recycling company in Fresno, California. Services, completed work and a work-order form to request a no-obligation quote. Freelance project.",
  },
  "work.jetty": {
    es: "Plataforma de tecnología para transporte corporativo y movilidad urbana en México. Desarrollé y mantuve sus sistemas internos con Ruby on Rails entre octubre de 2021 y julio de 2026.",
    en: "Technology platform for corporate transport and urban mobility in Mexico. I developed and maintained their internal systems with Ruby on Rails between October 2021 and July 2026.",
  },
  "work.cie": {
    es: "Corporativo Internacional Especializado, empresa de logística internacional donde trabajé de diciembre de 2020 a enero de 2021. Desarrollé sus sistemas internos en Laravel: gestión documental de Recursos Humanos, seguimiento de transporte y gestión aduanal, tickets de soporte y asignación de referencias por sucursal.",
    en: "Corporativo Internacional Especializado, an international logistics company where I worked from December 2020 to January 2021. I developed their internal Laravel systems: Human Resources document management, transportation tracking and customs management, support tickets and branch reference assignment.",
  },
  "work.soca": {
    es: "Grupo de empresas de logística y agente aduanal. Como freelance, formé parte del equipo que desarrolló su plataforma de recinto fiscal y su sistema de almacén de contenedores.",
    en: "Group of logistics and customs brokerage companies. As a freelancer, I was part of the team that built their bonded warehouse platform and their container yard system.",
  },

  /* --- Stack ------------------------------------------------------------ */

  "stack.label": { es: "Stack", en: "Stack" },
  "stack.title": { es: "Con lo que trabajo", en: "What I work with" },
  "stack.frameworks": {
    es: "Frameworks y librerías",
    en: "Frameworks and libraries",
  },
  "stack.databases": { es: "Bases de datos", en: "Databases" },
  "stack.platforms": {
    es: "Herramientas y plataformas",
    en: "Tools and platforms",
  },
  "stack.testing": { es: "Pruebas", en: "Testing" },

  /* --- Contacto --------------------------------------------------------- */

  "contact.label": { es: "Contacto", en: "Contact" },
  "contact.title": { es: "Hablemos.", en: "Let's talk." },
  "contact.intro": {
    es: "Si lo que hago encaja con lo que buscas, escríbeme.",
    en: "If what I do fits what you are looking for, get in touch.",
  },
  "contact.availability": { es: "Disponibilidad", en: "Availability" },
  "contact.availabilityValue": { es: "De inmediato", en: "Immediately" },
  "contact.mode": { es: "Modalidad", en: "Work mode" },
  "contact.modeValue": { es: "Colima o remoto", en: "Colima or remote" },
  "contact.hiring": { es: "Contratación", en: "Open to" },
  "contact.hiringValue": { es: "Nómina o freelance (con factura)", en: "Full-time or freelance (can invoice)" },
  "contact.cv": { es: "Descargar PDF", en: "Download PDF" },
  "contact.email": { es: "Correo", en: "Email" },

  "footer.built": {
    es: "Hecho a mano con HTML, CSS y JavaScript",
    en: "Handmade with HTML, CSS and JavaScript",
  },
};

(() => {
  "use strict";

  const DEFAULT = "es";
  const KEY = "lang";

  const buttons = [...document.querySelectorAll(".lang__btn")];
  if (!buttons.length) return;

  const available = buttons.map((button) => button.dataset.lang);

  const apply = (lang) => {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const text = STRINGS[node.dataset.i18n]?.[lang];
      if (text) node.textContent = text;
    });

    // Formato "atributo:clave", p. ej. alt:hero.photoAlt
    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      node.dataset.i18nAttr.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":");
        const text = STRINGS[key.trim()]?.[lang];
        if (text) node.setAttribute(attr.trim(), text);
      });
    });

    const title = STRINGS["meta.title"]?.[lang];
    if (title) document.title = title;

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });

    try {
      localStorage.setItem(KEY, lang);
    } catch (error) {
      // Modo privado o almacenamiento bloqueado: el idioma no se recuerda,
      // pero la página funciona igual.
    }
  };

  let stored = null;
  try {
    stored = localStorage.getItem(KEY);
  } catch (error) {
    /* sin acceso a localStorage */
  }

  const fromBrowser = navigator.language?.slice(0, 2);
  const initial = available.includes(stored)
    ? stored
    : available.includes(fromBrowser)
      ? fromBrowser
      : DEFAULT;

  buttons.forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.lang));
  });

  // El HTML se escribe en español, así que solo hay que tocar el DOM si el
  // idioma inicial es otro.
  if (initial !== DEFAULT) apply(initial);
  else buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === DEFAULT)));
})();
