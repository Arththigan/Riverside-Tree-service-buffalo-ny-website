import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/Layout';
import { faqs, PHONE, PHONE_HREF } from '../data';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <PageHero
        title="FAQ"
        subtitle="Answers to the questions Buffalo homeowners ask us most."
        image="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal-left">
            <h2 className="font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">
              Questions, answered
            </h2>
            <p className="mt-4 text-lg text-forest-700">
              Still unsure? Call us at{' '}
              <a href={PHONE_HREF} className="font-semibold text-forest-600 underline underline-offset-4">
                {PHONE}
              </a>{' '}
              and a real person will help.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">Call Us Now</Link>
            </div>
          </div>

          <div className="reveal-right divide-y divide-forest-100 overflow-hidden rounded-3xl border border-forest-100 bg-white">
            {faqs.map((f, idx) => {
              const open = openIdx === idx;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenIdx(open ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-600 text-forest-900">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-none text-forest-500 transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-forest-700">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-16">
        <div className="container-page flex flex-col items-center gap-4 text-center reveal-scale">
          <h2 className="font-display text-2xl font-700 text-forest-900">Still have questions?</h2>
          <p className="max-w-md text-forest-700">
            Give us a call or request a free on-site estimate — a certified arborist will walk your property and answer every question in person.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className="btn-primary">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <Link to="/contact" className="btn-ghost">Call Us Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
