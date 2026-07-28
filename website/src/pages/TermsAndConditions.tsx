import { PageHero } from '../components/Layout';
import { ADDRESS, EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../data';

export default function TermsAndConditions() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website or services."
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
              Welcome to Riverside Tree Service. By accessing this website or using our services,
              you agree to be bound by these Terms and Conditions. If you do not agree with any part
              of these terms, please do not use our website or services.
            </p>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                1. Business Identity
              </h2>
              <p className="leading-relaxed">
                These Terms and Conditions govern your use of the services provided by Riverside
                Tree Service, located at {ADDRESS}. Contact:{' '}
                <a href={PHONE_HREF} className="text-forest-600 underline underline-offset-2 hover:text-forest-800">
                  {PHONE}
                </a>{' '}
                |{' '}
                <a href={EMAIL_HREF} className="break-all text-forest-600 underline underline-offset-2 hover:text-forest-800">
                  {EMAIL}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                2. Age Requirement (18+)
              </h2>
              <p className="leading-relaxed">
                By using this website or enrolling in our services, including SMS messaging, you
                confirm that you are at least 18 years of age. Our SMS program is not directed to
                individuals under 18.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                3. Terminology
              </h2>
              <p className="leading-relaxed">
                “Client,” “You,” and “Your” refers to the user of this website. “The Company,” “We,”
                “Our,” and “Us” refers to Riverside Tree Service.
              </p>
            </div>

            <div>
              <h2 className="mb-5 font-display text-2xl font-700 text-forest-900">
                4. SMS Messaging Terms of Service
              </h2>

              <div className="space-y-7">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    4a. Program Description & Message Types
                  </h3>
                  <p className="leading-relaxed">
                    By providing your phone number and checking the SMS consent checkbox on our
                    contact forms, you agree to receive recurring automated text messages from City
                    Riverside Tree Service. Messages may include:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-forest-700">
                    <li>Free estimate confirmations and scheduling notifications</li>
                    <li>Appointment reminders and project status updates</li>
                    <li>Customer support and service follow-up communications</li>
                    <li>Promotional offers and seasonal announcements related to our tree care services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    4b. Message Frequency
                  </h3>
                  <p className="leading-relaxed">
                    Message frequency varies based on your service activity and interactions with
                    us. You may receive up to 4–8 messages per month. Frequency may increase during
                    active service periods.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    4c. Message & Data Rates
                  </h3>
                  <p className="leading-relaxed">
                    Message and data rates may apply for any messages sent to you from us and to us
                    from you. Charges are determined by your mobile carrier and your individual
                    service plan. Riverside Tree Service is not responsible for any carrier charges.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    4d. How to Opt Out (STOP)
                  </h3>
                  <p className="leading-relaxed">
                    You can opt out of receiving SMS messages at any time by replying STOP to any
                    message we send. After opting out, you will receive a one-time confirmation
                    message and will no longer receive SMS messages from us unless you re-enroll.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    4e. How to Get Help (HELP)
                  </h3>
                  <p className="leading-relaxed">
                    For help with our SMS program, reply HELP to any message or contact us directly at:
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

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    4f. Carrier Liability Disclaimer
                  </h3>
                  <p className="leading-relaxed">
                    Mobile carriers are not liable for delayed or undelivered messages. Riverside
                    Tree Service cannot guarantee delivery of SMS messages. Delivery of information
                    through SMS may be subject to your mobile carrier’s capability and coverage area.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-forest-900">
                    4g. Supported Carriers
                  </h3>
                  <p className="leading-relaxed">
                    Our SMS program is supported by all major U.S. wireless carriers including AT&T,
                    Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">5. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies in accordance with our Privacy Policy to improve user experience and
                website functionality.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                6. Intellectual Property & License
              </h2>
              <p className="leading-relaxed">
                Unless otherwise stated, Riverside Tree Service owns the intellectual property
                rights for all content on this website. You may not copy, reproduce, republish, sell,
                or redistribute any material without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                7. Comments & User Content
              </h2>
              <p className="leading-relaxed">
                Riverside Tree Service reserves the right to monitor and remove any comments or
                user-generated content on our platforms that are inappropriate, offensive, or
                violate these terms.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                8. Content Liability
              </h2>
              <p className="leading-relaxed">
                We are not responsible for content that appears on external websites linking to us.
                You agree to defend and protect Riverside Tree Service against any claims arising
                from your website or digital properties.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">9. Disclaimer</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by applicable law, Riverside Tree Service excludes
                all warranties, representations, and conditions relating to our website and services.
                We are not liable for any loss or damage (including, without limitation, damage for
                loss of business, profits, or revenue) arising from the use of our website or services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                10. Changes to These Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to update these Terms and Conditions at any time. Changes will
                be posted on this page with a revised “Last Updated” date. Continued use of our
                website or services constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="rounded-2xl border border-forest-100 bg-forest-50 p-6">
              <h2 className="mb-3 font-display text-2xl font-700 text-forest-900">
                11. Contact Information
              </h2>
              <p className="mb-4 leading-relaxed">
                For questions about these Terms and Conditions, please contact us:
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
