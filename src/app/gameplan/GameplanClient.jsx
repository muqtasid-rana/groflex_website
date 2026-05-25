'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  STAGES,
  STAGE_LIST,
  CONSTRAINTS,
  DIAGNOSTIC_QUESTIONS,
  routeToStage,
} from './stageContent';
import Book from './Book';
import './gameplan.css';
import { addSubmission } from '@/lib/gameplans';

// EmailJS — same IDs as Contact form
const EMAILJS_SERVICE_ID = 'service_hnb5hs6';
const EMAILJS_TEMPLATE_ID = 'template_9q8nfdx';
const EMAILJS_PUBLIC_KEY = 'uvpyAU7zlrphbVVGE';
const ADMIN_NOTIFY_EMAIL = 'mmuqtasidrana@gmail.com';

// ============================================================
// SYSTEM PROMPT — exactly as specified by the founder
// ============================================================
const SYSTEM_PROMPT = `You are a direct, experienced advisor who has worked with dozens of non-technical SaaS and app founders. You have seen every mistake at every stage. You do not give generic advice. You do not motivate or coach. You diagnose and prescribe. Your tone is honest, direct, and specific — like a senior founder giving real talk to someone who needs to hear the truth.

The user has answered 5 questions. Their two open text answers — their specific blocker and their specific 90-day goal — are the most important inputs. Every section you generate must directly reference their specific situation. If they mentioned a number use it. If they mentioned a specific problem name it. If they described a specific goal reference it by name. A response that could apply to any founder is a failure.

The stage determined by questions 1 through 3 gives you the structural template. The open text answers give you the specific content. Never ignore the open text answers. Never generate content that sounds like it was written for someone else.

Always write in second person. Always be specific. Never use the phrase "it seems like" or "you may" — be direct and declarative. Never copy paste the user's words back at them verbatim.`;

function buildUserPrompt({ stage, blocker, goal, name, diagnostic, audience }) {
  return `=== PRIMARY INPUTS (the personalised content MUST be built from these) ===
Founder's exact words on their biggest blocker:
"""${blocker}"""

Founder's exact words on what winning the next 90 days looks like:
"""${goal}"""

=== HOW TO USE THE PRIMARY INPUTS — non-negotiable ===
- The blocker and the goal above ARE the brief. Treat them like a client brief.
- Reference SPECIFIC NOUNS, NUMBERS, and PRODUCT TYPES the founder used. If they wrote "100 users" or "$5k MRR", use those numbers. If they wrote a specific problem ("nobody is signing up", "churn is killing me"), name it.
- Never echo the blocker or goal verbatim. Reframe it as a senior advisor would.
- Audience: a non-technical SaaS / app founder who has built (or is building) a digital product but has NEVER sold anything before. Use vocabulary native to that world: ICP, MRR, churn, activation, onboarding, signups, conversion, retention. Never reference agencies, consultancies, retail, personal branding, content creation, or local business.

=== TEMPLATE CONTEXT (tone & structure only — NOT for the personalised content) ===
Founder name: ${name || 'the founder'}
Diagnosed stage: ${stage.code} — ${stage.name}
The biggest challenge tag for this stage: ${stage.biggestChallenge}
Who they're selling to: ${audience || 'Not specified'}
Diagnostic answers (for grounding only):
  - Where the product is: ${diagnostic.q1 || 'not given'}
  - What their day looks like: ${diagnostic.q2 || 'not given'}
  - What hits closest: ${diagnostic.q3 || 'not given'}
  - Who they sell to: ${diagnostic.q4 || 'not given'}

=== AUDIENCE-SPECIFIC LANGUAGE ===
- If B2B: use vocabulary like decision-maker, buyer, pilot, procurement, contract, ACV, seats, sales cycle, demo, qualified lead.
- If B2C: use vocabulary like user, signup, activation, daily active, viral loop, retention, app install, paid acquisition, CAC.
- If unsure: do NOT pretend they have decided. The single biggest pillar issue is often that they haven't committed to one — call that out plainly when it fits the blocker.
Never use B2B language for a B2C founder or vice versa.

=== THE 6 PILLARS YOU WILL DIAGNOSE ===
- icp — Ideal Customer Profile: who exactly has this problem badly enough to pay
- messaging — Messaging: how you describe the problem in their language, not yours
- pmf — Product-Market Fit: does the product solve the problem well enough that they want it
- outreach — Outreach: how you actually get in front of the right people, consistently
- pipeline — Pipeline: a repeatable system that turns strangers into paying users
- systems — Systems: operations that let the business run without you as the bottleneck

=== BLOCKER → RED PILLAR MAPPING  ===
Read the founder's blocker and choose the RED pillar that ACTUALLY matches what they said. Honour the literal problem they named unless there is strong evidence in their words that a deeper pillar is the real cause. Examples of how to map common blockers:

- "I can't get in front of people / nobody knows we exist / I tried cold email and got nothing / I'm scared to do outreach / I don't know what channel to use" → RED = outreach
- "Signups don't convert / users sign up then ghost / nobody activates / churn is high / users say it's confusing" → RED = pmf
- "My landing page doesn't convert / people don't understand what we do in one sentence / I keep rewriting the homepage / the pitch falls flat" → RED = messaging
- "I don't know who my customer is / I'm building for everyone / my pitch lands sometimes and not others / I'm pivoting the ICP every month" → RED = icp
- "Sales are random and unpredictable / I close one deal then dry up for weeks / I can't forecast / no funnel" → RED = pipeline
- "Everything depends on me / I'm the bottleneck / onboarding is a manual Zoom call / I'm drowning in support" → RED = systems

If the blocker clearly names a pillar (e.g. they literally write "outreach is my problem"), that pillar is RED unless their evidence contradicts itself. Do NOT silently override what they said with ICP just because ICP feels like a deeper layer.

=== WORKED EXAMPLES — note how the RED pillar moves with the blocker ===

Example A — Blocker: "I have a working product but no one is signing up. I've posted on Twitter a few times and got nothing."
- focus.area = "outreach" (RED). NOT ICP. They have a product and they tried a channel — the issue is distribution muscle, not who the customer is.
- focus.problem: "The real problem isn't your product — it's that posting on Twitter is not outreach, it's hoping. You haven't picked a channel where your ICP already congregates and gone there directly, one conversation at a time."
- pillars: outreach=red, messaging=yellow, icp=yellow, pmf=green, pipeline=green, systems=green.

Example B — Blocker: "200 people signed up to my free trial but only 3 use it. I don't get why they leave."
- focus.area = "pmf" (RED). NOT outreach. They got traffic; the product isn't earning the second session.
- focus.problem: "Your activation is broken, not your acquisition. 200 signups with 3 active users means the product is not delivering the promised value inside the first session. The first-run experience is where they decide whether you're worth coming back to — and right now you're losing them there."
- pillars: pmf=red, messaging=yellow, icp=yellow, outreach=green, pipeline=green, systems=green.

Example C — Blocker: "I keep rewriting my landing page. People hit it and bounce. I can't explain what we do in one sentence."
- focus.area = "messaging" (RED). NOT ICP and NOT outreach.
- focus.problem: "The page isn't the problem — the lack of a sharp positioning statement is. If you can't describe the product in one sentence, your landing page will keep getting rewritten because each draft is trying to do too many jobs at once."
- pillars: messaging=red, icp=yellow, pmf=yellow, outreach=green, pipeline=green, systems=green.

Example D — Blocker: "I have a course idea but I don't know who I'm building it for. Everyone tells me I should niche down but I don't know how."
- focus.area = "icp" (RED). This is when ICP is genuinely the answer.
- focus.problem: "You don't have an offer problem — you have a ‘who pays for this’ problem. Until you can name a specific person who feels this pain badly enough to swipe a card, every other decision is a guess."
- pillars: icp=red, messaging=yellow, pmf=yellow, outreach=green, pipeline=green, systems=green.

The pattern: the RED pillar changes with the blocker. ICP is one valid answer, NOT the default answer.

=== OUTPUT SHAPE ===
Return EXACTLY one JSON object — no preamble, no trailing text, no markdown:

{
  "constraints": {
    "icp":       { "status": "red|yellow|green", "reason": "...", "howTo": "..." },
    "messaging": { "status": "red|yellow|green", "reason": "...", "howTo": "..." },
    "pmf":       { "status": "red|yellow|green", "reason": "...", "howTo": "..." },
    "outreach":  { "status": "red|yellow|green", "reason": "...", "howTo": "..." },
    "pipeline":  { "status": "red|yellow|green", "reason": "...", "howTo": "..." },
    "systems":   { "status": "red|yellow|green", "reason": "...", "howTo": "..." }
  },
  "focus": {
    "area": "icp|messaging|pmf|outreach|pipeline|systems",
    "problem": "...",
    "cause": "...",
    "whenSolved": "..."
  },
  "personalTruth": "...",
  "bottomLine": "...",
  "nextStageTeaser": "..."
}

=== FIELD RULES — read carefully ===

constraints[x].status (red | yellow | green):
- red    = this pillar is DIRECTLY related to the blocker the founder described — critical, fix first
- yellow = this pillar is likely affected but not the core issue right now — needs attention soon
- green  = no evidence this pillar is broken based on their answers — healthy for now
Assign these by REASONING from the founder's actual blocker and goal. Not random. Exactly ONE pillar should be red (the focus area). Two or three may be yellow. The rest green.

constraints[x].reason (15–25 words):
A one-line explanation of WHY this pillar is red, yellow, or green for THIS founder, based on what they wrote. Specific to them.

constraints[x].howTo (35–55 words):
The single most leveraged action for this pillar over the next 30 days, in service of their stated 90-day goal. Specific, concrete, action-oriented. Reference their goal numbers / nouns where possible.

focus.area:
MUST be the pillar id whose status is red.

focus.problem (50–70 words):
This is the most important field. The founder wrote a blocker in their own words. DO NOT echo it back. Reframe it as a sharp analytical insight written by a senior advisor who has diagnosed this exact situation dozens of times before. Name the underlying problem behind the symptom they named — but stay anchored to the pillar that ACTUALLY matches their words (use the BLOCKER → RED PILLAR MAPPING and worked examples above). Do not reflexively reframe every blocker as an ICP problem.

focus.cause (40–60 words):
Explain WHY the symptom they named is actually a symptom of the deeper problem you just identified. Connect the dots for them. Use their words sparingly and only as evidence.

focus.whenSolved (30–45 words):
Start with "Imagine when this is solved…" and paint a specific future state that explicitly references their stated 90-day goal.

personalTruth (50–70 words):
A rewritten "truth" paragraph specifically for this founder. Do NOT write generic stage commentary. Open with a direct observation about their specific blocker. Use SaaS/app vocabulary. Reference what they wrote. Must feel written FOR them, not AT their stage group.

bottomLine (90–130 words, 4–6 sentences):
The strongest paragraph on the page. Do these three things in order:
1. Name their specific situation using what they told us (reference the blocker by name).
2. Identify the exact mistake they are making right now that is keeping them stuck.
3. Tell them what happens to their product in the next 90 days if they don't fix this — reference their stated 90-day goal by name.
No generic startup advice. No motivational fluff. Direct, declarative, second person.

nextStageTeaser (30–50 words):
Preview the next stage. Reference their 90-day goal — what unlocks once they hit it.

Return ONLY the JSON. No code fences.`;
}

// ============================================================
// Audience context — maps Q4 answer to a description for the prompt
// ============================================================
function audienceContext(q4) {
  switch (q4) {
    case 'b2b':
      return 'B2B — selling to businesses / companies';
    case 'b2c':
      return 'B2C — selling to individual consumers';
    case 'unsure':
      return 'Audience unclear — founder is still figuring out who pays';
    default:
      return 'Not specified';
  }
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
    q1: '', q1_other: '',
    q2: [], q2_other: '',
    q3: '', q3_other: '',
    q4: '',
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

  // Quiz steps: name, email, q1, q2, q3, q4 (audience), blocker, goal
  const totalSteps = 8;
  const stage = stageId ? STAGES[stageId] : null;

  const setField = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: '' }));
  };

  // Multi-select toggle (used by Q2)
  const toggleMulti = (k, value) => {
    setForm((p) => {
      const arr = Array.isArray(p[k]) ? p[k] : [];
      const has = arr.includes(value);
      const next = has ? arr.filter((v) => v !== value) : [...arr, value];
      return { ...p, [k]: next };
    });
    setErrors((p) => ({ ...p, [k]: '' }));
  };

  const validate = () => {
    const e = {};
    if (step === 0 && !form.name.trim()) e.name = 'Tell us what to call you.';
    if (step === 1) {
      if (!form.email.trim()) e.email = 'Email is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email looks off.';
    }
    if (step === 2) {
      if (!form.q1) e.q1 = 'Pick one.';
      else if (form.q1 === 'other' && form.q1_other.trim().length < 5) e.q1 = 'Describe your situation in a sentence.';
    }
    if (step === 3) {
      const q2Arr = Array.isArray(form.q2) ? form.q2 : [];
      if (q2Arr.length === 0) e.q2 = 'Pick at least one — multiple are fine.';
      else if (q2Arr.includes('other') && form.q2_other.trim().length < 5) e.q2 = 'Describe your “Other” pick in a sentence.';
    }
    if (step === 4) {
      if (!form.q3) e.q3 = 'Pick one.';
      else if (form.q3 === 'other' && form.q3_other.trim().length < 5) e.q3 = 'Describe your situation in a sentence.';
    }
    if (step === 5 && !form.q4) e.q4 = 'Pick one.';
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
    const diagnostic = {
      q1: humanAnswer(0, form),
      q2: humanAnswer(1, form),
      q3: humanAnswer(2, form),
      q4: humanAnswer(3, form),
    };
    const audience = audienceContext(form.q4);
    try {
      const payload = await callOpenAI({
        stage: routedStage,
        blocker: form.blocker,
        goal: form.goal,
        name: form.name,
        diagnostic,
        audience,
      });
      setAi(payload);
      setPhase('result');

      // Fire-and-forget: save to Firestore + send both emails in parallel.
      // None of these block the result render.
      addSubmission({
        name: form.name,
        email: form.email,
        stageId: routedId,
        stageCode: routedStage.code,
        stageName: routedStage.name,
        answers: {
          q1: form.q1, q1_other: form.q1_other,
          q2: form.q2, q2_other: form.q2_other,
          q3: form.q3, q3_other: form.q3_other,
          q4: form.q4,
        },
        audience,
        humanAnswers: diagnostic,
        blocker: form.blocker,
        goal: form.goal,
        ai: payload,
      }).catch((err) => console.error('[GP] Firestore save failed:', err));

      sendEmail({ form, stage: routedStage, ai: payload, toEmail: form.email, isAdmin: false })
        .then((res) => {
          console.log('[GP] User email sent:', res?.status, res?.text);
          setEmailSent(true);
        })
        .catch((err) => {
          console.error('[GP] User EmailJS error:', err?.status, err?.text || err?.message || err);
        });

      sendEmail({ form, stage: routedStage, ai: payload, toEmail: ADMIN_NOTIFY_EMAIL, isAdmin: true })
        .then((res) => console.log('[GP] Admin email sent:', res?.status, res?.text))
        .catch((err) => console.error('[GP] Admin EmailJS error:', err?.status, err?.text || err?.message || err));
    } catch (err) {
      console.error('OpenAI error — using fallback:', err);
      setAi(fallbackAi(routedStage));
      setAiError(
        `We couldn’t generate the personalised parts. Reason: ${err?.message || 'unknown error'}. Refresh to retry.`
      );
      setPhase('result');
    }
  }

  useEffect(() => {
    if (phase === 'result') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [phase]);

  async function handleDownloadPdf() {
    if (!bookRef.current) return;
    setDownloading(true);
    // Toggle print-mode CSS that locks layout to fixed A4-friendly pixel sizes.
    bookRef.current.classList.add('gp-book--printing');
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
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#F5F5FF',
            windowWidth: 794, // A4 width in CSS px at 96dpi (210mm)
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['css', 'legacy'] },
        })
        .save();
    } catch (e) {
      console.error('PDF error:', e);
      alert('Could not generate PDF. Check the console.');
    } finally {
      bookRef.current?.classList.remove('gp-book--printing');
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
          toggleMulti={toggleMulti}
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
function QuizView({ step, totalSteps, form, errors, setField, toggleMulti, next, back }) {
  return (
    <section className="gp-quiz">
      <div className="gp-quiz__inner">
        <header className="gp-quiz__header">
          <span className="gp-eyebrow">The Founder Gameplan</span>
          <h1 className="gp-quiz__title">
            Your <em className="gp-pink">$10M</em> Founder Gameplan
          </h1>
          <p className="gp-quiz__tagline">for SaaS and Apps</p>
          <p className="gp-quiz__sub">
            5 honest questions. We diagnose your stage across 6 pillars and generate
            a custom playbook for your next 90 days. Built for non-technical SaaS &
            app founders. Takes under 90 seconds.
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

          {(step >= 2 && step <= 5) && (() => {
            const qIndex = step - 2;
            const q = DIAGNOSTIC_QUESTIONS[qIndex];
            const isMulti = !!q.multi;
            const defaultSub = step === 2
              ? 'Question 1 of 4 — we use these to diagnose your stage.'
              : step === 3
              ? 'Question 2 of 4 — pick everything that fits.'
              : step === 4
              ? 'Question 3 of 4 — one closest to your reality.'
              : 'Question 4 of 4 — last one before the open questions.';
            const sub = q.sub || defaultSub;
            const otherKey = `${q.id}_other`;
            const isActive = (val) => isMulti
              ? Array.isArray(form[q.id]) && form[q.id].includes(val)
              : form[q.id] === val;
            const onPick = (val) => isMulti ? toggleMulti(q.id, val) : setField(q.id, val);
            const showOther = isMulti
              ? Array.isArray(form[q.id]) && form[q.id].includes('other')
              : form[q.id] === 'other';
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
                      <span className="gp-option__label">{opt.label}</span>
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
            <Shell
              label="What is the single biggest thing blocking you right now?"
              sub="Be specific — not 'marketing' or 'sales' but the real problem behind it."
            >
              <textarea
                className="gp-input gp-textarea"
                rows={5}
                placeholder="e.g. I built the product 6 months ago, I've had 200 signups but only 3 active users and zero paying customers. I don't know how to reach the right people."
                value={form.blocker}
                onChange={(e) => setField('blocker', e.target.value)}
                autoFocus
              />
              {errors.blocker && <p className="gp-err">{errors.blocker}</p>}
            </Shell>
          )}

          {step === 7 && (
            <Shell
              label="What does winning the next 90 days look like?"
              sub="Customers, revenue, product milestone — anything specific and real."
            >
              <textarea
                className="gp-input gp-textarea"
                rows={5}
                placeholder="e.g. 25 paying customers on a $49/mo plan and a repeatable acquisition channel that I can hand off."
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
    'Scoring 6 pillars across your business...',
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
// RESULT
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
      <div className="gp-result__bar">
        <div className="gp-result__bar-inner">
          <div className="gp-result__bar-left">
            <span className="gp-mini-label">Your gameplan</span>
            <span className="gp-result__bar-stage">{stage.code} · {stage.name}</span>
          </div>
          <div className="gp-result__bar-right">
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
        <Book ref={bookRef} stage={stage} ai={ai} userName={userName} />
      </div>
    </section>
  );
}

// ============================================================
// OPENAI
// ============================================================
async function callOpenAI({ stage, blocker, goal, name, diagnostic, audience }) {
  const userPrompt = buildUserPrompt({ stage, blocker, goal, name, diagnostic, audience });
  const res = await fetch('/api/gameplan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemPrompt: SYSTEM_PROMPT,
      userPrompt,
    }),
  });
  if (!res.ok) {
    let detail = '';
    try { detail = (await res.json())?.error || ''; } catch {}
    throw new Error(`Gameplan API ${res.status}: ${detail || res.statusText}`);
  }
  const data = await res.json();
  if (!data?.payload) throw new Error('Gameplan API returned no payload.');
  return normalizeAi(data.payload);
}

const VALID_STATUS = new Set(['red', 'yellow', 'green']);
function clampStatus(s) {
  const v = String(s || '').toLowerCase().trim();
  return VALID_STATUS.has(v) ? v : 'yellow';
}

function normalizeAi(p) {
  const validIds = new Set(CONSTRAINTS.map((c) => c.id));
  const gptArea = validIds.has(p?.focus?.area) ? p.focus.area : null;

  const out = {
    constraints: {},
    focus: {
      area: gptArea, // may be null until we resolve below
      problem: p?.focus?.problem || '',
      cause: p?.focus?.cause || '',
      whenSolved: p?.focus?.whenSolved || p?.focus?.when_solved || '',
    },
    personalTruth: p?.personalTruth || p?.personal_truth || '',
    bottomLine: p?.bottomLine || p?.bottom_line || '',
    nextStageTeaser: p?.nextStageTeaser || p?.next_stage_teaser || '',
  };
  CONSTRAINTS.forEach((c) => {
    const src = p?.constraints?.[c.id] || {};
    out.constraints[c.id] = {
      status: clampStatus(src.status),
      reason: src.reason || '',
      howTo: src.howTo || src.how_to || '',
    };
  });

  // Resolve the focus area. Priority order:
  //  1) GPT's explicit focus.area, if valid AND it has a real reason/howTo
  //  2) Whichever pillar GPT marked red (first if multiple)
  //  3) GPT's focus.area even if its constraint entry is thin
  //  4) Last resort: the pillar with the most substantive `reason` text
  // NO hard-coded default to 'icp' anywhere — that was biasing the result.
  const reds = CONSTRAINTS.filter((c) => out.constraints[c.id]?.status === 'red');

  let resolvedArea = null;
  if (gptArea && (out.constraints[gptArea]?.reason || out.constraints[gptArea]?.howTo)) {
    resolvedArea = gptArea;
  } else if (reds.length > 0) {
    resolvedArea = reds[0].id;
  } else if (gptArea) {
    resolvedArea = gptArea;
  } else {
    // Pick the pillar whose `reason` field has the most content — that's
    // where GPT spent the most thought.
    let best = CONSTRAINTS[0].id;
    let bestLen = -1;
    CONSTRAINTS.forEach((c) => {
      const len = (out.constraints[c.id]?.reason || '').length;
      if (len > bestLen) { bestLen = len; best = c.id; }
    });
    resolvedArea = best;
  }
  out.focus.area = resolvedArea;

  // Force the resolved area to RED, and demote any other reds to yellow so
  // there is exactly one focus pillar.
  CONSTRAINTS.forEach((c) => {
    if (c.id === resolvedArea) {
      out.constraints[c.id].status = 'red';
    } else if (out.constraints[c.id]?.status === 'red') {
      out.constraints[c.id].status = 'yellow';
    }
  });

  // Derive priority from status for the "How to Succeed" page.
  // 1 = red, 2-3 = yellow, 4-6 = green
  let yellowRank = 2;
  let greenRank = 4;
  CONSTRAINTS.forEach((c) => {
    const s = out.constraints[c.id].status;
    if (s === 'red') out.constraints[c.id].priority = 1;
    else if (s === 'yellow') out.constraints[c.id].priority = yellowRank++;
    else out.constraints[c.id].priority = greenRank++;
  });

  return out;
}

function humanAnswer(qIndex, form) {
  const key = `q${qIndex + 1}`;
  const q = DIAGNOSTIC_QUESTIONS[qIndex];
  const val = form[key];
  const otherTxt = (form[`${key}_other`] || '').trim();

  // Multi-select (array) — Q2
  if (q.multi) {
    const arr = Array.isArray(val) ? val : [];
    if (arr.length === 0) return '';
    const parts = arr.map((v) => {
      if (v === 'other') return otherTxt ? `Other (user described): ${otherTxt}` : 'Other';
      const opt = q.options.find((o) => o.value === v);
      return opt ? opt.label : '';
    }).filter(Boolean);
    return parts.join(' | ');
  }

  // Single-select
  if (!val) return '';
  if (val === 'other') {
    return otherTxt ? `Other (user described): ${otherTxt}` : 'Other';
  }
  const opt = q.options.find((o) => o.value === val);
  return opt ? opt.label : '';
}

function fallbackAi(stage) {
  const blank =
    'Personalised text could not be generated. Refresh to retry the AI sections.';
  const constraints = {};
  CONSTRAINTS.forEach((c, i) => {
    constraints[c.id] = {
      status: i === 0 ? 'red' : i < 3 ? 'yellow' : 'green',
      reason: blank,
      howTo: blank,
      priority: i + 1,
    };
  });
  return {
    constraints,
    focus: {
      area: 'icp',
      problem: blank,
      cause: blank,
      whenSolved: 'Imagine when this is solved — refresh to load your personalised view.',
    },
    personalTruth: stage.truth,
    bottomLine: stage.bottomLine,
    nextStageTeaser: stage.nextStageTeaser,
  };
}

// ============================================================
// EMAILJS
// ============================================================
async function sendEmail({ form, stage, ai, toEmail, isAdmin }) {
  const lines = [];
  if (isAdmin) {
    lines.push(`NEW GAMEPLAN SUBMISSION`);
    lines.push(`====================================`);
    lines.push(`Name:  ${form.name}`);
    lines.push(`Email: ${form.email}`);
    lines.push(`Stage: ${stage.code} — ${stage.name}`);
    lines.push('');
    lines.push(`THEIR ANSWERS`);
    lines.push(`Q1 (where the product is): ${humanAnswer(0, form)}`);
    lines.push(`Q2 (what their day looks like): ${humanAnswer(1, form)}`);
    lines.push(`Q3 (closest to home): ${humanAnswer(2, form)}`);
    lines.push(`Q4 (audience): ${humanAnswer(3, form)}`);
    lines.push('');
    lines.push(`THEIR BIGGEST BLOCKER (own words):`);
    lines.push(form.blocker);
    lines.push('');
    lines.push(`THEIR 90-DAY GOAL (own words):`);
    lines.push(form.goal);
    lines.push('');
    lines.push(`====================================`);
    lines.push(`AI GAMEPLAN GENERATED FOR THEM`);
    lines.push(`====================================`);
  } else {
    lines.push(`Hi ${form.name},`);
    lines.push('');
    lines.push(`Here is your personalised GAMEPLAN — ${stage.code}: ${stage.name}.`);
    lines.push('');
  }
  lines.push('THE TRUTH');
  lines.push(ai.personalTruth || stage.truth);
  lines.push('');
  lines.push(`THE BIGGEST CHALLENGE — ${stage.biggestChallenge}`);
  lines.push('');
  lines.push('PILLAR DIAGNOSTIC');
  CONSTRAINTS.forEach((c) => {
    const cd = ai.constraints[c.id];
    lines.push(`• ${c.label} — ${String(cd.status || '').toUpperCase()}`);
    lines.push(`  ${cd.reason}`);
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
  lines.push(ai.bottomLine || stage.bottomLine);
  lines.push('');
  lines.push('WHAT’S COMING NEXT');
  lines.push(ai.nextStageTeaser || stage.nextStageTeaser);
  lines.push('');
  if (!isAdmin) {
    lines.push('Book your free 10-minute Loom roadmap: https://www.groflex.co/gameplan');
    lines.push('');
    lines.push('— The Groflex team');
  }
  const message = lines.join('\n');

  const recipient = toEmail || form.email;
  const subjectPrefix = isAdmin ? '[NEW GAMEPLAN] ' : '';
  const params = {
    to_email: recipient,
    email: recipient,
    to_name: isAdmin ? 'Admin' : form.name,
    name: isAdmin ? `Admin — ${form.name} just submitted` : form.name,
    subject: `${subjectPrefix}${stage.code} — ${stage.name} — ${form.name}`,
    stage: `${stage.code} — ${stage.name}`,
    user_blocker: form.blocker,
    user_goal: form.goal,
    message,
  };

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY);
}
