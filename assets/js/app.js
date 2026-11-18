/* =========================================================
   Osama Ahmed — interactions
   Vanilla JS. No dependencies, no tracking.
   ========================================================= */
'use strict';

document.documentElement.classList.add('js');

(function () {
  /* ── Small utilities ─────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reduced = () => reduceQuery.matches;
  const pad = (n) => String(n).padStart(2, '0');
  const esc = (value) => String(value).replace(/[&<>"']/g, (m) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]
  ));

  const state = {
    menuOpen: false,
    chapterOpen: false,
    chapterIndex: 0,
    certOpen: false,
    mindsetOpen: false
  };

  const siteHeader = $('#siteHeader');
  const mobileMenu = $('#mobileMenu');
  const menuToggle = $('#menuToggle');
  const body = document.body;

  function syncLock() {
    body.classList.toggle('is-locked', state.menuOpen || state.chapterOpen || state.certOpen);
  }

  function focusables(container) {
    return $$('a[href], button:not([disabled]), input:not([disabled]), select, textarea, iframe, [tabindex]:not([tabindex="-1"])', container)
      .filter((el) => el.getClientRects().length > 0 && el.getAttribute('aria-hidden') !== 'true');
  }

  function trapFocus(event, container) {
    if (event.key !== 'Tab') return;
    const items = focusables(container);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /* ── Toast ───────────────────────────────────────────── */
  const toast = $('#toast');
  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied to clipboard');
      return true;
    } catch (err) {
      const field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0';
      body.appendChild(field);
      field.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      body.removeChild(field);
      showToast(ok ? 'Copied to clipboard' : 'Copy failed — select the text manually');
      return ok;
    }
  }

  /* ── Header, progress, active nav ────────────────────── */
  const progressFill = $('#progressFill');
  let lastScroll = window.scrollY;

  function onScroll() {
    const y = window.scrollY;
    siteHeader.classList.toggle('is-scrolled', y > 16);

    if (y > 420 && y > lastScroll && !state.menuOpen && !state.chapterOpen && !state.certOpen) {
      siteHeader.classList.add('is-hidden');
    } else {
      siteHeader.classList.remove('is-hidden');
    }
    lastScroll = y;

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, y / scrollable)) : 0;
    progressFill.style.width = `${ratio * 100}%`;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navLinks = $$('.primary-nav a');
  const sectionIds = ['mindset', 'journey', 'ventures', 'capabilities', 'contact'];
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.nav === id));
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) navObserver.observe(section);
  });

  /* ── Reveal on scroll ────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  $$('.reveal').forEach((el) => revealObserver.observe(el));

  /* ── Mobile menu ─────────────────────────────────────── */
  let menuReturn = null;
  let menuTimer;

  function openMenu() {
    if (state.menuOpen) return;
    menuReturn = document.activeElement;
    clearTimeout(menuTimer);
    mobileMenu.hidden = false;
    state.menuOpen = true;
    menuToggle.setAttribute('aria-expanded', 'true');
    syncLock();
    requestAnimationFrame(() => mobileMenu.classList.add('is-open'));
    setTimeout(() => {
      const items = focusables(mobileMenu);
      if (items.length) items[0].focus({ preventScroll: true });
    }, 120);
  }

  function closeMenu(restoreFocus = true) {
    if (!state.menuOpen) return;
    state.menuOpen = false;
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    syncLock();
    clearTimeout(menuTimer);
    menuTimer = setTimeout(() => { mobileMenu.hidden = true; }, reduced() ? 0 : 600);
    if (restoreFocus && menuReturn) {
      menuToggle.focus({ preventScroll: true });
    }
  }

  menuToggle.addEventListener('click', () => {
    state.menuOpen ? closeMenu() : openMenu();
  });
  $('#mobileClose').addEventListener('click', () => closeMenu());

  $$('.mobile-menu__nav a, .mobile-menu__foot a, .mobile-menu a[href^="#"]').forEach((link) => {
    if (!link.getAttribute('href').startsWith('#')) return;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      closeMenu(false);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth' }), 30);
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1180 && state.menuOpen) closeMenu(false);
  });

  /* ── Mindset ─────────────────────────────────────────── */
  const mindset = $('#mindset');
  const mindsetHeading = $('#mindsetTitle');
  const mindsetToggle = $('#mindsetToggle');
  const mindsetPanel = $('#mindsetPanel');
  const mindsetClose = $('#mindsetClose');

  function setMindset(open) {
    if (state.mindsetOpen === open) return;
    state.mindsetOpen = open;
    mindset.classList.toggle('is-open', open);
    mindsetToggle.setAttribute('aria-expanded', String(open));
    mindsetPanel.setAttribute('aria-hidden', String(!open));

    if (open) {
      mindsetPanel.removeAttribute('inert');
      mindsetHeading.setAttribute('inert', '');
      setTimeout(() => mindsetClose.focus({ preventScroll: true }), reduced() ? 0 : 80);
    } else {
      mindsetPanel.setAttribute('inert', '');
      mindsetHeading.removeAttribute('inert');
      setTimeout(() => mindsetToggle.focus({ preventScroll: true }), reduced() ? 0 : 80);
    }
  }

  mindsetToggle.addEventListener('click', () => setMindset(true));
  mindsetClose.addEventListener('click', () => setMindset(false));

  /* ── Career timeline cards ───────────────────────────── */
  const chapterList = $('#chapterList');
  chapterList.innerHTML = OA_CHAPTERS.map((chapter, index) => `
    <li class="chapter-item">
      <button class="chapter-card" type="button" data-chapter="${index}" aria-haspopup="dialog">
        <span class="chapter-card__top">
          <span class="chapter-card__stage">${esc(chapter.stage)}</span>
          <span class="chapter-card__dot" aria-hidden="true"></span>
        </span>
        <span class="chapter-card__ghost" aria-hidden="true">${esc(chapter.num)}</span>
        <span class="chapter-card__name">${esc(chapter.title)}</span>
        <span class="chapter-card__foot">
          <span>Open chapter</span>
          <span class="chapter-card__arrow" aria-hidden="true">
            <svg class="icon"><use href="#i-arrow"/></svg>
          </span>
        </span>
      </button>
    </li>
  `).join('');

  const chaptersBlock = $('.chapters');
  const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        chaptersBlock.classList.add('is-visible');
        lineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  lineObserver.observe(chaptersBlock);

  /* ── Chapter overlay ─────────────────────────────────── */
  const chapterDialog = $('#chapterDialog');
  const chapterContent = $('#chapterContent');
  const chapterScroll = $('#chapterScroll');
  const chapterCounter = $('#chapterCounter');
  const chapterGhost = $('#chapterGhost');
  const chapterDots = $('#chapterDots');
  const chapterTitleLabel = $('#chapterPrevTitle');
  const chapterNextLabel = $('#chapterNextTitle');
  const chapterPrev = $('#chapterPrev');
  const chapterNext = $('#chapterNext');
  let chapterReturn = null;
  let chapterSwitching = false;
  let chapterTimer = null;

  chapterDots.innerHTML = OA_CHAPTERS.map((chapter, index) => (
    `<span data-dot="${index}"${index === 0 ? ' class="is-active"' : ''}></span>`
  )).join('');

  function trainingMarkup(training) {
    return training.map((item) => `
      <div class="training">
        <span class="training__icon" aria-hidden="true">
          <svg class="icon"><use href="#i-doc"/></svg>
        </span>
        <div class="training__body">
          <h4>${esc(item.title)}</h4>
          <p>${esc(item.org)}</p>
          <small>${esc(item.meta)}</small>
        </div>
        ${item.cert
          ? `<button class="view-cert" type="button" data-cert="${esc(item.cert)}">
               View Certificate
               <svg class="icon" aria-hidden="true"><use href="#i-arrow-up-right"/></svg>
             </button>`
          : '<span class="training__none">Training completed</span>'}
      </div>
    `).join('');
  }

  function chapterMarkup(chapter) {
    return `
      <p class="chapter__kicker">${esc(chapter.stage)} — ${esc(chapter.kicker)}</p>
      <h3 class="chapter__title" id="chapterTitle" tabindex="-1">${esc(chapter.title)}</h3>
      <div class="chapter__desc" id="chapterDescription">
        ${chapter.description.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}
      </div>

      <div class="chapter-block">
        <h4 class="chapter-block__title">Relevant areas</h4>
        <ul class="area-list">
          ${chapter.areas.map((area, i) => `<li>${esc(area)}<span>${pad(i + 1)}</span></li>`).join('')}
        </ul>
      </div>

      <div class="chapter-block">
        <h4 class="chapter-block__title">Learning outcomes</h4>
        <ul class="outcome-list">
          ${chapter.outcomes.map((outcome) => `<li>${esc(outcome)}</li>`).join('')}
        </ul>
      </div>

      <div class="chapter-block">
        <h4 class="chapter-block__title">Training &amp; certification</h4>
        <div class="training-list">
          ${trainingMarkup(chapter.training)}
        </div>
      </div>
    `;
  }

  function renderChapter(index, focusTitle) {
    const chapter = OA_CHAPTERS[index];
    chapterCounter.textContent = `${chapter.num} / ${pad(OA_CHAPTERS.length)}`;
    chapterGhost.textContent = chapter.num;
    chapterContent.innerHTML = chapterMarkup(chapter);

    chapterDots.querySelectorAll('span').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });

    chapterPrev.disabled = index === 0;
    chapterNext.disabled = index === OA_CHAPTERS.length - 1;
    chapterTitleLabel.textContent = index > 0 ? OA_CHAPTERS[index - 1].title : 'Start of journey';
    chapterNextLabel.textContent = index < OA_CHAPTERS.length - 1 ? OA_CHAPTERS[index + 1].title : 'End of journey';

    if (!reduced() && chapterContent.animate) {
      chapterContent.animate(
        [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 480, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    }

    if (focusTitle) {
      setTimeout(() => {
        const title = $('#chapterTitle', chapterContent);
        if (title) title.focus({ preventScroll: true });
      }, reduced() ? 0 : 160);
    }
  }

  function openChapter(index, trigger) {
    if (state.chapterOpen) return;
    clearTimeout(chapterTimer);
    state.chapterIndex = index;
    chapterReturn = trigger || document.activeElement;
    renderChapter(index, false);
    chapterDialog.hidden = false;
    state.chapterOpen = true;
    syncLock();
    chapterScroll.scrollTop = 0;
    requestAnimationFrame(() => chapterDialog.classList.add('is-open'));
    $('#chapterClose').focus({ preventScroll: true });
  }

  function closeChapter() {
    if (!state.chapterOpen) return;
    if (state.certOpen) closeCert(false);
    state.chapterOpen = false;
    chapterDialog.classList.remove('is-open');
    syncLock();
    clearTimeout(chapterTimer);
    chapterTimer = setTimeout(() => {
      chapterDialog.hidden = true;
      chapterContent.innerHTML = '';
      if (chapterReturn && document.contains(chapterReturn)) {
        chapterReturn.focus({ preventScroll: true });
      }
    }, reduced() ? 0 : 780);
  }

  function goToChapter(target) {
    if (chapterSwitching) return;
    if (target < 0 || target >= OA_CHAPTERS.length || target === state.chapterIndex) return;

    if (reduced()) {
      state.chapterIndex = target;
      renderChapter(target, true);
      chapterScroll.scrollTop = 0;
      return;
    }

    chapterSwitching = true;
    chapterContent.classList.add('is-leaving');
    setTimeout(() => {
      if (!state.chapterOpen) {
        chapterSwitching = false;
        return;
      }
      state.chapterIndex = target;
      renderChapter(target, true);
      chapterContent.classList.remove('is-leaving');
      chapterScroll.scrollTo({ top: 0, behavior: 'smooth' });
      chapterSwitching = false;
    }, 210);
  }

  chapterList.addEventListener('click', (event) => {
    const card = event.target.closest('[data-chapter]');
    if (!card) return;
    openChapter(Number(card.dataset.chapter), card);
  });

  $('#chapterClose').addEventListener('click', closeChapter);
  chapterDialog.addEventListener('click', (event) => {
    if (event.target.closest('[data-chapter-close]')) closeChapter();
  });
  chapterPrev.addEventListener('click', () => goToChapter(state.chapterIndex - 1));
  chapterNext.addEventListener('click', () => goToChapter(state.chapterIndex + 1));

  chapterContent.addEventListener('click', (event) => {
    const button = event.target.closest('[data-cert]');
    if (button) openCert(button.dataset.cert, button);
  });

  /* ── Ventures ────────────────────────────────────────── */
  const ventureList = $('#ventureList');
  ventureList.innerHTML = OA_PROJECTS.map((project) => `
    <article class="venture" data-project="${esc(project.id)}">
      <h3 class="venture__heading">
        <button class="venture__head" type="button" aria-expanded="false"
                aria-controls="venture-body-${esc(project.id)}"
                aria-label="${esc(project.name)} — ${esc(project.cat)}. Toggle details.">
          <span class="venture__num" aria-hidden="true">${esc(project.num)}</span>
          <span class="venture__name">${esc(project.name)}</span>
          <span class="venture__cat">${esc(project.cat)}</span>
          <span class="venture__toggle" aria-hidden="true">
            <svg class="icon"><use href="#i-plus"/></svg>
          </span>
        </button>
      </h3>
      <div class="venture__body" id="venture-body-${esc(project.id)}">
        <div class="venture__body-inner">
          <div class="venture__inner">
            <div>
              <p class="venture__desc">${esc(project.desc)}</p>
              <dl class="venture__meta">
                <div><dt>Role</dt><dd>${esc(project.role)}</dd></div>
                <div><dt>Status</dt><dd>${esc(project.status)}</dd></div>
              </dl>
              ${project.image ? `
                <figure class="venture__figure">
                  <img src="${esc(project.image.src)}" alt="${esc(project.image.alt)}" loading="lazy" decoding="async">
                  <figcaption>Wady Le3b — identity supplied by Osama</figcaption>
                </figure>` : ''}
            </div>
            <div>
              <p class="label">Key contributions</p>
              <ul class="venture__points" style="margin-top:1rem">
                ${project.points.map((point, i) => `<li><span>${pad(i + 1)}</span>${esc(point)}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  ventureList.addEventListener('click', (event) => {
    const head = event.target.closest('.venture__head');
    if (!head) return;
    const item = head.closest('.venture');
    const isOpen = item.classList.contains('is-open');

    $$('.venture', ventureList).forEach((venture) => {
      venture.classList.remove('is-open');
      $('.venture__head', venture).setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('is-open');
      head.setAttribute('aria-expanded', 'true');
    }
  });

  /* ── Capabilities ────────────────────────────────────── */
  $('#capabilityGrid').innerHTML = OA_SKILLS.map((group) => `
    <article class="capability">
      <div class="capability__head">
        <span>${esc(group.num)}</span>
        <h3>${esc(group.group)}</h3>
      </div>
      <ul>
        ${group.items.map((item) => `<li>${esc(item)}</li>`).join('')}
      </ul>
    </article>
  `).join('');

  $('#freelanceList').innerHTML = OA_FREELANCE
    .map((item) => `<li>${esc(item)}</li>`).join('');

  /* ── Certificate viewer ──────────────────────────────── */
  const certViewer = $('#certViewer');
  const certPanel = $('#certPanel');
  const certCanvas = $('#certCanvas');
  const certStage = $('#certStage');
  const certTitle = $('#certTitle');
  const certMeta = $('#certMeta');
  const certOpenLink = $('#certOpen');
  const certZoomLabel = $('#certZoom');
  const certZoomIn = $('#certZoomIn');
  const certZoomOut = $('#certZoomOut');
  const certFullscreen = $('#certFullscreen');
  let certReturn = null;
  let certZoomValue = 1;
  let certTimer = null;

  function applyZoom() {
    certCanvas.style.setProperty('--zoom', String(certZoomValue));
    certCanvas.classList.toggle('is-zoomed', certZoomValue > 1);
    certZoomLabel.textContent = `${Math.round(certZoomValue * 100)}%`;
  }

  function zoomCert(delta) {
    certZoomValue = Math.min(2.5, Math.max(1, certZoomValue + delta));
    applyZoom();
    if (certZoomValue === 1) certStage.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  function openCert(key, trigger) {
    const cert = OA_CERTIFICATES[key];
    if (!cert) return;

    clearTimeout(certTimer);
    certReturn = trigger || document.activeElement;
    state.certOpen = true;
    certZoomValue = 1;
    applyZoom();
    certTitle.textContent = cert.title;
    certMeta.textContent = `${cert.issuer} · ${cert.meta}`;
    certOpenLink.href = cert.src;
    certStage.scrollTop = 0;
    certStage.scrollLeft = 0;

    if (cert.type === 'pdf') {
      certCanvas.innerHTML = `<iframe src="${esc(cert.src)}" title="${esc(cert.alt || cert.title)}"></iframe>`;
      certZoomIn.disabled = true;
      certZoomOut.disabled = true;
    } else {
      const img = document.createElement('img');
      img.src = cert.src;
      img.alt = cert.alt || `${cert.title} certificate`;
      img.decoding = 'async';
      certCanvas.innerHTML = '';
      certCanvas.appendChild(img);
      certZoomIn.disabled = false;
      certZoomOut.disabled = false;
    }

    certViewer.hidden = false;
    syncLock();
    requestAnimationFrame(() => certViewer.classList.add('is-open'));
    setTimeout(() => $('#certClose').focus({ preventScroll: true }), reduced() ? 0 : 80);
  }

  function closeCert(restoreFocus = true) {
    if (!state.certOpen) return;
    state.certOpen = false;
    certViewer.classList.remove('is-open');
    syncLock();
    clearTimeout(certTimer);
    certTimer = setTimeout(() => {
      certViewer.hidden = true;
      certCanvas.innerHTML = '';
    }, reduced() ? 0 : 300);
    if (document.fullscreenElement && certPanel.contains(document.fullscreenElement)) {
      document.exitFullscreen().catch(() => {});
    }
    if (restoreFocus && certReturn && document.contains(certReturn)) {
      certReturn.focus({ preventScroll: true });
    }
  }

  $('#certClose').addEventListener('click', () => closeCert());
  certZoomIn.addEventListener('click', () => zoomCert(0.25));
  certZoomOut.addEventListener('click', () => zoomCert(-0.25));
  certStage.addEventListener('click', (event) => {
    if (event.target === certStage || event.target === certCanvas) closeCert();
  });

  if (!document.fullscreenEnabled) {
    certFullscreen.hidden = true;
  } else {
    certFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        certPanel.requestFullscreen().catch(() => showToast('Fullscreen is unavailable here'));
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
    document.addEventListener('fullscreenchange', () => {
      const label = $('span', certFullscreen);
      if (label) label.textContent = document.fullscreenElement ? 'Exit fullscreen' : 'Fullscreen';
    });
  }

  /* ── Copy & share ────────────────────────────────────── */
  $$('[data-copy]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      copyText(button.dataset.copy);
    });
  });

  const shareBtn = $('#shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const data = {
        title: 'Osama Ahmed — Business Development',
        text: 'Business development, sales and strategy — an interactive professional story.',
        url: window.location.href
      };
      if (navigator.share) {
        try {
          await navigator.share(data);
          return;
        } catch (err) {
          if (err && err.name === 'AbortError') return;
        }
      }
      copyText(data.url);
    });
  }

  /* ── Keyboard behaviour ──────────────────────────────── */
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (state.certOpen) {
        closeCert();
      } else if (state.chapterOpen) {
        closeChapter();
      } else if (state.menuOpen) {
        closeMenu();
      } else if (state.mindsetOpen) {
        setMindset(false);
      }
      return;
    }

    if (state.certOpen) {
      trapFocus(event, certViewer);
      if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        zoomCert(0.25);
      } else if (event.key === '-' || event.key === '_') {
        event.preventDefault();
        zoomCert(-0.25);
      } else if (event.key === '0') {
        event.preventDefault();
        certZoomValue = 1;
        applyZoom();
      }
      return;
    }

    if (state.chapterOpen) {
      trapFocus(event, chapterDialog);
      if (event.key === 'ArrowLeft') goToChapter(state.chapterIndex - 1);
      if (event.key === 'ArrowRight') goToChapter(state.chapterIndex + 1);
      return;
    }

    if (state.menuOpen) {
      trapFocus(event, mobileMenu);
    }
  });

  /* ── Footer year ─────────────────────────────────────── */
  $('#year').textContent = String(new Date().getFullYear());
})();
