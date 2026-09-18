// Plate's mark (a plate and a fork) redrawn as a vector, with the name set in
// the site's heading font. Colours come from `currentColor`.
export default function PlateLogo({ className = '' }) {
  return (
    <svg className={className} width="128" height="40" viewBox="0 0 128 40" role="img" aria-label="Plate">
      <g fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="21" r="12.5" />
        <path d="M37 7v7.5c0 2.6 1.8 4.3 4 4.3s4-1.7 4-4.3V7M41 7v26" />
      </g>
      <text
        x="55"
        y="29.5"
        fill="currentColor"
        fontSize="25"
        fontWeight="700"
        letterSpacing="-0.5"
        style={{ fontFamily: 'var(--font-heading), sans-serif' }}
      >
        Plate
      </text>
    </svg>
  );
}
