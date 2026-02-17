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

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Testimonial />
      <Quote
        author="Founder Groflex"
        text="We consider a project successful when it delivers real results and a strong return on investment for the client."
      />
      <CTA />
      <Contact />
    </Layout>
  );
}
