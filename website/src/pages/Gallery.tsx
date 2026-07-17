import { Leaf } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { galleryImages } from '../data';

const allImages = [
  ...galleryImages,
  { src: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Tree removal in progress', label: 'Removal' },
  { src: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Tall grove of trees', label: 'Grove Care' },
  { src: 'https://images.pexels.com/photos/1005640/pexels-photo-1005640.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Crown pruning work', label: 'Crown Pruning' },
  { src: 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Street trees after pruning', label: 'Street Trees' },
  { src: 'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Tree canopy in Buffalo NY', label: 'Canopy Work' },
  { src: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Stump after grinding', label: 'Stump Removal' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Every job, big or small, gets the same care and clean execution."
        image="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1280&q=60"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <span className="eyebrow"><Leaf className="h-3.5 w-3.5" /> Portfolio</span>
            <h2 className="mt-4 font-display text-3xl font-700 text-forest-900 sm:text-4xl heading-line">
              See the Riverside difference
            </h2>
            <p className="mt-4 text-lg text-forest-700">
              Hover over any photo to see the service type. Real jobs, real results — right here in Buffalo and Western New York.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {allImages.map((img, idx) => (
              <div
                key={`${img.label}-${idx}`}
                className={`reveal-scale stagger-${(idx % 3) + 1} group relative overflow-hidden rounded-2xl shadow-soft img-hover`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64"
                  width="400"
                  height="256"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-800 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-4">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
