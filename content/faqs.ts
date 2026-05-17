export type FAQ = { q: string; a: string };

export const generalFaqs: FAQ[] = [
  {
    q: "Are you accepting new patients?",
    a: "Yes — we welcome new patients of all ages. Most new appointments are available within 2–3 weeks.",
  },
  {
    q: "Do you accept insurance?",
    a: "We accept most major insurance plans for medical dermatology visits including Aetna, Blue Cross Blue Shield, Cigna, Humana, and UnitedHealthcare. Cosmetic services are self-pay.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can call (512) 555-0142 or use the contact form on this site. New patient intake forms can be completed online before your visit.",
  },
  {
    q: "Do you treat children?",
    a: "Yes — we see pediatric patients for medical dermatology including eczema, warts, molluscum, and birthmarks.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "Plan for 45–60 minutes for your first visit. You'll meet your dermatologist, discuss your skin concerns, and leave with a written care plan.",
  },
  {
    q: "Do you offer telehealth visits?",
    a: "Yes — for established patients with conditions appropriate for virtual follow-up. New patients are seen in person to establish baseline.",
  },
  {
    q: "Where are you located?",
    a: "We're in South Austin at 2200 South Lamar Blvd, Suite 410. Free parking is available in the attached garage.",
  },
  {
    q: "What's the difference between medical and cosmetic dermatology?",
    a: "Medical dermatology addresses health concerns of the skin, hair, and nails (acne, eczema, skin cancer, etc.) and is typically insurance-covered. Cosmetic dermatology improves appearance (Botox, fillers, laser) and is self-pay.",
  },
  {
    q: "How do I prepare for my visit?",
    a: "Come with clean skin (no makeup if possible), a list of your current medications, and any photos of past skin issues you'd like to discuss.",
  },
  {
    q: "Do you offer financing for cosmetic procedures?",
    a: "Yes — we accept CareCredit and offer in-house payment plans for treatment packages over $1,500.",
  },
];

export const faqsByTopic: Record<string, FAQ[]> = {
  general: generalFaqs,
};
