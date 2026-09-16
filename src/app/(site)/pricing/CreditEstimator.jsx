'use client';

import { useState } from 'react';
import { pricing } from '@/data/siteData';

const items = Object.values(pricing.creditMenu).flat().filter((item) => item.estimator);

// Smallest plan whose monthly credits cover `total`, or null if none does
function pickPlan(plans, total) {
  return plans.find((p) => p.credits >= total) ?? null;
}

export default function CreditEstimator({ plans, packs, money }) {
  const [counts, setCounts] = useState({});

  const change = (label, delta) =>
    setCounts((prev) => ({ ...prev, [label]: Math.max(0, (prev[label] ?? 0) + delta) }));

  const total = items.reduce((sum, item) => sum + (counts[item.label] ?? 0) * item.credits, 0);
  const plan = pickPlan(plans, total);
  const smallestPack = packs[0];

  let result;
  if (total === 0) {
    result = <p>Add the work you send out in a typical month.</p>;
  } else if (!plan) {
    result = (
      <p>
        <strong>{total} credits a month.</strong> That&apos;s beyond Scale. A Dedicated Team will cost you less.
      </p>
    );
  } else {
    result = (
      <p>
        <strong>{total} credits a month. {plan.name} fits you</strong> at {money(plan.price)}/month.
        {total <= smallestPack.credits && (
          <> For a one-off job, a {smallestPack.credits}-credit pack at {money(smallestPack.price)} covers it.</>
        )}
      </p>
    );
  }

  return (
    <div className="estimator">
      <h3 className="estimator__title">Which plan fits you?</h3>
      <ul className="estimator__list">
        {items.map((item) => {
          const count = counts[item.label] ?? 0;
          return (
            <li key={item.label}>
              <span className="estimator__label">
                {item.label}
                <small>{item.credits} cr each</small>
              </span>
              <span className="estimator__stepper">
                <button type="button" onClick={() => change(item.label, -1)} disabled={count === 0} aria-label={`Fewer: ${item.label}`}>
                  −
                </button>
                <output aria-live="polite">{count}</output>
                <button type="button" onClick={() => change(item.label, 1)} aria-label={`More: ${item.label}`}>
                  +
                </button>
              </span>
            </li>
          );
        })}
      </ul>
      <div className="estimator__result" aria-live="polite">{result}</div>
    </div>
  );
}
