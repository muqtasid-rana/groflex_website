'use client';

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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <AgencyComparison />
      <Process />
      <Testimonial />
      <BlogSection />
      <Quote
        author="Founder Groflex"
        text="We consider a project successful when it delivers real results and a strong return on investment for the client."
      />
      <CTA />
      <Contact />
    </>
  );
}
