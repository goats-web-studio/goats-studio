'use client';

import { useEffect, useRef } from 'react';

/* Живое поле первого экрана: точки дрейфуют, ближние соединяются линиями,
   курсор расталкивает соседей и притягивает к себе связи.

   Canvas 2D, без библиотек. three.js ради такого эффекта добавил бы ~150 КБ
   в бандл и отодвинул первый рендер — плохая реклама для студии, которая
   продаёт быстрые сайты. Всё, что здесь нужно, рисуется двумя циклами. */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    const host = canvas?.parentElement;
    const stage = canvas?.closest<HTMLElement>('.hero__visual');
    if (!canvas || !ctx || !host) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    /* Цвета берём из темы, чтобы поле меняло цвет вместе с акцентом. */
    const rootStyle = getComputedStyle(document.documentElement);
    const accent = rootStyle.getPropertyValue('--accent').trim() || '#3d5afe';
    const quiet = rootStyle.getPropertyValue('--line-2').trim() || '#d3d9e3';

    const LINK = 116; // на каком расстоянии две точки соединяются линией
    const REACH = 165; // радиус, в котором курсор влияет на точки
    const PUSH = 26; // насколько сильно расталкивает

    type Point = { x: number; y: number; vx: number; vy: number; rx: number; ry: number };
    let points: Point[] = [];
    let w = 0;
    let h = 0;
    let rect = new DOMRect();

    /* target — куда уехал курсор, cur — сглаженное значение: без этого
       поле дёргается вслед за каждым событием мыши.
       power гасит влияние курсора, когда он ушёл со страницы. */
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let wanted = 0;
    let power = 0;

    const measure = () => {
      rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        points = [];
        return false;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      /* Плотность от площади: на широком экране точек больше, но не бесконечно —
         связи считаются попарно, и цена растёт квадратично. */
      const count = Math.max(22, Math.min(84, Math.round((w * h) / 9400)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        rx: 0,
        ry: 0,
      }));

      cur.x = target.x = w / 2;
      cur.y = target.y = h / 2;
      return true;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      power += (wanted - power) * 0.06;
      cur.x += (target.x - cur.x) * 0.09;
      cur.y += (target.y - cur.y) * 0.09;

      /* Дрейф + смещение от курсора. Смещение считается на отрисовке,
         а не подмешивается в скорость: тогда точки сами возвращаются
         на место, как только курсор ушёл, и поле не «выдувается». */
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -12) p.x = w + 12;
        else if (p.x > w + 12) p.x = -12;
        if (p.y < -12) p.y = h + 12;
        else if (p.y > h + 12) p.y = -12;

        const dx = p.x - cur.x;
        const dy = p.y - cur.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REACH && dist > 0.001) {
          const force = (1 - dist / REACH) ** 2 * PUSH * power;
          p.rx = p.x + (dx / dist) * force;
          p.ry = p.y + (dy / dist) * force;
        } else {
          p.rx = p.x;
          p.ry = p.y;
        }
      }

      /* Связи между соседями */
      ctx.lineWidth = 1;
      ctx.strokeStyle = quiet;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.rx - b.rx;
          const dy = a.ry - b.ry;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK) * 0.6;
          ctx.beginPath();
          ctx.moveTo(a.rx, a.ry);
          ctx.lineTo(b.rx, b.ry);
          ctx.stroke();
        }
      }

      /* Связи с курсором и сами точки */
      for (const p of points) {
        const dist = Math.hypot(p.rx - cur.x, p.ry - cur.y);
        const near = dist < REACH ? (1 - dist / REACH) * power : 0;

        if (near > 0.01) {
          ctx.globalAlpha = near * 0.5;
          ctx.strokeStyle = accent;
          ctx.beginPath();
          ctx.moveTo(p.rx, p.ry);
          ctx.lineTo(cur.x, cur.y);
          ctx.stroke();
          ctx.strokeStyle = quiet;
        }

        ctx.globalAlpha = 0.35 + near * 0.65;
        ctx.fillStyle = near > 0.15 ? accent : quiet;
        ctx.beginPath();
        ctx.arc(p.rx, p.ry, 1.6 + near * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      /* Панели над полем сдвигаются слабее курсора — дешёвая глубина. */
      if (stage) {
        stage.style.setProperty('--px', ((cur.x / w - 0.5) * 2 * power).toFixed(3));
        stage.style.setProperty('--py', ((cur.y / h - 0.5) * 2 * power).toFixed(3));
      }
    };

    let raf = 0;
    let onScreen = true;
    let visible = !document.hidden;

    const canRun = () => points.length > 0 && onScreen && visible && !reduced.matches;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf && canRun()) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const rebuild = () => {
      stop();
      if (measure()) {
        if (reduced.matches) draw(); // один статичный кадр вместо анимации
        else start();
      }
    };

    rebuild();

    /* Прямоугольник кешируем: читать его на каждом движении мыши —
       значит заставлять браузер пересчитывать раскладку. */
    let rectPending = false;
    const refreshRect = () => {
      if (rectPending) return;
      rectPending = true;
      requestAnimationFrame(() => {
        rect = host.getBoundingClientRect();
        rectPending = false;
      });
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      wanted = 1;
    };
    const onLeave = () => {
      wanted = 0;
    };

    const ro = new ResizeObserver(rebuild);
    ro.observe(host);

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(host);

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) start();
      else stop();
    };
    const onMotionChange = () => rebuild();

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);
    window.addEventListener('scroll', refreshRect, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    reduced.addEventListener('change', onMotionChange);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
      window.removeEventListener('scroll', refreshRect);
      document.removeEventListener('visibilitychange', onVisibility);
      reduced.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <div className="hero__field" aria-hidden="true">
      <canvas ref={ref} />
    </div>
  );
}
