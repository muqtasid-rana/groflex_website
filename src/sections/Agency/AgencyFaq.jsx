import Button from '@/components/Button/Button';
import { pricing } from '@/data/siteData';

const tally = { formId: 'kd5KV1', layout: 'modal', width: 676, autoClose: 2500 };

export default function AgencyFaq() {
  return (
    <section className="ah-section ah-faq">
      <div className="container ah-faq__inner">
        <header className="ah-head" data-reveal="up">
          <p className="ah-eyebrow">FAQs</p>
          <h2 className="ah-head__title">Questions agencies <em>ask us</em></h2>
        </header>

        <div className="ah-faq__list">
          {pricing.faq.map((item, i) => (
            <details key={item.q} className="ah-faq__item" data-reveal="up" style={{ '--d': `${Math.min(i, 6) * 40}ms` }}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <div id="contact" className="ah-faq__cta" data-reveal="up">
          <p>Still have a question? Ask us on a call.</p>
          <Button variant="brand" size="md" tallyConfig={tally}>Book a call</Button>
        </div>
      </div>
    </section>
  );
}
