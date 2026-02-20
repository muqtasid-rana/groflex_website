import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs';
import Process from './sections/Process/Process';
import Portfolio from './sections/Portfolio/Portfolio';
import Testimonial from './sections/Testimonial/Testimonial';
import Quote from './sections/Quote/Quote';
import CTA from './sections/CTA/CTA';
import Contact from './sections/Contact/Contact';
import AgencyComparison from './sections/AgencyComparison/AgencyComparison';
import CaseStudyPage from './pages/CaseStudyPage/CaseStudyPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <AgencyComparison />
      <Process />
      <Testimonial />
      <About />
      <WhyChooseUs />
      <Quote
        author="Founder Groflex"
        text="We consider a project successful when it delivers real results and a strong return on investment for the client."
      />
      <CTA />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </Layout>
  );
}
