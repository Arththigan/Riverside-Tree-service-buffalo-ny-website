import { useEffect } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { PHONE, PHONE_HREF, ADDRESS, EMAIL, EMAIL_HREF } from '../data';

export default function ContactPage() {
  // Load the kdlead embed script once when the page mounts
  useEffect(() => {
    const scriptId = 'kdlead-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.kdlead.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <PageHero
        title="Free Estimate"
        subtitle="No pressure, no surprise fees — just honest tree care advice from a certified arborist."
      image="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1280&q=60"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">

          {/* Contact info */}
          <div className="reveal">
            <h2 className="font-display text-3xl font-700 text-forest-900 sm:text-4xl">
              Get your free, no-pressure quote
            </h2>
            <p className="mt-4 text-lg text-forest-700">
              Tell us about your trees. An ISA-certified arborist will come out, assess the work,
              and give you a clear written price — usually within 48 hours.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 rounded-2xl border border-forest-100 bg-white p-5 shadow-soft transition hover:border-forest-300"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-forest-500">Call us</p>
                  <p className="mt-0.5 text-lg font-semibold text-forest-900">{PHONE}</p>
                </div>
              </a>

              <a
                href={EMAIL_HREF}
                className="flex items-center gap-4 rounded-2xl border border-forest-100 bg-white p-5 shadow-soft transition hover:border-forest-300"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-forest-500">Email</p>
                  <p className="mt-0.5 font-semibold text-forest-900">{EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-forest-100 bg-white p-5 shadow-soft">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-forest-500">Hours</p>
                  <p className="mt-0.5 font-semibold text-forest-900">Mon–Fri 7am–6pm</p>
                  <p className="text-sm text-forest-600">24/7 emergency storm response</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-forest-100 bg-white p-5 shadow-soft">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-forest-500">Address</p>
                  <p className="mt-0.5 font-semibold text-forest-900">{ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded form */}
          <div className="reveal rounded-3xl border border-forest-100 bg-white shadow-lift overflow-hidden">
            <iframe
              src="https://link.kdlead.com/widget/form/fs4k6UYFxASEe2OnNuTR"
              style={{ width: '100%', height: '716px', border: 'none', borderRadius: '8px' }}
              id="inline-fs4k6UYFxASEe2OnNuTR"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 0"
              data-height="716"
              data-layout-iframe-id="inline-fs4k6UYFxASEe2OnNuTR"
              data-form-id="fs4k6UYFxASEe2OnNuTR"
              title="Request a Free Estimate"
            />
          </div>

        </div>
      </section>
    </>
  );
}
