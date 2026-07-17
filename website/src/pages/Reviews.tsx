import { Star, Quote } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { testimonials } from '../data';

const extraReviews = [
  {
    quote: 'Used Riverside for stump grinding after another company removed a silver maple. They showed up same day and ground it so clean you can barely tell a tree was ever there.',
    name: 'Tom B.',
    place: 'Cheektowaga, NY',
  },
  {
    quote: 'Five estimates, five different prices. Riverside was the only one that explained exactly why the tree needed to come down and what the alternatives were. That kind of honesty is rare.',
    name: 'Sandra L.',
    place: 'Orchard Park, NY',
  },
  {
    quote: 'The crew removed a 60-foot cottonwood from a very tight space between our house and the fence next door. Not a single scratch. Truly skilled work.',
    name: 'David M.',
    place: 'Amherst, NY',
  },
];

const allReviews = [...testimonials, ...extraReviews];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Customer Reviews"
        subtitle="4.9 stars from 200+ homeowners across Buffalo and Western New York."
        image="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          {/* Rating summary */}
          <div className="reveal-scale flex flex-col items-center gap-3 text-center mb-16">
            <div className="flex gap-1 text-river-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-river-500" />
              ))}
            </div>
            <p className="font-display text-4xl font-700 text-forest-900">4.9 / 5</p>
            <p className="text-forest-600">Based on 200+ reviews from Buffalo-area homeowners</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {allReviews.map((t, idx) => (
              <figure
                key={t.name}
                className={`reveal-blur stagger-${(idx % 3) + 1} flex flex-col rounded-3xl border border-forest-100 bg-white p-7 shadow-soft hover:-translate-y-1 hover:shadow-lift transition-all duration-300`}
              >
                <Quote className="h-8 w-8 text-forest-300" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-forest-800">
                  &ldquo;{t.quote}&rdquo;
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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-river-500" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
