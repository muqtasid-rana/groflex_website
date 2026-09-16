'use client';

import { useRef, useState } from 'react';
import { pricing } from '@/data/siteData';

const categories = Object.keys(pricing.creditMenu);

export default function CreditMenu() {
  const [active, setActive] = useState(categories[0]);
  const tabRefs = useRef([]);

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern
  const handleKey = (e, index) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (index + step + categories.length) % categories.length;
    setActive(categories[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="credit-menu">
      <div className="credit-menu__top">
        <h3 className="credit-menu__title">What a credit buys</h3>
        <div className="credit-menu__tabs" role="tablist" aria-label="Credit menu categories">
          {categories.map((c, i) => (
            <button
              key={c}
              ref={(el) => { tabRefs.current[i] = el; }}
              type="button"
              role="tab"
              id={`credit-tab-${c}`}
              aria-selected={active === c}
              aria-controls="credit-panel"
              tabIndex={active === c ? 0 : -1}
              className={active === c ? 'is-active' : ''}
              onClick={() => setActive(c)}
              onKeyDown={(e) => handleKey(e, i)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ul className="credit-menu__list" role="tabpanel" id="credit-panel" aria-labelledby={`credit-tab-${active}`}>
        {pricing.creditMenu[active].map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <span className="credit-menu__dots" aria-hidden="true" />
            <strong>
              {item.credits} {item.credits === 1 ? 'credit' : 'credits'}
            </strong>
          </li>
        ))}
      </ul>
      <p className="credit-menu__note">Two revision rounds included. Rush delivery (under 24 hours) is 1.5× credits.</p>
    </div>
  );
}
