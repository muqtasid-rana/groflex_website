// WhatsApp chats for the partner pages, keyed by page slug. On these pages the
// "Let's talk" and "Book a call" buttons (the navbar's too) open the chat
// instead of the Tally form.
export const whatsappLink = (number, message) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const partnerChats = {
  'white-label-agency-pakistan': whatsappLink(
    '923159053368',
    'Hi Groflex, I saw your page for Pakistani agencies and I’d like to talk.',
  ),
};
