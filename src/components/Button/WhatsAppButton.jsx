import Button from './Button';
import SocialIcon from '@/components/SocialIcon/SocialIcon';

// A Button that opens a WhatsApp chat in a new tab, with the WhatsApp icon so
// people know where it goes
export default function WhatsAppButton({ href, children, variant = 'brand', size = 'md', ...props }) {
  return (
    <Button variant={variant} size={size} href={href} target="_blank" rel="noopener noreferrer" {...props}>
      <SocialIcon icon="fa-brands fa-whatsapp" />
      {children}
    </Button>
  );
}
