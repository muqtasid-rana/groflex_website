import SocialIcon from '@/components/SocialIcon/SocialIcon';

// A round WhatsApp button pinned to the bottom-right corner of the page
export default function WhatsAppFab({ href }) {
  return (
    <a
      href={href}
      className="ah-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <SocialIcon icon="fa-brands fa-whatsapp" />
    </a>
  );
}
