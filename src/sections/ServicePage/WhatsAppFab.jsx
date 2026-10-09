import SocialIcon from '@/components/SocialIcon/SocialIcon';

// A WhatsApp button pinned to the bottom-right corner of the page: round, or a
// pill when it has a `label`
export default function WhatsAppFab({ href, label }) {
  return (
    <a
      href={href}
      className={`ah-fab ${label ? 'ah-fab--label' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} on WhatsApp` : 'Chat with us on WhatsApp'}
    >
      <SocialIcon icon="fa-brands fa-whatsapp" />
      {label && <span className="ah-fab__text">{label}</span>}
    </a>
  );
}
