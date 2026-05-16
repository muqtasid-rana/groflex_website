'use client';

// ============================================================
// THE GAMEPLAN — Groflex lead magnet (magazine version)
// ------------------------------------------------------------
// FILL IN:
//   1. OPENAI_API_KEY  → currently read from NEXT_PUBLIC_OPENAI_API_KEY
//   2. EmailJS IDs are reused from the Contact form. Make sure
//      the EMAILJS_TEMPLATE_ID below is a template that emails
//      the user (uses {{to_email}} / {{email}} as the recipient).
// ============================================================

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

// EmailJS — same IDs as Contact form
const EMAILJS_SERVICE_ID = 'service_hnb5hs6';
const EMAILJS_TEMPLATE_ID = 'template_9q8nfdx';
const EMAILJS_PUBLIC_KEY = 'uvpyAU7zlrphbVVGE';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  STAGES,
  STAGE_LIST,
  CONSTRAINTS,
  DIAGNOSTIC_QUESTIONS,
  BUSINESS_CATEGORIES,
  getCategoryMeta,
  optionLabel,
  routeToStage,
} from './stageContent';
import Book from './Book';
import './gameplan.css';

const SYSTEM_PROMPT = `You are a direct, no-fluff founder advisor. You write like a senior operator who has built and sold companies — kind but unflinching. No emojis. No "great question" filler. Always address the founder as "you". Short load-bearing sentences. Generic advice that could apply to any founder is a failure state and must be rejected.`;

function buildUserPrompt({ stage, blocker, goal, name, category, diagnostic }) {
  return `=== PRIMARY INPUTS (the personalised content MUST be built from these) ===
Founder's exact words on their biggest blocker:
"""${blocker}"""

Founder's exact words on their 90-day goal:
"""${goal}"""

Business category the founder picked: ${category.label} — ${category.sub}

=== HOW TO USE THE PRIMARY INPUTS — non-negotiable ===
- The blocker and the goal above ARE the brief. Treat them like a client brief.
- Reference SPECIFIC NOUNS, NUMBERS, and PRODUCT TYPES the founder used. If they wrote "SaaS", say SaaS. If they wrote "5 clients" or "$2k retainer", use those exact numbers. If they wrote "I keep redesigning my offer", quote that behaviour back at them.
- Use vocabulary, metrics, and tactics native to a ${category.label.toLowerCase()} business. For SaaS use MRR/churn/activation, for Service use retainers/utilisation/proposal close-rate, for Retail use AOV/CAC/inventory turn, for Creator use audience-to-buyer rate, for Local use foot-traffic/repeat-rate. Do not give advice that belongs to a different business model.
- If the blocker mentions pricing, the offer/positioning content carries the most weight. If it mentions hiring, the team content does. If it mentions audience, content/marketing does.
- Anything you write that could apply to a random founder = failure. Re-read the blocker and goal. Be specific.

=== TEMPLATE CONTEXT (only for tone & structure, NOT for the personalised content) ===
Founder name: ${name || 'the founder'}
Business model: ${category.label}
Diagnosed stage: ${stage.code} — ${stage.name}
The biggest challenge tag for this stage: ${stage.biggestChallenge}
Diagnostic answers (use only to ground revenue/maturity tone):
  - Revenue/state: ${diagnostic.q1 || 'not given'}
  - Day-to-day: ${diagnostic.q2 || 'not given'}
  - What feels most true: ${diagnostic.q3 || 'not given'}

=== OUTPUT SHAPE ===
Return EXACTLY one JSON object — no preamble, no trailing text, no markdown:

{
  "constraints": {
    "identity":    { "pain": "...", "score": 0, "priority": 0, "howTo": "..." },
    "positioning": { "pain": "...", "score": 0, "priority": 0, "howTo": "..." },
    "offer":       { "pain": "...", "score": 0, "priority": 0, "howTo": "..." },
    "content":     { "pain": "...", "score": 0, "priority": 0, "howTo": "..." },
    "marketing":   { "pain": "...", "score": 0, "priority": 0, "howTo": "..." },
    "team":        { "pain": "...", "score": 0, "priority": 0, "howTo": "..." }
  },
  "focus": {
    "area": "identity|positioning|offer|content|marketing|team",
    "problem": "...",
    "cause": "...",
    "whenSolved": "..."
  },
  "bottomLine": "...",
  "nextStageTeaser": "..."
}

=== FIELD RULES ===
- constraints[x].pain (30–45 words): Describe the SPECIFIC way that constraint hurts THIS founder given what they wrote in their blocker. Reuse their language. No generic stage-typical commentary.
- constraints[x].score (0–100): Current STRENGTH of that constraint for this founder (higher = stronger). The weakest score IS the focus area. Make scores reflect the blocker — whichever constraint their blocker is actually about gets the LOWEST score.
- constraints[x].priority (1–6): Priority 1 = the focus (lowest score). Priorities 2 and 3 = next most leveraged. 4–6 = deferred for now. Each priority must be unique 1–6.
- constraints[x].howTo (35–55 words): The single most leveraged action for THIS constraint over the next 30 days, written to serve their stated 90-day goal. Specific, concrete, action-oriented. Reference their goal numbers/nouns where it fits.
- focus.area: MUST be the constraint id with the lowest score.
- focus.problem (40–60 words): Quote the blocker back at them. Name the visible symptom they keep blaming. Use their exact phrasing where you can.
- focus.cause (40–60 words): The actual underlying cause — explain why the surface blocker is a symptom of the focus constraint. Reference their words.
- focus.whenSolved (30–45 words): Start with "Imagine when this is solved…" and paint a future state that explicitly mentions their stated 90-day goal.
- bottomLine (60–90 words): A closing argument that references BOTH the blocker and the goal verbatim. Lands the punch and earns the partnership CTA without sounding salesy.
- nextStageTeaser (30–50 words): Preview the next stage. Reference their goal — what unlocks once they hit it.

Return ONLY the JSON. No code fences.`;
}

// ============================================================
// Component
// ============================================================
export default function GameplanClient() {
  const [phase, setPhase] = useState('quiz'); // 'quiz' | 'loading' | 'result'
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: '',
    q1: '', q1_other: '',
    q2: [], q2_other: '',
    q3: '', q3_other: '',
    blocker: '',
    goal: '',
  });
  const [errors, setErrors] = useState({});
  const [stageId, setStageId] = useState(null);
  const [ai, setAi] = useState(null);
  const [aiError, setAiError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const bookRef = useRef(null);

  // Quiz steps: name, email, category, q1, q2, q3, blocker, goal
  const totalSteps = 8;
  const stage = stageId ? STAGES[stageId] : null;

  const setField = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: '' }));
  };

  const toggleQ2 = (value) => {
    setForm((p) => {
      const has = p.q2.includes(value);
      const next = has ? p.q2.filter((v) => v !== value) : [...p.q2, value];
      return { ...p, q2: next };
    });
    setErrors((p) => ({ ...p, q2: '' }));
  };

  const validate = () => {
    const e = {};
    if (step === 0 && !form.name.trim()) e.name = 'Tell us what to call you.';
    if (step === 1) {
      if (!form.email.trim()) e.email = 'Email is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email looks off.';
    }
    if (step === 2 && !form.category) e.category = 'Pick the closest match.';
    if (step === 3) {
      if (!form.q1) e.q1 = 'Pick one.';
      else if (form.q1 === 'other' && form.q1_other.trim().length < 5) e.q1 = 'Describe your situation in a sentence.';
    }
    if (step === 4) {
      if (!form.q2 || form.q2.length === 0) e.q2 = 'Pick at least one — multiple are fine.';
      else if (form.q2.includes('other') && form.q2_other.trim().length < 5) e.q2 = 'Describe your “Other” pick in a sentence.';
    }
    if (step === 5) {
      if (!form.q3) e.q3 = 'Pick one.';
      else if (form.q3 === 'other' && form.q3_other.trim().length < 5) e.q3 = 'Describe your situation in a sentence.';
    }
    if (step === 6 && form.blocker.trim().length < 10) e.blocker = 'Give us at least one full sentence.';
    if (step === 7 && form.goal.trim().length < 10) e.goal = 'Tell us what a win looks like.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    if (step < totalSteps - 1) setStep(step + 1);
    else submit();
  };

  const back = () => step > 0 && setStep(step - 1);

  async function submit() {
    setPhase('loading');
    setAiError('');
    const routedId = routeToStage({ q1: form.q1, q2: form.q2, q3: form.q3 });
    setStageId(routedId);
    const routedStage = STAGES[routedId];
    const category = getCategoryMeta(form.category);
    const diagnostic = {
      q1: humanAnswer(0, form, form.category),
      q2: humanAnswer(1, form, form.category),
      q3: humanAnswer(2, form, form.category),
    };
    try {
      const payload = await callOpenAI({
        stage: routedStage,
        blocker: form.blocker,
        goal: form.goal,
        name: form.name,
        category,
        diagnostic,
      });
      setAi(payload);
      setPhase('result');
      // Fire EmailJS in the background
      sendEmail({ form, stage: routedStage, ai: payload, category })
        .then(() => setEmailSent(true))
        .catch((err) => console.error('EmailJS error:', err));
    } catch (err) {
      console.error('OpenAI error:', err);
      setAi(fallbackAi(routedStage));
      setAiError(
        'We hit a snag generating the personalised parts. The structural diagnosis below is still yours — refresh to retry the personalised sections.'
      );
      setPhase('result');
    }
  }

  // Smooth scroll to top of result when phase changes
  useEffect(() => {
    if (phase === 'result') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [phase]);

  async function handleDownloadPdf() {
    if (!bookRef.current) return;
    setDownloading(true);
    try {
      const mod = await import('html2pdf.js');
      const html2pdf = mod.default || mod;
      const filename = `Groflex-Gameplan-${stage.code.replace(' ', '')}-${stage.name}.pdf`;
      await html2pdf()
        .from(bookRef.current)
        .set({
          margin: 0,
          filename,
          image: { type: 'jpeg', quality: 0.95 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: '#F5F5FF' },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['css', 'legacy'] },
        })
        .save();
    } catch (e) {
      console.error('PDF error:', e);
      alert('Could not generate PDF. Check the console.');
    } finally {
      setDownloading(false);
    }
  }

  const onKeyDown = (e) => {
    if (phase !== 'quiz') return;
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      next();
    }
  };

  return (
    <div className="gp-root" onKeyDown={onKeyDown}>
      <div className="gp-bg">
        <div className="gp-bg__blob gp-bg__blob--magenta" />
        <div className="gp-bg__blob gp-bg__blob--blue" />
      </div>

      {phase === 'quiz' && (
        <QuizView
          step={step}
          totalSteps={totalSteps}
          form={form}
          errors={errors}
          setField={setField}
          toggleQ2={toggleQ2}
          next={next}
          back={back}
        />
      )}

      {phase === 'loading' && <LoadingView name={form.name} />}

      {phase === 'result' && stage && (
        <ResultView
          bookRef={bookRef}
          stage={stage}
          ai={ai}
          aiError={aiError}
          emailSent={emailSent}
          userEmail={form.email}
          userName={form.name}
          onDownload={handleDownloadPdf}
          downloading={downloading}
        />
      )}
    </div>
  );
}

// ============================================================
// QUIZ VIEW
// ============================================================
function QuizView({ step, totalSteps, form, errors, setField, toggleQ2, next, back }) {
  return (
    <section className="gp-quiz">
      <div className="gp-quiz__inner">
        <header className="gp-quiz__header">
          <span className="gp-eyebrow">The GAMEPLAN</span>
          <h1 className="gp-quiz__title">
            Your <em className="gp-pink">$10M Brand</em>
            <br />Gameplan
          </h1>
          <p className="gp-quiz__sub">
            7 honest questions. We diagnose your stage across 6 constraints and generate
            a custom playbook for your next 90 days. Takes under 90 seconds.
          </p>
        </header>

        <div className="gp-quiz__card">
          <ProgressBar step={step} total={totalSteps} />

          {step === 0 && (
            <Shell label="What should we call you?">
              <input
                type="text"
                className="gp-input"
                placeholder="e.g. Sarah"
                value={form.name}
                onChange={(e) => setField('name', e.target.value)}
                autoFocus
              />
              {errors.name && <p className="gp-err">{errors.name}</p>}
            </Shell>
          )}

          {step === 1 && (
            <Shell label="Where should we send your gameplan?" sub="Full personalised playbook + PDF link. No spam.">
              <input
                type="email"
                className="gp-input"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                autoFocus
              />
              {errors.email && <p className="gp-err">{errors.email}</p>}
            </Shell>
          )}

          {step === 2 && (
            <Shell
              label="What kind of business are you running (or about to)?"
              sub="We use this to tailor the language and the playbook to your business model."
            >
              <div className="gp-options gp-options--cat">
                {BUSINESS_CATEGORIES.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    className={`gp-option gp-option--cat ${form.category === c.value ? 'gp-option--active' : ''}`}
                    onClick={() => setField('category', c.value)}
                    aria-pressed={form.category === c.value}
                  >
                    <span className="gp-option__label">{c.label}</span>
                    <span className="gp-option__sub">{c.sub}</span>
                  </button>
                ))}
              </div>
              {errors.category && <p className="gp-err">{errors.category}</p>}
            </Shell>
          )}

          {(step === 3 || step === 4 || step === 5) && (() => {
            const q = DIAGNOSTIC_QUESTIONS[step - 3];
            const isMulti = q.id === 'q2';
            const sub = step === 3
              ? 'Question 1 of 3 — we use the trio to diagnose your stage automatically.'
              : step === 4
              ? 'Question 2 of 3 — pick all that apply.'
              : 'Question 3 of 3 — last one.';
            const otherKey = `${q.id}_other`;
            const isActive = (val) =>
              isMulti ? form.q2.includes(val) : form[q.id] === val;
            const onPick = (val) =>
              isMulti ? toggleQ2(val) : setField(q.id, val);
            const showOther = isMulti ? form.q2.includes('other') : form[q.id] === 'other';
            return (
              <Shell label={q.label} sub={sub}>
                <div className="gp-options">
                  {q.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className={`gp-option ${isActive(opt.value) ? 'gp-option--active' : ''} ${opt.value === 'other' ? 'gp-option--other' : ''} ${isMulti ? 'gp-option--multi' : ''}`}
                      onClick={() => onPick(opt.value)}
                      aria-pressed={isActive(opt.value)}
                    >
                      {isMulti && (
                        <span className="gp-option__check" aria-hidden="true">
                          {isActive(opt.value) ? '✓' : ''}
                        </span>
                      )}
                      <span className="gp-option__label">{optionLabel(opt, form.category)}</span>
                    </button>
                  ))}
                </div>
                {showOther && (
                  <textarea
                    className="gp-input gp-textarea gp-other-text"
                    rows={3}
                    placeholder="Tell us in your own words — be specific."
                    value={form[otherKey]}
                    onChange={(e) => setField(otherKey, e.target.value)}
                    autoFocus
                  />
                )}
                {errors[q.id] && <p className="gp-err">{errors[q.id]}</p>}
              </Shell>
            );
          })()}

          {step === 6 && (
            <Shell label="What's the SINGLE biggest thing blocking you right now?" sub="Be specific. “Marketing” is not an answer.">
              <textarea
                className="gp-input gp-textarea"
                rows={5}
                placeholder="e.g. I keep redesigning my offer instead of pitching it to anyone."
                value={form.blocker}
                onChange={(e) => setField('blocker', e.target.value)}
                autoFocus
              />
              {errors.blocker && <p className="gp-err">{errors.blocker}</p>}
            </Shell>
          )}

          {step === 7 && (
            <Shell label="What does winning the next 90 days look like?" sub="One specific outcome. Revenue, hires, launch — anything, but real.">
              <textarea
                className="gp-input gp-textarea"
                rows={5}
                placeholder="e.g. Land 5 paying clients on a $2k/month retainer by end of the quarter."
                value={form.goal}
                onChange={(e) => setField('goal', e.target.value)}
                autoFocus
              />
              {errors.goal && <p className="gp-err">{errors.goal}</p>}
            </Shell>
          )}

          <div className="gp-quiz__nav">
            <button type="button" className="gp-btn gp-btn--ghost" onClick={back} disabled={step === 0}>
              ← Back
            </button>
            <button type="button" className="gp-btn gp-btn--primary" onClick={next}>
              {step === totalSteps - 1 ? 'Build my gameplan' : 'Continue'} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Shell({ label, sub, children }) {
  return (
    <div className="gp-q">
      <h2 className="gp-q__label">{label}</h2>
      {sub && <p className="gp-q__sub">{sub}</p>}
      <div className="gp-q__body">{children}</div>
    </div>
  );
}

function ProgressBar({ step, total }) {
  const pct = Math.round(((step + 1) / total) * 100);
  return (
    <div className="gp-progress">
      <div className="gp-progress__bar">
        <div className="gp-progress__fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="gp-progress__label">Step {step + 1} / {total}</span>
    </div>
  );
}

// ============================================================
// LOADING
// ============================================================
function LoadingView({ name }) {
  const lines = [
    'Reading your answers...',
    'Diagnosing your real stage...',
    'Scoring 6 constraints across your business...',
    'Designing your 90-day playbook...',
    'Printing your gameplan...',
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % lines.length), 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="gp-loading">
      <div className="gp-loading__card">
        <div className="gp-loading__spinner" />
        <h2 className="gp-loading__title">Hold tight{name ? `, ${name}` : ''}.</h2>
        <p className="gp-loading__text">{lines[i]}</p>
      </div>
    </section>
  );
}

// ============================================================
// RESULT — sticky page nav + the Book
// ============================================================
function ResultView({ bookRef, stage, ai, aiError, emailSent, userEmail, userName, onDownload, downloading }) {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (!bookRef.current) return;
    const pages = bookRef.current.querySelectorAll('.gp-page');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const n = Number(entry.target.dataset.page);
            if (n) setActivePage(n);
          }
        });
      },
      { threshold: 0.45 }
    );
    pages.forEach((p) => obs.observe(p));
    return () => obs.disconnect();
  }, [bookRef]);

  const goToPage = (n) => {
    if (!bookRef.current) return;
    const target = bookRef.current.querySelector(`.gp-page[data-page="${n}"]`);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="gp-result">
      {/* Top utility bar */}
      <div className="gp-result__bar">
        <div className="gp-result__bar-inner">
          <div className="gp-result__bar-left">
            <span className="gp-mini-label">Your gameplan</span>
            <span className="gp-result__bar-stage">{stage.code} · {stage.name}</span>
          </div>
          <div className="gp-result__bar-right">
            {emailSent ? (
              <span className="gp-sent">✓ Sent to {userEmail}</span>
            ) : (
              <span className="gp-sent gp-sent--muted">Sending to {userEmail}…</span>
            )}
            <button
              type="button"
              className="gp-btn gp-btn--primary"
              onClick={onDownload}
              disabled={downloading}
            >
              {downloading ? 'Building PDF…' : '⬇ Download PDF'}
            </button>
          </div>
        </div>
      </div>

      {aiError && (
        <div className="gp-result__warn">
          <span>⚠</span> {aiError}
        </div>
      )}

      <div className="gp-result__layout">
        {/* Sticky page nav */}
        <nav className="gp-pagenav" aria-label="Pages">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goToPage(n)}
              className={`gp-pagenav__dot ${activePage === n ? 'gp-pagenav__dot--active' : ''}`}
              aria-label={`Go to page ${n}`}
            >
              <span>{n}</span>
            </button>
          ))}
        </nav>

        {/* The book */}
        <Book ref={bookRef} stage={stage} ai={ai} userName={userName} />
      </div>
    </section>
  );
}

// ============================================================
// OPENAI CALL
// ============================================================
async function callOpenAI({ stage, blocker, goal, name, category, diagnostic }) {
  const userPrompt = buildUserPrompt({ stage, blocker, goal, name, category, diagnostic });
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.75,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const raw = data?.choices?.[0]?.message?.content || '{}';
  const parsed = JSON.parse(raw);
  return normalizeAi(parsed);
}

function normalizeAi(p) {
  const out = {
    constraints: {},
    focus: {
      area: p?.focus?.area || 'identity',
      problem: p?.focus?.problem || '',
      cause: p?.focus?.cause || '',
      whenSolved: p?.focus?.whenSolved || p?.focus?.when_solved || '',
    },
    bottomLine: p?.bottomLine || p?.bottom_line || '',
    nextStageTeaser: p?.nextStageTeaser || p?.next_stage_teaser || '',
  };
  CONSTRAINTS.forEach((c) => {
    const src = p?.constraints?.[c.id] || {};
    out.constraints[c.id] = {
      pain: src.pain || '',
      score: clampScore(src.score),
      priority: clampPriority(src.priority),
      howTo: src.howTo || src.how_to || '',
    };
  });
  // Force focus area = lowest score, in case GPT picked a different one
  let lowest = { id: 'identity', score: 101 };
  CONSTRAINTS.forEach((c) => {
    if (out.constraints[c.id].score < lowest.score) {
      lowest = { id: c.id, score: out.constraints[c.id].score };
    }
  });
  out.focus.area = lowest.id;
  // Force priority 1 onto the focus area
  out.constraints[lowest.id].priority = 1;
  return out;
}

function humanAnswer(qIndex, form, category) {
  const key = `q${qIndex + 1}`;
  const q = DIAGNOSTIC_QUESTIONS[qIndex];
  const otherTxt = (form[`${key}_other`] || '').trim();

  // Q2 is multi-select (array)
  if (q.id === 'q2') {
    const arr = Array.isArray(form[key]) ? form[key] : [];
    if (arr.length === 0) return '';
    const parts = arr.map((v) => {
      if (v === 'other') return otherTxt ? `Other (user described): ${otherTxt}` : 'Other';
      const opt = q.options.find((o) => o.value === v);
      return opt ? optionLabel(opt, category) : '';
    }).filter(Boolean);
    return parts.join(' | ');
  }

  // Single-select questions
  const val = form[key];
  if (!val) return '';
  if (val === 'other') {
    return otherTxt ? `Other (user described): ${otherTxt}` : 'Other (no description)';
  }
  const opt = q.options.find((o) => o.value === val);
  return opt ? optionLabel(opt, category) : '';
}

function clampScore(n) {
  const x = Number(n);
  if (!Number.isFinite(x)) return 0;
  return Math.max(0, Math.min(100, Math.round(x)));
}
function clampPriority(n) {
  const x = Number(n);
  if (!Number.isFinite(x)) return 6;
  return Math.max(1, Math.min(6, Math.round(x)));
}

function fallbackAi(stage) {
  // Last-ditch content if GPT call fails. Keeps the page renderable.
  const blank =
    'Personalised text could not be generated. Refresh to retry the AI sections.';
  const constraints = {};
  CONSTRAINTS.forEach((c, i) => {
    constraints[c.id] = {
      pain: blank,
      score: 50 - i * 5,
      priority: i + 1,
      howTo: blank,
    };
  });
  return {
    constraints,
    focus: {
      area: 'identity',
      problem: blank,
      cause: blank,
      whenSolved: 'Imagine when this is solved — refresh to load your personalised view.',
    },
    bottomLine: stage.bottomLine,
    nextStageTeaser: stage.nextStageTeaser,
  };
}

// ============================================================
// EMAILJS
// ============================================================
async function sendEmail({ form, stage, ai, category }) {
  const lines = [];
  lines.push(`Hi ${form.name},`);
  lines.push('');
  lines.push(`Here is your personalised GAMEPLAN — ${stage.code}: ${stage.name}.`);
  if (category?.label) lines.push(`Business model: ${category.label}`);
  lines.push('');
  lines.push('THE TRUTH');
  lines.push(stage.truth);
  lines.push('');
  lines.push(`THE BIGGEST CHALLENGE — ${stage.biggestChallenge}`);
  lines.push('');
  lines.push('CONSTRAINTS AT THIS STAGE');
  CONSTRAINTS.forEach((c) => {
    const cd = ai.constraints[c.id];
    lines.push(`• ${c.label} (strength ${cd.score}%)`);
    lines.push(`  ${cd.pain}`);
  });
  lines.push('');
  const focusLabel = CONSTRAINTS.find((c) => c.id === ai.focus.area)?.label || ai.focus.area;
  lines.push(`YOUR FOCUS — ${focusLabel}`);
  lines.push(`Problem: ${ai.focus.problem}`);
  lines.push(`Cause: ${ai.focus.cause}`);
  lines.push(`When solved: ${ai.focus.whenSolved}`);
  lines.push('');
  lines.push('HOW TO SUCCEED (priorities)');
  const ordered = [...CONSTRAINTS].sort((a, b) =>
    ai.constraints[a.id].priority - ai.constraints[b.id].priority
  );
  ordered.forEach((c) => {
    const cd = ai.constraints[c.id];
    lines.push(`Priority ${cd.priority} — ${c.label}: ${cd.howTo}`);
  });
  lines.push('');
  lines.push('THE BOTTOM LINE');
  lines.push(stage.bottomLine);
  if (ai.bottomLine) {
    lines.push('');
    lines.push(ai.bottomLine);
  }
  lines.push('');
  lines.push('WHAT’S COMING NEXT');
  lines.push(ai.nextStageTeaser || stage.nextStageTeaser);
  lines.push('');
  lines.push('Book a 1:1 call: https://www.groflex.co/gameplan');
  lines.push('');
  lines.push('— The Groflex team');
  const message = lines.join('\n');

  const params = {
    to_email: form.email,
    email: form.email,
    to_name: form.name,
    name: form.name,
    stage: `${stage.code} — ${stage.name}`,
    business_category: category?.label || '',
    user_blocker: form.blocker,
    user_goal: form.goal,
    message,
  };

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY);
}
