import GameplanClient from './GameplanClient';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'The GAMEPLAN — Your Personalized 90-Day Roadmap | Groflex',
  description:
    'Take the 60-second quiz and get a brutally honest, AI-generated 90-day gameplan tailored to your stage, blocker, and goal as a founder.',
  path: '/gameplan',
});

export default function GameplanPage() {
  return <GameplanClient />;
}
