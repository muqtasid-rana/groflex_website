// ============================================================
// THE GAMEPLAN — 8 stages, Nik framework
// Each stage has:
//   - id, code, name        (e.g. stage0 / STAGE 0 / Decide)
//   - headline              (the "The Truth Is..." style line)
//   - bottomLineSub         (subheading for The Bottom Line page)
//   - biggestChallenge      (uppercase tag)
//   - truth                 (the long brutal-honest paragraph)
//   - bottomLine            (closing argument paragraph)
//   - nextStageTeaser       (1–2 lines previewing the next stage)
// ============================================================

export const STAGE_IDS = [
  'stage0', 'stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7',
];

export const STAGE_LIST = [
  { id: 'stage0', code: 'STAGE 0', name: 'Decide' },
  { id: 'stage1', code: 'STAGE 1', name: 'Prove' },
  { id: 'stage2', code: 'STAGE 2', name: 'Build' },
  { id: 'stage3', code: 'STAGE 3', name: 'Differentiate' },
  { id: 'stage4', code: 'STAGE 4', name: 'Optimize' },
  { id: 'stage5', code: 'STAGE 5', name: 'Lead' },
  { id: 'stage6', code: 'STAGE 6', name: 'Pivot' },
  { id: 'stage7', code: 'STAGE 7', name: 'Expand' },
];

export const STAGES = {
  stage0: {
    id: 'stage0',
    code: 'STAGE 0',
    name: 'Decide',
    headline: 'The Truth Is...',
    bottomLineSub: 'where it’s all about focus and decision',
    biggestChallenge: 'STARTING FROM NOTHING',
    truth:
      "You’ve been almost ready for longer than you’d ever admit to anyone. The idea is not the problem. The decision is. While you’re still researching, planning, and waiting for the “right time,” other people with worse ideas are already in the market making mistakes that will turn them into experts.",
    bottomLine:
      "You’re still standing at the start. Nothing else matters until you decide who you are, who you serve, and what you sell. Pick one. Commit publicly. Everything you build from here gets multiplied by that one decision — or zeroed out by it.",
    nextStageTeaser:
      "Once you’ve decided, the game changes from “what should I build” to “will anyone pay me for this.” Stage 1 is about getting your first paying proof.",
  },
  stage1: {
    id: 'stage1',
    code: 'STAGE 1',
    name: 'Prove',
    headline: 'You Already Know This...',
    bottomLineSub: 'where it’s all about proof and consistency',
    biggestChallenge: 'GET PEOPLE TO PAY YOU',
    truth:
      "Some days you believe in this more than anything and other days you wonder if you’re wasting your life. You don’t have a clarity problem — you have a proof problem. No website, course, or rebrand will fix it. The only thing that fixes it is a stranger swiping their card.",
    bottomLine:
      "Nobody cares yet. That’s not cruelty, that’s default. Until your offer has put money in the bank from people who didn’t already love you, none of the other constraints are real yet. Get the proof. Then earn the right to optimize anything.",
    nextStageTeaser:
      "Once strangers are paying you, the next problem isn’t demand — it’s delivery. Stage 2 is about building the business behind the offer so it doesn’t collapse under its own weight.",
  },
  stage2: {
    id: 'stage2',
    code: 'STAGE 2',
    name: 'Build',
    headline: 'You Keep Telling Yourself...',
    bottomLineSub: 'where it’s all about systems over hustle',
    biggestChallenge: 'BUILDING WITHOUT BREAKING',
    truth:
      "Once I get to the next level it’ll get easier — but every level just adds more weight. Every sale creates more work. Every win creates more obligations. You’re the bottleneck and you know it, but slowing down to fix it feels like losing momentum you can’t afford to lose.",
    bottomLine:
      "Right now your business is you, twice. Until the work lives outside your head — written down, repeatable, ownable by someone else — every new client is a tax on your sanity. Stop selling more until you can deliver what you already sold without bleeding.",
    nextStageTeaser:
      "Once the engine runs without you in every seat, you’ll notice a new problem: you look like everyone else. Stage 3 is about being chosen, not just considered.",
  },
  stage3: {
    id: 'stage3',
    code: 'STAGE 3',
    name: 'Differentiate',
    headline: 'You Keep Telling Yourself...',
    bottomLineSub: 'where it’s all about being chosen, not compared',
    biggestChallenge: 'STANDING OUT',
    truth:
      "It’s a matter of time, but you work harder than everyone at your level and somehow they’re still growing faster than you. You’ve built a real thing. But in your prospect’s head you’re still a tab they have open next to three competitors who all sound the same.",
    bottomLine:
      "Sameness is the silent killer at this stage. You’re losing deals you should have won because the buyer can’t tell you apart from the next pitch. Identity, positioning and proof of point of view stop being branding exercises and become survival.",
    nextStageTeaser:
      "Once you’re the obvious choice in your category, the question becomes profitability. Stage 4 is about turning revenue into actual freedom.",
  },
  stage4: {
    id: 'stage4',
    code: 'STAGE 4',
    name: 'Optimize',
    headline: 'It’s Funny Because...',
    bottomLineSub: 'where it’s all about margin, not motion',
    biggestChallenge: 'GROWING WITHOUT BREAKING',
    truth:
      "You smile when people say you’re killing it, knowing they have no idea how close everything is to breaking. Revenue is up. Profit per hour isn’t. The team grew faster than the systems did, and you’re paying for that gap in cash, sleep, and unfinished promises.",
    bottomLine:
      "More revenue is no longer the answer. More leverage is. Every additional dollar in the door is costing you more than it should — in time, in cash, in attention. Until you fix margins, hiring, and ops, scaling more just multiplies the leak.",
    nextStageTeaser:
      "Once the machine is efficient, the question becomes influence. Stage 5 is about becoming the name people say without prompting in your category.",
  },
  stage5: {
    id: 'stage5',
    code: 'STAGE 5',
    name: 'Lead',
    headline: 'The Crazy Part Is...',
    bottomLineSub: 'where it’s all about authority and gravity',
    biggestChallenge: 'KNOWN BUT NOT CHOSEN',
    truth:
      "You thought hitting this number would change how you feel, but it didn’t. People know your name. They follow your content. They quote your frameworks. And yet half of them still hire someone louder, simpler, or more confident than you.",
    bottomLine:
      "Being known and being chosen are different sports. You earned the audience — now you have to earn their action. The category is forming around someone. It might as well be you. Stop being a personality. Become a position.",
    nextStageTeaser:
      "Once you’re the category leader, the trap is staying too long. Stage 6 is about knowing when to evolve before the market forces it on you.",
  },
  stage6: {
    id: 'stage6',
    code: 'STAGE 6',
    name: 'Pivot',
    headline: 'Here’s The Real Reason...',
    bottomLineSub: 'where it’s all about reinvention, not repair',
    biggestChallenge: 'BREAKING THE CYCLE',
    truth:
      "Something feels off and you’ve been ignoring it for two quarters. The numbers still look fine on the outside, but you know the engine you built is the wrong engine for where you want to go. The hardest thing you’ll do this year is admit it before the market does.",
    bottomLine:
      "Stage 6 is grief, dressed as strategy. You have to bury parts of the business you built to free the version you actually want. The longer you protect the old identity, the more the new one shrinks.",
    nextStageTeaser:
      "Once you’ve pivoted, the constraint becomes compound. Stage 7 is about building beyond a single business — multiple bets, shared leverage, an asset stack.",
  },
  stage7: {
    id: 'stage7',
    code: 'STAGE 7',
    name: 'Expand',
    headline: 'Nobody Wants To Admit...',
    bottomLineSub: 'where it’s all about leverage across bets',
    biggestChallenge: 'SCALING THE EMPIRE',
    truth:
      "Nobody wants to admit that running one good business stopped being interesting two years ago. The challenge isn’t survival anymore — it’s direction. You can spin up almost anything, which means every yes is a slow no to something better.",
    bottomLine:
      "At this stage your scarcest resource is not money, talent, or time — it’s identity. Every new bet rewrites who you are in the market. Choose what you become next on purpose, or the market will choose for you.",
    nextStageTeaser:
      "There’s no next stage on the map. From here it’s legacy: what you build that outlives the founder, the brand, and the original bet.",
  },
};

// ============================================================
// THE 6 CONSTRAINTS — Nik's framework
// ============================================================

export const CONSTRAINTS = [
  { id: 'identity',    label: 'Identity' },
  { id: 'positioning', label: 'Positioning' },
  { id: 'offer',       label: 'Offer' },
  { id: 'content',     label: 'Content' },
  { id: 'marketing',   label: 'Marketing' },
  { id: 'team',        label: 'Team' },
];

// ============================================================
// BUSINESS CATEGORIES — picked before the diagnostic questions.
// The category re-labels some option text and gets passed into
// the GPT prompt so the playbook is tailored to the model.
// ============================================================

export const BUSINESS_CATEGORIES = [
  {
    value: 'service',
    label: 'Service Business',
    sub: 'Agency, consultancy, coaching, freelance — selling your team or expertise.',
  },
  {
    value: 'saas',
    label: 'Digital Product',
    sub: 'SaaS, mobile app, software, web tool — code is the product.',
  },
  {
    value: 'retail',
    label: 'Retail / E-commerce',
    sub: 'Physical products, online store, DTC brand — inventory and shipping.',
  },
  {
    value: 'creator',
    label: 'Creator / Content',
    sub: 'Courses, info products, paid community, paid newsletter.',
  },
  {
    value: 'local',
    label: 'Local / Brick & Mortar',
    sub: 'Restaurant, salon, gym, clinic, local services — physical location.',
  },
  {
    value: 'other',
    label: 'Other / Mixed',
    sub: 'Doesn’t fit neatly — we’ll still tailor it to what you describe.',
  },
];

export function getCategoryMeta(value) {
  return BUSINESS_CATEGORIES.find((c) => c.value === value) || BUSINESS_CATEGORIES[5];
}

// ============================================================
// QUIZ — 3 diagnostic questions that auto-route to a stage.
// Options can have a `labelFor` map keyed by business category so
// language is tailored to the user's business type.
// Final stage = round( average of chosen `s` values ), clamped to [0,7].
// ============================================================

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'q1',
    label: 'What best describes where your business is in revenue terms?',
    options: [
      {
        value: 'q1a', s: 0,
        label: 'Nothing built yet — still deciding what to make',
        labelFor: {
          service: 'No service offer built yet — still deciding what to sell',
          saas: 'No product built yet — still deciding what to build',
          retail: 'No products sourced yet — still deciding what to sell',
          creator: 'No paid offer built yet — still deciding the format',
          local: 'No location yet — still deciding the concept',
        },
      },
      {
        value: 'q1b', s: 1,
        label: 'Ready to sell but no revenue yet',
        labelFor: {
          service: 'Service packages defined but no clients booked yet',
          saas: 'MVP / beta is built but not in market yet',
          retail: 'Inventory is ready but the store isn’t launched',
          creator: 'Paid offer is built but not promoted yet',
          local: 'Doors not open yet — pre-launch',
        },
      },
      {
        value: 'q1c', s: 1,
        label: 'In market, first few sales — under $2k/month',
        labelFor: {
          service: 'First few clients — under $2k/month',
          saas: 'First few paying users — under $2k MRR',
          retail: 'First few orders — under $2k/month in sales',
          creator: 'First few buyers — under $2k/month',
          local: 'Open, first customers — under $2k/month',
        },
      },
      { value: 'q1d', s: 2, label: '$2k–$10k/month, mostly inconsistent' },
      { value: 'q1e', s: 3, label: '$10k–$30k/month, fairly consistent' },
      { value: 'q1f', s: 4, label: '$30k–$80k/month' },
      { value: 'q1g', s: 5, label: '$80k–$200k/month, strong brand pull' },
      { value: 'q1h', s: 6, label: 'Revenue is plateauing or shrinking' },
      { value: 'q1i', s: 7, label: '$200k+/mo, more than one business' },
      { value: 'other', s: null, label: 'Other — let me describe it' },
    ],
  },
  {
    id: 'q2',
    label: 'What does most of your day actually look like?',
    options: [
      { value: 'q2a', s: 0, label: 'Researching, planning, undecided what to build' },
      {
        value: 'q2b', s: 1,
        label: 'Building the offer, prepping for launch',
        labelFor: {
          service: 'Designing service packages and price tiers',
          saas: 'Coding the MVP and shipping features',
          retail: 'Sourcing inventory and prepping the store',
          creator: 'Producing my first paid offer (course, cohort, etc.)',
          local: 'Building out the space and prepping for opening',
        },
      },
      {
        value: 'q2c', s: 1,
        label: 'Hunting for the first 10 paying customers',
        labelFor: {
          service: 'Pitching for the first 10 paying clients',
          saas: 'Driving signups and trying to convert the first 10 users',
          retail: 'Driving traffic for the first 10 orders',
          creator: 'Promoting the offer to get the first 10 buyers',
          local: 'Doing outreach to get the first 10 customers in',
        },
      },
      {
        value: 'q2d', s: 2,
        label: 'Delivering the work, racing to keep up',
        labelFor: {
          service: 'Delivering client work, racing to keep up',
          saas: 'Supporting users and shipping bug fixes back-to-back',
          retail: 'Packing orders and handling fulfilment',
          creator: 'Delivering live calls / Q&As to early students',
          local: 'Running shifts, doing everything on the floor',
        },
      },
      {
        value: 'q2e', s: 3,
        label: 'Watching competitors win the same deals I want',
        labelFor: {
          service: 'Watching competitors win the same client deals',
          saas: 'Watching competitors get the signups I should be getting',
          retail: 'Watching competitor stores outsell me on the same products',
          creator: 'Watching other creators get the audience I’m chasing',
          local: 'Watching the spot down the street stay packed while I’m slow',
        },
      },
      { value: 'q2f', s: 4, label: 'Trying to fix margins, ops, delivery quality' },
      { value: 'q2g', s: 5, label: 'Posting, speaking, building authority' },
      { value: 'q2h', s: 6, label: 'Re-thinking the direction of the business' },
      { value: 'q2i', s: 7, label: 'Splitting attention across multiple ventures' },
      { value: 'other', s: null, label: 'Other — let me describe it' },
    ],
  },
  {
    id: 'q3',
    label: 'Which sentence feels most painfully true right now?',
    options: [
      { value: 'q3a', s: 0, label: 'I haven’t actually started for real yet' },
      {
        value: 'q3b', s: 1,
        label: 'I built it but haven’t sold it',
        labelFor: {
          service: 'I designed the offer but haven’t pitched it to anyone',
          saas: 'I built the product but haven’t put it in front of users',
          retail: 'I have inventory but haven’t opened the store',
          creator: 'I made the offer but haven’t promoted it',
          local: 'I built the space but I’m not open yet',
        },
      },
      { value: 'q3c', s: 1, label: 'I need proof someone will pay me' },
      { value: 'q3d', s: 2, label: 'Everything still depends on me personally' },
      {
        value: 'q3e', s: 3,
        label: 'I look exactly like my competition',
        labelFor: {
          service: 'My offer sounds exactly like every other agency / consultant',
          saas: 'My product looks exactly like every other tool in the space',
          retail: 'My brand looks like every other store in this category',
          creator: 'My content sounds like every other creator in this niche',
          local: 'My place feels like every other one in the neighbourhood',
        },
      },
      { value: 'q3f', s: 4, label: 'My costs are eating my growth' },
      { value: 'q3g', s: 5, label: 'People know me but still pick someone louder' },
      { value: 'q3h', s: 6, label: 'Something fundamental needs to change' },
      { value: 'q3i', s: 7, label: 'One business isn’t enough anymore' },
      { value: 'other', s: null, label: 'Other — let me describe it' },
    ],
  },
];

// Resolve the label for an option given the chosen business category.
export function optionLabel(option, category) {
  if (!option) return '';
  if (category && option.labelFor && option.labelFor[category]) {
    return option.labelFor[category];
  }
  return option.label;
}

// Route to a stage given the user's answers.
// Q1 & Q3 are single-select; Q2 is multi-select (array of values).
// 'Other' answers contribute null and are skipped. If nothing contributes,
// default to stage 2 (safe middle) — GPT still personalises from the text.
export function routeToStage(answers) {
  const sValues = [];

  const pickSingle = (qIdx, value) => {
    const opt = DIAGNOSTIC_QUESTIONS[qIdx].options.find((o) => o.value === value);
    if (opt && opt.s !== null) sValues.push(opt.s);
  };

  pickSingle(0, answers.q1);

  const q2Arr = Array.isArray(answers.q2) ? answers.q2 : (answers.q2 ? [answers.q2] : []);
  q2Arr.forEach((v) => pickSingle(1, v));

  pickSingle(2, answers.q3);

  if (sValues.length === 0) return STAGE_IDS[2];
  const avg = sValues.reduce((a, b) => a + b, 0) / sValues.length;
  const idx = Math.max(0, Math.min(7, Math.round(avg)));
  return STAGE_IDS[idx];
}
