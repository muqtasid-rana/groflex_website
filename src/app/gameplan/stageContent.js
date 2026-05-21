// ============================================================
// THE FOUNDER GAMEPLAN — for non-technical SaaS & app founders
// 8 stages of building a digital product business.
// Each stage has:
//   - id, code, name
//   - headline               (the "The Truth Is..." line)
//   - bottomLineSub          (subheading for The Bottom Line page)
//   - biggestChallenge       (uppercase tag)
//   - truth                  (brutal-honest paragraph in SaaS founder language)
//   - bottomLine             (closing argument — used as a static fallback)
//   - nextStageTeaser
// All language assumes the reader has built (or is building) a SaaS / app /
// digital product and has NEVER sold anything before.
// ============================================================

export const STAGE_IDS = [
  'stage0', 'stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7',
];

export const STAGE_LIST = [
  { id: 'stage0', code: 'STAGE 0', name: 'Idea' },
  { id: 'stage1', code: 'STAGE 1', name: 'Build' },
  { id: 'stage2', code: 'STAGE 2', name: 'Launch' },
  { id: 'stage3', code: 'STAGE 3', name: 'Traction' },
  { id: 'stage4', code: 'STAGE 4', name: 'Scale' },
  { id: 'stage5', code: 'STAGE 5', name: 'Lead' },
  { id: 'stage6', code: 'STAGE 6', name: 'Pivot' },
  { id: 'stage7', code: 'STAGE 7', name: 'Expand' },
];

export const STAGES = {
  stage0: {
    id: 'stage0',
    code: 'STAGE 0',
    name: 'Idea',
    headline: 'The Truth Is...',
    bottomLineSub: 'where it’s all about validating the idea before building',
    biggestChallenge: 'VALIDATING THE IDEA',
    truth:
      "You have an idea you can’t stop thinking about, but you haven’t written a line of code or talked to a single potential user. Every week you tell yourself you’ll start, and every week you research one more competitor instead. The problem isn’t the idea. The problem is you haven’t proven anyone actually wants it — and until you do, building anything is gambling.",
    bottomLine:
      "Right now you have a hypothesis, not a startup. Until you’ve talked to ten people in your ICP and heard them describe this problem in their own words, every line of code you write is a guess. Validate before you build — or you’ll spend six months building something nobody asked for.",
    nextStageTeaser:
      "Once you’ve heard real users describe this pain in their own words, the next problem is shaping it into something they’ll actually use. Stage 1 is about building the right MVP — not the prettiest one.",
  },
  stage1: {
    id: 'stage1',
    code: 'STAGE 1',
    name: 'Build',
    headline: 'You Already Know This...',
    bottomLineSub: 'where it’s all about shipping something usable, not perfect',
    biggestChallenge: 'SHIPPING A USABLE V1',
    truth:
      "You’re deep in the build. You keep adding one more feature before you’ll feel comfortable showing it to anyone. The codebase has gotten complicated and the launch date keeps drifting. The truth is your product doesn’t need more features — it needs a user. The longer you build in private, the further you get from what the market actually wants.",
    bottomLine:
      "You don’t have a product problem — you have a courage problem. The build is a way to delay the harder conversation: will anyone pay for this. Cut scope. Ship the ugly version. The market gives you better feedback in one week than six months of solo coding ever will.",
    nextStageTeaser:
      "Once your product is in the wild, the next problem stops being technical and starts being human: getting someone to actually use it. Stage 2 is about your first 10 paying users.",
  },
  stage2: {
    id: 'stage2',
    code: 'STAGE 2',
    name: 'Launch',
    headline: 'You Keep Telling Yourself...',
    bottomLineSub: 'where it’s all about getting your first paying users',
    biggestChallenge: 'GETTING YOUR FIRST 10 USERS',
    truth:
      "If I just keep building, someone will eventually find it. But nobody is finding it. The signups you do get don’t come back. You’ve never sold anything to anyone, and the idea of cold-emailing a stranger or sliding into a DM makes you feel like an imposter. Meanwhile the product is sitting there, working, with nobody on the other end.",
    bottomLine:
      "Your product isn’t the bottleneck — your willingness to talk to strangers is. A SaaS without a distribution muscle is a hobby. You don’t need ads, content, or a brand yet. You need ten conversations with people who fit your ICP, and an offer they can’t politely refuse.",
    nextStageTeaser:
      "Once you have paying users, a new problem emerges: how do you get them consistently, predictably, without you in every conversation? Stage 3 is about turning random luck into a repeatable pipeline.",
  },
  stage3: {
    id: 'stage3',
    code: 'STAGE 3',
    name: 'Traction',
    headline: 'You Keep Telling Yourself...',
    bottomLineSub: 'where it’s all about repeatable acquisition, not random wins',
    biggestChallenge: 'MAKING REVENUE PREDICTABLE',
    truth:
      "You have customers. Real ones. But every new signup feels like a coin flip — you can’t explain why this person bought and the last five didn’t. Revenue is real but random. You can’t plan, can’t hire, can’t forecast. You know you’ve been lucky, and you know you can’t scale luck.",
    bottomLine:
      "Random revenue isn’t traction — it’s noise that occasionally pays you. Until you can name the channel, the message, and the ICP that consistently produces signups, you’re running a guessing machine. Pick one channel. Beat it into the ground. Repeatability beats reach every time.",
    nextStageTeaser:
      "Once acquisition is repeatable, the bottleneck moves from outside the business to inside it: you. Stage 4 is about building the systems that let you grow past your own bandwidth.",
  },
  stage4: {
    id: 'stage4',
    code: 'STAGE 4',
    name: 'Scale',
    headline: 'It’s Funny Because...',
    bottomLineSub: 'where it’s all about systems and leverage, not hustle',
    biggestChallenge: 'GROWING WITHOUT BREAKING',
    truth:
      "You smile when people say you’re crushing it, knowing how close everything is to falling apart. Support tickets pile up. Onboarding is you on Zoom. Every new customer makes the cracks louder. The product works — the business is the part that’s breaking. You hit a number you used to dream about and somehow you’ve never been more exhausted.",
    bottomLine:
      "Scaling a SaaS without systems is just compounding chaos. Every new customer is a tax on you personally — your inbox, your nights, your sanity. Until the work lives outside your head — onboarding, support, sales, even pricing decisions — every new dollar costs more than it earns. Build the machine before you press the gas again.",
    nextStageTeaser:
      "Once the machine runs without you in every seat, the question becomes positioning. Stage 5 is about going from ‘a tool in the space’ to the obvious choice in the category.",
  },
  stage5: {
    id: 'stage5',
    code: 'STAGE 5',
    name: 'Lead',
    headline: 'The Crazy Part Is...',
    bottomLineSub: 'where it’s all about category authority',
    biggestChallenge: 'OWNING THE CATEGORY',
    truth:
      "Your product is good. The numbers are good. And yet buyers still compare you to three competitors who do half of what you do. You’ve been so heads-down shipping that you forgot to tell the market who you are. Being the best tool in the room means nothing if nobody can describe why in one sentence.",
    bottomLine:
      "At this stage product quality stops being a moat — narrative does. The market doesn’t reward the best builder; it rewards the clearest voice. Pick the point of view you want to own. Say it everywhere. Repetition is positioning. Silence is being forgotten.",
    nextStageTeaser:
      "Once you own a position, the trap is staying too long. Stage 6 is about evolving the product before the market does it for you.",
  },
  stage6: {
    id: 'stage6',
    code: 'STAGE 6',
    name: 'Pivot',
    headline: 'Here’s The Real Reason...',
    bottomLineSub: 'where it’s all about evolving before the market forces you to',
    biggestChallenge: 'KNOWING WHEN TO EVOLVE',
    truth:
      "Growth has slowed. The dashboards look fine on paper, but you can feel it — the product you built is for who you were two years ago, not where the market is going. You’ve been protecting the version that got you here instead of building the one that’ll take you forward.",
    bottomLine:
      "The hardest part of pivoting isn’t the new direction — it’s admitting the old one is done. Keep one foot in each boat and you drown. Decide what the next version of the product is for, who it’s for, and ship it boldly. Markets don’t wait for founders to grieve.",
    nextStageTeaser:
      "Once the new direction is locked, the question becomes leverage across multiple bets. Stage 7 is about building beyond a single product.",
  },
  stage7: {
    id: 'stage7',
    code: 'STAGE 7',
    name: 'Expand',
    headline: 'Nobody Wants To Admit...',
    bottomLineSub: 'where it’s all about leverage across products and bets',
    biggestChallenge: 'BUILDING THE PORTFOLIO',
    truth:
      "Running one good SaaS stopped being interesting a year ago. You can spin up new products, but every yes is a slow no to focus. The danger here isn’t failure — it’s dilution. The temptation is to chase every new idea with the same energy that built the first one, and end up running five mediocre products instead of one extraordinary one.",
    bottomLine:
      "At this stage your scarcest resource isn’t money or talent — it’s strategic focus. Every new product changes who you are in the market. Choose what you become next on purpose, or the market will decide for you by ignoring all of it.",
    nextStageTeaser:
      "There’s no next stage on the map. From here the question becomes legacy — what you build that outlives the original product, the team, and you.",
  },
};

// ============================================================
// THE 6 PILLARS — SaaS / app founder framework
// ICP → Messaging → Product-Market Fit → Outreach → Pipeline → Systems
// ============================================================

export const CONSTRAINTS = [
  {
    id: 'icp',
    label: 'ICP',
    longLabel: 'Ideal Customer Profile',
    blurb: 'Who exactly has this problem badly enough to pay you to solve it.',
  },
  {
    id: 'messaging',
    label: 'Messaging',
    longLabel: 'Messaging',
    blurb: 'How you describe the problem and the product in their language, not yours.',
  },
  {
    id: 'pmf',
    label: 'Product-Market Fit',
    longLabel: 'Product-Market Fit',
    blurb: 'Whether your product actually solves the problem well enough that they want it.',
  },
  {
    id: 'outreach',
    label: 'Outreach',
    longLabel: 'Outreach',
    blurb: 'How you actually get in front of the right people, consistently.',
  },
  {
    id: 'pipeline',
    label: 'Pipeline',
    longLabel: 'Pipeline',
    blurb: 'A repeatable system that turns strangers into paying users.',
  },
  {
    id: 'systems',
    label: 'Systems',
    longLabel: 'Systems',
    blurb: 'Operations that let the business run without you being the bottleneck.',
  },
];

// ============================================================
// QUIZ — 3 single-select diagnostic questions, all with "Other".
// Routing: average the chosen `s` values, round, clamp to [0,7].
// ============================================================

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'q1',
    label: 'Where is your SaaS or app right now?',
    options: [
      { value: 'q1a', s: 0, label: 'Has idea but haven’t started yet' },
      { value: 'q1b', s: 0, label: 'Still building the product' },
      { value: 'q1c', s: 1, label: 'Product is ready but no paying customers yet' },
      { value: 'q1d', s: 2, label: 'Have some customers but growth is stuck' },
      { value: 'q1e', s: 4, label: 'Growing but everything feels chaotic' },
      { value: 'other', s: null, label: 'Other — let me describe it' },
    ],
  },
  {
    id: 'q2',
    label: 'What does your current day actually look like?',
    options: [
      { value: 'q2a', s: 0, label: 'Thinking, planning' },
      { value: 'q2b', s: 1, label: 'Adding features and fixing bugs' },
      { value: 'q2c', s: 1, label: 'Trying to find anyone who will actually use it' },
      { value: 'q2d', s: 2, label: 'Doing everything manually — sales, support, onboarding' },
      { value: 'q2e', s: 4, label: 'Putting out fires instead of building' },
      { value: 'other', s: null, label: 'Other — let me describe it' },
    ],
  },
  {
    id: 'q3',
    label: 'Which of these hits closest to home?',
    options: [
      { value: 'q3a', s: 0, label: 'I don’t know if anyone will actually pay for this' },
      { value: 'q3b', s: 1, label: 'I have no idea how to find and reach my ideal customers' },
      { value: 'q3c', s: 2, label: 'I can’t get consistent revenue — it’s completely random' },
      { value: 'q3d', s: 3, label: 'Everything depends on me personally and I can’t scale' },
      { value: 'other', s: null, label: 'Other — let me describe it' },
    ],
  },
];

// Route to a stage. All three questions are single-select now.
// "Other" contributes null and is skipped. If nothing contributes, default to stage 1.
export function routeToStage(answers) {
  const sValues = [];
  const pickSingle = (qIdx, value) => {
    const opt = DIAGNOSTIC_QUESTIONS[qIdx].options.find((o) => o.value === value);
    if (opt && opt.s !== null) sValues.push(opt.s);
  };
  pickSingle(0, answers.q1);
  pickSingle(1, answers.q2);
  pickSingle(2, answers.q3);
  if (sValues.length === 0) return STAGE_IDS[1];
  const avg = sValues.reduce((a, b) => a + b, 0) / sValues.length;
  const idx = Math.max(0, Math.min(7, Math.round(avg)));
  return STAGE_IDS[idx];
}
