'use client';

import { forwardRef } from 'react';
import { STAGE_LIST, CONSTRAINTS } from './stageContent';

const FOOTER_URL = 'groflex.co';

// ============================================================
// Book — the 6-page magazine the user scrolls through and prints
// ============================================================
const Book = forwardRef(function Book({ stage, ai, userName }, ref) {
  const next = nextStage(stage.id);
  return (
    <div className="gp-book" ref={ref}>
      <Cover stage={stage} userName={userName} />
      <PageTruth stage={stage} ai={ai} />
      <PageFocus stage={stage} ai={ai} />
      <PageHowTo stage={stage} ai={ai} />
      <PageBottomLine stage={stage} ai={ai} next={next} />
      <PageNextStage stage={stage} next={next} ai={ai} />
    </div>
  );
});

export default Book;

// ============================================================
// PAGE 1 — Cover
// ============================================================
function Cover({ stage, userName }) {
  return (
    <article className="gp-page gp-page--cover" data-page="1">
      <PageFrame n={1}>
        <div className="gp-cover__top">
          <span className="gp-cover__eyebrow">For non-technical SaaS & app founders</span>
          <h1 className="gp-cover__title">GAMEPLAN</h1>
          {userName && <p className="gp-cover__owner">Prepared for {userName}</p>}
        </div>

        <div className="gp-cover__here">
          <span className="gp-cover__here-label">
            <span className="gp-cover__here-play" aria-hidden="true">▶</span>
            You are here:
          </span>
          <h2 className="gp-cover__here-stage">
            {stage.code}: <span className="gp-pink">{stage.name}</span>
          </h2>
          <StageProgressLine current={stage.id} />
        </div>

        <div className="gp-cover__breakdown">
          <span className="gp-mini-label">The Breakdown</span>
          <p className="gp-cover__breakdown-text">
            6 pillars &nbsp;·&nbsp; diagnosed for your stage &nbsp;·&nbsp; ranked by what to fix first
          </p>
        </div>

        <div className="gp-cover__all">
          <span className="gp-mini-label">All Stages</span>
          <div className="gp-cover__grid">
            {STAGE_LIST.map((s) => {
              const isCurrent = s.id === stage.id;
              const isDone = stageIndex(s.id) < stageIndex(stage.id);
              return (
                <div
                  key={s.id}
                  className={
                    'gp-cover__cell' +
                    (isCurrent ? ' gp-cover__cell--current' : '') +
                    (isDone ? ' gp-cover__cell--done' : '')
                  }
                >
                  <span className="gp-cover__cell-code">{s.code}</span>
                  <span className="gp-cover__cell-name">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </PageFrame>
    </article>
  );
}

function StageProgressLine({ current }) {
  const idx = stageIndex(current);
  const total = STAGE_LIST.length;
  return (
    <div className="gp-progress-line" aria-hidden="true">
      {STAGE_LIST.map((s, i) => (
        <div
          key={s.id}
          className={
            'gp-progress-line__dot' +
            (i < idx ? ' gp-progress-line__dot--done' : '') +
            (i === idx ? ' gp-progress-line__dot--current' : '')
          }
        />
      ))}
      <div
        className="gp-progress-line__fill"
        style={{ width: `${(idx / (total - 1)) * 100}%` }}
      />
    </div>
  );
}

// ============================================================
// PAGE 2 — The Truth + the 6 pillar pain cards
// ============================================================
function PageTruth({ stage, ai }) {
  const cs = ai?.constraints || {};
  return (
    <article className="gp-page gp-page--truth" data-page="2">
      <PageFrame n={2}>
        <header className="gp-truth__header">
          <span className="gp-mini-label">At {stage.code}</span>
          <h2 className="gp-truth__headline">{stage.headline}</h2>
          <p className="gp-truth__body">{ai?.personalTruth || stage.truth}</p>
          <div className="gp-truth__challenge">
            <span className="gp-mini-label">The biggest challenge</span>
            <span className="gp-truth__challenge-tag">{stage.biggestChallenge}</span>
          </div>
        </header>

        <div className="gp-constraints">
          {CONSTRAINTS.map((c) => (
            <div className="gp-constraint" key={c.id}>
              <span className="gp-constraint__label">{c.label}</span>
              <p className="gp-constraint__pain">
                {cs[c.id]?.reason || c.blurb}
              </p>
            </div>
          ))}
        </div>
      </PageFrame>
    </article>
  );
}

// ============================================================
// PAGE 3 — Your Focus (RYG status indicators + Problem / Cause / When Solved)
// ============================================================
function PageFocus({ stage, ai }) {
  const focus = ai?.focus || {};
  const cs = ai?.constraints || {};
  const focusArea = focus.area || 'icp';
  const focusLabel = CONSTRAINTS.find((c) => c.id === focusArea)?.label || 'your ICP';

  return (
    <article className="gp-page gp-page--focus" data-page="3">
      <PageFrame n={3}>
        <header className="gp-focus__header">
          <h2 className="gp-focus__title">YOUR FOCUS</h2>
          <p className="gp-focus__sub">
            should be on <em className="gp-pink">{focusLabel}</em>
          </p>
        </header>

        <div className="gp-pillars">
          {CONSTRAINTS.map((c) => {
            const data = cs[c.id] || {};
            const status = data.status || 'yellow';
            const isFocus = c.id === focusArea;
            return (
              <div
                key={c.id}
                className={
                  'gp-pillar gp-pillar--' + status +
                  (isFocus ? ' gp-pillar--focus' : '')
                }
              >
                <div className="gp-pillar__head">
                  <div className="gp-pillar__title">
                    <span className={'gp-pillar__dot gp-pillar__dot--' + status} aria-hidden="true" />
                    <span className="gp-pillar__label">{c.label.toUpperCase()}</span>
                  </div>
                  <span className={'gp-pillar__chip gp-pillar__chip--' + status}>
                    {status === 'red' ? 'FIX FIRST' : status === 'yellow' ? 'WATCH' : 'HEALTHY'}
                  </span>
                </div>
                <p className="gp-pillar__reason">{data.reason || c.blurb}</p>
              </div>
            );
          })}
        </div>

        <div className="gp-focus__blocks">
          <div className="gp-focus__block">
            <span className="gp-mini-label">The Problem</span>
            <p>{focus.problem || '—'}</p>
          </div>
          <div className="gp-focus__block">
            <span className="gp-mini-label">The Cause</span>
            <p>{focus.cause || '—'}</p>
          </div>
          <div className="gp-focus__block gp-focus__block--solved">
            <span className="gp-mini-label">When Solved</span>
            <p>{focus.whenSolved || '—'}</p>
          </div>
        </div>
      </PageFrame>
    </article>
  );
}

// ============================================================
// PAGE 4 — How To Succeed (priority grid)
// ============================================================
function PageHowTo({ stage, ai }) {
  const cs = ai?.constraints || {};
  const ordered = [...CONSTRAINTS].sort((a, b) => {
    const pa = cs[a.id]?.priority ?? 99;
    const pb = cs[b.id]?.priority ?? 99;
    return pa - pb;
  });
  return (
    <article className="gp-page gp-page--howto" data-page="4">
      <PageFrame n={4}>
        <header className="gp-howto__header">
          <h2 className="gp-howto__title">HOW TO SUCCEED</h2>
          <p className="gp-howto__sub">
            Priorities ranked. What to do first, what to ignore for now.
          </p>
        </header>

        <div className="gp-priorities">
          {ordered.map((c, i) => {
            const data = cs[c.id] || {};
            const priority = data.priority ?? i + 1;
            const cls =
              priority === 1
                ? 'gp-priority--p1'
                : priority <= 3
                ? 'gp-priority--p2'
                : 'gp-priority--p3';
            const marker =
              priority === 1 ? '✓' : priority <= 3 ? '!' : '✕';
            return (
              <div key={c.id} className={`gp-priority ${cls}`}>
                <div className="gp-priority__head">
                  <span className="gp-priority__name">{c.label}</span>
                  <span className="gp-priority__marker">{marker}</span>
                </div>
                <span className="gp-priority__level">Priority level {priority}</span>
                <p className="gp-priority__body">{data.howTo || '—'}</p>
              </div>
            );
          })}
        </div>
      </PageFrame>
    </article>
  );
}

// ============================================================
// PAGE 5 — The Bottom Line + the bold CTA
// ============================================================
function PageBottomLine({ stage, ai, next }) {
  return (
    <article className="gp-page gp-page--bottom" data-page="5">
      <PageFrame n={5}>
        <header className="gp-bottom__header">
          <h2 className="gp-bottom__title">THE BOTTOM LINE</h2>
          <p className="gp-bottom__sub">{stage.bottomLineSub}</p>
        </header>

        <div className="gp-bottom__body">
          <p className="gp-bottom__lead">{ai?.bottomLine || stage.bottomLine}</p>
        </div>

        <div className="gp-cta">
          <h3 className="gp-cta__heading">Let’s Build This Together</h3>
          <p className="gp-cta__sub">
            Get on a 1:1 call with me — we’ll walk through your exact roadmap
            and what to do first.
          </p>
          <button
            type="button"
            className="gp-cta__btn"
            data-tally-open="kd5KV1"
            data-tally-layout="modal"
            data-tally-width="676"
            data-tally-hide-title="1"
            data-tally-auto-close="2500"
          >
            Book a 1:1 call →
          </button>
        </div>
      </PageFrame>
    </article>
  );
}

// ============================================================
// PAGE 6 — Next stage teaser
// ============================================================
function PageNextStage({ stage, next, ai }) {
  const teaser = (ai?.nextStageTeaser) || stage.nextStageTeaser;
  return (
    <article className="gp-page gp-page--next" data-page="6">
      <PageFrame n={6}>
        <header className="gp-next__header">
          <span className="gp-mini-label">This is coming in your next stage</span>
          <h2 className="gp-next__stage">
            {next ? `${next.code}: ${next.name}` : 'You’ve reached the top of the map'}
          </h2>
        </header>

        <p className="gp-next__teaser">{teaser}</p>

        {next && (
          <div className="gp-next__line">
            <StageProgressLine current={next.id} />
          </div>
        )}

        <div className="gp-next__cta">
          <button
            type="button"
            className="gp-btn gp-btn--ghost-light"
            data-tally-open="kd5KV1"
            data-tally-layout="modal"
            data-tally-width="676"
            data-tally-hide-title="1"
            data-tally-auto-close="2500"
          >
            Build the next stage with us →
          </button>
        </div>
      </PageFrame>
    </article>
  );
}

// ============================================================
// Page frame
// ============================================================
function PageFrame({ n, children }) {
  return (
    <div className="gp-page__frame">
      <div className="gp-page__corner gp-page__corner--tl">
        <span className="gp-mark">GAMEPLAN</span>
      </div>
      <div className="gp-page__corner gp-page__corner--tr">
        <span className="gp-page__num">Page {n} / 6</span>
      </div>
      <div className="gp-page__inner">{children}</div>
      <div className="gp-page__corner gp-page__corner--bl">
        <span className="gp-page__foot">{FOOTER_URL}</span>
      </div>
      <div className="gp-page__corner gp-page__corner--br">
        <span className="gp-page__foot">© Groflex</span>
      </div>
    </div>
  );
}

// ============================================================
// Helpers
// ============================================================
function stageIndex(id) {
  return STAGE_LIST.findIndex((s) => s.id === id);
}
function nextStage(id) {
  const i = stageIndex(id);
  if (i < 0 || i >= STAGE_LIST.length - 1) return null;
  return STAGE_LIST[i + 1];
}
