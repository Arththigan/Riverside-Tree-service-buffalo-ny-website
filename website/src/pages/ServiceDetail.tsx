import { Link, useParams, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { services, PHONE, PHONE_HREF } from '../data';
import { PageHero } from '../components/Layout';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero title={service.title} image={service.image} />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_340px]">
          {/* Main content */}
          <div>
            <div className="reveal-left">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600">
                <service.icon className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">{service.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-forest-700">{service.desc}</p>

              <h3 className="mt-10 font-display text-xl font-600 text-forest-900">What's included</h3>
              <ul className="mt-4 space-y-3">
                {service.points.map((p, i) => (
                  <li key={p} className={`reveal stagger-${i + 1} flex items-center gap-3 text-base text-forest-800`}>
                    <CheckCircle2 className="h-5 w-5 flex-none text-forest-500" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-10 overflow-hidden rounded-3xl shadow-lift img-hover reveal">
                <img src={service.image.replace('w=1200', 'w=1200&fm=webp')} alt={service.title} className="h-72 w-full object-cover sm:h-96" width="1200" height="384" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 reveal-right">
            <div className="rounded-3xl bg-gradient-to-br from-forest-700 to-river-800 p-7 text-white shadow-lift">
              <h3 className="font-display text-xl font-700">Get a free estimate</h3>
              <p className="mt-2 text-sm text-forest-100/90">
                A certified arborist comes to your property and gives you a clear written quote — no obligation.
              </p>
              <Link to="/contact" className="mt-5 btn-primary w-full justify-center py-3">
                Call Us Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={PHONE_HREF} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>

            <div className="rounded-3xl border border-forest-100 bg-white p-7 shadow-soft">
              <h3 className="font-display text-base font-600 text-forest-900">Other services</h3>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to={`/services/${o.slug}`}
                      className="flex items-center gap-3 rounded-xl p-2 text-sm font-medium text-forest-800 transition hover:bg-forest-50 hover:text-forest-600"
                    >
                      <o.icon className="h-4 w-4 flex-none text-river-600" />
                      {o.title}
                      <ArrowRight className="ml-auto h-4 w-4 text-forest-300" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-4 flex items-center gap-1 text-sm font-semibold text-river-600 hover:gap-2 transition-all">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
