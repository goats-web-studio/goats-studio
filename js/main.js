(() => {
  'use strict';

  const $  = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

  /* ---------- Мобильное меню ---------- */
  const burger = $('#burger');
  const nav = $('#nav');

  const closeNav = () => {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  $$('a', nav).forEach(a => a.addEventListener('click', closeNav));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });

  /* ---------- Шапка и полоса прогресса ---------- */
  const header = $('#header');
  const progress = $('#progress');
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? Math.min(1, y / max) * 100 : 0) + '%';
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Появление блоков + счётчик результата ---------- */
  const slow = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const countUp = el => {
    const target = parseFloat(el.dataset.count);
    if (!Number.isFinite(target) || slow) return;
    const dur = 900;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const reveals = $$('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        $$('.res__val[data-count]', entry.target).forEach(countUp);
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  /* ---------- Активный пункт навигации ---------- */
  const sections = ['home', 'services', 'cases', 'about', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const links = new Map($$('.nav a').map(a => [a.getAttribute('href').slice(1), a]));

    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(a => a.classList.remove('is-active'));
        links.get(entry.target.id)?.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(s => spy.observe(s));
  }

  /* ---------- Превью проектов ----------
     Если в assets/ лежит скриншот — показываем его вместо CSS-макета. */
  $$('.mock__shot').forEach(img => {
    const show = () => img.closest('.mock')?.classList.add('has-shot');
    if (img.complete) {
      if (img.naturalWidth > 0) show();
    } else {
      img.addEventListener('load', show, { once: true });
    }
  });

  /* ---------- Год в подвале ---------- */
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
