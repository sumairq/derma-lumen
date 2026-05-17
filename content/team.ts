export type Provider = {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  specialties: string[];
  bio: string[];
  education: string[];
  image: string; // path under /images/team/
};

export const team: Provider[] = [
  {
    slug: "ana-cordoba-md",
    name: "Ana Cordoba, MD",
    credentials: "MD, FAAD",
    title: "Founder & Medical Director",
    specialties: ["Medical Dermatology", "Skin Cancer", "Cosmetic Dermatology"],
    bio: [
      "Dr. Ana Cordoba founded Lumen Dermatology to provide the kind of unhurried, individualized care she felt was missing in modern practice. She is board-certified by the American Board of Dermatology and a Fellow of the American Academy of Dermatology.",
      "Her clinical focus is the diagnosis and treatment of complex inflammatory skin disease, skin cancer surgery, and refined cosmetic dermatology. She has trained over 40 dermatology residents and lectures nationally on cosmetic injection technique.",
    ],
    education: [
      "MD, Yale School of Medicine",
      "Dermatology Residency, UT Southwestern (Chief Resident)",
      "Fellowship in Cosmetic Dermatology, Skin Laser & Surgery Specialists (NYC)",
    ],
    image: "/images/team/ana-cordoba.jpg",
  },
  {
    slug: "marcus-hale-md",
    name: "Marcus Hale, MD",
    credentials: "MD, FAAD",
    title: "Dermatologist",
    specialties: ["Medical Dermatology", "Pediatric Dermatology", "Acne", "Eczema"],
    bio: [
      "Dr. Marcus Hale brings a patient-centered approach to chronic skin conditions, with particular interest in atopic dermatitis, psoriasis, and adolescent acne. He has been recognized as an Austin Top Doctor every year since 2019.",
      "He sees patients of all ages and runs Lumen's biologics program for psoriasis and atopic dermatitis.",
    ],
    education: [
      "MD, Baylor College of Medicine",
      "Dermatology Residency, Mayo Clinic Rochester",
    ],
    image: "/images/team/marcus-hale.jpg",
  },
  {
    slug: "priya-shah-pa-c",
    name: "Priya Shah, PA-C",
    credentials: "PA-C, MMS",
    title: "Physician Assistant",
    specialties: ["Medical Dermatology", "Acne", "Cosmetic Injections"],
    bio: [
      "Priya is a board-certified physician assistant with eight years of dermatology experience. She specializes in adolescent and adult acne care and partners with patients on long-term skin health.",
    ],
    education: [
      "MMS, UT Southwestern",
      "Postgraduate Dermatology Fellowship, SDPA",
    ],
    image: "/images/team/priya-shah.jpg",
  },
];

export const getProvider = (slug: string) => team.find((p) => p.slug === slug);
