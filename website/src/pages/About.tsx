import { useReveal } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Shield, Award, Clock, Users } from 'lucide-react';
import { stats, PHONE_HREF, PHONE } from '../data';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Every job starts with a thorough hazard assessment. We use proper rigging, PPE, and industry best practices to protect your property and our crew.',
  },
  {
    icon: Award,
    title: 'ISA Certified Arborists',
    desc: 'Our team holds ISA certifications — meaning we understand tree biology, not just how to run a chainsaw. That knowledge shows in every cut we make.',
  },
  {
    icon: Clock,
    title: '20+ Years in Buffalo',
    desc: 'We have been caring for trees across Western New York for over two decades. We know the local species, soils, and the damage Buffalo winters can do.',
  },
  {
    icon: Users,
    title: 'Family Owned',
    desc: 'Riverside Tree Service is locally owned and operated. When you call us, you deal with the owners — not a call center.',
  },
];

export default function AboutPage() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-end bg-forest-900 pt-24">
        <img
        src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1280&q=60"
          alt="Trees in Western New York"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width="1400"
          height="560"
          fetchPriority="high"
          decoding="async"
        />
        <div className="container-page relative pb-16 pt-8">
          <p className="reveal mb-2 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Our Story
          </p>
          <h1 className="reveal text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About Riverside<br className="hidden sm:block" /> Tree Service
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="reveal mb-3 text-sm font-semibold uppercase tracking-widest text-forest-500">
              Who We Are
            </p>
            <h2 className="reveal text-3xl font-bold text-forest-900 sm:text-4xl">
              Buffalo's Trusted Tree Care Experts
            </h2>
            <p className="reveal mt-6 text-lg leading-relaxed text-forest-700">
              Riverside Tree Service was founded with one goal: bring honest, skilled tree care to Buffalo and the surrounding communities. What started as a small crew with a single truck has grown into one of Western New York's most trusted arborist operations.
            </p>
            <p className="reveal mt-4 text-lg leading-relaxed text-forest-700">
              We serve homeowners, property managers, and municipalities across Erie and Niagara Counties. From routine pruning to emergency storm response, we show up on time, communicate clearly, and leave your yard cleaner than we found it.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="btn-primary"
              >
                Call {PHONE}
              </a>
              <Link to="/contact" className="btn-outline">
                Get a Free Estimate
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="reveal-scale rounded-2xl bg-forest-50 p-8 text-center"
              >
                <p className="text-4xl font-extrabold text-forest-600">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-forest-700">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-sand-50">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="reveal mb-3 text-sm font-semibold uppercase tracking-widest text-forest-500">
              What Drives Us
            </p>
            <h2 className="reveal text-3xl font-bold text-forest-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="reveal-scale rounded-2xl bg-white p-8 shadow-soft">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                  <v.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-forest-900">{v.title}</h3>
                <p className="text-sm leading-relaxed text-forest-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-forest-800">
        <div className="container-page text-center">
          <h2 className="reveal text-3xl font-bold text-white sm:text-4xl">
            Ready to Work Together?
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-lg text-forest-200">
            Get a free, no-pressure estimate from a certified arborist. We'll come to your property and give you a clear quote.
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Estimate
            </Link>
            <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-forest-900">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
