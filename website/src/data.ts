import { Trash2, Scissors, TreePine, Snowflake, Sprout, Truck } from 'lucide-react';

export const PHONE = '(716) 703-5296';
export const PHONE_HREF = 'tel:+17167035296';
export const ADDRESS = '9950 County Rd, Clarence, Buffalo, New York';
export const EMAIL = 'hello@riversidetreebuffalo.com';
export const EMAIL_HREF = 'mailto:hello@riversidetreebuffalo.com';

export const services = [
  {
    icon: Trash2,
    title: 'Tree Removal',
    slug: 'tree-removal',
    desc: 'Safe, controlled removal of hazardous, dead, or unwanted trees of any size — including crane-assisted takedowns in tight Buffalo lots.',
    points: ['Stump grinding included', 'Crane-assisted takedowns', 'Hazard assessments'],
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=600&q=70',
  },
  {
    icon: Scissors,
    title: 'Tree Trimming & Pruning',
    slug: 'trimming-pruning',
    desc: 'Structural pruning that improves canopy health, removes deadwood, and reduces storm risk — done to ISA arborist standards.',
    points: ['Crown thinning & raising', 'Deadwood removal', 'Storm prep pruning'],
    image: 'https://images.pexels.com/photos/1005640/pexels-photo-1005640.jpeg?auto=compress&cs=tinysrgb&w=600&q=70',
  },
  {
    icon: TreePine,
    title: 'Stump Grinding',
    slug: 'stump-grinding',
    desc: 'We grind stumps 6–8 inches below grade and clean up every chip, so your yard is ready for sod, planting, or a new structure.',
    points: ['Below-grade grinding', 'Debris haul-away', 'Sod-ready finish'],
    image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=600&q=70',
  },
  {
    icon: Snowflake,
    title: 'Emergency Storm Work',
    slug: 'emergency-storm',
    desc: '24/7 response for fallen limbs and uprooted trees across Buffalo & Erie County. We work with your insurance directly.',
    points: ['24/7 dispatch', 'Insurance billing', 'Crane & bucket truck'],
    image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=600&q=70',
  },
  {
    icon: Sprout,
    title: 'Planting & Arbor Care',
    slug: 'planting-arbor-care',
    desc: 'Right tree, right place. We select species suited to Western New York and plant for decades of healthy growth.',
    points: ['Species selection', 'Deep-root feeding', 'Cabling & bracing'],
    image: 'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=600&q=70',
  },
  {
    icon: Truck,
    title: 'Lot Clearing & Hauling',
    slug: 'lot-clearing',
    desc: 'From single-tree cleanup to full lot clearing for new builds. Brush chipping, log hauling, and complete site cleanup.',
    points: ['Brush chipping', 'Log hauling', 'Site cleanup'],
    image: 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=600&q=70',
  },
];

export const steps = [
  { n: '01', title: 'Free On-Site Estimate', desc: 'A certified arborist walks the property, listens to your goals, and gives you a clear, itemized quote — no pressure.' },
  { n: '02', title: 'Scheduling & Permits', desc: 'We schedule around your life and handle any local permits or utility coordination needed before work begins.' },
  { n: '03', title: 'Safe, Clean Execution', desc: 'Our crew arrives on time, uses proper rigging and PPE, and leaves your yard cleaner than we found it.' },
  { n: '04', title: 'Final Walkthrough', desc: 'We walk the job with you, haul every branch, and make sure you are 100% satisfied before we pack up.' },
];

export const testimonials = [
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

export const stats = [
  { value: '20+', label: 'Years serving Buffalo' },
  { value: '8,400+', label: 'Trees cared for' },
  { value: 'ISA', label: 'Certified arborists' },
  { value: '24/7', label: 'Emergency response' },
];

export const faqs = [
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

export const serviceAreas = [
  'Buffalo', 'Amherst', 'Cheektowaga', 'Tonawanda', 'Williamsville', 'Orchard Park',
  'Hamburg', 'Kenmore', 'Lackawanna', 'West Seneca', 'Depew', 'Lancaster',
  'Clarence', 'Grand Island', 'Lockport', 'Niagara Falls',
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp', alt: 'Large tree removal in a Buffalo residential yard', label: 'Tree Removal' },
  { src: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp', alt: 'Dense grove of tall trees in Western New York', label: 'Grove Care' },
  { src: 'https://images.pexels.com/photos/1005640/pexels-photo-1005640.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp', alt: 'Arborist trimming a mature tree', label: 'Crown Trimming' },
  { src: 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp', alt: 'Tree-lined street after professional pruning', label: 'Pruning & Shaping' },
  { src: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp', alt: 'Stump grinding after tree removal', label: 'Stump Grinding' },
  { src: 'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=400&fm=webp', alt: 'Sunlight through tall trees in Buffalo NY', label: 'Storm Cleanup' },
];
