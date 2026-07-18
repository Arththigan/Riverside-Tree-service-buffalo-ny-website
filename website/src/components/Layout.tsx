import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone, Menu, X, ArrowRight,
  Facebook, Instagram, MapPin, Mail, Clock,
} from 'lucide-react';
import { PHONE, PHONE_HREF, services, ADDRESS, EMAIL, EMAIL_HREF } from '../data';

export function useReveal() {
  const location = useLocation();
  useEffect(() => {
    // Inject scroll progress bar element once
    if (!document.getElementById('scroll-progress')) {
      const bar = document.createElement('div');
      bar.id = 'scroll-progress';
      document.body.prepend(bar);
    }

    const updateProgress = () => {
      const bar = document.getElementById('scroll-progress');
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });

    const timeout = setTimeout(() => {
      // All reveal variants
      const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur';
      const els = document.querySelectorAll<HTMLElement>(selectors);

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
      );

      els.forEach((el) => {
        el.classList.remove('is-visible');
        io.observe(el);
      });

      // Parallax on scroll
      const parallaxEls = document.querySelectorAll<HTMLElement>('.parallax');
      const onParallax = () => {
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? '0.15');
          const rect = el.getBoundingClientRect();
          const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed;
          el.style.transform = `translateY(${offset}px)`;
        });
      };
      window.addEventListener('scroll', onParallax, { passive: true });
      onParallax();

      return () => {
        io.disconnect();
        window.removeEventListener('scroll', onParallax);
      };
    }, 80);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', updateProgress);
    };
  }, [location.pathname]);
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-sand-50/95 backdrop-blur-md shadow-soft'
          : 'bg-black/30 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Riverside Tree Service - Home">
          <div
            role="img"
            aria-label="Riverside Tree Service"
            style={{ backgroundImage: 'url(/Assests/Riverside_Tree_Service_logo_202607172018-Photoroom.png)' }}
            className={`h-16 w-32 bg-contain bg-no-repeat bg-center sm:h-20 sm:w-40 transition-all duration-300 ${
              transparent ? 'brightness-0 invert' : ''
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? transparent ? 'text-white underline underline-offset-4' : 'text-forest-600 underline underline-offset-4'
                    : transparent ? 'text-forest-50 hover:text-white' : 'text-forest-800 hover:text-forest-600'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_HREF}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              transparent ? 'text-white' : 'text-forest-800 hover:text-forest-600'
            }`}
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <Link to="/contact" className="btn-primary">
            Call Us Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            transparent ? 'text-white' : 'text-forest-900'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-forest-100 bg-sand-50 px-5 py-5 shadow-lift lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-forest-50 text-forest-600' : 'text-forest-800 hover:bg-forest-50'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a href={PHONE_HREF} className="btn-ghost">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <Link to="/contact" className="btn-primary">
              Call Us Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-forest-950 to-river-950 text-forest-100">
      <div className="container-page py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label="Riverside Tree Service - Home">
              <div
                role="img"
                aria-label="Riverside Tree Service"
                style={{ backgroundImage: 'url(/Assests/Riverside_Tree_Service_logo_202607172018-Photoroom.png)' }}
                className="h-14 w-36 bg-contain bg-no-repeat bg-left"
              />
            </Link>
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
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="transition hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-wider text-white">Pages</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-forest-200/80">
              {navLinks.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition hover:text-white">{n.label}</Link>
                </li>
              ))}
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
                <a href={EMAIL_HREF} className="transition hover:text-white">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-forest-300" />
                {ADDRESS}
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
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="transition hover:text-forest-100">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms" className="transition hover:text-forest-100">Terms & Conditions</Link>
            <span aria-hidden="true">·</span>
            <p>Licensed & insured · ISA Certified Arborists · NY LIC #RS-TREE-2005</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image: string }) {
  return (
    <div className="relative h-64 overflow-hidden sm:h-80">
      <img src={image} alt={title} className="h-full w-full object-cover" width="1920" height="320" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950/80 via-forest-900/70 to-river-950/80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 text-center px-5">
        <h1 className="font-display text-3xl font-700 text-white sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-xl text-base text-forest-100/90">{subtitle}</p>}
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  useReveal();
  // scroll to top on route change
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div className="min-h-screen bg-sand-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
