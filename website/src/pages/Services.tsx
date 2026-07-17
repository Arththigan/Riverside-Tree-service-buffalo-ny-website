import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Scissors } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { services } from '../data';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Tree Services"
        subtitle="Professional tree care for every need — from a single pruning to full lot clearing."
        image="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1280&q=60"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="reveal-left max-w-2xl">
            <span className="eyebrow"><Scissors className="h-3.5 w-3.5" /> What we do</span>
            <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">
              Full-service tree care for Western New York
            </h2>
            <p className="mt-4 text-lg text-forest-700">
              Our licensed crew handles everything — safely, cleanly, and to ISA arborist standards.
              Click any service to learn more.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`card reveal group flex flex-col overflow-hidden !p-0 stagger-${(idx % 3) + 1}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width="600"
                    height="192"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600 transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-600 text-forest-900 group-hover:text-forest-600 transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-700">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-forest-50 pt-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-forest-800">
                        <CheckCircle2 className="h-4 w-4 flex-none text-forest-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-river-600 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
