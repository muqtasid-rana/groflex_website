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
