'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Button from '@/components/Button/Button';
import { pricing, aOrAn } from '@/data/siteData';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

// Line drawings in a 200×200 box. Each one enters at the top centre (100,0)
// and leaves at the bottom centre (100,200) so the connecting line flows
// through. Separate strokes are separate strings; only absolute M/L/C/A are used.
const drawings = {
  // A phone ringing
  phone: [
    'M100 0 L100 30 L126 30 A14 14 0 0 1 140 44 L140 156 A14 14 0 0 1 126 170 L74 170 A14 14 0 0 1 60 156 L60 44 A14 14 0 0 1 74 30 L100 30',
    'M90 46 L110 46',
    'M94 152 A6 6 0 1 0 106 152 A6 6 0 1 0 94 152',
    'M152 76 A30 30 0 0 1 152 124',
    'M164 62 A48 48 0 0 1 164 138',
    'M48 76 A30 30 0 0 0 48 124',
    'M36 62 A48 48 0 0 0 36 138',
    'M100 170 L100 200',
  ],
  // A paper plane, for the pilot
  plane: [
    'M100 0 C100 45 30 55 28 96 L172 52 L110 160 L92 112 L28 96',
    'M92 112 L172 52',
    'M34 142 L62 132',
    'M46 164 L74 154',
    'M110 160 C112 180 100 186 100 200',
  ],
  // A coin, for paying only once you like it
  coin: [
    'M100 0 L100 40 A60 60 0 0 1 100 160 A60 60 0 0 1 100 40',
    'M121 80 C117 70 110 66 100 66 C88 66 80 72 80 83 C80 104 120 96 120 117 C120 128 112 134 100 134 C88 134 80 129 78 120',
    'M100 54 L100 146',
    'M164 42 L178 28',
    'M170 60 L188 58',
    'M148 26 L150 10',
    'M100 160 L100 200',
  ],
  // Rising bars, for scaling up
  growth: [
    'M100 0 C100 50 40 80 40 112 L78 84 L102 98 L152 50',
    'M134 50 L152 50 L152 68',
    'M48 170 L48 136 L70 136 L70 170',
    'M86 170 L86 116 L108 116 L108 170',
    'M124 170 L124 92 L146 92 L146 170',
    'M34 170 L166 170',
    'M100 170 L100 200',
  ],
};

// Scales and moves an absolute M/L/C/A path from the 200-unit box onto the page
function placePath(d, scale, dx, dy) {
  const tokens = d.match(/[MLCA]|-?\d*\.?\d+/g);
  const out = [];
  let cmd = 'M';
  for (let i = 0; i < tokens.length;) {
    const t = tokens[i];
    if (/[MLCA]/.test(t)) {
      cmd = t;
      out.push(t);
      i += 1;
    } else if (cmd === 'A') {
      const [rx, ry, rot, large, sweep, x, y] = tokens.slice(i, i + 7).map(Number);
      out.push(rx * scale, ry * scale, rot, large, sweep, x * scale + dx, y * scale + dy);
      i += 7;
    } else {
      out.push(Number(t) * scale + dx, Number(tokens[i + 1]) * scale + dy);
      i += 2;
    }
  }
  return out.map((v) => (typeof v === 'number' ? Math.round(v * 10) / 10 : v)).join(' ');
}

// A vertical S-curve between two points
const connector = (x1, y1, x2, y2) => {
  const mid = (y2 - y1) / 2;
  return `M${x1} ${y1} C${x1} ${y1 + mid} ${x2} ${y2 - mid} ${x2} ${y2}`;
};

export default function HowItWorks() {
  const { pilot } = pricing;
  const steps = [
    {
      drawing: 'phone',
      title: 'Book a call',
      text: 'Twenty minutes on how your agency works: what you sell, who your clients are and where your team is stretched.',
      cta: <Button variant="brand" size="md" tallyConfig={tally}>Book a call</Button>,
    },
    {
      drawing: 'plane',
      title: `Get ${aOrAn(pilot.credits)} ${pilot.credits}-credit pilot. $0 upfront.`,
      text: 'Pick a real client task, like a landing page, a brand kit or a set of app screens. We deliver it under your brand, inside your tools.',
    },
    {
      drawing: 'coin',
      title: 'Pay only if you like it',
      text: `Happy with the work? Pay $${pilot.price.usd}. Not happy? You owe nothing. No contract, no card on file.`,
      cta: <Button variant="brand" size="md" tallyConfig={tally}>Start your pilot</Button>,
    },
    {
      drawing: 'growth',
      title: 'Scale without hiring',
      text: 'Keep going with credit packs, a monthly plan or a dedicated team. The same people and the same standards, every month.',
      cta: <Button variant="brand" size="md" href="#pricing">See pricing</Button>,
    },
  ];

  const rootRef = useRef(null);
  const headRef = useRef(null);
  const artRefs = useRef([]);
  const pathRefs = useRef([]);
  const track = useRef({ total: 0, pieces: [], lens: [], ys: [], current: 0, target: 0, frame: 0 });
  const [layout, setLayout] = useState({ width: 0, height: 0, pieces: [] });

  // Rebuild the line from where the drawings currently sit on the page
  const measure = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const rb = root.getBoundingClientRect();
    const hb = headRef.current.getBoundingClientRect();
    const pieces = [];
    let x = rb.width / 2;
    let y = hb.bottom - rb.top + 24;

    artRefs.current.forEach((el, i) => {
      const b = el.getBoundingClientRect();
      const scale = b.width / 200;
      const dx = b.left - rb.left;
      const dy = b.top - rb.top;
      const inX = dx + 100 * scale;
      pieces.push(connector(x, y, inX, dy));
      drawings[steps[i].drawing].forEach((d) => pieces.push(placePath(d, scale, dx, dy)));
      x = inX;
      y = dy + 200 * scale;
    });

    // Tail off towards the case studies. On phones the drawings sit in a left
    // column, so the tail stays in that column instead of crossing the text.
    const narrow = window.matchMedia('(max-width: 760px)').matches;
    pieces.push(connector(x, y, narrow ? x : rb.width / 2, rb.height));
    setLayout({ width: rb.width, height: rb.height, pieces });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(rootRef.current);
    // Text can reflow once the web fonts arrive, moving the drawings
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  // Once the paths render, record their lengths and how far down the page each point is
  useLayoutEffect(() => {
    const t = track.current;
    t.lens = [];
    t.ys = [];
    t.pieces = [];
    let start = 0;
    let maxY = 0;
    layout.pieces.forEach((_, i) => {
      const el = pathRefs.current[i];
      if (!el) return;
      const len = el.getTotalLength();
      el.style.strokeDasharray = `${len} ${len}`;
      t.pieces.push({ el, start, len });
      for (let s = 0; s <= len; s += 6) {
        maxY = Math.max(maxY, el.getPointAtLength(s).y);
        t.lens.push(start + s);
        t.ys.push(maxY);
      }
      start += len;
    });
    t.total = start;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) t.current = t.total;
    paint();
  }, [layout]); // eslint-disable-line react-hooks/exhaustive-deps

  // Draws each piece up to the current overall length
  const paint = () => {
    const t = track.current;
    t.pieces.forEach(({ el, start, len }) => {
      const drawn = Math.min(Math.max(t.current - start, 0), len);
      el.style.strokeDashoffset = `${len - drawn}`;
    });
    rootRef.current?.classList.toggle('is-complete', t.total > 0 && t.current >= t.total - 1);
  };

  // The line's tip follows a point 60% down the viewport, easing towards it
  useEffect(() => {
    const t = track.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const tick = () => {
      t.frame = 0;
      const diff = t.target - t.current;
      t.current = Math.abs(diff) < 0.5 ? t.target : t.current + diff * 0.14;
      paint();
      if (t.current !== t.target) t.frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const root = rootRef.current;
      if (!root || !t.ys.length) return;
      const tipY = window.innerHeight * 0.6 - root.getBoundingClientRect().top;
      // Last sample whose furthest-down point is above the tip
      let lo = 0;
      let hi = t.ys.length - 1;
      if (tipY < t.ys[0]) {
        t.target = 0;
      } else {
        while (lo < hi) {
          const mid = (lo + hi + 1) >> 1;
          if (t.ys[mid] <= tipY) lo = mid;
          else hi = mid - 1;
        }
        t.target = lo === t.ys.length - 1 ? t.total : t.lens[lo];
      }
      if (!t.frame) t.frame = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(t.frame);
      // Otherwise the next run thinks a frame is still queued and never animates again
      t.frame = 0;
    };
  }, [layout]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="process" className="ah-how">
      <div className="container ah-how__inner" ref={rootRef}>
        <svg
          className="ah-how__line"
          width={layout.width}
          height={layout.height}
          viewBox={`0 0 ${layout.width || 1} ${layout.height || 1}`}
          aria-hidden="true"
          focusable="false"
        >
          {layout.pieces.map((d, i) => (
            <path key={i} ref={(el) => { pathRefs.current[i] = el; }} d={d} />
          ))}
        </svg>

        <header className="ah-head" ref={headRef}>
          <p className="ah-eyebrow">The process</p>
          <h2 className="ah-head__title">How it <em>works</em></h2>
        </header>

        <ol className="ah-steps">
          {steps.map((s, i) => (
            <li key={s.title} className={`ah-step ${i % 2 ? 'ah-step--flip' : ''}`}>
              <div className="ah-step__text">
                <span className="ah-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="ah-step__title">{s.title}</h3>
                <p className="ah-step__desc">{s.text}</p>
                {s.cta && <div className="ah-step__cta">{s.cta}</div>}
              </div>
              <div className="ah-step__art" ref={(el) => { artRefs.current[i] = el; }} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
