import './legal.css';

export const metadata = {
  title: 'Privacy Policy — Groflex',
  description: 'Learn how Groflex collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy — Groflex',
    description: 'Learn how Groflex collects, uses, and protects your personal information.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-page__header">
          <span className="legal-page__tag">Legal</span>
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__updated">Last updated: July 11, 2026</p>
        </div>

        <div className="legal-page__content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Groflex (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a software and design agency. This Privacy
              Policy explains how we collect, use, and protect your personal information when you visit our website,
              use our tools, or engage our services. By using our website, you agree to the practices described in
              this policy.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Contact information</strong> — such as your name, email address, phone number, and company
                name when you fill out our contact form, request a quote, or use our project gameplan tool.
              </li>
              <li>
                <strong>Project details</strong> — information you share with us about your business, goals, and
                requirements when enquiring about our services.
              </li>
              <li>
                <strong>Usage data</strong> — anonymised analytics data such as pages visited, time spent on the
                site, device type, and approximate location, collected through analytics tools.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and provide quotes or proposals.</li>
              <li>Deliver, personalise, and improve our services and website experience.</li>
              <li>Send you relevant updates about your project or our services, where you have agreed to receive them.</li>
              <li>Analyse website performance and improve our content and offerings.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2>4. How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We only share it with trusted third-party service providers
              that help us operate our website and business — such as email delivery, hosting, database, and
              analytics providers — and only to the extent necessary for them to perform their services. These
              providers are bound by their own privacy obligations. We may also disclose information if required by
              law.
            </p>
          </section>

          <section>
            <h2>5. Cookies &amp; Analytics</h2>
            <p>
              Our website uses analytics tools that may set cookies or similar technologies to help us understand
              how visitors use the site. This data is aggregated and does not personally identify you. You can
              control or disable cookies through your browser settings, though some features of the site may not
              function properly without them.
            </p>
          </section>

          <section>
            <h2>6. Data Retention &amp; Security</h2>
            <p>
              We retain personal information only for as long as necessary to fulfil the purposes described in this
              policy, or as required by law. We take reasonable technical and organisational measures to protect
              your information against unauthorised access, loss, or misuse. However, no method of transmission
              over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your personal information.</li>
              <li>Object to or restrict how we process your information.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:groflex.co@gmail.com">groflex.co@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, including our social media profiles. We are
              not responsible for the privacy practices or content of those websites, and we encourage you to
              review their privacy policies.
            </p>
          </section>

          <section>
            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed at children under the age of 13, and we do not knowingly
              collect personal information from them. If you believe a child has provided us with personal
              information, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your information, contact us at{' '}
              <a href="mailto:groflex.co@gmail.com">groflex.co@gmail.com</a> or call{' '}
              <a href="tel:+923359528776">+92 335 9528776</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
