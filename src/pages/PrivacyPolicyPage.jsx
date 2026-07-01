import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LAST_UPDATED = 'July 1, 2026';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-white mb-3 pb-2 border-b border-zinc-800">
      {title}
    </h2>
    <div className="text-zinc-400 text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const PrivacyPolicyPage = () => (
  <div className="bg-black min-h-screen text-white">
    <SEO
      title="Privacy Policy | NAS Auto Spa LLC"
      description="Read NAS Auto Spa's privacy policy. Learn how we collect, use, and protect your personal information when you use our mobile detailing services in Fairfield County, CT."
      path="/privacy-policy"
      noindex={false}
    />
    <Navbar />

    <main className="max-w-3xl mx-auto px-5 sm:px-8 pt-32 pb-24">

      {/* Header */}
      <div className="mb-12">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#e1b11b] mb-3">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold italic tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 text-sm">
          Last updated: {LAST_UPDATED}
        </p>
      </div>

      {/* Intro */}
      <p className="text-zinc-300 text-sm leading-relaxed mb-10">
        NAS Auto Spa LLC ("NAS Auto Spa," "we," "us," or "our") operates the website{' '}
        <a href="https://www.nasautospa.com" className="text-[#e1b11b] hover:underline">
          www.nasautospa.com
        </a>{' '}
        and provides mobile auto detailing services throughout Fairfield County, Connecticut. This Privacy
        Policy explains what information we collect, how we use it, and the choices you have regarding your
        information. By using our website or services you agree to the practices described here.
      </p>

      <Section title="1. Information We Collect">
        <p>We collect information in the following ways:</p>
        <p>
          <span className="text-white font-semibold">Information you provide directly.</span> When you
          submit a quote request, book a service, or contact us — via our website form, email, phone, or
          text — we may collect your name, email address, phone number, vehicle information (make, model,
          year, condition), and service address.
        </p>
        <p>
          <span className="text-white font-semibold">Booking platform data.</span> We use Jobber
          (getjobber.com) to manage appointments and quotes. When you fill out our booking form, your
          information is also subject to Jobber's privacy policy. We receive the details you submit
          through that form in our Jobber account.
        </p>
        <p>
          <span className="text-white font-semibold">Automatically collected data.</span> When you visit
          our website, we and our third-party service providers (such as Google Analytics) may
          automatically collect information like your IP address, browser type, pages visited, time on
          site, and referring URL. This data is collected via cookies and similar tracking technologies.
        </p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Respond to quote requests and book appointments</li>
          <li>Communicate with you about your service (confirmations, reminders, follow-ups)</li>
          <li>Process payments and deposits</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Send occasional promotional messages (only if you have opted in)</li>
        </ul>
        <p>
          We do <strong className="text-white">not</strong> sell your personal information to third parties.
        </p>
      </Section>

      <Section title="3. Cookies & Tracking Technologies">
        <p>
          Our website uses cookies — small text files placed on your device — to understand how visitors
          interact with our site. We use:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>
            <span className="text-white font-semibold">Google Analytics</span> — to analyze website
            traffic and usage patterns. Data collected is anonymized and aggregated. You can opt out via
            the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e1b11b] hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </li>
          <li>
            <span className="text-white font-semibold">Jobber embed cookies</span> — set by Jobber's
            client hub when the booking form is loaded on our site.
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling cookies may affect some
          functionality of our site.
        </p>
      </Section>

      <Section title="4. Information Sharing">
        <p>
          We share your information only as necessary to operate our business:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>
            <span className="text-white font-semibold">Jobber</span> — our scheduling and CRM platform.
            Your booking details are stored and managed there.
          </li>
          <li>
            <span className="text-white font-semibold">Payment processors</span> — if you pay online,
            your payment information is handled directly by the payment processor (e.g., Stripe, Square)
            and is never stored on our servers.
          </li>
          <li>
            <span className="text-white font-semibold">Legal requirements</span> — we may disclose
            information if required to do so by law or in response to valid requests by public authorities.
          </li>
        </ul>
      </Section>

      <Section title="5. Data Retention">
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes described
          in this policy, provide ongoing services, and comply with our legal obligations. Booking and
          transaction records are typically retained for seven (7) years for tax and accounting purposes.
          You may request deletion of your data at any time (see Section 7).
        </p>
      </Section>

      <Section title="6. Data Security">
        <p>
          We take reasonable administrative, technical, and physical measures to protect your information
          from unauthorized access, disclosure, alteration, or destruction. However, no method of
          transmission over the internet or electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </Section>

      <Section title="7. Your Rights & Choices">
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications at any time by replying STOP to any text or using the unsubscribe link in any email</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:contact@nasautospa.com" className="text-[#e1b11b] hover:underline">
            contact@nasautospa.com
          </a>{' '}
          or call{' '}
          <a href="tel:+19293076986" className="text-[#e1b11b] hover:underline">
            (929) 307-6986
          </a>
          . We will respond within 30 days.
        </p>
      </Section>

      <Section title="8. Third-Party Links">
        <p>
          Our website may contain links to third-party sites (e.g., Instagram, TikTok, Google). We are
          not responsible for the privacy practices of those sites and encourage you to review their
          privacy policies.
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          Our services are not directed to children under the age of 13. We do not knowingly collect
          personal information from children. If you believe we have inadvertently collected such
          information, please contact us immediately and we will delete it.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the "Last
          updated" date at the top of this page. We encourage you to review this policy periodically.
          Continued use of our website or services after any changes constitutes your acceptance of the
          updated policy.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>
          If you have any questions about this Privacy Policy or how we handle your data, please reach
          out:
        </p>
        <div className="mt-3 p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-sm space-y-1">
          <p className="text-white font-semibold">NAS Auto Spa LLC</p>
          <p>Stratford, CT 06614</p>
          <p>
            Email:{' '}
            <a href="mailto:contact@nasautospa.com" className="text-[#e1b11b] hover:underline">
              contact@nasautospa.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+19293076986" className="text-[#e1b11b] hover:underline">
              (929) 307-6986
            </a>
          </p>
        </div>
      </Section>

      <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
        <Link to="/" className="text-[#e1b11b] text-sm hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>

    <Footer />
  </div>
);

export default PrivacyPolicyPage;
