/* =============================================================================
   Rendering + hash routing. Pure DOM, no framework.
   Routes:
     #/                     -> homepage sections
     #/publications         -> list      #/publication/<slug>  -> detail
     #/projects             -> list      #/project/<slug>      -> detail
     #/talks                -> list      #/talk/<slug>         -> detail
     #/teaching             -> list      #/teaching/<slug>     -> detail
     #/news/<slug>          -> detail
   ========================================================================== */
(function () {
  var S = window.SITE;
  var app = document.getElementById("app");

  /* ------------------------------------------------------------- helpers */
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  function parseDate(iso) {
    var p = String(iso).split("-");
    return { y: +p[0], m: +p[1], d: +p[2] || 1 };
  }
  function fmtDate(iso) {
    var d = parseDate(iso);
    return MONTHS[d.m - 1] + " " + d.d + ", " + d.y;
  }
  function fmtMonthYear(iso) {
    var d = parseDate(iso);
    return MONTHS[d.m - 1] + " " + d.y;
  }
  function byDateDesc(a, b) { return a.date < b.date ? 1 : -1; }

  function authorName(a) {
    return a === "admin" ? S.profile.name : a;
  }
  function authorsHtml(authors) {
    return authors.map(function (a) {
      return a === "admin"
        ? '<span class="me">' + esc(S.profile.name) + "</span>"
        : esc(a);
    }).join(", ");
  }
  function chips(tags, extra) {
    var h = "";
    if (extra) h += '<span class="chip venue">' + esc(extra) + "</span>";
    (tags || []).forEach(function (t) {
      h += '<a class="chip chip-link" href="#/tag/' + encodeURIComponent(t) + '">' + esc(t) + "</a>";
    });
    return '<span class="chips">' + h + "</span>";
  }

  /* SVG icons for socials / links */
  var ICONS = {
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
    pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    slides: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  };

  function linkPills(links, slidesUrl) {
    var out = [];
    if (links) {
      if (links.pdf)      out.push(pill(links.pdf, ICONS.pdf, "PDF"));
      if (links.slides)   out.push(pill(links.slides, ICONS.slides, "Slides"));
      if (links.code)     out.push(pill(links.code, ICONS.code, "Code"));
      if (links.doi)      out.push(pill(/^https?:/.test(links.doi) ? links.doi : "https://doi.org/" + links.doi, ICONS.external, "DOI"));
      if (links.external) out.push(pill(links.external, ICONS.external, "Link"));
    }
    if (slidesUrl) out.push(pill(slidesUrl, ICONS.slides, "Slides"));
    return out.join("");
  }
  function pill(url, icon, label) {
    return '<a class="pill-link" href="' + esc(url) + '" target="_blank" rel="noopener">' + icon + label + "</a>";
  }

  /* ------------------------------------------------------------- cards */
  function pubCard(p) {
    var link = "#/publication/" + p.slug;
    return '<article class="card reveal">' +
      (p.image ? '<a href="' + link + '" class="card-media"><img loading="lazy" src="' + p.image + '" alt=""></a>' : "") +
      '<div class="card-body">' +
        chips(p.tags, p.type) +
        '<h3><a href="' + link + '">' + esc(p.title) + "</a></h3>" +
        '<div class="authors">' + authorsHtml(p.authors) + "</div>" +
        '<div class="meta">' + esc(p.venue) + " · " + fmtDate(p.date) + "</div>" +
        '<p class="summary">' + esc(p.summary) + "</p>" +
        '<div class="card-links">' + linkPills(p.links) +
          '<a class="pill-link" href="' + link + '">Details ' + ICONS.arrow + "</a></div>" +
      "</div></article>";
  }

  function talkRow(t) {
    var d = parseDate(t.date);
    var link = "#/talk/" + t.slug;
    return '<article class="talk-row reveal">' +
      '<div class="talk-date"><div class="d">' + d.d + '</div><div class="m">' + MONTHS[d.m-1] + " " + d.y + "</div></div>" +
      '<div class="talk-info">' +
        '<h3><a href="' + link + '">' + esc(t.title) + "</a></h3>" +
        '<div class="talk-event">' + esc(t.event) + "</div>" +
        '<div class="talk-loc">' + esc(t.location) + "</div>" +
      "</div>" +
      '<div class="talk-cta"><a class="pill-link" href="' + link + '">Details ' + ICONS.arrow + "</a></div>" +
    "</article>";
  }

  function newsCard(n) {
    var link = "#/news/" + n.slug;
    return '<article class="card reveal">' +
      (n.image ? '<a href="' + link + '" class="card-media"><img loading="lazy" src="' + n.image + '" alt=""></a>' : "") +
      '<div class="card-body">' +
        '<div class="meta">' + fmtDate(n.date) + "</div>" +
        '<h3><a href="' + link + '">' + esc(n.title) + "</a></h3>" +
        '<p class="summary">' + esc(n.summary) + "</p>" +
      "</div></article>";
  }

  function projectCard(p) {
    var link = "#/project/" + p.slug;
    // Card navigates on click (JS), so inner tag links stay independently clickable.
    return '<article class="card card-click reveal" data-href="' + link + '">' +
      (p.image ? '<span class="card-media"><img loading="lazy" src="' + p.image + '" alt=""></span>' : "") +
      '<div class="card-body">' +
        chips(p.tags) +
        '<h3><a href="' + link + '">' + esc(p.title) + "</a></h3>" +
        '<p class="summary">' + esc(p.summary) + "</p>" +
        '<a class="pill-link" href="' + link + '">Explore ' + ICONS.arrow + "</a>" +
      "</div></article>";
  }

  function teachingCard(t) {
    var link = "#/teaching/" + t.slug;
    return '<article class="card reveal">' +
      (t.image ? '<a href="' + link + '" class="card-media"><img loading="lazy" src="' + t.image + '" alt=""></a>' : "") +
      '<div class="card-body">' +
        '<div class="meta">' + esc(t.role) + "</div>" +
        '<h3><a href="' + link + '">' + esc(t.title) + "</a></h3>" +
        '<p class="summary">' + esc(t.intro) + "</p>" +
        '<a class="pill-link" href="' + link + '">Course page ' + ICONS.arrow + "</a>" +
      "</div></article>";
  }

  /* ------------------------------------------------------------- section wrapper */
  function bgSection(id, cls, bg, inner) {
    var style = bg ? ' style="' : "";
    var html = '<section id="' + id + '" class="section ' + cls + '"';
    if (bg) html += ' data-bg="' + bg + '"';
    html += "><div class=\"container\">" + inner + "</div></section>";
    return html;
  }
  function head(kicker, title, sub) {
    return '<div class="section-head reveal"><span class="kicker">' + esc(kicker) + "</span>" +
      "<h2>" + esc(title) + "</h2>" + (sub ? "<p>" + esc(sub) + "</p>" : "") + "</div>";
  }

  /* ============================================================= HOMEPAGE */
  function renderHome() {
    var P = S.profile;
    var h = "";

    /* hero */
    h += '<section class="hero" data-bg="' + S.backgrounds.hero + '">' +
      '<canvas id="collider" class="collider" aria-hidden="true"></canvas>' +
      '<div class="container"><div class="hero-grid reveal">' +
      '<img class="hero-avatar" src="' + P.avatar + '" alt="' + esc(P.name) + '">' +
      "<div>" +
        "<h1>" + esc(P.name) + (P.nameCn ? ' <span class="name-cn">（' + esc(P.nameCn) + "）</span>" : "") + "</h1>" +
        '<div class="role">' + esc(P.role) + "</div>" +
        '<div class="org"><a href="' + P.org.url + '" target="_blank" rel="noopener">' + esc(P.org.name) + "</a></div>" +
        '<div class="hero-actions">' +
          '<div class="social-row">' + P.socials.map(function (s) {
            return '<a href="' + s.url + '" title="' + esc(s.label) + '" target="_blank" rel="noopener">' + (ICONS[s.type] || ICONS.external) + "</a>";
          }).join("") + "</div>" +
          '<a class="btn" href="' + P.cta.url + '" target="_blank" rel="noopener">' + ICONS.pdf + esc(P.cta.text) + "</a>" +
        "</div>" +
      "</div></div></div>" +
      '<a class="scroll-cue" href="#about" aria-label="Scroll down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:28px;height:28px"><path d="M12 5v14M5 12l7 7 7-7"/></svg></a>' +
    "</section>";

    /* about + research */
    h += bgSection("about", "bg-section", S.backgrounds.research,
      head("Get to know me", "About Me") +
      '<div class="about-wrap reveal">' +
        '<div class="prose"><p>' + P.about + "</p></div>" +
        '<div><h3 style="margin:14px 0 6px">Research Interests</h3>' +
        '<div class="prose">' + P.research.map(function (r){return "<p>"+r+"</p>";}).join("") + "</div>" +
        '<div class="interests">' + P.interests.map(function (i){return '<span class="interest-chip">'+esc(i)+"</span>";}).join("") + "</div></div>" +
      "</div>");

    /* featured publications */
    var featPubs = S.publications.filter(function (p){return p.featured;}).sort(byDateDesc).slice(0, 4);
    h += bgSection("publications", "bg-section", S.backgrounds.publications,
      head("Selected work", "Featured Publications") +
      '<div class="grid grid-2">' + featPubs.map(pubCard).join("") + "</div>" +
      '<div class="section-cta"><a class="btn btn-ghost" href="#/publications">All publications ' + ICONS.arrow + "</a></div>");

    /* featured talks */
    var featTalks = S.talks.filter(function (t){return t.featured;}).sort(byDateDesc).slice(0, 4);
    h += bgSection("talks", "bg-section", S.backgrounds.talks,
      head("On stage", "Recent & Upcoming Talks") +
      featTalks.map(talkRow).join("") +
      '<div class="section-cta"><a class="btn btn-ghost" href="#/talks">All talks ' + ICONS.arrow + "</a></div>");

    /* news */
    var news = S.news.slice().sort(byDateDesc).slice(0, 4);
    h += bgSection("news", "bg-section", S.backgrounds.news,
      head("Latest", "Recent News") +
      '<div class="grid grid-3">' + news.map(newsCard).join("") + "</div>");

    app.innerHTML = h;
    afterRender(true);
  }

  /* CV as its own page (Experience / Education / Skills / Awards) */
  function renderCvPage() {
    app.innerHTML = '<div class="page"><div class="container">' +
      '<a class="back-link" href="#/">' + ICONS.back + "Home</a>" +
      renderResume() + "</div></div>";
    afterRender(false);
  }

  function renderResume() {
    var eduTl = S.education.map(function (e) {
      return '<div class="tl-item reveal"><h4>' + esc(e.area) + "</h4>" +
        '<div class="tl-sub">' + esc(e.institution) + "</div>" +
        '<div class="tl-date">' + esc(e.dates) + "</div>" +
        '<div class="summary">' + e.summary + "</div>" +
        (e.button ? '<div style="margin-top:8px"><a class="pill-link" href="' + e.button.url + '" target="_blank" rel="noopener">' + esc(e.button.text) + "</a></div>" : "") +
        "</div>";
    }).join("");

    var workTl = S.work.map(function (w) {
      return '<div class="tl-item reveal"><h4>' + esc(w.position) + "</h4>" +
        '<div class="tl-sub"><a href="' + w.companyUrl + '" target="_blank" rel="noopener">' + esc(w.company) + "</a></div>" +
        '<div class="tl-date">' + esc(w.dates) + "</div>" +
        (w.note ? '<div class="tl-note">' + esc(w.note) + "</div>" : "") +
        "<ul>" + w.bullets.map(function (b){return "<li>"+esc(b)+"</li>";}).join("") + "</ul></div>";
    }).join("");

    // Skills & languages as animated chips (no self-scoring / percentages).
    // Hobbies group (accent) is intentionally omitted from the CV column.
    function chipList(items) {
      return '<div class="tag-cloud">' + items.map(function (it, i) {
        return '<span class="skill-tag reveal" style="transition-delay:' + (i * 60) + 'ms">' + esc(it.name) + "</span>";
      }).join("") + "</div>";
    }

    var skills = S.skillGroups.filter(function (g) { return !g.accent; }).map(function (g) {
      return '<div class="side-block"><div class="subhead reveal">' + esc(g.name) + "</div>" +
        chipList(g.items) + "</div>";
    }).join("");

    var langs = '<div class="side-block"><div class="subhead reveal">Languages</div>' +
      chipList(S.languages) + "</div>";

    var awards = '<div class="side-block reveal"><div class="subhead">Awards</div>' +
      S.awards.map(function (a) {
        return '<div class="award-item"><div class="aw-title">' + esc(a.title) + "</div>" +
          '<div class="aw-meta">' + esc(a.awarder) + " · " + esc(a.date) + "</div></div>";
      }).join("") + "</div>";

    return head("Curriculum vitae", "Experience & Education") +
      '<div class="resume-grid">' +
        "<div>" +
          '<div class="subhead reveal">Work Experience</div><div class="timeline">' + workTl + "</div>" +
          '<div class="subhead reveal" style="margin-top:38px">Education</div><div class="timeline">' + eduTl + "</div>" +
        "</div>" +
        "<div>" + skills + langs + awards + "</div>" +
      "</div>";
  }

  /* ============================================================= LIST PAGES */
  function listPage(kicker, title, itemsHtml, bg) {
    var attrs = bg ? ' bg-section" data-bg="' + bg : "";
    app.innerHTML = '<div class="page' + attrs + '"><div class="container">' +
      '<a class="back-link" href="#/">' + ICONS.back + "Home</a>" +
      '<div class="section-head"><span class="kicker">' + esc(kicker) + '</span><h2>' + esc(title) + "</h2></div>" +
      itemsHtml + "</div></div>";
    afterRender(false);
  }

  function renderPubList() {
    listPage("Publications", "All Publications",
      '<div class="grid grid-2">' + S.publications.slice().sort(byDateDesc).map(pubCard).join("") + "</div>",
      S.backgrounds.publications);
  }
  function renderProjList() {
    listPage("Projects", "All Projects",
      '<div class="grid grid-3">' + S.projects.slice().sort(byDateDesc).map(projectCard).join("") + "</div>",
      S.backgrounds.projects || S.backgrounds.research);
  }
  function renderTalkList() {
    listPage("Talks", "All Talks & Presentations",
      S.talks.slice().sort(byDateDesc).map(talkRow).join(""),
      S.backgrounds.talks);
  }
  function renderTeachList() {
    listPage("Teaching", "All Courses",
      '<div class="grid grid-3">' + S.teaching.slice().sort(byDateDesc).map(teachingCard).join("") + "</div>",
      S.backgrounds.teaching || S.backgrounds.news);
  }
  function renderNewsList() {
    listPage("Latest", "All News",
      '<div class="grid grid-3">' + S.news.slice().sort(byDateDesc).map(newsCard).join("") + "</div>",
      S.backgrounds.news);
  }

  /* everything carrying a given tag, grouped by content type */
  function renderTagPage(tag) {
    function has(o) { return (o.tags || []).indexOf(tag) >= 0; }
    var pubs  = S.publications.filter(has).sort(byDateDesc);
    var projs = S.projects.filter(has).sort(byDateDesc);
    var talks = S.talks.filter(has).sort(byDateDesc);
    var news  = S.news.filter(has).sort(byDateDesc);
    var teach = S.teaching.filter(has).sort(byDateDesc);
    var total = pubs.length + projs.length + talks.length + news.length + teach.length;

    var body = "";
    function block(title, html) {
      if (!html) return;
      body += '<h3 class="tag-group-head">' + title + "</h3>" + html;
    }
    block("Publications", pubs.length ? '<div class="grid grid-2">' + pubs.map(pubCard).join("") + "</div>" : "");
    block("Projects", projs.length ? '<div class="grid grid-3">' + projs.map(projectCard).join("") + "</div>" : "");
    block("Talks", talks.length ? talks.map(talkRow).join("") : "");
    block("News", news.length ? '<div class="grid grid-3">' + news.map(newsCard).join("") + "</div>" : "");
    block("Teaching", teach.length ? '<div class="grid grid-3">' + teach.map(teachingCard).join("") + "</div>" : "");
    if (!total) body = '<p style="color:var(--text-dim)">Nothing tagged with this yet.</p>';

    listPage("Tagged", tag + '  ·  ' + total + (total === 1 ? " item" : " items"), body);
  }

  /* ============================================================= DETAIL PAGES */
  function detailShell(backHref, backLabel, inner) {
    app.innerHTML = '<div class="page"><div class="container" style="max-width:900px">' +
      '<a class="back-link" href="' + backHref + '">' + ICONS.back + backLabel + "</a>" +
      inner + "</div></div>";
    afterRender(false);
  }

  function renderPubDetail(slug) {
    var p = find(S.publications, slug); if (!p) return notFound();
    var proj = p.project ? find(S.projects, p.project) : null;
    var inner = '<div class="detail-head">' + chips(p.tags, p.type) +
      "<h1>" + esc(p.title) + "</h1>" +
      '<div class="detail-meta">' + authorsHtml(p.authors) + "</div>" +
      '<div class="detail-meta" style="color:var(--text-faint)">' + esc(p.venue) + " · " + fmtDate(p.date) + "</div>" +
      "</div>" +
      '<div class="detail-links">' + linkPills(p.links) +
        (proj ? '<a class="pill-link" href="#/project/' + proj.slug + '">Related project: ' + esc(proj.title) + "</a>" : "") + "</div>" +
      (p.image ? '<figure class="detail-figure"><img src="' + p.image + '" alt="">' + (p.caption ? "<figcaption>" + esc(p.caption) + "</figcaption>" : "") + "</figure>" : "") +
      '<div class="abstract-box"><h3>Abstract</h3>' + esc(p.abstract) + "</div>" +
      (p.body ? '<div class="article-body"><p>' + p.body + "</p></div>" : "");
    detailShell("#/publications", "All publications", inner);
  }

  function renderProjDetail(slug) {
    var p = find(S.projects, slug); if (!p) return notFound();
    var inner = '<div class="detail-head">' + chips(p.tags) +
      "<h1>" + esc(p.title) + "</h1>" +
      '<div class="detail-meta" style="color:var(--text-faint)">' + esc(p.summary) + "</div></div>" +
      (p.image ? '<figure class="detail-figure"><img src="' + p.image + '" alt=""></figure>' : "") +
      '<div class="article-body">' + p.body + "</div>";
    detailShell("#/projects", "All projects", inner);
  }

  function renderTalkDetail(slug) {
    var t = find(S.talks, slug); if (!t) return notFound();
    var proj = t.project ? find(S.projects, t.project) : null;
    var inner = '<div class="detail-head">' + chips([], t.summary) +
      "<h1>" + esc(t.title) + "</h1>" +
      '<div class="detail-meta"><a href="' + t.eventUrl + '" target="_blank" rel="noopener">' + esc(t.event) + "</a></div>" +
      '<div class="detail-meta" style="color:var(--text-faint)">' + esc(t.location) + " · " + fmtDate(t.date) + "</div></div>" +
      '<div class="detail-links">' + linkPills(null, t.slidesUrl) +
        (proj ? '<a class="pill-link" href="#/project/' + proj.slug + '">Related project: ' + esc(proj.title) + "</a>" : "") + "</div>" +
      (t.image ? '<figure class="detail-figure"><img src="' + t.image + '" alt=""></figure>' : "") +
      '<div class="abstract-box"><h3>Abstract</h3>' + esc(t.abstract) + "</div>";
    detailShell("#/talks", "All talks", inner);
  }

  function renderNewsDetail(slug) {
    var n = find(S.news, slug); if (!n) return notFound();
    var inner = '<div class="detail-head">' + chips(n.tags) +
      "<h1>" + esc(n.title) + "</h1>" +
      '<div class="detail-meta" style="color:var(--text-faint)">' + fmtDate(n.date) + "</div></div>" +
      (n.image ? '<figure class="detail-figure"><img src="' + n.image + '" alt=""></figure>' : "") +
      '<div class="article-body">' + n.body + "</div>";
    detailShell("#/news", "All news", inner);
  }

  function renderTeachDetail(slug) {
    var t = find(S.teaching, slug); if (!t) return notFound();
    var inner = '<div class="detail-head">' + chips(t.tags) +
      "<h1>" + esc(t.title) + "</h1>" +
      '<div class="detail-meta" style="color:var(--text-faint)">' + esc(t.role) + "</div></div>" +
      (t.image ? '<figure class="detail-figure"><img src="' + t.image + '" alt=""></figure>' : "") +
      '<div class="article-body"><p><strong>' + esc(t.intro) + "</strong></p>" + t.body + "</div>";
    detailShell("#/teaching", "All courses", inner);
  }

  function find(arr, slug) { for (var i=0;i<arr.length;i++) if (arr[i].slug===slug) return arr[i]; return null; }
  function notFound() {
    detailShell("#/", "Home", '<div class="detail-head"><h1>Not found</h1><p>This page doesn\'t exist.</p></div>');
  }

  /* ============================================================= ROUTER */
  function route() {
    var raw = location.hash;                          // "#/publications" | "#about" | ""
    window.scrollTo(0, 0);

    // Homepage anchor (starts with "#" but NOT "#/") -> render home, scroll to section.
    if (raw && raw.charAt(1) !== "/") {
      var id = raw.slice(1);
      renderHome();
      var target = document.getElementById(id);
      if (target) setTimeout(function () { target.scrollIntoView(); }, 0);
      return;
    }

    // Route (starts with "#/") -> independent page.
    var parts = raw.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts.length === 0) return renderHome();
    var a = parts[0], b = parts[1];

    switch (a) {
      case "publications": return renderPubList();
      case "projects":     return renderProjList();
      case "talks":        return renderTalkList();
      case "teaching":     return b ? renderTeachDetail(b) : renderTeachList();
      case "cv":           return renderCvPage();
      case "publication":  return renderPubDetail(b);
      case "project":      return renderProjDetail(b);
      case "talk":         return renderTalkDetail(b);
      case "news":         return b ? renderNewsDetail(b) : renderNewsList();
      case "tag":          return renderTagPage(decodeURIComponent(parts.slice(1).join("/")));
      default:             return renderHome();
    }
  }

  /* ------------------------------------------------------------- post-render */
  function afterRender(isHome) {
    applyBackgrounds();
    initReveal();
    animateBars();
    closeMenu();
    if (isHome) initCollider();
  }

  /* ---------------------------------------------------- particle collisions
     A quiet "event display": collisions fire at random points in the hero and
     spray curved tracks outward (blue + gold), then fade. Sits behind the text.
  */
  var _colliderStop = null;
  function initCollider() {
    if (_colliderStop) { _colliderStop(); _colliderStop = null; }
    var canvas = document.getElementById("collider");
    if (!canvas || !canvas.getContext) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    var ctx = canvas.getContext("2d");
    var host = canvas.parentNode;              // the .hero section
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, tracks = [], beams = [], flashes = [], raf = 0, timer = 0, running = true;

    function resize() {
      W = host.offsetWidth; H = host.offsetHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    var COLORS = ["47,129,247", "125,179,255", "240,191,35", "255,223,0"];
    function rnd(a, b) { return a + (b - a) * Math.random(); }

    // Pre-collision: two beams fly head-to-head toward the vertex along a random
    // axis, then trigger collide() at the moment they meet.
    function launch(x, y) {
      var ang = rnd(0, Math.PI * 2);        // beam axis
      var dx = Math.cos(ang), dy = Math.sin(ang);
      var dist = rnd(180, 280);             // how far out the beams start
      var frames = 38;                      // approach duration
      // two beams: one from each side, converging on (x,y)
      beams.push({ x: x - dx * dist, y: y - dy * dist, vx: dx * dist / frames, vy: dy * dist / frames, life: 0, max: frames, cx: x, cy: y, pts: [] });
      beams.push({ x: x + dx * dist, y: y + dy * dist, vx: -dx * dist / frames, vy: -dy * dist / frames, life: 0, max: frames, cx: x, cy: y, pts: [], trigger: true });
    }

    // one collision = N tracks radiating from a vertex, each a curved polyline
    function collide(x, y) {
      flashes.push({ x: x, y: y, life: 0, max: 18 });   // burst of light at the vertex
      var n = Math.round(rnd(8, 13));
      var base = rnd(0, Math.PI * 2);
      for (var i = 0; i < n; i++) {
        var ang = base + (Math.PI * 2 / n) * i + rnd(-0.3, 0.3);
        var speed = rnd(1.1, 2.6);
        tracks.push({
          x: x, y: y, vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed,
          curve: rnd(-0.03, 0.03), life: 0, max: rnd(70, 130),
          width: rnd(0.8, 1.8), color: COLORS[(Math.random() * COLORS.length) | 0],
          pts: [[x, y]],
        });
      }
    }

    function tick() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);

      // incoming beams (pre-collision)
      for (var bi = beams.length - 1; bi >= 0; bi--) {
        var bm = beams[bi];
        bm.life++;
        bm.x += bm.vx; bm.y += bm.vy;
        bm.pts.push([bm.x, bm.y]);
        if (bm.pts.length > 20) bm.pts.shift();
        var bf = bm.life / bm.max;          // 0..1 approach progress
        // comet-like trail brightening as it nears the vertex
        ctx.beginPath();
        ctx.moveTo(bm.pts[0][0], bm.pts[0][1]);
        for (var bp = 1; bp < bm.pts.length; bp++) ctx.lineTo(bm.pts[bp][0], bm.pts[bp][1]);
        ctx.strokeStyle = "rgba(125,179,255," + (0.25 + bf * 0.5).toFixed(3) + ")";
        ctx.lineWidth = 1.6; ctx.lineCap = "round";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(bm.x, bm.y, 2 + bf * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180,210,255," + (0.5 + bf * 0.5).toFixed(3) + ")";
        ctx.fill();
        if (bm.life >= bm.max) {
          if (bm.trigger) collide(bm.cx, bm.cy);   // beams meet -> collision
          beams.splice(bi, 1);
        }
      }

      // collision flash (expanding bright ring at the vertex)
      for (var fi = flashes.length - 1; fi >= 0; fi--) {
        var fl = flashes[fi];
        fl.life++;
        var fp = fl.life / fl.max;
        var alpha = (1 - fp) * 0.9;
        var r = 3 + fp * 26;
        ctx.beginPath();
        ctx.arc(fl.x, fl.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,240,190," + alpha.toFixed(3) + ")";
        ctx.lineWidth = 2 * (1 - fp) + 0.5;
        ctx.stroke();
        // bright core
        ctx.beginPath();
        ctx.arc(fl.x, fl.y, (1 - fp) * 5 + 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,240," + alpha.toFixed(3) + ")";
        ctx.fill();
        if (fl.life >= fl.max) flashes.splice(fi, 1);
      }

      for (var i = tracks.length - 1; i >= 0; i--) {
        var t = tracks[i];
        t.life++;
        // curved trajectory: rotate velocity slightly each frame
        var c = Math.cos(t.curve), s = Math.sin(t.curve);
        var nvx = t.vx * c - t.vy * s, nvy = t.vx * s + t.vy * c;
        t.vx = nvx; t.vy = nvy;
        t.x += t.vx; t.y += t.vy;
        t.pts.push([t.x, t.y]);
        if (t.pts.length > 22) t.pts.shift();

        var fade = 1 - t.life / t.max;
        if (fade <= 0) { tracks.splice(i, 1); continue; }

        // draw the trailing track
        ctx.beginPath();
        ctx.moveTo(t.pts[0][0], t.pts[0][1]);
        for (var p = 1; p < t.pts.length; p++) ctx.lineTo(t.pts[p][0], t.pts[p][1]);
        ctx.strokeStyle = "rgba(" + t.color + "," + (fade * 0.68).toFixed(3) + ")";
        ctx.lineWidth = t.width; ctx.lineCap = "round";
        ctx.stroke();
        // glowing head
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.width * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + t.color + "," + fade.toFixed(3) + ")";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    function scheduleCollision() {
      if (!running) return;
      launch(rnd(W * 0.15, W * 0.85), rnd(H * 0.15, H * 0.8));
      timer = setTimeout(scheduleCollision, rnd(1400, 3200));
    }

    // pause when hero scrolled out of view (perf)
    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (e) {
      running = e[0].isIntersecting;
      if (running) { tick(); scheduleCollision(); }
      else { cancelAnimationFrame(raf); clearTimeout(timer); }
    }, { threshold: 0 }) : null;
    if (io) io.observe(host);

    window.addEventListener("resize", resize);
    launch(W * 0.5, H * 0.42);   // one on load
    tick();
    scheduleCollision();

    _colliderStop = function () {
      running = false; cancelAnimationFrame(raf); clearTimeout(timer);
      if (io) io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }

  function applyBackgrounds() {
    document.querySelectorAll("[data-bg]").forEach(function (s) {
      // Resolve to an absolute URL so the ::before background (consumed in the
      // external stylesheet) doesn't get resolved relative to css/.
      var abs = new URL(s.getAttribute("data-bg"), location.href).href;
      s.style.setProperty("--bg-url", "url('" + abs + "')");
    });
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e){ e.classList.add("in"); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e){ io.observe(e); });
  }

  function animateBars() {
    var bars = document.querySelectorAll(".bar > span[data-w]");
    if (!("IntersectionObserver" in window)) {
      bars.forEach(function (b){ b.style.width = b.getAttribute("data-w") + "%"; }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.width = en.target.getAttribute("data-w") + "%";
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    bars.forEach(function (b){ io.observe(b); });
  }

  function closeMenu() {
    var nl = document.getElementById("nav-links");
    if (nl) nl.classList.remove("open");
  }

  /* ------------------------------------------------------------- boot */
  window.addEventListener("hashchange", route);

  // Delegated click for cards that navigate via JS (so inner tag links still work).
  document.addEventListener("click", function (e) {
    if (e.target.closest("a")) return;              // let real links (tags, buttons) act
    var card = e.target.closest(".card-click");
    if (card && card.getAttribute("data-href")) {
      location.hash = card.getAttribute("data-href");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    // theme toggle button
    var tt = document.getElementById("theme-toggle");
    if (tt) {
      tt.innerHTML = '<span class="sun">' + ICONS.sun + '</span><span class="moon">' + ICONS.moon + "</span>";
      tt.addEventListener("click", window.toggleTheme);
    }
    var nt = document.getElementById("nav-toggle");
    if (nt) nt.addEventListener("click", function () {
      document.getElementById("nav-links").classList.toggle("open");
    });
    route();
  });
})();
