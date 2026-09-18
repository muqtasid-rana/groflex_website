'use client';

import { useRef } from 'react';
import Image from 'next/image';
import LineIcon from '@/components/LineIcon/LineIcon';
import { team } from '@/data/siteData';

const initials = (text) => text.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export default function AgencyTeam() {
  const trackRef = useRef(null);

  // Moves the carousel by one card
  const scroll = (dir) => {
    const track = trackRef.current;
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : 300;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="ah-section ah-team">
      <div className="container">
        <header className="ah-head ah-head--split">
          <div>
            <p className="ah-eyebrow">The team</p>
            <h2 className="ah-head__title">Our <em>talented</em> team</h2>
          </div>
          <div className="ah-team__controls">
            <button type="button" className="ah-arrow" onClick={() => scroll(-1)} aria-label="Previous team members">
              <LineIcon name="arrowLeft" size={20} strokeWidth={2} />
            </button>
            <button type="button" className="ah-arrow" onClick={() => scroll(1)} aria-label="Next team members">
              <LineIcon name="arrowRight" size={20} strokeWidth={2} />
            </button>
          </div>
        </header>

        <ul className="ah-team__track" ref={trackRef}>
          {team.map((m, i) => (
            <li key={`${m.role}-${i}`} className="ah-member">
              <div className="ah-member__photo">
                {m.image ? (
                  <Image src={m.image} alt="" fill sizes="(max-width: 640px) 70vw, 280px" />
                ) : (
                  <span className="ah-member__initials" aria-hidden="true">{initials(m.name || m.role)}</span>
                )}
              </div>
              {m.name && <h3 className="ah-member__name">{m.name}</h3>}
              <p className="ah-member__role">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
