'use client';

import { useEffect, useRef, useState } from 'react';

/* Скриншот кейса лежит поверх CSS-макета и проявляется, когда загрузится.
   Если файла нет — остаётся видимым макет. */
export function CaseShot({ src, chrome }: { src: string; chrome: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  /* Картинка может догрузиться раньше, чем React навесит onLoad,
     тогда событие не придёт — проверяем состояние вручную после монтирования. */
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={`mock__shot${loaded ? ' is-loaded' : ''}${chrome ? ' has-chrome' : ''}`}
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onLoad={(e) => e.currentTarget.naturalWidth > 0 && setLoaded(true)}
    />
  );
}
