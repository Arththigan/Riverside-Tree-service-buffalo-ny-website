import { MapPin } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { serviceAreas } from '../data';

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        title="Service Area"
        subtitle="Based in Buffalo — serving all of Erie & Niagara Counties."
        image="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left">
            <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Where we work</span>
            <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">
              Proudly serving Erie & Niagara Counties
            </h2>
            <p className="mt-4 text-lg text-forest-700">
              Based in Buffalo, we respond across Western New York — usually same-day for
              estimates and within hours for storm emergencies.
            </p>
            <p className="mt-3 text-forest-700">
              Not sure if we cover your area? Just give us a call — we travel for larger jobs
              and are happy to help.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {serviceAreas.map((a, i) => (
                <span
                  key={a}
                  className={`reveal-scale stagger-${(i % 6) + 1} rounded-full border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-800 transition-colors hover:border-forest-400 hover:bg-forest-50`}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-right overflow-hidden rounded-3xl border border-forest-100 shadow-lift img-hover">
            <img
              src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Tree-lined street in Buffalo NY"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
