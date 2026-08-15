(() => {
  const LANGUAGE_STORAGE_KEY = "af-site-language";
  const header = document.querySelector(".site-header");
  const progressBar = document.getElementById("scrollProgress");
  const navToggle = document.getElementById("navToggle");
  const navShell = document.getElementById("navShell");
  const navMenu = document.getElementById("navMenu");
  const navLinks = Array.from(document.querySelectorAll(".nav-menu a[href^='#']"));
  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const meterItems = Array.from(document.querySelectorAll(".meter-item[data-pct]"));
  const languageButtons = Array.from(document.querySelectorAll(".language-btn[data-lang]"));
  const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const htmlNodes = Array.from(document.querySelectorAll("[data-i18n-html]"));
  const mobileNavQuery = window.matchMedia("(max-width: 920px)");
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const metaDescription = document.getElementById("metaDescription");
  const ogTitle = document.getElementById("ogTitle");
  const ogDescription = document.getElementById("ogDescription");
  const ogImageAlt = document.getElementById("ogImageAlt");
  const ogLocale = document.getElementById("ogLocale");
  const twitterTitle = document.getElementById("twitterTitle");
  const twitterDescription = document.getElementById("twitterDescription");

  const defaultText = new Map(textNodes.map((node) => [node, node.textContent.trim()]));
  const defaultHtml = new Map(htmlNodes.map((node) => [node, node.innerHTML.trim()]));
  const defaultMeta = {
    title: document.title,
    description: metaDescription ? metaDescription.content : "",
    ogTitle: ogTitle ? ogTitle.content : "",
    ogDescription: ogDescription ? ogDescription.content : "",
    ogImageAlt: ogImageAlt ? ogImageAlt.content : "",
    ogLocale: ogLocale ? ogLocale.content : "en_US",
    twitterTitle: twitterTitle ? twitterTitle.content : "",
    twitterDescription: twitterDescription ? twitterDescription.content : "",
  };

  const attributeTargets = {
    html: document.documentElement,
    mainNavigation: document.getElementById("mainNavigation"),
    brandLink: document.getElementById("brandLink"),
    navToggle,
    languageSwitch: document.getElementById("languageSwitch"),
    heroLinks: document.getElementById("heroLinks"),
    footerNav: document.getElementById("footerNav"),
    profilePhoto: document.querySelector(".profile-photo"),
  };

  const translations = {
    pt: {
      "skip.link": "Ir para o conteúdo",
      "nav.about": "Sobre",
      "nav.projects": "Projetos",
      "nav.skills": "Competências",
      "nav.timeline": "Trajetória",
      "nav.research": "Pesquisa",
      "nav.publications": "Publicações",
      "nav.teaching": "Docência",
      "nav.contact": "Contato",
      "hero.eyebrow": "Dos Sinais à Inteligência",
      "hero.badge": "Doutorando Unicamp • Dados, ML, sinais e IoT",
      "hero.lead":
        "Doutorando na Unicamp com atuação em dados e analytics, machine learning, cloud, processamento de sinais e IoT. Desenvolvo pipelines end-to-end, modelos preditivos e sistemas aplicados a risco, fraude, churn e detecção de anomalias.",
      "hero.cta.projects": "Ver Projetos",
      "hero.cta.cv": "Download CV",
      "stats.1": "Impact Factor MSSP",
      "stats.2": "Registros processados",
      "stats.3": "Apps AWS em produção",
      "stats.4": "Anos em pesquisa",
      "hero.summary.kicker": "Resumo em 60s",
      "hero.summary.body":
        "Doutorando em fase final com experiência em dados e analytics, machine learning, validação estatística e implementação com FastAPI, Oracle e AWS.",
      "about.title": "Sobre",
      "about.intro": "Pesquisa aplicada, modelagem orientada a dados e implantação técnica em contextos reais.",
      "about.body.1":
        "Sou cientista de dados e pesquisador, com experiência em todo o ciclo de vida de modelos, da preparação de dados à implementação e monitoramento. Minha atuação combina pesquisa aplicada e execução técnica em projetos de IoT, saúde, machine learning e sistemas preditivos.",
      "about.body.2":
        "Atuo também como professor nas disciplinas de Programação Web, POO (Java), Estrutura de Dados I &amp; II, Bancos de Dados (Oracle SQL), Dispositivos Móveis e Linguagens Formais e Autômatos — detalhes na seção <a class=\"inline-link\" href=\"#docencia\">Docência</a>.",
      "about.focus.title": "Foco atual",
      "about.focus.1": "Dados e Analytics com foco em qualidade, modelagem e inferência",
      "about.focus.2": "Machine Learning aplicado a classes desbalanceadas e detecção de anomalias",
      "about.focus.3": "Integração de IoT, cloud, APIs e pipelines de dados",
      "about.summary.1.label": "Atuação",
      "about.summary.1.body": "Dados e Analytics · ML · Cloud · IoT",
      "about.summary.2.label": "Laboratório",
      "about.summary.3.label": "Interesse",
      "about.summary.3.body": "Modelos preditivos, deploy e projetos orientados a dados",
      "about.bridge.label": "Da sala de aula à produção",
      "about.bridge.body":
        "As mesmas tecnologias que leciono são as que uso em projetos reais: <strong>Oracle SQL</strong> com 231 mil registros no Oracle ADB Cloud, <strong>Java</strong> para backends REST, <strong>estruturas de dados</strong> aplicadas à feature engineering de ML e <strong>web APIs</strong> integrando modelos em produção.",
      "projects.title": "Projetos",
      "projects.intro":
        "Projetos aplicados com pipelines em produção, interfaces próprias e pesquisa conectada a sistemas reais.",
      "status.live": "Implementado",
      "status.prep": "Em preparação",
      "projects.iot.body":
        "Detecção de anomalias em dados inerciais para manutenção preditiva com IoT. Pipeline completo do sensor ao dashboard em produção.",
      "projects.hyperten.body":
        "Modelos de aprendizado de máquina para predição e estratificação de risco de hipertensão. Interface clínica de inferência em produção.",
      "projects.hyperten.link1": "Projeto",
      "projects.hyperten.link2": "Inferência clínica",
      "projects.hyperten.tag": "Validação estatística",
      "projects.bandgap.body":
        "Estimativa de band gaps em metamateriais acústicos com regressão e features geométricas.",
      "projects.bandgap.tag1": "Regressão",
      "projects.bandgap.tag2": "Vibroacústica",
      "projects.pipeline.body":
        "Detecção de vazamentos em dutos a partir de sinais de sensores e modelos preditivos.",
      "projects.pipeline.tag1": "Sinais",
      "skills.title": "Competências",
      "skills.intro":
        "Base técnica distribuída entre modelagem, dados, deploy, infraestrutura e engenharia aplicada.",
      "skills.core.title": "Forças principais",
      "level.advanced": "Avançado",
      "level.proficient": "Proficiente",
      "skills.db.label": "SQL &amp; Bancos de Dados",
      "skills.vibro.label": "Vibroacústica &amp; Metamateriais",
      "skills.iot.label": "IoT &amp; Sistemas Embarcados",
      "skills.card.ml":
        "Scikit-learn, TensorFlow, Keras, PyTorch, Feature Engineering, GridSearch, RandomSearch e Cross-validation.",
      "skills.card.ds": "Pandas, NumPy, SciPy, Statsmodels, Matplotlib, Seaborn, Plotly e Dash.",
      "skills.card.nlp": "CNNs, RNNs, NLTK, spaCy, Hugging Face e Transformers.",
      "skills.card.de":
        "ETL, Apache Airflow, Hadoop, Spark, MySQL, PostgreSQL, MongoDB, Cassandra, Redshift e BigQuery.",
      "skills.card.ops": "Docker, MLflow, FastAPI, AWS e GCP.",
      "skills.card.programming.title": "Programação",
      "skills.card.programming.body": "Python, R, Java, Bash, SQL, Matlab, JavaScript, HTML, CSS e PHP.",
      "timeline.title": "Trajetória",
      "timeline.intro": "Linha do tempo entre pesquisa, deploy, docência e publicações.",
      "timeline.tag.publication": "Publicação",
      "timeline.tag.research": "Pesquisa",
      "timeline.tag.deploy": "Deploy",
      "timeline.tag.project": "Projeto",
      "timeline.tag.teaching": "Docência",
      "timeline.2017.body":
        "Apresentação do paper <em>Semi-Analytical Formulation for Sound Transmission Loss</em> na International Conference on Structural Engineering Dynamics.",
      "timeline.2018.title": "Doutorando — Unicamp / DMC",
      "timeline.2018.body":
        "Início do doutorado no Departamento de Mecânica Computacional com foco em metamateriais acústicos e machine learning aplicado.",
      "timeline.2021.title": "Apps Shiny em produção",
      "timeline.2021.body":
        "Deploy de aplicações interativas para ensino de vibração livre e forçada no shinyapps.io, em uso ativo desde então.",
      "timeline.2024.body":
        "Sistema de detecção de anomalias em dados inerciais com pipeline completo: edge computing, AWS IoT, dashboard e monitoramento.",
      "timeline.2025a.title": "Professor Adjunto — Cruzeiro do Sul Educacional",
      "timeline.2025a.body":
        "Docência nas disciplinas de POO (Java), Programação Web, Estrutura de Dados I &amp; II, Bancos de Dados, Dispositivos Móveis e Linguagens Formais e Autômatos — conectando teoria a projetos aplicados em produção.",
      "timeline.2025b.title": "Hyperten ML — Predição de Hipertensão",
      "timeline.2025b.body":
        "Modelos preditivos para estratificação de risco cardiovascular com interface clínica de inferência em produção.",
      "timeline.2026.title": "Publicação — MSSP (ScienceDirect)",
      "timeline.2026.body":
        "Artigo <em>Bandgap optimization in locally resonant metamaterial plates</em> publicado na Mechanical Systems and Signal Processing — Open Access.",
      "research.title": "Pesquisa",
      "research.intro":
        "Linhas que conectam vibroacústica, validação estatística e sistemas inteligentes em produção.",
      "research.card.1.title": "Vibração e acústica aplicada",
      "research.card.1.body":
        "Modelagem orientada a dados para caracterização de sistemas, falhas e dispersão de energia.",
      "research.card.2.title": "Machine Learning interpretável",
      "research.card.2.body":
        "Modelos com explicabilidade e validação estatística para decisões confiáveis.",
      "research.card.3.title": "Sistemas inteligentes em produção",
      "research.card.3.body":
        "Integração entre modelagem, MLOps e monitoramento contínuo de desempenho.",
      "publications.title": "Publicações",
      "publications.intro":
        "Artigos e repositórios ligados à sua produção em vibroacústica, metamateriais e processamento de sinais.",
      "publications.featured.subtitle": "Mechanical Systems and Signal Processing · Open Access · 2026",
      "publications.featured.body":
        "Estudo comparativo de cinco geometrias de rede para atenuação de ondas em baixa frequência.",
      "publications.featured.note":
        "Revista interdisciplinar em Engenharia Mecânica, Aeroespacial e Civil — top-tier em processamento de sinais e dinâmica estrutural.",
      "publications.link": "Acessar publicação",
      "publications.paper2.body":
        "ResearchGate — análise de transmissão sonora em placa espessa com ressonadores.",
      "publications.paper2.note":
        "Apresentado no ICEDyn 2017 — International Conference on Structural Engineering Dynamics, 3–5 de junho de 2017, Ericeira, Portugal. <a class=\"inline-link\" href=\"https://www.icedyn.net/previous-editions\" target=\"_blank\" rel=\"noopener\">Página do evento</a>",
      "publications.paper3.body":
        "ResearchGate — band gaps em placas metamateriais elásticas multi-ressonantes.",
      "teaching.title": "Docência",
      "teaching.intro":
        "Disciplinas com conexão direta entre base teórica, aplicações web, bancos de dados e sistemas em produção.",
      "teaching.card.1.title": "Programação Orientada a Objetos",
      "teaching.card.1.body":
        "Fundamentos sólidos de OOP com Java: classes, encapsulamento, herança, polimorfismo, exceções e APIs essenciais — alinhado à certificação Oracle.",
      "teaching.bridge.label": "Aplicação real",
      "teaching.card.1.bridge":
        "Backend bancário · Microserviços REST · Sistemas transacionais de alta disponibilidade",
      "teaching.portal": "Portal do curso",
      "teaching.card.2.title": "Banco de Dados &amp; SQL",
      "teaching.card.2.body":
        "Modelo relacional, DDL/DML, joins, subqueries, funções analíticas, views e índices em Oracle SQL — da modelagem ao deploy em nuvem.",
      "teaching.card.2.bridge":
        "Oracle ADB Cloud com 231 mil registros · Queries analíticas sobre dados de sensores IoT em tempo real",
      "teaching.card.2.tag": "Analítico",
      "teaching.oracle": "Certificação Oracle",
      "teaching.card.3.title": "Programação Web",
      "teaching.card.3.track": "Front end · Back end · APIs",
      "teaching.card.3.body":
        "HTML, CSS, JavaScript e PHP para aplicações full-stack. Boas práticas, responsividade, consumo de APIs REST e deploy.",
      "teaching.card.3.bridge":
        "Dashboard IoT em produção · Inferência de ML no navegador (classifier.js) · Interfaces clínicas com FastAPI",
      "teaching.card.3.tag": "Deploy",
      "teaching.card.4.title": "Estrutura de Dados I &amp; II",
      "teaching.card.4.track": "Algoritmos · Complexidade",
      "teaching.card.4.body":
        "Listas, filas, pilhas, árvores binárias, AVL, busca binária e algoritmos de ordenação — com foco em análise de complexidade e escolha da estrutura correta para cada problema.",
      "teaching.card.4.bridge":
        "Feature engineering eficiente · Indexação de dados em escala · Base teórica para algoritmos de ML",
      "teaching.card.4.tag1": "Algoritmos",
      "teaching.card.4.tag2": "Complexidade O(n)",
      "teaching.card.4.tag3": "Otimização",
      "teaching.card.5.title": "Programação para Dispositivos Móveis",
      "teaching.card.5.track": "Android · Kotlin &amp; Java",
      "teaching.card.5.body":
        "Desenvolvimento Android nativo: da interface, layouts e activities até persistência, conectividade e sensores — SQLite/Room, REST/JSON, threads, serviços, notificações e localização, com módulo de encerramento em Kotlin.",
      "teaching.card.5.bridge":
        "Pipelines de dados de sensores IoT · Consumo de APIs REST em clientes mobile · Persistência de dados on-device (SQLite/Room)",
      "teaching.card.5.tag": "Sensores &amp; APIs",
      "teaching.card.6.title": "Linguagens Formais e Autômatos",
      "teaching.card.6.track": "Teoria da Computação · Compiladores",
      "teaching.card.6.body":
        "Gramáticas formais e expressões regulares até autômatos finitos (AFD/AFN), autômatos com pilha e máquinas de Turing, chegando ao front-end de compiladores: análise léxica, análise sintática e tabela de símbolos.",
      "teaching.card.6.bridge":
        "Parsing baseado em regex em pipelines ETL · Tokenização para pré-processamento de NLP · Base teórica para compiladores e ferramentas de DSL",
      "teaching.card.6.tag": "Gramáticas Formais",
      "contact.title": "Contato",
      "contact.intro":
        "Aberto a colaborações acadêmicas, pesquisa aplicada e consultorias em data science e machine learning.",
      "contact.kicker": "Vamos conversar",
      "contact.body":
        "O contato foi simplificado para um formato direto e confiável. Para propostas objetivas, colaboração ou mentoria técnica, o caminho mais rápido é LinkedIn ou e-mail.",
      "contact.tag.1": "Colaborações acadêmicas",
      "contact.tag.2": "Pesquisa aplicada",
      "contact.tag.3": "Consultoria em data science",
      "contact.tag.4": "Mentoria técnica",
      "contact.email": "E-mail",
      "contact.meta.1.label": "E-mail",
      "contact.meta.3.link": "Perfil acadêmico",
      "contact.meta.4.label": "Resposta",
      "contact.meta.4.body": "Respondo mais rápido pelo LinkedIn.",
      "footer.tagline": "Data Science · Processamento de Sinais · Machine Learning · Sistemas IoT",
      "footer.copy": "© 2026 Anderson H. R. Ferreira. Todos os direitos reservados.",
    },
  };

  const attributeTranslations = {
    en: {
      htmlLang: "en",
      mainNavigation: { "aria-label": "Main navigation" },
      brandLink: { "aria-label": "Go to top" },
      navToggle: { "aria-label": "Open menu" },
      languageSwitch: { "aria-label": "Language selector" },
      heroLinks: { "aria-label": "Academic and professional links" },
      footerNav: { "aria-label": "Quick links" },
      profilePhoto: { alt: "Portrait of Anderson H. R. Ferreira" },
    },
    pt: {
      htmlLang: "pt-BR",
      mainNavigation: { "aria-label": "Navegação principal" },
      brandLink: { "aria-label": "Ir para o topo" },
      navToggle: { "aria-label": "Abrir menu" },
      languageSwitch: { "aria-label": "Seletor de idioma" },
      heroLinks: { "aria-label": "Links acadêmicos e profissionais" },
      footerNav: { "aria-label": "Links rápidos" },
      profilePhoto: { alt: "Foto de Anderson H. R. Ferreira" },
    },
  };

  const localizedMeta = {
    en: {
      title: defaultMeta.title,
      description: defaultMeta.description,
      ogTitle: defaultMeta.ogTitle,
      ogDescription: defaultMeta.ogDescription,
      ogImageAlt: defaultMeta.ogImageAlt,
      ogLocale: defaultMeta.ogLocale,
      twitterTitle: defaultMeta.twitterTitle,
      twitterDescription: defaultMeta.twitterDescription,
    },
    pt: {
      title: "Anderson H. R. Ferreira | Data Science, Machine Learning, Signals & IoT",
      description:
        "Portfólio de Anderson H. R. Ferreira — doutorando na Unicamp com projetos em data science, machine learning, processamento de sinais, cloud e IoT.",
      ogTitle: "Anderson H. R. Ferreira | Data Science, Machine Learning, Signals & IoT",
      ogDescription:
        "Dados, machine learning, processamento de sinais e IoT em uma linguagem visual própria: dos sinais à inteligência.",
      ogImageAlt:
        "Marca AF conectada a ondas, espectro e uma rede de dados sobre fundo escuro.",
      ogLocale: "pt_BR",
      twitterTitle: "Anderson H. R. Ferreira | Data Science, Machine Learning, Signals & IoT",
      twitterDescription:
        "Portfólio com projetos, pesquisa, publicações e docência em dados, sinais, machine learning e IoT.",
    },
  };

  const menuToggleLabels = {
    en: {
      open: "Open menu",
      close: "Close menu",
    },
    pt: {
      open: "Abrir menu",
      close: "Fechar menu",
    },
  };

  let currentLanguage = "en";

  function getSavedLanguage() {
    try {
      return localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage failures.
    }
  }

  function updateScrollProgress() {
    if (!progressBar) return;

    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  }

  function updateHeaderState() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    updateScrollProgress();
  }

  function updateNavToggleLabel(language, isOpen) {
    if (!navToggle) return;

    const labels = menuToggleLabels[language] || menuToggleLabels.en;
    navToggle.setAttribute("aria-label", isOpen ? labels.close : labels.open);
  }

  function setMenuState(isOpen) {
    if (!navToggle || !navShell) return;

    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navShell.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen && mobileNavQuery.matches);
    updateNavToggleLabel(currentLanguage, isOpen);
  }

  function closeMenu() {
    setMenuState(false);
  }

  if (navToggle && navShell && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = !navShell.classList.contains("is-open");
      setMenuState(isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      const clickedInsideNav = navShell.contains(target) || navToggle.contains(target);
      if (!clickedInsideNav && navShell.classList.contains("is-open")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    mobileNavQuery.addEventListener("change", () => {
      if (!mobileNavQuery.matches) {
        closeMenu();
      }
    });
  }

  function markActiveLink(id) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-42% 0px -48% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  } else if (sections[0]) {
    markActiveLink(sections[0].id);
  }

  if (reduceMotionQuery.matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 0.04, 0.2)}s`);
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  function fillMeter(item) {
    const fill = item.querySelector(".meter-fill");
    const pct = Number(item.dataset.pct || 0);

    if (fill) {
      fill.style.width = `${Math.max(0, Math.min(100, pct))}%`;
    }
  }

  if (reduceMotionQuery.matches) {
    meterItems.forEach(fillMeter);
  } else if ("IntersectionObserver" in window && meterItems.length > 0) {
    const meterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fillMeter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    meterItems.forEach((item) => meterObserver.observe(item));
  } else {
    meterItems.forEach(fillMeter);
  }

  function applyMeta(language) {
    const meta = localizedMeta[language] || localizedMeta.en;
    document.title = meta.title;

    if (metaDescription) metaDescription.content = meta.description;
    if (ogTitle) ogTitle.content = meta.ogTitle;
    if (ogDescription) ogDescription.content = meta.ogDescription;
    if (ogImageAlt) ogImageAlt.content = meta.ogImageAlt;
    if (ogLocale) ogLocale.content = meta.ogLocale;
    if (twitterTitle) twitterTitle.content = meta.twitterTitle;
    if (twitterDescription) twitterDescription.content = meta.twitterDescription;
  }

  function applyAttributes(language) {
    const bundle = attributeTranslations[language] || attributeTranslations.en;
    document.documentElement.lang = bundle.htmlLang;

    Object.entries(bundle).forEach(([targetKey, attrs]) => {
      if (targetKey === "htmlLang") return;

      const target = attributeTargets[targetKey];
      if (!target) return;

      Object.entries(attrs).forEach(([attributeName, value]) => {
        target.setAttribute(attributeName, value);
      });
    });
  }

  function applyLanguage(language) {
    const normalized = language === "pt" ? "pt" : "en";
    const localizedStrings = translations[normalized] || {};
    currentLanguage = normalized;

    textNodes.forEach((node) => {
      const key = node.dataset.i18n;
      const fallback = defaultText.get(node) || "";
      node.textContent = normalized === "en" ? fallback : localizedStrings[key] || fallback;
    });

    htmlNodes.forEach((node) => {
      const key = node.dataset.i18nHtml;
      const fallback = defaultHtml.get(node) || "";
      node.innerHTML = normalized === "en" ? fallback : localizedStrings[key] || fallback;
    });

    applyAttributes(normalized);
    applyMeta(normalized);
    saveLanguage(normalized);
    updateNavToggleLabel(normalized, navShell ? navShell.classList.contains("is-open") : false);

    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === normalized;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  if (languageButtons.length > 0) {
    languageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const language = button.dataset.lang === "pt" ? "pt" : "en";
        applyLanguage(language);
      });
    });
  }

  const initialLanguage = getSavedLanguage() === "pt" ? "pt" : "en";
  applyLanguage(initialLanguage);

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("load", updateHeaderState);
  updateHeaderState();
})();
