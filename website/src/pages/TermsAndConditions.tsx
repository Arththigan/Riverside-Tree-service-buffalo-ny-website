import { PageHero } from '../components/Layout';

export default function TermsAndConditions() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
        image="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1200&q=60"
      />

      <section className="py-16 sm:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-sm text-forest-500 mb-10">Last updated: July 19, 2026</p>

          <div className="prose prose-forest max-w-none space-y-10 text-forest-800">

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By requesting a quote, scheduling service, or using the Riverside Tree Service website
                (<strong>riversidebuffalotree.com</strong>), you agree to be bound by these Terms and Conditions.
                If you do not agree, please do not use our services or website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">2. Services</h2>
              <p className="leading-relaxed">
                Riverside Tree Service provides tree removal, tree trimming, stump grinding, emergency storm
                response, and related arboricultural services in Erie and Niagara Counties, New York. All
                work is performed by or under the supervision of ISA-Certified Arborists and licensed,
                insured crews.
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-forest-700">
                <li>Written estimates are provided free of charge and are valid for 30 days.</li>
                <li>Final scope of work is defined in the signed estimate or work order.</li>
                <li>We reserve the right to decline any job that poses unreasonable risk to our crew or property.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">3. Scheduling & Cancellations</h2>
              <p className="leading-relaxed">
                We ask for at least <strong>48 hours' notice</strong> to cancel or reschedule a confirmed
                appointment. Cancellations with less notice may be subject to a trip fee. Emergency/storm
                response jobs are scheduled on a priority basis and are not subject to standard scheduling.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">4. Payment</h2>
              <ul className="list-disc list-inside space-y-1.5 text-forest-700">
                <li>Payment is due upon completion of work unless otherwise agreed in writing.</li>
                <li>We accept cash, check, and major credit cards.</li>
                <li>Overdue balances beyond 30 days may accrue interest at 1.5% per month.</li>
                <li>For large jobs, a deposit of up to 50% may be required before work begins.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">5. Property & Liability</h2>
              <p className="leading-relaxed">
                We carry full general liability insurance and workers' compensation coverage. While we take
                every precaution to protect your property, the customer is responsible for:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 text-forest-700">
                <li>Disclosing the location of all underground utilities, irrigation lines, and buried structures.</li>
                <li>Removing vehicles, furniture, or personal property from the work area before our crew arrives.</li>
                <li>Informing us of any known hazards (bee hives, rot, cables, etc.) on or near the target trees.</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                Riverside Tree Service is not liable for pre-existing damage, concealed root systems, or
                conditions that could not reasonably be identified during the estimate.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">6. Website Use</h2>
              <p className="leading-relaxed">
                All content on this website — including text, images, logos, and video — is the property of
                Riverside Tree Service and may not be reproduced without written permission. The website is
                provided "as is" for informational purposes. We make no warranties regarding its accuracy,
                completeness, or availability.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">7. Privacy</h2>
              <p className="leading-relaxed">
                Information you submit via our contact form (name, phone, email, address) is used solely to
                respond to your inquiry and schedule services. We do not sell or share your personal data
                with third parties except as required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by New York law, Riverside Tree Service's total liability for
                any claim arising from our services shall not exceed the amount paid for the specific job
                giving rise to that claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">9. Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by the laws of the State of New York. Any disputes shall be resolved
                in Erie County courts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-700 text-forest-900 mb-3">10. Changes to These Terms</h2>
              <p className="leading-relaxed">
                We may update these terms from time to time. The "Last updated" date at the top of this page
                reflects the most recent revision. Continued use of our services after changes constitutes
                acceptance.
              </p>
            </div>

            <div className="rounded-2xl bg-forest-50 border border-forest-100 p-6">
              <h2 className="font-display text-xl font-700 text-forest-900 mb-2">Questions?</h2>
              <p className="text-forest-700">
                Reach us at{' '}
                <a href="mailto:info@riversidebuffalotree.com" className="text-forest-600 underline underline-offset-2 hover:text-forest-800">
                  info@riversidebuffalotree.com
                </a>{' '}
                or call{' '}
                <a href="tel:+17165550100" className="text-forest-600 underline underline-offset-2 hover:text-forest-800">
                  (716) 555-0100
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
