import { PageHero } from '../components/Layout';
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../data';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        image="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1200&q=60"
      />

      <section className="py-16 sm:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-sm text-forest-500 mb-10">Last updated: July 19, 2026</p>

          <div className="space-y-10 text-forest-800">

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">1. Who We Are</h2>
              <p className="leading-relaxed">
                Riverside Tree Service ("we", "us", or "our") operates at{' '}
                <strong>riversidebuffalotree.com</strong> and provides professional arboricultural
                services in Erie and Niagara Counties, New York. This Privacy Policy explains what
                personal data we collect when you visit our website or contact us, and how we use it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">2. Information We Collect</h2>

              <h3 className="font-semibold text-forest-800 mb-2 mt-4">a) Information you provide directly</h3>
              <ul className="list-disc list-inside space-y-1.5 text-forest-700">
                <li>Name, phone number, and email address submitted via our contact or quote form.</li>
                <li>Property address provided for estimate scheduling.</li>
                <li>Any messages or details you include when reaching out to us.</li>
              </ul>

              <h3 className="font-semibold text-forest-800 mb-2 mt-5">b) Information collected automatically</h3>
              <ul className="list-disc list-inside space-y-1.5 text-forest-700">
                <li>IP address and approximate geographic location (city/region level).</li>
                <li>Browser type, device type, and operating system.</li>
                <li>Pages visited, time on site, and referring URL.</li>
                <li>This data is collected via standard server logs and analytics tools (e.g., Google Analytics).</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1.5 text-forest-700">
                <li>To respond to your inquiry or quote request.</li>
                <li>To schedule and fulfill the tree services you requested.</li>
                <li>To send service-related communications (appointment confirmations, follow-ups).</li>
                <li>To improve our website experience and understand how visitors use it.</li>
                <li>To comply with legal obligations or respond to lawful requests.</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                We do <strong>not</strong> use your information for unsolicited marketing without your
                consent, and we do <strong>not</strong> sell your personal data to any third party.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">4. Cookies & Tracking</h2>
              <p className="leading-relaxed">
                Our website uses cookies — small text files stored on your device — to improve
                functionality and analyze traffic. We use:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-forest-700">
                <li><strong>Essential cookies:</strong> required for the website to function correctly.</li>
                <li><strong>Analytics cookies:</strong> help us understand visitor behavior (e.g., Google Analytics with IP anonymization enabled).</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                You can disable cookies in your browser settings at any time. Note that disabling cookies
                may affect some website functionality.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">5. How We Share Your Information</h2>
              <p className="leading-relaxed">
                We only share your information in the following limited circumstances:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-forest-700">
                <li>
                  <strong>Service providers:</strong> Trusted third-party tools we use to operate (e.g.,
                  Firebase hosting, email delivery, scheduling software). These providers are contractually
                  required to protect your data.
                </li>
                <li>
                  <strong>Insurance & legal:</strong> When processing storm damage claims with your
                  homeowner insurance carrier (only with your explicit request).
                </li>
                <li>
                  <strong>Legal requirements:</strong> If required by law, court order, or government
                  authority.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain contact and job records for up to <strong>3 years</strong> for business and
                tax purposes. Analytics data is retained per the default policy of the analytics provider
                (typically 26 months for Google Analytics). You may request deletion of your data at any
                time (see Section 8).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">7. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable technical and organizational measures to protect your personal
                data — including HTTPS encryption, access controls, and secure hosting via Firebase.
                No method of internet transmission is 100% secure; however, we take all commercially
                reasonable precautions to safeguard your information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">8. Your Rights</h2>
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-forest-700">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data (subject to legal retention requirements).</li>
                <li>Opt out of any marketing communications.</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                To exercise any of these rights, contact us at the details in Section 10.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">9. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party sites (e.g., Google Maps, review platforms).
                We are not responsible for the privacy practices of those sites and encourage you to
                review their policies independently.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The "Last updated" date at the top
                of this page reflects the most recent revision. We encourage you to review this page
                periodically.
              </p>
            </div>

            <div className="rounded-2xl bg-forest-50 border border-forest-100 p-6">
              <h2 className="font-display text-xl font-700 text-forest-900 mb-2">Contact Us About Privacy</h2>
              <p className="text-forest-700 leading-relaxed">
                Riverside Tree Service · 9950 County Rd, Clarence, Buffalo, New York
                <br />
                Email:{' '}
                <a href={EMAIL_HREF} className="text-forest-600 underline underline-offset-2 hover:text-forest-800">
                  {EMAIL}
                </a>
                <br />
                Phone:{' '}
                <a href={PHONE_HREF} className="text-forest-600 underline underline-offset-2 hover:text-forest-800">
                  {PHONE}
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
