import Hero from '@/sections/Hero/Hero';
import Portfolio from '@/sections/Portfolio/Portfolio';
import Services from '@/sections/Services/Services';
import AgencyComparison from '@/sections/AgencyComparison/AgencyComparison';
import Process from '@/sections/Process/Process';
import Testimonial from '@/sections/Testimonial/Testimonial';
import BlogSection from '@/sections/BlogSection/BlogSection';
import Quote from '@/sections/Quote/Quote';
import CTA from '@/sections/CTA/CTA';
import Contact from '@/sections/Contact/Contact';
import { getAllBlogs } from '@/lib/blogs';
import { pageMetadata } from '@/lib/seo';

// Re-rendered at most every 5 minutes, so new blog posts show up without a redeploy
export const revalidate = 300;

// The founder-facing landing page that used to be the home page. Noindexed so
// it doesn't compete with the agency home or blur what Groflex is in search.
export const metadata = pageMetadata({
  title: 'Groflex for Founders — Software & Design Agency',
  description: 'Design, web and app development for founders: from idea to a shipped product.',
  path: '/founders',
  noindex: true,
});

export default async function FoundersPage() {
  const blogs = await getAllBlogs().catch(() => []);

  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <AgencyComparison />
      <Process />
      <Testimonial />
      <BlogSection blogs={blogs} />
      <Quote
        author="Founder Groflex"
        text="We consider a project successful when it delivers real results and a strong return on investment for the client."
      />
      <CTA />
      <Contact />
    </>
  );
}
