'use client';

import { useEffect } from 'react';

// Reveals every `[data-reveal]` block on the agency home as it scrolls into view.
// It sets `data-in` rather than a class so React re-renders never undo it; the
// motion itself lives in agency.css.
export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.ah [data-reveal]:not([data-in])');
    const show = (el) => el.setAttribute('data-in', '');

    if (!('IntersectionObserver' in window)) {
      els.forEach(show);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
