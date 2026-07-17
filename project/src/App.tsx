import { useEffect, useRef, useState } from 'react';
import {
  Phone,
  Menu,
  X,
  TreePine,
  Scissors,
  Trash2,
  ShieldCheck,
  Truck,
  Leaf,
  Snowflake,
  Star,
  MapPin,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Quote,
  ChevronDown,
  Facebook,
  Instagram,
  Sprout,
} from 'lucide-react';

const PHONE = '(716) 555-0142';
const PHONE_HREF = 'tel:+17165550142';

const services = [
  {
    icon: Trash2,
    title: 'Tree Removal',
    desc: 'Safe, controlled removal of hazardous, dead, or unwanted trees of any size — including crane-assisted takedowns in tight Buffalo lots.',
    points: ['Stump grinding included', 'Crane-assisted takedowns', 'Hazard assessments'],
  },
  {
    icon: Scissors,
    title: 'Tree Trimming & Pruning',
    desc: 'Structural pruning that improves canopy health, removes deadwood, and reduces storm risk — done to ISA arborist standards.',
    points: ['Crown thinning & raising', 'Deadwood removal', 'Storm prep pruning'],
  },
  {
    icon: TreePine,
    title: 'Stump Grinding',
    desc: 'We grind stumps 6–8 inches below grade and clean up every chip, so your yard is ready for sod, planting, or a new structure.',
    points: ['Below-grade grinding', 'Debris haul-away', 'Sod-ready finish'],
  },
  {
    icon: Snowflake,
    title: 'Emergency Storm Work',
    desc: '24/7 response for fallen limbs and uprooted trees across Buffalo & Erie County. We work with your insurance directly.',
    points: ['24/7 dispatch', 'Insurance billing', 'Crane & bucket truck'],
  },
  {
    icon: Sprout,
    title: 'Planting & Arbor Care',
    desc: 'Right tree, right place. We select species suited to Western New York and plant for decades of healthy growth.',
    points: ['Species selection', 'Deep-root feeding', 'Cabling & bracing'],
  },
  {
    icon: Truck,
    title: 'Lot Clearing & Hauling',
    desc: 'From single-tree cleanup to full lot clearing for new builds. Brush chipping, log hauling, and complete site cleanup.',
    points: ['Brush chipping', 'Log hauling', 'Site cleanup'],
  },
];

const steps = [
  { n: '01', title: 'Free On-Site Estimate', desc: 'A certified arborist walks the property, listens to your goals, and gives you a clear, itemized quote — no pressure.' },
  { n: '02', title: 'Scheduling & Permits', desc: 'We schedule around your life and handle any local permits or utility coordination needed before work begins.' },
  { n: '03', title: 'Safe, Clean Execution', desc: 'Our crew arrives on time, uses proper rigging and PPE, and leaves your yard cleaner than we found it.' },
  { n: '04', title: 'Final Walkthrough', desc: 'We walk the job with you, haul every branch, and make sure you are 100% satisfied before we pack up.' },
];

const testimonials = [
  {
    quote: 'A massive oak was leaning over our garage after the October storm. Riverside had a crane there the next morning, and you would never know a tree came down — the cleanup was flawless.',
    name: 'Karen D.',
    place: 'Williamsville, NY',
  },
  {
    quote: 'I got three quotes for removing a dead maple. Riverside was the only crew that actually climbed up and inspected it before pricing. Honest, fair, and the work was textbook.',
    name: 'Mike R.',
    place: 'North Buffalo, NY',
  },
  {
    quote: 'They pruned three mature maples in our backyard without touching the garden beds underneath. Real arborists — not just guys with chainsaws.',
    name: 'Priya S.',
    place: 'Elmwood Village, NY',
  },
];

const stats = [
  { value: '20+', label: 'Years serving Buffalo' },
  { value: '8,400+', label: 'Trees cared for' },
  { value: 'ISA', label: 'Certified arborists' },
  { value: '24/7', label: 'Emergency response' },
];

const faqs = [
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Riverside Tree Service carries full general liability and workers comp insurance, and we are licensed to operate in the City of Buffalo and throughout Erie County. We provide certificates of insurance on request — often directly to your insurance carrier for storm claims.',
  },
  {
    q: 'Do you give free estimates?',
    a: 'Always. A certified arborist comes to your property, assesses the tree(s), and gives you a clear itemized quote. There is no charge and no obligation — we will not pressure you into work you do not need.',
  },
  {
    q: 'How much does tree removal cost in Buffalo?',
    a: 'Most residential tree removals in the Buffalo area run between $450 and $1,800 depending on tree size, species, condition, and access. Large or hazardous removals near structures can run higher. You will get an exact, fixed price on your free estimate — no surprise fees.',
  },
  {
    q: 'Do you handle insurance claims for storm damage?',
    a: 'Yes. We respond 24/7 for storm work, document the damage with photos, and bill your homeowner insurance directly so you are not chasing paperwork. We have worked with every major carrier in Western New York.',
  },
  {
    q: 'What areas do you serve?',
    a: 'All of Erie and Niagara Counties — Buffalo, Amherst, Cheektowaga, Tonawanda, Williamsville, Orchard Park, Hamburg, Kenmore, and everywhere in between. Call us if you are unsure; we travel for larger jobs.',
  },
];

const serviceAreas = [
  'Buffalo', 'Amherst', 'Cheektowaga', 'Tonawanda', 'Williamsville', 'Orchard Park',
  'Hamburg', 'Kenmore', 'Lackawanna', 'West Seneca', 'Depew', 'Lancaster',
  'Clarence', 'Grand Island', 'Lockport', 'Niagara Falls',
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Area', href: '#area' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-sand-50/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-river-600 text-white shadow-soft">
            <TreePine className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-lg font-700 ${scrolled ? 'text-forest-900' : 'text-white'}`}>
              Riverside
            </span>
            <span className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${scrolled ? 'text-forest-600' : 'text-forest-100'}`}>
              Tree Service
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-forest-800 hover:text-forest-600' : 'text-forest-50 hover:text-white'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_HREF}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? 'text-forest-800 hover:text-forest-600' : 'text-white'
            }`}
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <a href="#quote" className="btn-primary">
            Free Estimate
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            scrolled ? 'text-forest-900' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-forest-100 bg-sand-50 px-5 py-5 shadow-lift lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-forest-800 hover:bg-forest-50"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a href={PHONE_HREF} className="btn-ghost">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a href="#quote" onClick={() => setOpen(false)} className="btn-primary">
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Mature trees in a Buffalo NY neighborhood maintained by Riverside Tree Service"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/85 via-forest-900/75 to-river-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(79,122,69,0.4),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(42,133,173,0.45),transparent_55%)]" />
      </div>

      <div className="relative container-page flex min-h-[92vh] flex-col justify-center pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="eyebrow text-river-200 animate-fade-in">
            <MapPin className="h-3.5 w-3.5" /> Buffalo, NY · Erie & Niagara Counties
          </span>
          <h1 className="mt-5 font-display text-4xl font-700 leading-[1.05] text-white sm:text-5xl md:text-6xl animate-fade-up">
            Buffalo Tree Service
            <span className="block bg-gradient-to-r from-forest-200 to-river-200 bg-clip-text text-transparent">done right the first time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-50/90 animate-fade-up [animation-delay:120ms]">
            Riverside Tree Service is Buffalo's trusted name for tree removal, trimming, and
            emergency storm work. Licensed, insured, and led by ISA-certified arborists —
            with free estimates and a yard left cleaner than we found it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up [animation-delay:240ms]">
            <a href="#quote" className="btn-primary px-7 py-4 text-base">
              Get Your Free Estimate <ArrowRight className="h-5 w-5" />
            </a>
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

      <div className="absolute bottom-0 left-0 right-0">
        <div className="container-page pb-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-gradient-to-br from-forest-950/40 to-river-950/40 px-5 py-5 text-center">
                <div className="font-display text-2xl font-700 text-white sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-river-100/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, text: 'Fully Licensed & Insured' },
    { icon: Leaf, text: 'ISA-Certified Arborists' },
    { icon: Star, text: '4.9★ on Google' },
    { icon: Clock, text: '24/7 Emergency Service' },
    { icon: CheckCircle2, text: 'Free Written Estimates' },
  ];
  return (
    <section className="border-y border-forest-100 bg-white">
      <div className="container-page grid grid-cols-2 gap-y-4 py-5 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((i) => (
          <div key={i.text} className="flex items-center justify-center gap-2 text-sm font-semibold text-forest-700">
            <i.icon className="h-4 w-4 text-forest-500" />
            {i.text}
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl reveal">
          <span className="eyebrow"><Scissors className="h-3.5 w-3.5" /> What we do</span>
          <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl">
            Full-service tree care for Western New York
          </h2>
          <p className="mt-4 text-lg text-forest-700">
            From a single dead maple to a full lot clearing, our crew has the equipment,
            training, and insurance to do it safely — and to leave your property looking
            better than before.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <article
              key={s.title}
              className="card reveal flex flex-col"
              style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-600 text-forest-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700">{s.desc}</p>
              <ul className="mt-5 space-y-2 border-t border-forest-50 pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-forest-800">
                    <CheckCircle2 className="h-4 w-4 flex-none text-forest-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-to-br from-forest-900 to-river-900 py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(113,152,104,0.25),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(42,133,173,0.3),transparent_55%)]" />
      <div className="container-page relative">
        <div className="max-w-2xl reveal">
          <span className="eyebrow text-forest-200">How it works</span>
          <h2 className="mt-4 font-display text-3xl font-700 sm:text-4xl">A clear, no-surprise process</h2>
          <p className="mt-4 text-lg text-forest-100/85">
            We have spent twenty years making tree work feel simple for Buffalo homeowners.
            Here is exactly what to expect.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.n}
              className="reveal relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:bg-white/10"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <span className="font-display text-4xl font-700 bg-gradient-to-br from-forest-300 to-river-300 bg-clip-text text-transparent">{s.n}</span>
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
  );
}

function WhyUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Real insurance, real protection',
      desc: 'Full liability and workers comp — and we send the certificate straight to your insurance carrier for storm claims.',
    },
    {
      icon: Leaf,
      title: 'Arborist-led, not just chainsaws',
      desc: 'Every estimate is done by an ISA-certified arborist. We tell you what you actually need — and what you do not.',
    },
    {
      icon: Truck,
      title: 'We own our equipment',
      desc: 'Cranes, bucket trucks, chippers, and stump grinders — no subcontractor delays, no surprise add-on fees.',
    },
    {
      icon: CheckCircle2,
      title: 'Cleaner than we found it',
      desc: 'Every branch hauled, every stump ground below grade, every chip raked. The final walkthrough is on us.',
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="ISA-certified arborist from Riverside Tree Service pruning a mature tree in Buffalo NY"
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-56 rounded-2xl border border-river-100 bg-white p-5 shadow-lift sm:block">
            <div className="flex items-center gap-1 text-river-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-river-500" />)}
            </div>
            <p className="mt-2 text-sm font-semibold text-forest-900">4.9 / 5 average</p>
            <p className="text-xs text-forest-600">from 200+ Buffalo-area reviews</p>
          </div>
        </div>

        <div className="reveal">
          <span className="eyebrow"><TreePine className="h-3.5 w-3.5" /> Why Riverside</span>
          <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl">
            Buffalo homeowners keep calling us back
          </h2>
          <p className="mt-4 text-lg text-forest-700">
            We have earned our reputation one yard at a time — by doing the hard jobs safely,
            quoting honestly, and treating every property like it is our own.
          </p>
          <div className="mt-8 space-y-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-river-50 text-river-600">
                  <r.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-600 text-forest-900">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-forest-700">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-sand-100 py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl reveal">
          <span className="eyebrow"><Star className="h-3.5 w-3.5" /> Reviews</span>
          <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl">
            Trusted by your neighbors
          </h2>
          <p className="mt-4 text-lg text-forest-700">
            We are proud of our 4.9-star average — and even prouder of the neighbors who keep
            recommending us across Western New York.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-3xl border border-forest-100 bg-white p-7 shadow-soft"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-forest-300" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-forest-800">
                "{t.quote}"
              </blockquote>
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
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section id="area" className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Where we work</span>
          <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl">
            Proudly serving Erie & Niagara Counties
          </h2>
          <p className="mt-4 text-lg text-forest-700">
            Based in Buffalo, we respond across Western New York — usually same-day for
            estimates and within hours for storm emergencies.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {serviceAreas.map((a) => (
              <span
                key={a}
                className="rounded-full border border-forest-200 bg-white px-4 py-2 text-sm font-medium text-forest-800 transition-colors hover:border-forest-400 hover:bg-forest-50"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-3xl border border-forest-100 shadow-lift">
          <img
            src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Tree-lined street in Buffalo NY where Riverside Tree Service provides tree trimming and removal"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-sand-100 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <span className="eyebrow"><ChevronDown className="h-3.5 w-3.5" /> FAQ</span>
          <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg text-forest-700">
            Still unsure? Call us at{' '}
            <a href={PHONE_HREF} className="font-semibold text-forest-600 underline underline-offset-4">
              {PHONE}
            </a>{' '}
            and a real person will help.
          </p>
        </div>

        <div className="reveal divide-y divide-forest-100 overflow-hidden rounded-3xl border border-forest-100 bg-white">
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
  );
}

function QuoteCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: 'Tree Removal', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative overflow-hidden bg-gradient-to-br from-forest-700 to-river-800 py-20 text-white sm:py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Forest canopy in Western New York where Riverside Tree Service operates"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-800/90 to-river-800/85" />
      </div>

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow text-river-200"><ArrowRight className="h-3.5 w-3.5" /> Free estimate</span>
          <h2 className="mt-4 font-display text-3xl font-700 sm:text-4xl">
            Get your free, no-pressure quote
          </h2>
          <p className="mt-4 text-lg text-forest-100/90">
            Tell us about your trees. An ISA-certified arborist will come out, assess the work,
            and give you a clear written price — usually within 48 hours.
          </p>
          <div className="mt-8 space-y-3 text-forest-50">
            <a href={PHONE_HREF} className="flex items-center gap-3 text-lg font-semibold hover:text-white">
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
            <a href="mailto:hello@riversidetreebuffalo.com" className="flex items-center gap-3 text-forest-100 hover:text-white">
              <Mail className="h-5 w-5" /> hello@riversidetreebuffalo.com
            </a>
            <div className="flex items-center gap-3 text-forest-100">
              <Clock className="h-5 w-5" /> Mon–Fri 7a–6p · 24/7 storm response
            </div>
          </div>
        </div>

        <div className="reveal rounded-3xl border border-white/15 bg-white/95 p-6 text-forest-900 shadow-lift sm:p-8">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-forest-50 to-river-50 text-river-600">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-700">Thank you, {form.name || 'neighbor'}!</h3>
              <p className="mt-2 max-w-sm text-forest-700">
                Your request is in. A Riverside arborist will call you within one business day to
                schedule your free on-site estimate.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: 'Tree Removal', message: '' }); }}
                className="btn-ghost mt-6"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-forest-800">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-forest-200 bg-sand-50 px-4 py-3 text-sm outline-none transition focus:border-river-500 focus:ring-2 focus:ring-river-500/20"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-forest-800">Phone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-forest-200 bg-sand-50 px-4 py-3 text-sm outline-none transition focus:border-river-500 focus:ring-2 focus:ring-river-500/20"
                  placeholder="(716) 555-0142"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-forest-800">Service needed</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-xl border border-forest-200 bg-sand-50 px-4 py-3 text-sm outline-none transition focus:border-river-500 focus:ring-2 focus:ring-river-500/20"
                >
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                  <option>Emergency / Storm Work</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-forest-800">Tell us about your trees</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-forest-200 bg-sand-50 px-4 py-3 text-sm outline-none transition focus:border-river-500 focus:ring-2 focus:ring-river-500/20"
                  placeholder="A 40-foot maple in the back yard is leaning toward the garage…"
                />
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-base">
                Request My Free Estimate <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-center text-xs text-forest-600">
                We will never share your info. Expect a callback within one business day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-forest-950 to-river-950 text-forest-100">
      <div className="container-page py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-river-600 text-white">
                <TreePine className="h-5 w-5" />
              </span>
              <div className="leading-none">
                <div className="font-display text-lg font-700 text-white">Riverside</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-forest-300">Tree Service</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-forest-200/80">
              Buffalo's trusted tree care professionals since 2005. Licensed, insured, and
              ISA-certified — serving all of Erie & Niagara Counties.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-forest-100 transition hover:bg-white/10" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-forest-100 transition hover:bg-white/10" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-forest-200/80">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}><a href="#services" className="transition hover:text-white">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-forest-200/80">
              <li><a href="#process" className="transition hover:text-white">Our Process</a></li>
              <li><a href="#reviews" className="transition hover:text-white">Reviews</a></li>
              <li><a href="#area" className="transition hover:text-white">Service Area</a></li>
              <li><a href="#faq" className="transition hover:text-white">FAQ</a></li>
              <li><a href="#quote" className="transition hover:text-white">Free Estimate</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-forest-200/80">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-forest-300" />
                <a href={PHONE_HREF} className="transition hover:text-white">{PHONE}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-forest-300" />
                <a href="mailto:hello@riversidetreebuffalo.com" className="transition hover:text-white">hello@riversidetreebuffalo.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-forest-300" />
                Buffalo, NY · Erie & Niagara Counties
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-forest-300" />
                Mon–Fri 7a–6p · 24/7 storm response
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-forest-300/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Riverside Tree Service. All rights reserved.</p>
          <p>Licensed & insured · ISA Certified Arborists · NY LIC #RS-TREE-2005</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="min-h-screen bg-sand-50">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <Reviews />
        <ServiceArea />
        <FAQ />
        <QuoteCTA />
      </main>
      <Footer />
    </div>
  );
}
