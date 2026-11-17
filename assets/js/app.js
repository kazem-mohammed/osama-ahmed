/* =========================================================
   Osama Ahmed — Portfolio behavior layer
   Theme engine · i18n · cursor · reveal · builders ·
   project modal · lightbox · CV modal · composer · share
   ========================================================= */
'use strict';

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;

  /* ---------- state ---------- */
  let lang = root.getAttribute('data-lang') === 'ar' ? 'ar' : 'en';
  const T = () => OA_LANG[lang];

  /* ---------- toast ---------- */
  const toastEl = $('#toast');
  let toastTimer;
  const toast = (msg) => {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  };

  /* ---------- theme engine ---------- */
  const themeBtn = $('#themeBtn');
  const mql = window.matchMedia('(prefers-color-scheme: light)');

  const appliedTheme = () => {
    const saved = localStorage.getItem('oa-theme') || 'dark';
    return saved === 'system' ? (mql.matches ? 'light' : 'dark') : saved;
  };
  const setTheme = (t, persist = true) => {
    const resolved = t === 'system' ? (mql.matches ? 'light' : 'dark') : t;
    root.setAttribute('data-theme', resolved);
    if (persist) localStorage.setItem('oa-theme', t);
  };
  setTheme(localStorage.getItem('oa-theme') || 'dark', false);

  themeBtn.addEventListener('click', () => {
    const saved = localStorage.getItem('oa-theme') || 'dark';
    // cycle: dark → light → system → dark
    const next = saved === 'dark' ? 'light' : saved === 'light' ? 'system' : 'dark';
    setTheme(next);
    toast(next === 'system' ? (lang === 'ar' ? 'مظهر النظام' : 'System theme') : next === 'light' ? (lang === 'ar' ? 'المظهر الفاتح' : 'Light mode') : (lang === 'ar' ? 'المظهر الداكن' : 'Dark mode'));
  });
  mql.addEventListener('change', () => {
    if ((localStorage.getItem('oa-theme') || 'dark') === 'system') setTheme('system', false);
  });

  /* ---------- language engine ---------- */
  const applyLang = (l) => {
    lang = l;
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    root.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('oa-lang', l);
    document.title = l === 'ar'
      ? 'أسامة أحمد — متخصص تطوير أعمال'
      : 'Osama Ahmed — Business Development Professional';
    $$('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      const v = T()[k];
      if (v != null) el.textContent = v;
    });
    $$('[data-i18n-aria]').forEach(el => {
      const v = T()[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });
    buildDynamic();
    $('#langBtn').setAttribute('aria-label', T().langSwitchAria);
  };

  $('#langBtn').addEventListener('click', () => {
    applyLang(lang === 'en' ? 'ar' : 'en');
    history.replaceState(null, '', lang === 'ar' ? '?lang=ar' : location.pathname);
  });

  /* ---------- custom cursor ---------- */
  const cursor = $('.cursor');
  if (cursor && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const dot = $('.cursor__dot'), ring = $('.cursor__ring');
    let mx = -50, my = -50, rx = mx, ry = my;
    addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      cursor.classList.remove('is-hidden');
    }, { passive: true });
    document.addEventListener('mouseleave', () => cursor.classList.add('is-hidden'));
    (function loop() {
      rx += (mx - rx) * .18; ry += (my - ry) * .18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const live = () => cursor.classList.add('is-active');
    const die = () => cursor.classList.remove('is-active');
    addEventListener('mouseover', e => {
      if (e.target.closest('a, button, .chip, .proj-card, .cert-card__media, input, select, textarea')) live();
      else die();
    }, { passive: true });
  }

  /* ---------- header / progress / spy / to-top ---------- */
  const header = $('#header'), fill = $('#progressFill'), toTop = $('#toTop');
  const onScroll = () => {
    const y = scrollY;
    header.classList.toggle('scrolled', y > 24);
    const h = document.documentElement.scrollHeight - innerHeight;
    fill.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    toTop.classList.toggle('show', y > 700);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        $$('.nav__link').forEach(a =>
          a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['story', 'timeline', 'skills', 'projects', 'certificates', 'contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });

  /* ---------- mobile menu ---------- */
  const burger = $('#burgerBtn'), nav = $('#nav');
  const closeMenu = () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  };
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('.nav__link, .nav__cta', nav).forEach(a => a.addEventListener('click', closeMenu));

  /* ---------- reveal ---------- */
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => revealIO.observe(el));

  /* ---------- portrait tilt ---------- */
  const tiltEl = $('[data-tilt]');
  if (tiltEl && matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    tiltEl.addEventListener('mousemove', e => {
      const r = tiltEl.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      tiltEl.style.transform = `rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
    });
    tiltEl.addEventListener('mouseleave', () => { tiltEl.style.transform = ''; });
  }

  /* ---------- dynamic builders ---------- */
  const esc = (s) => {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  };

  function buildDynamic() {
    /* timeline */
    const tl = $('#timelineList');
    if (tl) tl.innerHTML = OA_TIMELINE.map((it, i) => `
      <li class="tl__item reveal${it.current ? ' is-current' : ''}" ${i > 1 ? '' : 'data-no-io'}>
        <span class="tl__dot" aria-hidden="true"></span>
        <p class="tl__when">${esc(it.when[lang])}</p>
        <h3 class="tl__title">${esc(it.title[lang])}</h3>
        <p class="tl__body">${esc(it.body[lang])}</p>
        <ul class="tl__tags">${it.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
        ${it.current ? `<span class="tl__now">${esc(T().tlNow)}</span>` : ''}
      </li>`).join('');

    /* skills */
    const sg = $('#skillsGrid');
    if (sg) sg.innerHTML = OA_SKILLS.map(g => `
      <div class="skill-card reveal" data-no-io>
        <h3>${esc(g.group[lang])}</h3>
        <ul>${g.items.map(i => `<li>${esc(i[lang])}</li>`).join('')}</ul>
      </div>`).join('');

    /* freelance */
    const fl = $('#freelanceList');
    if (fl) fl.innerHTML = OA_FREELANCE.map(s => `<li>${esc(s[lang])}</li>`).join('');

    /* projects */
    buildFilters();
    const pg = $('#projGrid');
    if (pg) pg.innerHTML = OA_PROJECTS.map(p => projectCard(p)).join('');
    $$('.proj-card', pg).forEach(card =>
      card.addEventListener('click', () => openProject(card.dataset.id)));

    /* wins */
    const wg = $('#winsGrid');
    if (wg) wg.innerHTML = OA_WINS.map(w => `
      <div class="win reveal" data-no-io>
        <p class="win__big" ${lang === 'ar' ? 'dir="ltr"' : ''}>${esc(w.big)}</p>
        <p class="win__text">${esc(w.text[lang])}</p>
      </div>`).join('');

    /* certificates */
    const cg = $('#certsGrid');
    if (cg) cg.innerHTML = OA_CERTS.map((c, i) => `
      <article class="cert-card reveal" data-no-io>
        <button class="cert-card__media" data-cert="${i}" aria-label="${esc(T().certView)}: ${esc(c.course)}">
          <img src="${c.img}" alt="${esc(c.alt)}" loading="lazy">
        </button>
        <div class="cert-card__body">
          <h3 class="cert-card__course">${esc(c.course)}</h3>
          <p class="cert-card__meta">${esc(c.issuer)} · ${esc(c.when)}</p>
          <p class="cert-card__meta">${esc(c.name)}</p>
          <div class="cert-card__row">
            <span class="cert-card__hours" dir="ltr">${esc(c.hours)}</span>
            <button class="cert-card__view" data-cert="${i}">
              ${esc(T().certView)} <svg class="icon" aria-hidden="true"><use href="#i-share"/></svg>
            </button>
          </div>
        </div>
      </article>`).join('');
    $$('[data-cert]').forEach(b =>
      b.addEventListener('click', () => openLightbox([OA_CERTS[+b.dataset.cert].img], 0, OA_CERTS[+b.dataset.cert].alt)));

    /* observe new reveals */
    $$('.reveal:not(.in)').forEach(el => revealIO.observe(el));

    /* keep spy fresh */
    applyFilter(curFilter);
  }

  function projectCard(p) {
    const monogram = p.id === 'wadyle3b' ? '' : `<span class="proj-card__monogram">${esc(p.name)}</span>`;
    const media = p.gallery.length
      ? `<img src="${p.gallery[0].src}" alt="${esc(p.gallery[0].alt)}" loading="lazy">` : monogram;
    return `
      <button class="proj-card reveal ${p.featured ? 'is-featured' : ''}" data-id="${p.id}" data-cat="${p.cat}" style="--card-accent:${p.accent}">
        <div class="proj-card__media">
          ${p.featured ? `<span class="proj-card__flag">${esc(T().filterFeatured)}</span>` : ''}
          ${media}
        </div>
        <div class="proj-card__body">
          <p class="proj-card__cat">${esc(p.catLabel[lang])}</p>
          <h3 class="proj-card__name">${esc(p.name)}</h3>
          <p class="proj-card__role">${esc(p.role[lang])}</p>
          <div class="proj-card__meta">
            <span class="proj-card__status">${esc(T()[p.statusKey])}</span>
            <span class="proj-card__open">${esc(lang === 'ar' ? 'التفاصيل' : 'Details')}
              <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
          </div>
        </div>
      </button>`;
  }

  /* ---------- filters ---------- */
  let curFilter = 'all';
  function buildFilters() {
    const f = $('#filters');
    if (!f) return;
    const cats = [
      ['all', T().filterAll],
      ['featured', T().filterFeatured],
      ['proptech', lang === 'ar' ? 'تقنية عقارية' : 'PropTech'],
      ['fintech', lang === 'ar' ? 'تقنية مالية' : 'FinTech'],
      ['automotive', lang === 'ar' ? 'تقنية سيارات' : 'Automotive'],
      ['ecommerce', lang === 'ar' ? 'تجارة إلكترونية' : 'E-commerce'],
      ['branding', lang === 'ar' ? 'هوية بصرية' : 'Branding']
    ];
    f.innerHTML = cats.map(([k, label]) =>
      `<button class="chip ${k === curFilter ? 'active' : ''}" data-filter="${k}">${esc(label)}</button>`).join('');
    $$('.chip', f).forEach(c => c.addEventListener('click', () => {
      curFilter = c.dataset.filter;
      $$('.chip', f).forEach(x => x.classList.toggle('active', x === c));
      applyFilter(curFilter);
    }));
  }
  function applyFilter(f) {
    $$('.proj-card').forEach(card => {
      const show = f === 'all' || (f === 'featured' ? card.classList.contains('is-featured') : card.dataset.cat === f);
      card.style.display = show ? '' : 'none';
    });
  }

  /* ---------- focus trap helper ---------- */
  function trap(modal, onClose) {
    const focusables = () => $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', modal)
      .filter(el => el.offsetParent !== null);
    const key = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return; }
      if (e.key !== 'Tab') return;
      const f = focusables();
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    modal.addEventListener('keydown', key);
    return () => modal.removeEventListener('keydown', key);
  }
  let releaseTrap = null, lastFocus = null;

  function openModal(modal) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    releaseTrap = trap(modal, () => closeModal(modal));
    const f = $$('a[href], button', modal).filter(el => el.offsetParent !== null);
    (f[1] || f[0])?.focus();
  }
  function closeModal(modal) {
    modal.hidden = true;
    document.body.style.overflow = '';
    releaseTrap?.(); releaseTrap = null;
    lastFocus?.focus?.();
  }
  $$('[data-close-modal]').forEach(el =>
    el.addEventListener('click', () => closeModal(el.closest('.modal'))));

  /* ---------- project modal ---------- */
  const pm = $('#projModal');
  function openProject(id) {
    const p = OA_PROJECTS.find(x => x.id === id);
    if (!p) return;
    const media = $('#pmMedia');
    media.style.setProperty('--card-accent', p.accent);
    media.className = 'modal__media';
    media.innerHTML = p.gallery.length
      ? `<img class="contain" src="${p.gallery[0].src}" alt="${esc(p.gallery[0].alt)}">`
      : `<span class="modal__monogram">${esc(p.name)}</span>`;

    $('#pmCat').textContent = p.catLabel[lang];
    $('#pmTitle').textContent = p.name;
    $('#pmDesc').textContent = p.desc[lang];

    $('#pmFacts').innerHTML = `
      <dt>${esc(T().projRole)}</dt><dd>${esc(p.role[lang])}</dd>
      <dt>${esc(T().projCat)}</dt><dd>${esc(p.catLabel[lang])}</dd>
      <dt>${esc(T().projStatus)}</dt><dd>${esc(T()[p.statusKey])}</dd>`;

    const pts = $('#pmPoints');
    pts.innerHTML = p.points[lang].map(x => `<li>${esc(x)}</li>`).join('');
    $('#pmPointsWrap').hidden = !p.points[lang].length;

    const gal = $('#pmGallery');
    if (p.gallery.length) {
      $('#pmGalleryWrap').hidden = false;
      gal.innerHTML = p.gallery.map((g, i) =>
        `<button type="button" class="${i === 0 ? 'active' : ''}" data-i="${i}">
           <img src="${g.src}" alt="${esc(g.alt)}"></button>`).join('');
      $$('button', gal).forEach(b => b.addEventListener('click', () => {
        $$('button', gal).forEach(x => x.classList.toggle('active', x === b));
        media.className = 'modal__media modal__media--cover';
        media.innerHTML = `<img class="contain" src="${p.gallery[+b.dataset.i].src}" alt="${esc(p.gallery[+b.dataset.i].alt)}">`;
      }));
    } else {
      $('#pmGalleryWrap').hidden = true;
      gal.innerHTML = '';
    }

    const act = $('#pmActions');
    act.innerHTML = ''; // concept-stage: no fake live links
    if (p.gallery.length) {
      const btn = document.createElement('button');
      btn.className = 'btn btn--ghost btn--sm';
      btn.textContent = lang === 'ar' ? 'عرض الشعار بحجم كامل' : 'View logo fullscreen';
      btn.addEventListener('click', () => openLightbox(p.gallery.map(g => g.src), 0, p.gallery[0].alt));
      act.appendChild(btn);
    } else {
      act.innerHTML = `<p class="modal__private">${esc(T().projActions.none)}</p>`;
    }
    openModal(pm);
  }

  /* ---------- lightbox ---------- */
  const lb = $('#lightbox');
  let lbImgs = [], lbIdx = 0, lbAlt = '';
  function openLightbox(imgs, idx, alt) {
    lbImgs = imgs; lbIdx = idx; lbAlt = alt || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    releaseTrap = trap(lb, closeLightbox);
    renderLb();
  }
  function renderLb() {
    $('#lbImg').src = lbImgs[lbIdx];
    $('#lbImg').alt = lbAlt;
    $('#lbCount').textContent = `${lbIdx + 1} / ${lbImgs.length}`;
    const one = lbImgs.length < 2;
    $('#lbPrev').style.visibility = one ? 'hidden' : 'visible';
    $('#lbNext').style.visibility = one ? 'hidden' : 'visible';
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = pm.hidden ? '' : 'hidden';
    releaseTrap?.(); releaseTrap = null;
  }
  const lbStep = (d) => { lbIdx = (lbIdx + d + lbImgs.length) % lbImgs.length; renderLb(); };
  $('#lbPrev').addEventListener('click', () => lbStep(-1));
  $('#lbNext').addEventListener('click', () => lbStep(1));
  $$('[data-close-lb]').forEach(el => el.addEventListener('click', closeLightbox));
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'ArrowRight') lbStep(1);
    if (e.key === 'ArrowLeft') lbStep(-1);
  });
  let tX = null;
  lb.addEventListener('touchstart', e => { tX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (tX == null) return;
    const dx = e.changedTouches[0].clientX - tX;
    if (Math.abs(dx) > 48) lbStep(dx < 0 ? 1 : -1);
    tX = null;
  }, { passive: true });

  /* ---------- CV modal ---------- */
  $$('[data-cv]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    openModal($('#cvModal'));
  }));

  /* ---------- copy / share ---------- */
  const copyText = async (txt) => {
    try {
      await navigator.clipboard.writeText(txt);
      toast(T().copied);
      return;
    } catch { /* fall through to legacy path */ }
    try {
      const ta = document.createElement('textarea');
      ta.value = txt;
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      toast(ok ? T().copied : T().copyFail);
    } catch { toast(T().copyFail); }
  };
  $$('[data-copy]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    copyText(b.dataset.copy);
  }));
  $('#copyLinkBtn').addEventListener('click', () => copyText(location.href));

  const shareBtn = $('#shareBtn');
  if (shareBtn) shareBtn.addEventListener('click', async () => {
    const data = { title: document.title, text: T().shareText, url: location.href };
    if (navigator.share) {
      try { await navigator.share(data); } catch { /* user cancelled */ }
    } else copyText(location.href);
  });

  /* ---------- composer (mailto — no fake backend) ---------- */
  const composer = $('#composer');
  composer.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#fName'), msg = $('#fMsg');
    let ok = true;
    if (!name.value.trim()) { name.setAttribute('aria-invalid', 'true'); ok = false; }
    else name.removeAttribute('aria-invalid');
    if (!msg.value.trim()) { msg.setAttribute('aria-invalid', 'true'); ok = false; }
    else msg.removeAttribute('aria-invalid');
    if (!ok) return;
    const topic = $('#fTopic');
    const topics = { job: T().fTopicJob, freelance: T().fTopicFreelance, other: T().fTopicOther };
    const subject = encodeURIComponent(`[${topics[topic.value]}] ${name.value.trim()}`);
    const body = encodeURIComponent(`${msg.value.trim()}\n\n— ${name.value.trim()}`);
    toast(T().formOk);
    location.href = `mailto:osama.khaled.ahmed.hassan@gmail.com?subject=${subject}&body=${body}`;
  });

  /* ---------- preloader ---------- */
  const pre = $('#preloader');
  const killPre = () => { pre.classList.add('done'); pre.removeAttribute('aria-hidden'); };
  if (document.readyState === 'complete') killPre();
  else addEventListener('load', killPre);
  setTimeout(killPre, 1600); // safety: never trap the visitor

  /* ---------- boot ---------- */
  applyLang(lang);
  history.replaceState(null, '', lang === 'ar' ? '?lang=ar' : location.pathname);
})();
