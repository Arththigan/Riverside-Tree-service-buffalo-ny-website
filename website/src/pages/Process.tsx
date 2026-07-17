import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { steps, PHONE, PHONE_HREF } from '../data';

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="A clear, no-surprise process — from first call to final walkthrough."
        image="https://images.pexels.com/photos/1005640/pexels-photo-1005640.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 to-river-900 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(113,152,104,0.25),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(42,133,173,0.3),transparent_55%)]" />
        <div className="container-page relative">
          <div className="max-w-2xl reveal-left">
            <h2 className="font-display text-3xl font-700 sm:text-4xl heading-line">A clear, no-surprise process</h2>
            <p className="mt-4 text-lg text-forest-100/85">
              We have spent twenty years making tree work feel simple for Buffalo homeowners.
              Here is exactly what to expect.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => (
              <div
                key={s.n}
                className={`reveal relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:bg-white/10 stagger-${idx + 1}`}
              >
                <span className="font-display text-4xl font-700 bg-gradient-to-br from-forest-300 to-river-300 bg-clip-text text-transparent">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-600">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/80">{s.desc}</p>
                {idx < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 text-forest-300/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left overflow-hidden rounded-3xl shadow-lift img-hover">
            <img
              src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Riverside Tree Service crew at work in Buffalo NY"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div className="reveal-right">
            <h2 className="font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">
              We do it right — every time
            </h2>
            <p className="mt-4 text-lg text-forest-700">
              Our process is built around your peace of mind. We show up on time, work safely,
              and never leave until you're completely satisfied. Every branch hauled, every stump
              ground, every chip raked.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Call Us Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={PHONE_HREF} className="btn-ghost">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
