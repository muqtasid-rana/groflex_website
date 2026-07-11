import '../privacy-policy/legal.css';

export const metadata = {
  title: 'Terms & Conditions — Groflex',
  description: 'The terms and conditions governing your use of the Groflex website and services.',
  openGraph: {
    title: 'Terms & Conditions — Groflex',
    description: 'The terms and conditions governing your use of the Groflex website and services.',
  },
};

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-page__header">
          <span className="legal-page__tag">Legal</span>
          <h1 className="legal-page__title">Terms &amp; Conditions</h1>
          <p className="legal-page__updated">Last updated: July 11, 2026</p>
        </div>

        <div className="legal-page__content">
          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Groflex website and the
              services we provide. By accessing our website or engaging our services, you agree to be bound by
              these Terms. If you do not agree with any part of these Terms, please do not use our website or
              services.
            </p>
          </section>

          <section>
            <h2>2. Our Services</h2>
            <p>
              Groflex is a software and design agency providing services including, but not limited to, web and
              mobile application development, UI/UX design, branding, and related digital services. The specific
              scope, deliverables, timelines, and fees for any engagement are defined in a separate proposal or
              agreement between Groflex and the client.
            </p>
          </section>

          <section>
            <h2>3. Quotes &amp; Proposals</h2>
            <p>
              Any quotes, estimates, or gameplans generated through our website or provided by our team are
              indicative only and do not constitute a binding offer. Final pricing and scope are confirmed in a
              written agreement. Quotes are valid for 30 days unless otherwise stated.
            </p>
          </section>

          <section>
            <h2>4. Payments</h2>
            <p>
              Payment terms, schedules, and methods are specified in the project agreement. Unless otherwise
              agreed, projects typically require an upfront deposit before work begins, with remaining payments
              tied to project milestones. Late or missed payments may result in work being paused until payment is
              received.
            </p>
          </section>

          <section>
            <h2>5. Client Responsibilities</h2>
            <p>To enable us to deliver projects successfully, clients agree to:</p>
            <ul>
              <li>Provide timely feedback, approvals, and any required content or materials.</li>
              <li>Ensure that any materials supplied to us do not infringe third-party rights.</li>
              <li>Designate a point of contact authorised to make project decisions.</li>
            </ul>
            <p>
              Delays in providing feedback or materials may affect project timelines and are not the responsibility
              of Groflex.
            </p>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              Upon full payment of all agreed fees, the client receives ownership of the final deliverables created
              specifically for their project, unless otherwise stated in the project agreement. Groflex retains
              ownership of any pre-existing tools, frameworks, libraries, and know-how used to create the
              deliverables. We reserve the right to showcase completed work in our portfolio and marketing
              materials unless the client requests otherwise in writing.
            </p>
          </section>

          <section>
            <h2>7. Revisions &amp; Changes</h2>
            <p>
              Each project includes the number of revision rounds specified in its agreement. Requests that fall
              outside the agreed scope — including new features, additional pages, or significant design changes —
              may be quoted and billed separately as a change request.
            </p>
          </section>

          <section>
            <h2>8. Website Use</h2>
            <p>When using our website, you agree not to:</p>
            <ul>
              <li>Use the website in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its systems.</li>
              <li>Copy, reproduce, or redistribute website content without our permission.</li>
              <li>Submit false or misleading information through our forms or tools.</li>
            </ul>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Groflex shall not be liable for any indirect, incidental,
              special, or consequential damages — including loss of profits, data, or business opportunities —
              arising from your use of our website or services. Our total liability for any claim arising out of a
              project shall not exceed the total fees paid by the client for that project.
            </p>
          </section>

          <section>
            <h2>10. Warranties &amp; Disclaimers</h2>
            <p>
              We strive to deliver high-quality work, but our website and its content are provided &quot;as
              is&quot; without warranties of any kind, express or implied. We do not guarantee that the website
              will be uninterrupted, error-free, or free of harmful components. Any warranties relating to project
              deliverables are set out in the applicable project agreement.
            </p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>
              Either party may terminate a project engagement in accordance with the terms of the project
              agreement. Upon termination, the client is responsible for payment for all work completed up to the
              date of termination. We reserve the right to suspend or terminate access to our website at any time
              for conduct that violates these Terms.
            </p>
          </section>

          <section>
            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted on this page with an updated
              &quot;Last updated&quot; date. Continued use of the website after changes are posted constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, contact us at{' '}
              <a href="mailto:groflex.co@gmail.com">groflex.co@gmail.com</a> or call{' '}
              <a href="tel:+923359528776">+92 335 9528776</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
