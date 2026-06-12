export const siteConfig = {
  name: "RR Maintenance",
  tagline: "Landscaping & property maintenance in Surrey",
  description:
    "RR Maintenance, landscaping and property maintenance across Surrey. Fast, reliable, tidy workmanship. One company for gardens, repairs, and ongoing upkeep.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rrmaintenance.co.uk",
  locale: "en_GB",
  phone: "+447941619743",
  phoneDisplay: "07941 619743",
  email: "contact.rrmaintenance@gmail.com",
  location: "Surrey & surrounding areas",
  pill: "Surrey • Fast response • Quality finish",
} as const;

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#benefits", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Landscaping",
    description: "Garden transformations with a clean, premium finish.",
    items: [
      "Garden clearances & tidy-ups",
      "Planting, turf & lawn care",
      "Fencing & small repairs",
      "Patios & paving refresh",
    ],
  },
  {
    title: "Property maintenance",
    description: "Repairs and refreshes for homes and rentals.",
    items: [
      "General repairs & snagging",
      "Painting & touch-ups",
      "Gutter clearing & exterior care",
      "End-of-tenancy refresh",
    ],
  },
  {
    title: "Regular upkeep",
    description: "Ongoing plans for landlords and homeowners.",
    items: [
      "Monthly / seasonal maintenance",
      "Rental property support",
      "Landlord & homeowner plans",
      "Priority call-outs",
    ],
  },
  {
    title: "Carpentry",
    description: "Skilled woodwork for repairs and fittings.",
    items: ["Repairs & fittings", "Fixtures", "Custom woodwork"],
  },
  {
    title: "Electrical",
    description: "Safe, tidy electrical work for everyday needs.",
    items: [
      "Fault finding & repairs",
      "Lighting & fixture installs",
      "Socket replacements",
    ],
  },
  {
    title: "Plumbing",
    description: "Practical plumbing support when you need it.",
    items: [
      "Leak detection & repairs",
      "Tap & fixture installs",
      "General plumbing maintenance",
    ],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Tell us what you need",
    text: "Call, email, or send the enquiry form with a few details about the job and location.",
  },
  {
    step: "02",
    title: "Clear quote & timeframe",
    text: "We respond quickly with honest advice, a straightforward quote, and a realistic schedule.",
  },
  {
    step: "03",
    title: "Tidy, quality delivery",
    text: "Our team arrives on time, works respectfully, and leaves your property clean and finished to a high standard.",
  },
] as const;

export const benefits = [
  {
    title: "Rapid response",
    text: "Quick call-backs and clear timeframes so you're never left wondering.",
  },
  {
    title: "Tidy & respectful",
    text: "We treat your property like our own, careful access, clean sites, and courteous communication.",
  },
  {
    title: "Quality workmanship",
    text: "Detail-led finishes and honest recommendations that stand up over time.",
  },
  {
    title: "One company, full coverage",
    text: "Landscaping, maintenance, carpentry, electrical, and plumbing, coordinated under one trusted team.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Super professional from start to finish. Quick response, turned up on time, and the garden looks brand new.",
    name: "Eleanor",
    location: "Sunbury",
  },
  {
    quote:
      "Tidy, respectful and really detailed. We had a list of small jobs and everything was completed to a high standard.",
    name: "David",
    location: "Staines-upon-Thames",
  },
  {
    quote:
      "Great communication and honest advice. The finish was excellent and they left the place spotless.",
    name: "Casey",
    location: "Ascot",
  },
] as const;

export const faqs = [
  {
    question: "Which areas do you cover?",
    answer:
      "We're based in Surrey and work locally across Surrey and nearby surrounding areas. Share your postcode in your enquiry and we'll confirm availability.",
  },
  {
    question: "Can I book a one-off job or ongoing maintenance?",
    answer:
      "Both. We take on one-off landscaping and maintenance projects, as well as regular upkeep plans for homeowners and landlords.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "We aim for a fast response, typically the same or next working day, with a clear quote or call-back time.",
  },
  {
    question: "Do you handle multiple trades on one visit?",
    answer:
      "Yes. RR Maintenance can coordinate landscaping, general maintenance, carpentry, electrical, and plumbing work where appropriate.",
  },
  {
    question: "What should I include in my enquiry?",
    answer:
      "A brief description of the work, your location, preferred contact method, and any photos if helpful. We'll follow up with any extra questions.",
  },
] as const;

export const formServices = [
  "Landscaping",
  "Property Maintenance",
  "Regular Upkeep",
  "Carpentry",
  "Electrical",
  "Plumbing",
  "Other",
] as const;

/** Hero carousel — add matching JPEGs/WEBPs to public/projects/ */
export const heroSlides = [
  {
    image: "/projects/01-landscaping.jpeg",
    alt: "Gravel area framed with timber edging in a garden",
    eyebrow: "Landscaping",
    title: "Timber edging & gravel base",
    description:
      "A clean, level gravel area with treated timber edging, finished square and ready to use.",
  },
  {
    image: "/projects/02-landscaping.jpeg",
    alt: "Large paving slab patio with fresh pointing in a back garden",
    eyebrow: "Patios & paving",
    title: "Large-format paving laid",
    description:
      "Neatly laid patio slabs with consistent joints and a tidy edge, built for everyday use.",
  },
  {
    image: "/projects/03-lanscaping.jpeg",
    alt: "Block-paved driveway and garden area in a residential property",
    eyebrow: "Driveways",
    title: "Block paving refresh",
    description:
      "A smart, even finish across the frontage, refreshed paving that lifts the whole entrance.",
  },
  {
    image: "/projects/04-landscaping.jpeg",
    alt: "Roof tiles and ridge line on a pitched roof",
    eyebrow: "Property maintenance",
    title: "Roof checks & repairs",
    description:
      "Practical maintenance work carried out safely, spotting issues early and keeping things watertight.",
  },
] as const;
