'use client';

import { useEffect } from 'react';

/* Два эффекта на курсор поверх готовой разметки:
   — карточки кейсов наклоняются в сторону курсора (перспектива на .cases);
   — тёмные блоки подсвечиваются пятном, которое идёт за курсором.

   Оба только для мыши. На тач-устройстве наклон невозможно снять — палец
   убрали, а карточка осталась перекошенной, — и подсветке не за чем идти. */
export function PointerEffects() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduced.matches) return;

    const TILT = 4.5; // градусов на краю карточки; больше выглядит дёшево и мешает читать

    const cards = [...document.querySelectorAll<HTMLElement>('.case')];
    const glows = [...document.querySelectorAll<HTMLElement>('[data-glow]')];
    const cleanup: (() => void)[] = [];

    for (const card of cards) {
      const onMove = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--ry', `${(x * TILT * 2).toFixed(2)}deg`);
        card.style.setProperty('--rx', `${(-y * TILT * 2).toFixed(2)}deg`);
      };
      const onLeave = () => {
        card.style.removeProperty('--rx');
        card.style.removeProperty('--ry');
      };

      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', onLeave);
      cleanup.push(() => {
        card.removeEventListener('pointermove', onMove);
        card.removeEventListener('pointerleave', onLeave);
        onLeave();
      });
    }

    for (const box of glows) {
      const onMove = (e: PointerEvent) => {
        const r = box.getBoundingClientRect();
        box.style.setProperty('--mx', `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
        box.style.setProperty('--my', `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
        box.classList.add('is-lit');
      };
      const onLeave = () => box.classList.remove('is-lit');

      box.addEventListener('pointermove', onMove);
      box.addEventListener('pointerleave', onLeave);
      cleanup.push(() => {
        box.removeEventListener('pointermove', onMove);
        box.removeEventListener('pointerleave', onLeave);
        onLeave();
      });
    }

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return null;
}
