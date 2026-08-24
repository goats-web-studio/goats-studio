'use client';

import { useState } from 'react';

/* Скриншот кейса. Пока файла в /public/cases нет — остаётся CSS-макет,
   как только он появится, картинка подменяет макет сама. */
export function CaseShot({ src, chrome }: { src: string; chrome: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`mock__shot${loaded ? ' is-loaded' : ''}${chrome ? ' has-chrome' : ''}`}
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onLoad={(e) => e.currentTarget.naturalWidth > 0 && setLoaded(true)}
    />
  );
}
