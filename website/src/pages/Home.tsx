import { Link } from 'react-router-dom';
import {
  Phone, MapPin, ShieldCheck, Star, Clock,
  ArrowRight, CheckCircle2, Leaf, Scissors, Quote,
} from 'lucide-react';
import { PHONE, PHONE_HREF, services, stats, testimonials, galleryImages, ADDRESS } from '../data';

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden lg:min-h-[92vh] lg:max-h-[860px]">
        <div className="absolute inset-0">
          {/* Mobile: static image (no video download) */}
          <img
            src="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=480&q=60"
            alt="Mature trees in Buffalo NY"
            className="h-full w-full object-cover lg:hidden"
            width="480"
            height="320"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          {/* Desktop: video — capped height to reduce page weight & improve LCP */}
          <video
            autoPlay muted loop playsInline
            className="hidden h-full w-full object-cover parallax lg:block lg:max-h-[860px]"
            data-speed="0.08"
            width="1280"
            height="720"
            poster="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=640&q=30"
          >
            <source src="/trees_river.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950/80 via-forest-900/70 to-river-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(79,122,69,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(42,133,173,0.4),transparent_55%)]" />
        </div>

        <div className="relative container-page flex min-h-[92vh] flex-col justify-center pt-24 pb-8 sm:pb-16 lg:pb-48">
          <div className="max-w-2xl">
            <span className="eyebrow text-river-200 animate-fade-in">
              <MapPin className="h-3.5 w-3.5" /> {ADDRESS}
            </span>
            <h1 className="mt-5 font-display text-4xl font-700 leading-[1.05] text-white sm:text-5xl md:text-6xl animate-fade-up">
              Buffalo Tree Service
              <span className="block bg-gradient-to-r from-forest-200 to-river-200 bg-clip-text text-transparent">
                done right the first time.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-50/90 animate-fade-up [animation-delay:120ms]">
              Riverside Tree Service is Buffalo's trusted name for tree removal, trimming, and
              emergency storm work. Licensed, insured, and led by ISA-certified arborists —
              with free estimates and a yard left cleaner than we found it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up [animation-delay:240ms]">
              <Link to="/contact" className="btn-primary px-7 py-4 text-base">
                Call Us Now <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={PHONE_HREF} className="btn-ghost px-7 py-4 text-base text-white border-white/30 bg-white/10 hover:bg-white/20">
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-forest-50/85 animate-fade-up [animation-delay:360ms]">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-forest-200" /> Licensed & insured</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-forest-200" /> 4.9 / 5 · 200+ reviews</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-forest-200" /> 24/7 storm response</span>
            </div>
          </div>
        </div>

        {/* Stats bar — inline on mobile, absolute on desktop */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
          <div className="container-page pb-6 lg:pb-8">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label} className={`bg-gradient-to-br from-forest-950/40 to-river-950/40 px-5 py-5 text-center reveal stagger-${i + 1}`}>
                  <div className="font-display text-2xl font-700 text-white sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-river-100/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="border-y border-forest-100 bg-white">
        <div className="container-page grid grid-cols-2 gap-y-4 py-5 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: ShieldCheck, text: 'Fully Licensed & Insured' },
            { icon: Leaf,         text: 'ISA-Certified Arborists' },
            { icon: Star,         text: '4.9★ on Google' },
            { icon: Clock,        text: '24/7 Emergency Service' },
            { icon: CheckCircle2, text: 'Free Written Estimates' },
          ].map((item, i) => (
            <div key={item.text} className={`reveal-scale stagger-${i + 1} flex items-center justify-center gap-2 text-sm font-semibold text-forest-700`}>
              <item.icon className="h-4 w-4 text-forest-500" />
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="reveal-left max-w-2xl">
            <span className="eyebrow"><Scissors className="h-3.5 w-3.5" /> What we do</span>
            <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">
              Full-service tree care for Western New York
            </h2>
            <p className="mt-4 text-lg text-forest-700">
              From a single dead maple to a full lot clearing, our crew has the equipment,
              training, and insurance to do it safely.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`card reveal flex flex-col group stagger-${(idx % 3) + 1}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600 transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-600 text-forest-900 group-hover:text-forest-600 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-700">{s.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-forest-50 pt-5">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="py-20 sm:py-28 bg-sand-100">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <span className="eyebrow"><Leaf className="h-3.5 w-3.5" /> Our work</span>
            <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">
              See the Riverside difference
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {galleryImages.map((img, idx) => (
              <div
                key={img.label}
                className={`reveal-scale stagger-${(idx % 3) + 1} group relative overflow-hidden rounded-2xl shadow-soft img-hover`}
              >
                <img src={img.src} alt={img.alt} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64" width="400" height="256" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-800 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-4">
                  {img.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center reveal">
            <Link to="/gallery" className="btn-ghost">View Full Gallery <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="reveal-right max-w-2xl">
            <span className="eyebrow"><Star className="h-3.5 w-3.5" /> Reviews</span>
            <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">
              Trusted by your neighbors
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <figure
                key={t.name}
                className={`reveal-blur stagger-${idx + 1} flex flex-col rounded-3xl border border-forest-100 bg-white p-7 shadow-soft hover:-translate-y-1 hover:shadow-lift transition-all duration-300`}
              >
                <Quote className="h-8 w-8 text-forest-300" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-forest-800">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-forest-50 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600 font-display text-sm font-700 text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-forest-900">{t.name}</div>
                    <div className="text-xs text-forest-600">{t.place}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-river-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-river-500" />)}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 text-center reveal">
            <Link to="/reviews" className="btn-ghost">Read all reviews <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-700 to-river-800 py-16 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=600&q=30&fm=webp"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-20 parallax"
            data-speed="0.12"
            width="600"
            height="400"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-800/90 to-river-800/85" />
        </div>
        <div className="container-page relative flex flex-col items-center gap-6 text-center">
          <h2 className="reveal font-display text-3xl font-700 sm:text-4xl">Ready to get started?</h2>
          <p className="reveal stagger-1 max-w-lg text-forest-100/90">A free on-site estimate from a certified arborist — no pressure, no surprise fees.</p>
          <div className="reveal stagger-2 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary px-8 py-4 text-base">
              Call Us Now <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={PHONE_HREF} className="btn-ghost px-8 py-4 text-base text-white border-white/30 bg-white/10 hover:bg-white/20">
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
