// Outline-only icons (stroke, no fill) for the agency home page.
// Each entry is the inner markup of a 24×24 icon.
const icons = {
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.8 13.5 7.5 21l4.5-2.4 4.5 2.4-1.3-7.5" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-1.2-1-1.5-1-2.6 0-.9.7-1.4 1.6-1.4H16a5 5 0 0 0 5-5C21 6.6 17 3 12 3Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10" cy="7" r="1" />
      <circle cx="14.5" cy="7" r="1" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="4" width="14" height="10" rx="1.5" />
      <path d="M6 18h6" />
      <rect x="15.5" y="9" width="6" height="11" rx="1.5" />
    </>
  ),
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  mobile: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="m10.5 9.5-2 2 2 2M13.5 9.5l2 2-2 2" />
    </>
  ),
  cloud: <path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.9 8.1 4.2 4.2 0 0 1 17.5 18.5Z" />,
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4h3l7 4.5v-13L7 10Z" />
      <path d="M17.5 9a4 4 0 0 1 0 6" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5M8 12.5v-1.5M10.5 12.5V8.5M13 12.5v-2.5" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a3 3 0 0 0 3 3h5.5M12.5 12.5 15 15l-2.5 2.5" />
    </>
  ),
  checklist: <path d="m4 6 1.5 1.5L8 5M4 12l1.5 1.5L8 11M4 18l1.5 1.5L8 17M11 6.5h9M11 12.5h9M11 18.5h9" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,

  // Service pages
  cart: (
    <>
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
      <path d="M2.5 3.5h3l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.1l1.8-7.3H6.6" />
    </>
  ),
  gauge: (
    <>
      <path d="M4.5 18a9 9 0 1 1 15 0" />
      <path d="m12 13 4-5" />
      <circle cx="12" cy="13" r="1.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  git: (
    <>
      <circle cx="6" cy="5.5" r="2" />
      <circle cx="6" cy="18.5" r="2" />
      <circle cx="18" cy="8" r="2" />
      <path d="M6 7.5v9M18 10v1a4 4 0 0 1-4 4H9a3 3 0 0 0-3 1.5" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9Z" />
  ),
  refresh: <path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1M20 20v-4.5h-4.5" />,
  cursor: (
    <>
      <path d="m5 3 5.5 16 2.3-6.7L19.5 10Z" />
      <path d="m13 13 6 6" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </>
  ),
  pen: (
    <>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
      <path d="m14.5 5.5 3 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.5a6.5 6.5 0 0 1 3 5.5" />
    </>
  ),
  type: <path d="M5 7V5h14v2M12 5v14M9 19h6" />,
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m21 16-5-5-9 9" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  chart: <path d="M4 4v16h16M8 16v-4M12 16V8M16 16v-6" />,
  link: <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  store: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M12 7.5v6M9.5 11 12 13.5l2.5-2.5M10 18h4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </>
  ),
  plug: <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0ZM12 17v4" />,
};

export default function LineIcon({ name, size = 24, strokeWidth = 1.5, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}

// Which icon represents each service in siteData's `services`
export const serviceIcons = {
  d1: 'layout',
  d2: 'badge',
  d3: 'palette',
  d4: 'devices',
  v1: 'code',
  v2: 'mobile',
  v3: 'cloud',
  v4: 'chip',
  g1: 'megaphone',
  g2: 'search',
  g3: 'flow',
  g4: 'checklist',
};
