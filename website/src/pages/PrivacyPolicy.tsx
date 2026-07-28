import { PageHero } from '../components/Layout';
import { ADDRESS, EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../data';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, disclose, and safeguard your personal information."
        image="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1200&q=60"
      />

      <section className="py-16 sm:py-24">
        <div className="container-page max-w-3xl">
          <p className="mb-10 text-sm text-forest-500">
            <strong>Effective Date:</strong> January 19, 2025
            <span className="mx-2" aria-hidden="true">|</span>
            <strong>Last Updated:</strong> July 9, 2026
          </p>

          <div className="prose prose-forest max-w-none space-y-10 text-forest-800">
            <p className="leading-relaxed">
              Riverside Tree Service (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
              is committed to protecting your privacy and personal information. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your data in compliance with
              applicable U.S. data protection laws, including the California Consumer Privacy Act
              (CCPA) and the General Data Protection Regulation (GDPR) where applicable.
            </p>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed">
                We may collect the following categories of personal information when you contact us,
                request a quote, submit a web form, or use our services:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-forest-700">
                <li>Full name</li>
                <li>Mailing or service address</li>
                <li>Email address</li>
                <li>Mobile phone number</li>
                <li>Service request details and project descriptions</li>
                <li>Communication history and preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-5 font-display text-2xl font-700 text-forest-900">
                2. SMS / Text Message Communications
              </h2>

              <div className="space-y-7">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    2a. How We Collect Your Mobile Number
                  </h3>
                  <p className="leading-relaxed">
                    We collect your mobile phone number when you voluntarily provide it through our
                    website contact forms, phone calls, or other direct communication channels. By
                    providing your mobile number and checking the SMS consent checkbox on our forms,
                    you expressly consent to receive SMS (text message) communications from City
                    Riverside Tree Service.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    2b. Types of Messages We Send
                  </h3>
                  <p className="leading-relaxed">
                    By opting in, you may receive recurring automated text messages from Riverside
                    Tree Service, including:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-forest-700">
                    <li>Free estimate confirmations and appointment reminders</li>
                    <li>Project status updates and scheduling notifications</li>
                    <li>Customer support and follow-up communications</li>
                    <li>Promotional offers and seasonal service announcements related to our tree care services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    2c. Message Frequency
                  </h3>
                  <p className="leading-relaxed">
                    Message frequency varies based on your interactions with us, ongoing service
                    needs, and active promotions. You may receive up to 4–8 messages per month
                    depending on your service activity.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    2d. Message & Data Rates
                  </h3>
                  <p className="leading-relaxed">
                    Message and data rates may apply. Charges are determined by your mobile carrier
                    and your individual service plan. Riverside Tree Service is not responsible for
                    any charges incurred from your mobile carrier.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    2e. How to Opt Out (STOP)
                  </h3>
                  <p className="leading-relaxed">
                    You may cancel SMS messages at any time by replying STOP to any text message you
                    receive from us. After opting out, you will receive one final confirmation
                    message and will no longer receive SMS communications from Riverside Tree
                    Service unless you re-enroll.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    2f. How to Get Help (HELP)
                  </h3>
                  <p className="leading-relaxed">
                    For help with our SMS program, reply HELP to any message, or contact us directly at:
                  </p>
                  <ul className="mt-3 space-y-2 text-forest-700">
                    <li>
                      <strong>Phone:</strong>{' '}
                      <a href={PHONE_HREF} className="text-forest-600 underline underline-offset-2 hover:text-forest-800">
                        {PHONE}
                      </a>
                    </li>
                    <li>
                      <strong>Email:</strong>{' '}
                      <a href={EMAIL_HREF} className="break-all text-forest-600 underline underline-offset-2 hover:text-forest-800">
                        {EMAIL}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-forest-200 bg-forest-50 p-6">
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                3. Mobile Information & SMS Consent — No Third-Party Sharing
              </h2>
              <p className="leading-relaxed">
                No mobile information (including your mobile phone number and SMS opt-in consent
                data) will be shared with third parties or affiliates for marketing or promotional
                purposes.
              </p>
              <p className="mt-3 leading-relaxed">
                All other categories of personal data exclude text messaging originator opt-in data
                and consent; this information will not be shared with any third parties under any
                circumstances.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                4. How We Use Your Information
              </h2>
              <p className="leading-relaxed">We use the personal information we collect to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-forest-700">
                <li>Provide and manage tree care services</li>
                <li>Respond to inquiries and service requests</li>
                <li>Schedule appointments and send reminders</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our website and service quality</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="leading-relaxed">
                We use cookies and similar technologies to improve website functionality, analyze
                traffic, and enhance user experience. Cookies do not store sensitive personal
                information. By continuing to use this website, you consent to our use of cookies in
                accordance with this policy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">6. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable administrative, technical, and physical security measures
                to protect your personal data against unauthorized access, disclosure, alteration,
                or destruction. However, no method of electronic transmission or storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">7. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the
                purposes outlined in this Privacy Policy, or as required by applicable law. When
                your data is no longer needed, we securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                8. Your Privacy Rights
              </h2>
              <p className="leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-forest-700">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data, including your mobile number and SMS consent record</li>
                <li><strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time</li>
                <li><strong>Opt-Out of Marketing:</strong> Contact us directly to be removed from marketing lists</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                To exercise any of these rights, contact us at{' '}
                <a href={EMAIL_HREF} className="break-all text-forest-600 underline underline-offset-2 hover:text-forest-800">
                  {EMAIL}
                </a>{' '}
                or call{' '}
                <a href={PHONE_HREF} className="text-forest-600 underline underline-offset-2 hover:text-forest-800">
                  {PHONE}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                9. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will post the updated policy
                on this page with a revised &ldquo;Last Updated&rdquo; date. Continued use of our
                website or services after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div className="rounded-2xl border border-forest-100 bg-forest-50 p-6">
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                10. Contact Information
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <ul className="space-y-2 text-forest-700">
                <li><strong>Company:</strong> Riverside Tree Service</li>
                <li><strong>Address:</strong> {ADDRESS}</li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href={PHONE_HREF} className="text-forest-600 underline underline-offset-2 hover:text-forest-800">
                    {PHONE}
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href={EMAIL_HREF} className="break-all text-forest-600 underline underline-offset-2 hover:text-forest-800">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
