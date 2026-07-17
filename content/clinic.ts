export const clinic = {
  name: "Lumen Dermatology",
  legalName: "Lumen Dermatology, PLLC",
  tagline: "Expert dermatology, beautifully delivered.",
  description:
    "Lumen Dermatology is a board-certified dermatology clinic in Austin, TX providing medical, surgical, and cosmetic care with a calm, modern, patient-first experience.",
  phone: "(512) 555-0142",
  phoneE164: "+15125550142",
  email: "hello@lumendermatology.example",
  address: {
    street: "2200 South Lamar Blvd, Suite 410",
    city: "Austin",
    region: "TX",
    postalCode: "78704",
    country: "US",
  },
  geo: { lat: 30.2546, lng: -97.7702 },
  hours: [
    { day: "Monday", open: "08:00", close: "18:00" },
    { day: "Tuesday", open: "08:00", close: "18:00" },
    { day: "Wednesday", open: "08:00", close: "18:00" },
    { day: "Thursday", open: "08:00", close: "18:00" },
    { day: "Friday", open: "08:00", close: "17:00" },
    { day: "Saturday", open: "09:00", close: "13:00" },
  ],
  socials: {
    instagram: "https://instagram.com/lumendermatology",
    facebook: "https://facebook.com/lumendermatology",
    google: "https://g.page/lumendermatology",
  },
  rating: { value: 4.9, count: 412 },
  founded: 2014,
  npi: "0000000000",
  stats: [
    { value: "10+", label: "Years serving Austin" },
    { value: "12k+", label: "Patients cared for" },
    { value: "98%", label: "Patient satisfaction" },
    { value: "100%", label: "Board-certified MDs" },
  ],
  credentials: [
    "Board-Certified · American Board of Dermatology",
    "Fellows of the American Academy of Dermatology",
    "Austin Top Doctor 2019–2025",
    "American Society for Dermatologic Surgery",
  ],
} as const;

export const fullAddress = () =>
  `${clinic.address.street}, ${clinic.address.city}, ${clinic.address.region} ${clinic.address.postalCode}`;
