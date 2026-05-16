import GameplanClient from './GameplanClient';

export const metadata = {
  title: 'The GAMEPLAN — Your Personalized 90-Day Roadmap | Groflex',
  description:
    'Take the 60-second quiz and get a brutally honest, AI-generated 90-day gameplan tailored to your stage, blocker, and goal as a founder.',
  alternates: { canonical: '/gameplan' },
  openGraph: {
    title: 'The GAMEPLAN — Your Personalized 90-Day Roadmap',
    description:
      'A no-fluff diagnostic that tells you exactly what to focus on for the next 90 days.',
    type: 'website',
    url: 'https://www.groflex.co/gameplan',
    siteName: 'Groflex',
  },
};

export default function GameplanPage() {
  return <GameplanClient />;
}
