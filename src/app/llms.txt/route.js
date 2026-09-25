import { pricing, services } from '@/data/siteData';
import { getAllBlogs } from '@/lib/blogs';
import { SITE_URL, ENTITY_DESCRIPTION } from '@/lib/seo';

// /llms.txt: a plain-text summary for AI assistants (llmstxt.org), built from
// the same data as the site so prices and services never drift out of date.
export const revalidate = 3600;

const usd = (n) => `$${n.toLocaleString('en-US')}`;
const gbp = (n) => `£${n.toLocaleString('en-GB')}`;
const both = (p) => `${usd(p.usd)} / ${gbp(p.gbp)}`;

export async function GET() {
  const blogs = await getAllBlogs().catch(() => []);
  const { pilot, systems, packs, packValidityDays, plans, appCare } = pricing;

  const lines = [
    '# Groflex',
    '',
    `> ${ENTITY_DESCRIPTION}`,
    '',
    'Groflex (groflex.co) is not related to the grofleX invoicing software or to other companies named Groflex.',
    '',
    '## Key facts',
    '',
    '- Who it is for: design, development and marketing agencies in the UK and the US that need extra delivery capacity without hiring.',
    '- White-label: no Groflex branding on any deliverable, an NDA signed before any client details are shared, and no contact with the agency’s clients.',
    '- Works inside the agency’s own Slack, ClickUp, Jira or Asana.',
    '- Time zones: at least four working hours of overlap with the UK and US Eastern time, with same-day replies.',
    `- Pilot: ${pilot.credits} credits of real work for ${both(pilot.price)}, with no upfront payment. The agency pays only once it likes the work.`,
    '- Two revision rounds on every deliverable; source files and code belong to the agency on delivery.',
    '',
    '## Services',
    '',
    ...Object.entries({ Design: services.design, Development: services.development, 'Marketing and growth': services.growth }).map(
      ([group, items]) => `- ${group}: ${items.map((s) => s.title).join(', ')}`
    ),
    '',
    '## Pricing (USD / GBP)',
    '',
    `- Pilot: ${both(pilot.price)} for ${pilot.credits} credits, paid only after approval.`,
    ...packs.map((p) => `- ${p.credits}-credit pack: ${both(p.price)}, valid ${packValidityDays} days, no subscription.`),
    ...plans.map(
      (p) => `- ${p.name} plan: ${both(p.price)} a month, ${p.credits} credits, up to ${p.rollover} roll over. Month to month, can be paused.`
    ),
    ...systems.map((s) => `- ${s.name}: from ${both(s.price)}, ${s.timeline}. ${s.description}`),
    `- App care: from ${both(appCare.price)} a month.`,
    '- One credit is a fixed unit of work (about four hours of senior design or development time). Every deliverable has a set credit cost.',
    '',
    '## Pages',
    '',
    `- [Home](${SITE_URL}/): what Groflex does for agencies, how it works and FAQs`,
    `- [Pricing](${SITE_URL}/pricing): pilot, fixed-price builds, credit packs, monthly plans and the credit menu`,
    `- [Work](${SITE_URL}/work): case studies`,
    `- [Incorpo case study](${SITE_URL}/case-study/incorpo): HR SaaS platform`,
    `- [Slashcure case study](${SITE_URL}/case-study/slashcure): healthcare platform`,
    `- [Ashhkaro case study](${SITE_URL}/case-study/ashhkaro): Android super-app`,
    '',
    ...(blogs.length
      ? ['## Blog', '', ...blogs.map((b) => `- [${b.title}](${SITE_URL}/blog/${b.slug})`), '']
      : []),
    '## Contact',
    '',
    '- Email: muqtasid@groflex.co',
    `- Start a pilot or book a call: ${SITE_URL}/#contact`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
