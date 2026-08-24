'use client';

import { useEffect } from 'react';

/* Один клиентский компонент на весь сайт: полоса прогресса, состояние шапки,
   появление блоков и подсветка активного пункта меню. Разметку не трогает —
   работает по классам, которые отрисовал сервер. */
export function ScrollEffects() {
  useEffect(() => {
    const header = document.getElementById('header');
    const progress = document.getElementById('progress');
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        header?.classList.toggle('is-scrolled', y > 8);
        if (progress) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          progress.style.width = `${(max > 0 ? Math.min(1, y / max) : 0) * 100}%`;
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const reveals = [...document.querySelectorAll<HTMLElement>('.reveal')];
    const slow = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target) || slow) return;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / 900);
        el.textContent = String(Math.round(target * (1 - (1 - p) ** 4)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add('is-in');
            entry.target
              .querySelectorAll<HTMLElement>('[data-count]')
              .forEach(countUp);
            obs.unobserve(entry.target);
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      );
      reveals.forEach((el) => io!.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('is-in'));
    }

    /* Подсветка активного пункта навигации */
    const links = new Map(
      [...document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#"]')].map((a) => [
        a.getAttribute('href')!.slice(1),
        a,
      ]),
    );
    const sections = [...links.keys()]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let spy: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window && sections.length) {
      spy = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            links.forEach((a) => a.classList.remove('is-active'));
            links.get(entry.target.id)?.classList.add('is-active');
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      sections.forEach((s) => spy!.observe(s));
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
      spy?.disconnect();
    };
  }, []);

  return null;
}
