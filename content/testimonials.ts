export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  service?: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "After years of trying everything for adult acne, Lumen finally got my skin clear. The plan was thoughtful, the team kind, and the results lasting.",
    name: "Erika M.",
    detail: "Patient since 2022",
    service: "acne-treatment",
    rating: 5,
  },
  {
    quote:
      "Dr. Cordoba is the only injector I trust. My friends ask what I'm 'doing' and I tell them — just feeling rested.",
    name: "Maya R.",
    detail: "Cosmetic patient",
    service: "botox",
    rating: 5,
  },
  {
    quote:
      "They found a melanoma at my screening that nobody else had noticed. I owe them everything.",
    name: "David K.",
    detail: "Skin cancer survivor",
    service: "skin-cancer-screening",
    rating: 5,
  },
  {
    quote:
      "The office is calm and beautiful, but more importantly the medicine is excellent. Every question is answered with care.",
    name: "Camille J.",
    detail: "Patient since 2019",
    rating: 5,
  },
  {
    quote:
      "My eczema is finally under control after a decade. I sleep through the night again.",
    name: "Thomas G.",
    detail: "Eczema patient",
    service: "eczema-treatment",
    rating: 5,
  },
  {
    quote:
      "Microneedling with PRP made a real difference in my acne scars — and they were honest about expectations the whole way through.",
    name: "Olivia P.",
    detail: "Cosmetic patient",
    service: "microneedling",
    rating: 5,
  },
  {
    quote:
      "I never feel rushed, and I never feel upsold. Hard to find in dermatology these days.",
    name: "Justin H.",
    detail: "Patient since 2021",
    rating: 5,
  },
  {
    quote:
      "My daughter's chronic rashes are finally diagnosed and managed. The whole team treated her wonderfully.",
    name: "Renee D.",
    detail: "Pediatric patient parent",
    service: "skin-allergy-treatment",
    rating: 5,
  },
];

export const getTestimonialsForService = (slug: string) =>
  testimonials.filter((t) => t.service === slug).slice(0, 3);
