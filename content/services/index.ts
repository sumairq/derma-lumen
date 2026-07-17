import type { Service } from "./_types";

const services: Service[] = [
  // ───────────────────────────── Medical Dermatology ─────────────────────────────
  {
    slug: "acne-treatment",
    category: "medical",
    title: "Acne Treatment",
    h1: "Personalized Acne Treatment in Austin",
    metaTitle: "Acne Treatment in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Board-certified acne treatment in Austin: prescription topicals, oral therapy, laser, peels, and Accutane management — clear-skin care personalized to you.",
    keywords: [
      "acne treatment Austin",
      "dermatologist for acne",
      "adult acne",
      "cystic acne treatment",
      "Accutane Austin",
    ],
    shortDescription:
      "Evidence-based treatment for teen, adult, and hormonal acne — from topicals to in-office procedures.",
    intro: [
      "Acne is the most common skin concern we treat, and no two cases are alike. Our dermatologists design personalized plans that target the cause — hormonal, inflammatory, comedonal, or cystic — not just the surface.",
      "From medical-grade topicals and oral therapy to in-office extractions, chemical peels, and laser, we layer the right tools to clear active breakouts and prevent scarring.",
    ],
    concerns: [
      "Inflammatory acne",
      "Cystic & nodular acne",
      "Hormonal & adult acne",
      "Comedonal (blackheads & whiteheads)",
      "Back & body acne",
      "Acne scars & post-inflammatory marks",
    ],
    benefits: [
      {
        title: "Personalized protocols",
        description:
          "Plans tailored to your skin type, hormones, lifestyle, and goals — not a one-size template.",
      },
      {
        title: "Full prescription access",
        description:
          "Topicals, oral antibiotics, hormonal therapy, and Accutane management when appropriate.",
      },
      {
        title: "Scar prevention first",
        description:
          "We treat aggressively early to prevent the permanent scarring acne can cause.",
      },
      {
        title: "In-office acceleration",
        description:
          "Extractions, peels, and laser to speed clearance and improve texture alongside your routine.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Skin evaluation",
        description:
          "A board-certified dermatologist examines your skin, reviews triggers, and identifies the acne type driving your breakouts.",
      },
      {
        step: "02",
        title: "Custom plan",
        description:
          "We build a layered routine — prescription products + lifestyle + in-office adjuncts — designed to clear and maintain.",
      },
      {
        step: "03",
        title: "Active clearance",
        description:
          "Most patients see meaningful improvement within 6–12 weeks, with continued progress at follow-ups.",
      },
      {
        step: "04",
        title: "Maintenance",
        description:
          "Once clear, we taper to a sustainable maintenance plan that keeps acne — and scarring — from returning.",
      },
    ],
    expectations: {
      duration: "30–45 min initial visit",
      downtime: "None for most therapies",
      results: "Visible improvement in 6–12 weeks",
      sessions: "Ongoing follow-ups every 6–12 weeks",
      priceRange: "Most visits covered by insurance",
    },
    faqs: [
      {
        q: "How long until I see results?",
        a: "Most patients notice improvement by 6–8 weeks, with meaningful clearance by 12 weeks. Cystic and hormonal acne may take longer to fully resolve.",
      },
      {
        q: "Do you prescribe Accutane (isotretinoin)?",
        a: "Yes — we offer full iPLEDGE-compliant isotretinoin management for severe, scarring, or treatment-resistant acne.",
      },
      {
        q: "Is acne treatment covered by insurance?",
        a: "Medical acne visits are typically covered. Cosmetic add-ons (peels, laser for scarring) are usually self-pay.",
      },
      {
        q: "Can you help with acne scars too?",
        a: "Yes — once active acne is controlled, we offer microneedling, laser resurfacing, and subcision for atrophic scars.",
      },
    ],
    related: ["scar-treatment", "chemical-peels", "microneedling"],
    hero: { eyebrow: "Medical Dermatology" },
  },
  {
    slug: "eczema-treatment",
    category: "medical",
    title: "Eczema Treatment",
    h1: "Eczema & Atopic Dermatitis Care",
    metaTitle: "Eczema Treatment in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Calm chronic eczema with expert dermatology care — barrier repair, prescription therapy, biologics, and lifestyle plans for lasting relief.",
    keywords: ["eczema treatment", "atopic dermatitis", "Dupixent Austin", "dermatologist eczema"],
    shortDescription:
      "Modern eczema care — from barrier repair to biologics — for relief that lasts.",
    intro: [
      "Eczema is a chronic inflammatory condition that affects skin barrier function. Whether mild or severe, the right combination of trigger management, barrier repair, and targeted therapy can dramatically improve your quality of life.",
      "We treat infants through adults, including patients with moderate-to-severe disease who may benefit from systemic or biologic therapy like Dupixent.",
    ],
    concerns: [
      "Atopic dermatitis",
      "Contact dermatitis",
      "Dyshidrotic eczema",
      "Hand & foot eczema",
      "Nummular eczema",
      "Severe / refractory eczema",
    ],
    benefits: [
      { title: "Barrier-first strategy", description: "We restore your skin barrier before layering medications — fewer flares, less reliance on steroids." },
      { title: "Trigger identification", description: "We help you identify the foods, allergens, fabrics, and stressors that fuel your flares." },
      { title: "Biologics when needed", description: "For moderate-to-severe disease, we offer Dupixent and other modern systemic options." },
      { title: "Pediatric expertise", description: "Gentle, age-appropriate plans for infants and children." },
    ],
    process: [
      { step: "01", title: "Skin & history review", description: "We map your flare patterns, triggers, and prior treatments." },
      { step: "02", title: "Tiered plan", description: "Barrier basics + topicals for mild disease, advanced therapy for severe." },
      { step: "03", title: "Calm & control", description: "Most patients reach skin clearance in 4–12 weeks of consistent care." },
      { step: "04", title: "Long-term maintenance", description: "Proactive routines prevent flares and reduce future steroid need." },
    ],
    expectations: { duration: "30 min initial", downtime: "None", results: "Improvement in 2–6 weeks", sessions: "Periodic follow-ups", priceRange: "Insurance-covered" },
    faqs: [
      { q: "Is eczema curable?", a: "Eczema is chronic, but it can be controlled so well most patients are essentially clear and symptom-free with maintenance." },
      { q: "Are biologics safe?", a: "Modern biologics like Dupixent have strong safety records and have transformed care for moderate-to-severe eczema." },
      { q: "Do I have to avoid steroids?", a: "Not at all — topical steroids are safe and effective when used correctly. We teach you how to use them strategically." },
    ],
    related: ["psoriasis-treatment", "skin-allergy-treatment", "rosacea-treatment"],
    hero: { eyebrow: "Medical Dermatology" },
  },
  {
    slug: "psoriasis-treatment",
    category: "medical",
    title: "Psoriasis Treatment",
    h1: "Modern Psoriasis Treatment",
    metaTitle: "Psoriasis Treatment in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Clear plaque, scalp, and inverse psoriasis with biologics, phototherapy, and topical care from board-certified dermatologists.",
    keywords: ["psoriasis treatment", "biologics for psoriasis", "plaque psoriasis Austin"],
    shortDescription:
      "Comprehensive psoriasis care including modern biologics for moderate-to-severe disease.",
    intro: [
      "Psoriasis is an immune-driven condition that benefits enormously from modern targeted therapy. We treat every form — plaque, scalp, inverse, guttate, and pustular — across all severities.",
      "For moderate-to-severe disease, today's biologics deliver near-clear skin for the majority of patients with excellent safety profiles.",
    ],
    concerns: ["Plaque psoriasis", "Scalp psoriasis", "Inverse psoriasis", "Nail psoriasis", "Guttate psoriasis", "Psoriatic arthritis screening"],
    benefits: [
      { title: "Biologic access", description: "Authorization expertise and access to the full modern biologic toolkit." },
      { title: "Whole-patient view", description: "Screening for psoriatic arthritis, cardiovascular risk, and comorbidities." },
      { title: "Topical & light therapy", description: "Targeted phototherapy and prescription topicals for mild disease." },
      { title: "Insurance navigation", description: "Our team handles prior authorizations and copay assistance programs." },
    ],
    process: [
      { step: "01", title: "Severity assessment", description: "We map your psoriasis type, body surface area, and impact on quality of life." },
      { step: "02", title: "Treatment matching", description: "Topicals, light therapy, oral medications, or biologics — matched to your disease." },
      { step: "03", title: "Clearance", description: "Biologic patients often see near-clear skin within 12–16 weeks." },
      { step: "04", title: "Long-term care", description: "Routine monitoring keeps you in remission and screens for related conditions." },
    ],
    expectations: { duration: "30–45 min", downtime: "None", results: "Significant clearing in 12–16 weeks (biologics)", sessions: "Ongoing", priceRange: "Insurance-covered" },
    faqs: [
      { q: "Are biologics safe long-term?", a: "Yes — modern biologics have over a decade of real-world data showing excellent long-term safety." },
      { q: "Will my psoriasis come back if I stop?", a: "Most patients flare without ongoing therapy. We discuss long-term strategy at every visit." },
    ],
    related: ["eczema-treatment", "hair-loss-treatment", "skin-allergy-treatment"],
    hero: { eyebrow: "Medical Dermatology" },
  },
  {
    slug: "rosacea-treatment",
    category: "medical",
    title: "Rosacea Treatment",
    h1: "Rosacea Treatment That Actually Works",
    metaTitle: "Rosacea Treatment in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Calm redness, flushing, and bumps with personalized rosacea care — prescription therapy, laser, and trigger management.",
    keywords: ["rosacea treatment Austin", "rosacea laser", "facial redness dermatologist"],
    shortDescription: "Reduce redness, bumps, and flushing with prescription therapy and vascular laser.",
    intro: [
      "Rosacea is one of the most underdiagnosed skin conditions. We combine prescription topicals, anti-inflammatory oral therapy, and vascular laser to calm visible vessels and inflammation — restoring the skin you remember.",
      "Equally important, we teach you how to identify and manage triggers so flares become rare events instead of daily reality.",
    ],
    concerns: ["Persistent facial redness", "Visible vessels (telangiectasias)", "Acne-like bumps", "Flushing & sensitivity", "Ocular rosacea", "Rhinophyma"],
    benefits: [
      { title: "Vascular laser available", description: "We treat broken capillaries and persistent redness with proven laser technology." },
      { title: "Trigger coaching", description: "We help you map and manage your unique trigger pattern." },
      { title: "Sensitive-skin protocols", description: "Every product recommendation is matched to your tolerance, not generic." },
      { title: "Ocular screening", description: "We refer for ocular rosacea — a commonly missed component." },
    ],
    process: [
      { step: "01", title: "Subtype diagnosis", description: "We identify your rosacea subtype to target the right therapy." },
      { step: "02", title: "Calm the inflammation", description: "Prescription topicals and oral therapy reduce papules and redness in 6–8 weeks." },
      { step: "03", title: "Vascular treatment", description: "Laser sessions target persistent redness and visible vessels." },
      { step: "04", title: "Maintain", description: "A simple maintenance routine keeps your skin calm long-term." },
    ],
    expectations: { duration: "30 min", downtime: "Minimal (laser: 1–2 days)", results: "Visible in 6–8 weeks", sessions: "2–4 laser sessions typical" },
    faqs: [
      { q: "Can rosacea be cured?", a: "Rosacea is chronic but extremely manageable — most patients reach near-clear skin with the right combination of therapy." },
      { q: "Does laser hurt?", a: "Most patients describe it as a quick rubber-band snap. Topical numbing is available on request." },
    ],
    related: ["laser-skin-resurfacing", "skin-allergy-treatment", "hyperpigmentation-treatment"],
    hero: { eyebrow: "Medical Dermatology" },
  },
  {
    slug: "skin-allergy-treatment",
    category: "medical",
    title: "Skin Allergy Treatment",
    h1: "Allergic & Contact Dermatitis Care",
    metaTitle: "Skin Allergy & Patch Testing in Austin | Lumen",
    metaDescription:
      "Identify and treat skin allergies with comprehensive patch testing and personalized care from board-certified dermatologists.",
    keywords: ["skin allergy dermatologist", "patch testing Austin", "contact dermatitis"],
    shortDescription: "Patch testing and expert care for contact and allergic skin reactions.",
    intro: [
      "Mysterious rashes are often allergic contact reactions to ingredients hidden in everyday products. We offer comprehensive patch testing to identify the exact culprits behind your skin.",
      "Once allergens are identified, we provide a personalized avoidance list and the prescription tools to calm your skin while it heals.",
    ],
    concerns: ["Contact dermatitis", "Hand eczema", "Cosmetic allergies", "Metal & jewelry sensitivity", "Fragrance & preservative allergy", "Occupational dermatitis"],
    benefits: [
      { title: "Comprehensive patch testing", description: "Test against 80+ standard allergens to identify your specific triggers." },
      { title: "Personalized safe lists", description: "We give you a curated product database matched to your allergies." },
      { title: "Workplace guidance", description: "For occupational dermatitis, we help with documentation and PPE strategy." },
      { title: "Fast relief", description: "Targeted prescription therapy calms acute flares quickly." },
    ],
    process: [
      { step: "01", title: "Evaluation", description: "We map your rash pattern, exposures, and prior product history." },
      { step: "02", title: "Patch testing", description: "Allergens applied over 48 hours; readings at day 2 and day 5." },
      { step: "03", title: "Safe-product plan", description: "A personalized avoidance list and product recommendations." },
      { step: "04", title: "Healing", description: "Prescription therapy clears the rash while you transition products." },
    ],
    expectations: { duration: "3 visits over ~1 week (patch test)", downtime: "None", results: "Allergen ID at day 5", sessions: "Single test cycle" },
    faqs: [
      { q: "Is patch testing painful?", a: "No — it's painless. Patches feel like adhesive bandages." },
      { q: "How accurate is patch testing?", a: "Highly accurate when interpreted by a trained dermatologist familiar with cross-reactions and false positives." },
    ],
    related: ["eczema-treatment", "rosacea-treatment", "skin-infection-treatment"],
    hero: { eyebrow: "Medical Dermatology" },
  },
  {
    slug: "skin-infection-treatment",
    category: "medical",
    title: "Skin Infection Treatment",
    h1: "Bacterial, Fungal & Viral Skin Infections",
    metaTitle: "Skin Infection Treatment in Austin | Lumen Dermatology",
    metaDescription:
      "Expert diagnosis and treatment of bacterial, fungal, and viral skin infections — same-week appointments available.",
    keywords: ["skin infection treatment", "MRSA dermatologist", "fungal infection Austin"],
    shortDescription: "Fast, accurate diagnosis and treatment for skin and nail infections.",
    intro: [
      "Skin infections need expert eyes — many look alike but require very different treatments. We diagnose precisely, treat targeted, and follow up to ensure resolution.",
      "Our office can perform same-visit cultures, KOH preparations, and minor procedures to drain or biopsy when needed.",
    ],
    concerns: ["Cellulitis & impetigo", "MRSA & boils", "Fungal infections (ringworm, tinea)", "Nail fungus (onychomycosis)", "Shingles (herpes zoster)", "Warts & molluscum"],
    benefits: [
      { title: "Same-visit diagnostics", description: "Cultures, KOH, and biopsies done in-office for fast answers." },
      { title: "Targeted therapy", description: "Right drug, right duration — no guessing." },
      { title: "Minor procedures", description: "We drain abscesses and remove infected tissue in office when needed." },
      { title: "Prompt follow-up", description: "We track resolution and pivot quickly if needed." },
    ],
    process: [
      { step: "01", title: "Diagnosis", description: "Visual exam plus in-office diagnostics confirm the organism." },
      { step: "02", title: "Treatment", description: "Topical, oral, or procedural therapy matched to your infection." },
      { step: "03", title: "Drainage if needed", description: "Abscesses and boils are drained in office under local anesthesia." },
      { step: "04", title: "Recheck", description: "We confirm resolution and address contributing factors." },
    ],
    expectations: { duration: "30 min", downtime: "None for most", results: "Days to weeks depending on infection" },
    faqs: [
      { q: "Do I need antibiotics?", a: "Only for bacterial infections. We test before prescribing whenever possible to avoid unnecessary antibiotic use." },
      { q: "Is nail fungus treatable?", a: "Yes — oral antifungals have very high cure rates for confirmed nail fungus." },
    ],
    related: ["wart-removal", "skin-allergy-treatment", "mole-removal"],
    hero: { eyebrow: "Medical Dermatology" },
  },
  {
    slug: "skin-cancer-screening",
    category: "skin-cancer",
    title: "Skin Cancer Screening",
    h1: "Full-Body Skin Cancer Screening",
    metaTitle: "Skin Cancer Screening in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Comprehensive skin cancer screening with board-certified dermatologists — head-to-toe exam, dermoscopy, and same-day biopsies if needed.",
    keywords: ["skin cancer screening Austin", "full body skin exam", "melanoma screening", "dermatologist skin check"],
    shortDescription: "Comprehensive, head-to-toe skin exams with dermoscopy. Early detection saves lives.",
    intro: [
      "Austin's sun is unforgiving, and Texans face among the highest skin cancer rates in the country. A yearly full-body skin exam is the single most effective way to catch melanoma and other skin cancers early — when they're curable.",
      "Our dermatologists use dermoscopy (lighted magnification) to evaluate every concerning lesion, and we biopsy on the same visit when needed for prompt answers.",
    ],
    concerns: ["Suspicious moles", "Changing or new lesions", "Family history of melanoma", "High sun-exposure history", "Atypical mole syndrome", "Personal history of skin cancer"],
    benefits: [
      { title: "Board-certified eyes", description: "Every exam is performed by a dermatologist trained to recognize skin cancer." },
      { title: "Dermoscopy on every visit", description: "Magnified, polarized imaging dramatically improves detection of early melanoma." },
      { title: "Same-visit biopsies", description: "If we find something, we biopsy on the spot — no second appointment." },
      { title: "Photo tracking", description: "For atypical mole patients, we document baseline imagery for future comparison." },
    ],
    process: [
      { step: "01", title: "Full-body exam", description: "Head-to-toe inspection in a comfortable, private setting with a chaperone available." },
      { step: "02", title: "Dermoscopy", description: "Suspicious lesions are evaluated with dermoscopy for pattern analysis." },
      { step: "03", title: "Biopsy (if needed)", description: "Lesions of concern are biopsied that visit under local anesthesia — typically 5–10 minutes." },
      { step: "04", title: "Results & plan", description: "Pathology results return in 5–7 days with a clear next-step plan." },
    ],
    expectations: { duration: "20–30 min", downtime: "None", results: "Biopsy results in 5–7 days", sessions: "Annually for most patients", priceRange: "Insurance-covered" },
    faqs: [
      { q: "How often should I be screened?", a: "Most adults benefit from yearly screening. Higher-risk patients (atypical moles, prior skin cancer, family history) may need every 3–6 months." },
      { q: "What should I wear?", a: "We provide a gown. We examine all skin including scalp, between fingers and toes, and (with consent) the genital area." },
      { q: "Does insurance cover screening?", a: "Yes — full-body skin exams for medical concern are typically covered by insurance." },
    ],
    related: ["mole-removal", "wart-removal", "anti-aging-treatment"],
    hero: { eyebrow: "Skin Cancer & Surgery" },
  },
  {
    slug: "mole-removal",
    category: "skin-cancer",
    title: "Mole Removal",
    h1: "Safe, Precise Mole Removal",
    metaTitle: "Mole Removal in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Expert mole removal — surgical excision, shave removal, and biopsy by board-certified dermatologists with minimal scarring.",
    keywords: ["mole removal Austin", "skin tag removal", "atypical mole removal"],
    shortDescription: "Surgical and shave mole removal with minimal scarring, performed by dermatologists.",
    intro: [
      "Whether a mole is concerning, irritating, or simply unwanted, we remove it the right way — with full pathology evaluation to rule out cancer and meticulous technique to minimize scarring.",
      "We use shave removal for raised, benign-appearing lesions and full surgical excision for any lesion concerning for skin cancer or that requires complete deep removal.",
    ],
    concerns: ["Atypical or changing moles", "Cosmetically bothersome moles", "Recurring irritation from clothing", "Skin tags", "Sebaceous hyperplasia", "Dermatofibromas"],
    benefits: [
      { title: "Pathology on every removal", description: "Every removed lesion goes to dermatopathology — we never assume." },
      { title: "Cosmetic outcomes", description: "Technique tuned to leave the smallest possible scar on facial and exposed areas." },
      { title: "Same-day procedures", description: "Most removals are performed at the visit where they're discussed." },
      { title: "Insurance navigation", description: "Medically necessary removals are usually covered." },
    ],
    process: [
      { step: "01", title: "Evaluation", description: "We assess the lesion, discuss risks, and recommend the right removal technique." },
      { step: "02", title: "Numbing", description: "Local anesthetic — you'll feel a pinch and then nothing." },
      { step: "03", title: "Removal", description: "Shave or excision based on the lesion. Typically 10–20 minutes." },
      { step: "04", title: "Pathology & follow-up", description: "Results in 5–7 days. We discuss any next steps." },
    ],
    expectations: { duration: "20–30 min", downtime: "Minimal", results: "Healed in 1–2 weeks", sessions: "Single visit usually" },
    faqs: [
      { q: "Will it scar?", a: "All removals leave some mark, but we use techniques designed to minimize visible scarring." },
      { q: "Will my insurance cover it?", a: "Yes for medically necessary removals (atypical or symptomatic). Purely cosmetic removals are typically self-pay." },
    ],
    related: ["skin-cancer-screening", "wart-removal", "scar-treatment"],
    hero: { eyebrow: "Skin Cancer & Surgery" },
  },
  {
    slug: "wart-removal",
    category: "medical",
    title: "Wart Removal",
    h1: "Effective Wart Removal",
    metaTitle: "Wart Removal in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Treat stubborn warts with proven dermatology methods — cryotherapy, immunotherapy, laser, and surgical removal.",
    keywords: ["wart removal Austin", "plantar wart", "verruca", "cryotherapy warts"],
    shortDescription: "Cryotherapy, immunotherapy, and surgical wart removal for stubborn cases.",
    intro: [
      "Warts are viral, and stubborn ones need expert care. We use a layered approach — cryotherapy, immunotherapy, topical agents, and when needed, laser or surgical removal — to clear warts that haven't responded to over-the-counter treatments.",
      "Our team has particular experience with stubborn plantar warts and warts in cosmetically sensitive areas like the face and hands.",
    ],
    concerns: ["Common warts", "Plantar warts", "Flat warts", "Genital warts", "Periungual warts (around nails)", "Resistant or recurrent warts"],
    benefits: [
      { title: "Full toolkit", description: "Cryotherapy, immunotherapy (Candida antigen), bleomycin, and surgical options." },
      { title: "Pediatric-friendly", description: "Gentle methods appropriate for children and anxious patients." },
      { title: "Cosmetic precision", description: "Targeted techniques for facial and hand warts to minimize marks." },
      { title: "Clear pricing", description: "Wart removal is straightforward — we'll tell you exactly what to expect." },
    ],
    process: [
      { step: "01", title: "Assessment", description: "We confirm it's a wart (not a corn, callus, or skin cancer) and choose the right approach." },
      { step: "02", title: "Treatment", description: "Most warts respond to in-office cryotherapy or immunotherapy injections." },
      { step: "03", title: "Repeat as needed", description: "Stubborn warts often need 2–4 sessions spaced 2–3 weeks apart." },
      { step: "04", title: "Resolution", description: "Once cleared, we discuss prevention strategies." },
    ],
    expectations: { duration: "15 min", downtime: "Mild discomfort 1–3 days", results: "Resolution in 2–4 sessions typical", sessions: "Multiple visits common" },
    faqs: [
      { q: "Is freezing painful?", a: "There's a brief burning sensation during freezing and some soreness for a day or two after." },
      { q: "Will my warts come back?", a: "Some warts recur; we'll discuss prevention and treat any recurrences promptly." },
    ],
    related: ["mole-removal", "skin-infection-treatment", "skin-cancer-screening"],
    hero: { eyebrow: "Medical Dermatology" },
  },
  {
    slug: "hair-loss-treatment",
    category: "medical",
    title: "Hair Loss Treatment",
    h1: "Hair Loss Diagnosis & Treatment",
    metaTitle: "Hair Loss Treatment in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Expert dermatology care for thinning hair — PRP, prescription therapy, supplements, and personalized restoration plans.",
    keywords: ["hair loss dermatologist", "PRP hair loss Austin", "alopecia treatment"],
    shortDescription: "PRP, prescription therapy, and personalized plans for thinning hair.",
    intro: [
      "Hair loss is rarely just one thing — genetics, hormones, nutrition, stress, and autoimmune conditions can all contribute. Our dermatologists diagnose the cause first, then build a multi-modal plan to slow, stop, and often reverse hair loss.",
      "We offer the modern toolkit: topical and oral minoxidil, finasteride, dutasteride, spironolactone, low-level laser therapy, PRP injections, and nutritional optimization.",
    ],
    concerns: ["Male & female pattern hair loss", "Telogen effluvium (shedding)", "Alopecia areata", "Scarring alopecia", "Post-menopausal thinning", "Beard & eyebrow loss"],
    benefits: [
      { title: "Diagnostic clarity", description: "Trichoscopy and lab work to identify the real driver behind your loss." },
      { title: "Modern medications", description: "Prescription therapy is the backbone of effective hair preservation." },
      { title: "PRP available", description: "Platelet-rich plasma injections to stimulate regrowth." },
      { title: "Realistic expectations", description: "We tell you what's possible — and what isn't — so you can decide what's worth doing." },
    ],
    process: [
      { step: "01", title: "Trichology consult", description: "Detailed history, scalp exam with trichoscopy, and targeted lab work." },
      { step: "02", title: "Personalized plan", description: "Topical, oral, in-office, and lifestyle interventions matched to your diagnosis." },
      { step: "03", title: "Begin treatment", description: "Most patients start seeing reduced shedding by 3 months and visible regrowth by 6–9 months." },
      { step: "04", title: "Optimize", description: "We adjust at follow-ups to maximize results and minimize side effects." },
    ],
    expectations: { duration: "45 min initial", downtime: "None", results: "Visible at 6–9 months", sessions: "Quarterly follow-ups" },
    faqs: [
      { q: "Does PRP work?", a: "Yes — for the right patients (early-stage androgenetic alopecia), PRP can produce meaningful improvement in density. It's most powerful when combined with medication." },
      { q: "Are hair loss medications safe?", a: "Modern hair loss medications have decades of safety data. We discuss risks honestly so you can make an informed choice." },
    ],
    related: ["scar-treatment", "anti-aging-treatment", "microneedling"],
    hero: { eyebrow: "Medical Dermatology" },
  },

  // ───────────────────────────── Cosmetic Dermatology ─────────────────────────────
  {
    slug: "botox",
    category: "cosmetic",
    title: "Botox & Neuromodulators",
    h1: "Botox in Austin — Natural-Looking Results",
    metaTitle: "Botox in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Natural-looking Botox by board-certified dermatologists — refined, undetectable results that move with you. Free consultations.",
    keywords: ["Botox Austin", "neuromodulator", "Dysport", "Daxxify", "forehead lines"],
    shortDescription: "Soften lines, lift expression — with placement designed by board-certified dermatologists.",
    intro: [
      "Botox done well looks like nothing — except a slightly more rested, slightly happier you. Done poorly, it looks frozen, heavy, or strange. The difference is the injector.",
      "Our dermatologists train residents and write the textbooks on cosmetic injection technique. We treat with restraint, precision, and a deep understanding of facial anatomy.",
    ],
    concerns: ["Forehead lines", "Crow's feet", "Frown lines (11s)", "Bunny lines", "Lip flip", "Jaw slimming (masseter)", "Neck bands (Nefertiti)", "Excessive sweating (hyperhidrosis)"],
    benefits: [
      { title: "Refined technique", description: "Dermatologist-led injections placed for natural movement, never frozen." },
      { title: "Multiple options", description: "Botox, Dysport, Xeomin, Daxxify — matched to your goals and timeline." },
      { title: "Consultations included", description: "We never push treatment. Honest assessments are free." },
      { title: "Touch-up policy", description: "Refinements within two weeks are included when we agree more is needed." },
    ],
    process: [
      { step: "01", title: "Consult & map", description: "We assess movement patterns, discuss goals, and map the exact placement plan." },
      { step: "02", title: "Inject", description: "Tiny needles, minimal discomfort. Most appointments take 10–15 minutes." },
      { step: "03", title: "Onset", description: "Movement begins to soften at day 3–4. Full effect by day 14." },
      { step: "04", title: "Maintain", description: "Most patients return every 3–4 months for maintenance." },
    ],
    expectations: { duration: "15 min", downtime: "None", results: "Soften at 3–4 days, full at 2 weeks", sessions: "Every 3–4 months", priceRange: "$12–$16 per unit; typical treatment $200–$700" },
    faqs: [
      { q: "Will I look frozen?", a: "Not with our technique — we treat with restraint. The goal is softer, not still." },
      { q: "Is it painful?", a: "Minimally. Tiny needles produce a brief pinch at each injection point." },
      { q: "What's the difference between Botox and Dysport?", a: "They're cousins. Dysport sometimes works faster and spreads slightly more — useful in some areas. We'll recommend the right one for you." },
    ],
    related: ["dermal-fillers", "anti-aging-treatment", "microneedling"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
  {
    slug: "dermal-fillers",
    category: "cosmetic",
    title: "Dermal Fillers",
    h1: "Natural-Looking Dermal Fillers",
    metaTitle: "Dermal Fillers in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Restore volume and contour with hyaluronic acid fillers placed by board-certified dermatologists — never overdone.",
    keywords: ["dermal fillers Austin", "lip filler", "cheek filler", "Juvederm", "Restylane"],
    shortDescription: "Restore volume, contour, and definition with HA fillers placed for subtle, natural results.",
    intro: [
      "Filler can be transformative — or disastrous. The difference is in the assessment. Great filler work is about restoring proportion, not adding volume for its own sake.",
      "Our dermatologists offer the full Juvederm and Restylane lines, and we always start conservatively. We'd rather you come back for more than chase corrections.",
    ],
    concerns: ["Cheek volume loss", "Tear troughs (under-eye hollows)", "Smile lines (nasolabial folds)", "Marionette lines", "Lip definition & volume", "Chin and jawline contouring", "Temple hollows"],
    benefits: [
      { title: "Aesthetic dermatology training", description: "Injectors trained to balance facial proportion, not just fill lines." },
      { title: "Full HA product line", description: "Juvederm, Restylane, RHA, and Volux for the right product per area." },
      { title: "Reversible", description: "HA fillers can be dissolved if needed — a critical safety feature." },
      { title: "Honest assessments", description: "We'll tell you when filler isn't the right answer." },
    ],
    process: [
      { step: "01", title: "Facial analysis", description: "We assess proportion, volume, and movement before recommending anything." },
      { step: "02", title: "Plan & price", description: "We agree on the plan and exact cost before treatment begins." },
      { step: "03", title: "Injection", description: "Cannula or needle technique with topical numbing. Most appointments 30–45 minutes." },
      { step: "04", title: "Settle & review", description: "Final results visible at 2 weeks. Touch-ups available if needed." },
    ],
    expectations: { duration: "30–60 min", downtime: "Possible bruising/swelling 3–7 days", results: "Immediate, settles at 2 weeks", sessions: "Lasts 6–18 months", priceRange: "$650–$1,200 per syringe" },
    faqs: [
      { q: "How long does filler last?", a: "Most areas: 9–18 months. Lips: 6–9 months. Highly individual based on metabolism and area." },
      { q: "Can it be reversed?", a: "HA fillers can be dissolved with hyaluronidase if you don't like the result or need correction." },
      { q: "Will I bruise?", a: "Some patients bruise; we use cannulas where possible to minimize this." },
    ],
    related: ["botox", "anti-aging-treatment", "skin-tightening"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
  {
    slug: "chemical-peels",
    category: "cosmetic",
    title: "Chemical Peels",
    h1: "Medical-Grade Chemical Peels",
    metaTitle: "Chemical Peels in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Glycolic, salicylic, TCA, and Jessner peels by dermatologists — improve texture, tone, acne, and pigmentation.",
    keywords: ["chemical peel Austin", "TCA peel", "glycolic peel", "VI peel"],
    shortDescription: "Refresh texture, brighten tone, and clear breakouts with peels matched to your skin.",
    intro: [
      "Chemical peels remain one of the most effective tools in dermatology — improving texture, evening tone, fading sun damage, and clearing acne. The catch is matching the right peel to the right skin.",
      "Our dermatologists offer everything from gentle lunch-break peels to medical-grade TCA treatments. We'll recommend exactly what your skin needs to deliver the result you want.",
    ],
    concerns: ["Sun damage & pigmentation", "Melasma", "Acne & breakouts", "Fine lines", "Dull texture", "Post-acne marks", "Keratosis pilaris"],
    benefits: [
      { title: "Customized depth", description: "From superficial to medium peels — matched to your goals and downtime tolerance." },
      { title: "Safe across skin tones", description: "Peels tailored carefully for patients with deeper skin to avoid pigmentation issues." },
      { title: "Series pricing", description: "Discounted packages when you commit to a course of peels for maximum results." },
      { title: "Recovery support", description: "Detailed aftercare and check-ins to maximize results and minimize downtime." },
    ],
    process: [
      { step: "01", title: "Skin assessment", description: "We choose the right peel based on your concern, skin type, and downtime tolerance." },
      { step: "02", title: "Prep", description: "Skin is cleansed and prepped. We'll explain each sensation as it happens." },
      { step: "03", title: "Application", description: "The peel is applied and neutralized. Most appointments take 30–45 minutes." },
      { step: "04", title: "Recovery", description: "Light flaking for 3–7 days followed by visibly fresher skin." },
    ],
    expectations: { duration: "30–45 min", downtime: "3–7 days flaking (medium); minimal (light)", results: "Visible after first peel; best in a series", sessions: "Series of 3–6 typical", priceRange: "$175–$500 per session" },
    faqs: [
      { q: "How much does my skin peel?", a: "Light peels: subtle flaking. Medium peels: visible peeling days 3–6. Deep peels: we don't offer these — they belong in a surgical setting." },
      { q: "Can I get a peel during summer?", a: "Yes, with careful sun protection. We may adjust strength or recommend a winter timing for medium peels." },
    ],
    related: ["microneedling", "acne-treatment", "hyperpigmentation-treatment"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
  {
    slug: "microneedling",
    category: "cosmetic",
    title: "Microneedling & RF Microneedling",
    h1: "Microneedling & RF Microneedling",
    metaTitle: "Microneedling in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Microneedling with PRP and RF microneedling for texture, scars, pores, and lines — by board-certified dermatologists.",
    keywords: ["microneedling Austin", "RF microneedling", "Morpheus8", "microneedling PRP", "acne scars"],
    shortDescription: "Smooth texture, refine pores, and improve acne scars with microneedling.",
    intro: [
      "Microneedling triggers your skin's natural healing response to remodel collagen — improving texture, scars, pores, and tone over time. Add radiofrequency energy (RF microneedling) and you can also tighten skin and address deeper laxity.",
      "Our team offers traditional microneedling, microneedling with PRP, and RF microneedling — matching the right modality to your goals and skin.",
    ],
    concerns: ["Acne scars", "Surgical scars", "Texture & rough skin", "Large pores", "Fine lines & wrinkles", "Mild skin laxity (RF)", "Stretch marks"],
    benefits: [
      { title: "Multi-modal options", description: "Traditional, PRP-enhanced, and RF microneedling all under one roof." },
      { title: "Safe across skin tones", description: "Microneedling is one of the safest collagen treatments for deeper skin types." },
      { title: "Real downtime is minimal", description: "Most patients return to normal activities within 24–48 hours." },
      { title: "Compound results", description: "Effects build with each session — typical course is 3–6 treatments." },
    ],
    process: [
      { step: "01", title: "Numbing", description: "Topical anesthetic applied for 30 minutes to ensure comfort." },
      { step: "02", title: "Treatment", description: "Microneedling pen or RF device passes over the skin in a precise pattern." },
      { step: "03", title: "Soothing", description: "We finish with calming masks or PRP. Total appointment: 60–90 minutes." },
      { step: "04", title: "Healing", description: "Redness for 24–48 hours, gradual improvement over weeks." },
    ],
    expectations: { duration: "60–90 min", downtime: "24–48 hours redness", results: "Building results over 3–6 months", sessions: "3–6 sessions typical", priceRange: "$450–$1,200 per session" },
    faqs: [
      { q: "Is microneedling painful?", a: "With topical numbing, most patients describe it as tolerable — a tingling or scratchy sensation, not painful." },
      { q: "What's the difference between regular and RF microneedling?", a: "RF adds heat-based tightening, making it more powerful for laxity and deeper texture issues. It's also more expensive and has slightly more downtime." },
    ],
    related: ["chemical-peels", "scar-treatment", "skin-tightening"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
  {
    slug: "laser-skin-resurfacing",
    category: "cosmetic",
    title: "Laser Skin Resurfacing",
    h1: "Laser Skin Resurfacing",
    metaTitle: "Laser Skin Resurfacing in Austin | Lumen Dermatology",
    metaDescription:
      "Fractional, non-ablative, and ablative laser resurfacing — for sun damage, scars, lines, and tone by dermatology experts.",
    keywords: ["laser resurfacing Austin", "Fraxel", "CO2 laser", "laser for sun damage"],
    shortDescription: "Reverse sun damage, smooth scars, and refresh texture with fractional and ablative lasers.",
    intro: [
      "Lasers are the most powerful tools dermatology has for resurfacing skin — but they're also the most operator-dependent. Wrong device, wrong setting, wrong skin type, and the result can be worse than the starting point.",
      "We invest in a broad device portfolio precisely so we can match each patient to the safest, most effective laser — and we never push a treatment that isn't right for your skin.",
    ],
    concerns: ["Sun damage & age spots", "Acne scars & surgical scars", "Fine lines & wrinkles", "Texture irregularities", "Stretch marks", "Pigmentation"],
    benefits: [
      { title: "Multiple platforms", description: "Fractional non-ablative, fractional ablative, picosecond, and vascular lasers." },
      { title: "Dermatologist-operated", description: "Every laser session is performed by a dermatologist or physician-supervised provider." },
      { title: "Skin-type matched", description: "Settings adjusted carefully for darker skin types where appropriate." },
      { title: "Real conversations about downtime", description: "We tell you exactly what to expect — and how to plan around it." },
    ],
    process: [
      { step: "01", title: "Skin & goal review", description: "We review your concerns, history, and downtime tolerance before recommending a laser." },
      { step: "02", title: "Numbing & treatment", description: "Topical numbing followed by the laser session. Most treatments 30–60 minutes." },
      { step: "03", title: "Recovery", description: "Downtime ranges from 1 day (light fractional) to 7–10 days (ablative)." },
      { step: "04", title: "Results", description: "Skin progressively improves over 1–3 months as collagen remodels." },
    ],
    expectations: { duration: "30–60 min", downtime: "1–10 days based on laser", results: "Continued improvement at 1–3 months", sessions: "1–3 typical", priceRange: "$650–$3,000 per session" },
    faqs: [
      { q: "How much downtime should I plan?", a: "From 1 day for light fractional to 7–10 days for ablative resurfacing. We'll match the device to your schedule." },
      { q: "Can I get laser if I have darker skin?", a: "Yes, with the right device. Some lasers are safer for deeper skin tones than others — we'll choose accordingly." },
    ],
    related: ["microneedling", "scar-treatment", "anti-aging-treatment"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
  {
    slug: "skin-tightening",
    category: "cosmetic",
    title: "Skin Tightening",
    h1: "Non-Surgical Skin Tightening",
    metaTitle: "Skin Tightening in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Non-surgical skin tightening with RF, ultrasound, and microneedling RF — lift and firm without surgery.",
    keywords: ["skin tightening Austin", "Morpheus8", "Ultherapy", "non-surgical facelift"],
    shortDescription: "Lift, firm, and refine skin without surgery using RF and ultrasound technology.",
    intro: [
      "Non-surgical tightening has come a long way. Modern radiofrequency and ultrasound platforms can produce visible lifting and firming in the right candidate — without surgery, without scars, and with minimal downtime.",
      "We're honest about what these treatments can and can't do. They're best for mild-to-moderate laxity. Severe sagging is better addressed surgically.",
    ],
    concerns: ["Mild jowls & jawline laxity", "Neck looseness", "Crepey eyelid & under-eye skin", "Décolletage laxity", "Abdomen & arm laxity (Morpheus body)"],
    benefits: [
      { title: "Honest candidacy assessment", description: "We tell you whether tightening will give you the result you want — or whether surgery is a better fit." },
      { title: "Multiple modalities", description: "RF microneedling, RF, and focused ultrasound platforms." },
      { title: "Minimal downtime", description: "Most patients resume normal activities the same or next day." },
      { title: "Layered with other treatments", description: "Often combined with Botox, filler, and resurfacing for comprehensive rejuvenation." },
    ],
    process: [
      { step: "01", title: "Candidacy", description: "We assess your laxity, skin quality, and goals to determine the best technology." },
      { step: "02", title: "Numbing", description: "Topical or local anesthetic depending on the device and area." },
      { step: "03", title: "Treatment", description: "30–90 minute session depending on area and device." },
      { step: "04", title: "Progressive results", description: "Lifting and tightening builds over 3–6 months." },
    ],
    expectations: { duration: "30–90 min", downtime: "Minimal", results: "Builds over 3–6 months", sessions: "1–3 sessions typical", priceRange: "$1,200–$4,500 per area" },
    faqs: [
      { q: "Will it replace a facelift?", a: "No — tightening is best for mild-to-moderate laxity. Significant sagging usually still needs surgery for the result patients want." },
      { q: "When will I see results?", a: "Some immediate effect, with continued tightening over 3–6 months as collagen remodels." },
    ],
    related: ["microneedling", "dermal-fillers", "anti-aging-treatment"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
  {
    slug: "anti-aging-treatment",
    category: "cosmetic",
    title: "Anti-Aging Treatments",
    h1: "Personalized Anti-Aging Plans",
    metaTitle: "Anti-Aging Treatments in Austin | Lumen Dermatology",
    metaDescription:
      "Comprehensive anti-aging plans — prescription skincare, neuromodulators, fillers, lasers, and tightening — by board-certified dermatologists.",
    keywords: ["anti-aging treatment Austin", "dermatologist skincare", "facial rejuvenation"],
    shortDescription: "Multi-modal anti-aging plans that combine the best of medical, cosmetic, and skincare science.",
    intro: [
      "Aging skin needs a strategy, not a single treatment. The best results come from layered plans that combine prescription skincare, neuromodulators, filler when appropriate, resurfacing, and tightening.",
      "We build personalized 1-year and 5-year plans so each treatment compounds — and so you never feel pushed into something you don't need.",
    ],
    concerns: ["Fine lines & wrinkles", "Loss of volume & laxity", "Sun damage & pigmentation", "Dull texture", "Crepey neck & décolletage", "Skin thinning"],
    benefits: [
      { title: "Long-view planning", description: "We design 1- and 5-year plans, not single-treatment sales." },
      { title: "Prescription-led skincare", description: "Daily skincare doing real work — not just expensive marketing." },
      { title: "Right tool, right time", description: "We sequence treatments to maximize each one's contribution." },
      { title: "Restraint as expertise", description: "We measure success by how natural you look, not how much we treated." },
    ],
    process: [
      { step: "01", title: "Full-face assessment", description: "Anatomy, history, lifestyle, and goals reviewed in detail." },
      { step: "02", title: "Personalized roadmap", description: "A written plan of recommended treatments and timing — with no obligation." },
      { step: "03", title: "Execute", description: "Treatments delivered in the sequence that maximizes each one's effect." },
      { step: "04", title: "Maintain", description: "Annual reviews to adjust the plan as your skin and goals evolve." },
    ],
    expectations: { duration: "Varies by treatment", downtime: "Varies by treatment", results: "Cumulative — best at 6–12 months in" },
    faqs: [
      { q: "Where do I start?", a: "With a free consultation. We'll build a roadmap with you — and tell you what will move the needle most for your goals." },
      { q: "How much should I budget?", a: "It varies widely. We'll give you transparent pricing for every option so you can choose what fits your budget." },
    ],
    related: ["botox", "dermal-fillers", "laser-skin-resurfacing"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
  {
    slug: "hyperpigmentation-treatment",
    category: "cosmetic",
    title: "Hyperpigmentation Treatment",
    h1: "Even Skin Tone & Hyperpigmentation",
    metaTitle: "Hyperpigmentation & Melasma Treatment | Lumen Dermatology",
    metaDescription:
      "Treat melasma, sun spots, and post-inflammatory pigmentation safely across all skin types with dermatology-led plans.",
    keywords: ["hyperpigmentation treatment", "melasma Austin", "dark spots dermatologist"],
    shortDescription: "Targeted plans for melasma, sun spots, and post-inflammatory pigmentation — safe for all skin types.",
    intro: [
      "Hyperpigmentation requires patience, the right products, and the right professional treatments — applied in the right order. Quick fixes often make it worse.",
      "Our dermatologists develop multi-layer plans combining prescription topicals, peels, and (selectively) laser, with careful sun protection as the foundation.",
    ],
    concerns: ["Melasma", "Post-inflammatory hyperpigmentation", "Sun spots & solar lentigines", "Freckles", "Periorbital pigmentation", "Acne marks"],
    benefits: [
      { title: "All-skin-types expertise", description: "Plans designed carefully for deeper skin tones where lasers can backfire." },
      { title: "Prescription topicals", description: "Hydroquinone, tranexamic acid, retinoids, and customized compounds." },
      { title: "Strategic procedures", description: "Peels and selective laser when they'll help — never when they'll harm." },
      { title: "Photoprotection plan", description: "We'll find sunscreen that you'll actually wear daily." },
    ],
    process: [
      { step: "01", title: "Diagnosis", description: "Pigmentation type, depth, and triggers identified." },
      { step: "02", title: "Topical foundation", description: "Prescription routine plus daily SPF establishes the baseline." },
      { step: "03", title: "Procedures (selective)", description: "Peels or laser added only when appropriate for your skin type." },
      { step: "04", title: "Maintain", description: "Long-term maintenance protocols to prevent recurrence." },
    ],
    expectations: { duration: "30 min consult", downtime: "Minimal", results: "Visible in 8–16 weeks", sessions: "Ongoing for melasma" },
    faqs: [
      { q: "Is melasma curable?", a: "Melasma is chronic and recurrent, but it can be controlled to the point of being invisible most of the time with the right routine." },
      { q: "Can I use lasers for dark spots if I have deeper skin?", a: "Some lasers — like picosecond — are safer for deeper skin tones than others. We choose carefully and may prioritize topical and peel-based approaches." },
    ],
    related: ["chemical-peels", "laser-skin-resurfacing", "anti-aging-treatment"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
  {
    slug: "scar-treatment",
    category: "cosmetic",
    title: "Scar Treatment",
    h1: "Acne Scar & Surgical Scar Treatment",
    metaTitle: "Scar Treatment in Austin, TX | Lumen Dermatology",
    metaDescription:
      "Reduce acne scars, surgical scars, and keloids with subcision, laser, microneedling, and steroid injections.",
    keywords: ["acne scar treatment Austin", "scar revision", "keloid treatment", "subcision"],
    shortDescription: "Smooth acne scars, surgical scars, and keloids with a tailored, multi-modal approach.",
    intro: [
      "Scars require strategy — different scar types respond to different treatments, and the best results combine multiple modalities over time.",
      "We treat atrophic acne scars, hypertrophic scars, keloids, and surgical scars using subcision, fractional laser, microneedling, TCA CROSS, fillers, and steroid injections — chosen and sequenced based on your scar type.",
    ],
    concerns: ["Atrophic acne scars (rolling, boxcar, ice pick)", "Hypertrophic scars", "Keloids", "Surgical scars", "Stretch marks", "Burn scars"],
    benefits: [
      { title: "Multi-modal expertise", description: "We layer treatments because no single tool handles every scar type." },
      { title: "Realistic expectations", description: "We tell you what's achievable so you can decide what's worth doing." },
      { title: "Combined visits", description: "We often combine subcision + laser + filler in a single visit for efficiency." },
      { title: "Keloid expertise", description: "Steroid injection protocols for stubborn raised scars." },
    ],
    process: [
      { step: "01", title: "Scar mapping", description: "Each scar is categorized — different types need different tools." },
      { step: "02", title: "Multi-modal plan", description: "Subcision, laser, microneedling, peels, or injections in a specific sequence." },
      { step: "03", title: "Treat", description: "Multiple visits spaced 4–8 weeks apart for layered improvement." },
      { step: "04", title: "Refine", description: "Final touch-ups and maintenance once primary improvement is achieved." },
    ],
    expectations: { duration: "30–60 min", downtime: "Varies by procedure", results: "Progressive over months", sessions: "Multi-session plans typical" },
    faqs: [
      { q: "Can scars be erased completely?", a: "No — scars can be dramatically improved but never erased. Setting realistic expectations is part of our process." },
      { q: "How many sessions will I need?", a: "Most patients see major improvement after 3–5 sessions, but deep ice-pick scars may need more." },
    ],
    related: ["microneedling", "laser-skin-resurfacing", "acne-treatment"],
    hero: { eyebrow: "Cosmetic Dermatology" },
  },
];

export default services;

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export const allServiceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return servicesBySlug[slug];
}

export function getServicesByCategory(cat: Service["category"]) {
  return services.filter((s) => s.category === cat);
}

export function getRelatedServices(slug: string) {
  const svc = servicesBySlug[slug];
  if (!svc) return [];
  return svc.related
    .map((s) => servicesBySlug[s])
    .filter((s): s is Service => Boolean(s));
}

export const SERVICE_CATEGORIES = {
  medical: {
    title: "Medical Dermatology",
    description:
      "Diagnose and treat skin, hair, and nail conditions with board-certified care.",
  },
  cosmetic: {
    title: "Cosmetic Dermatology",
    description:
      "Refined cosmetic treatments that enhance your appearance without ever looking overdone.",
  },
  "skin-cancer": {
    title: "Skin Cancer & Surgery",
    description:
      "Annual screenings, mole removal, and skin cancer treatment by experienced dermatologists.",
  },
} as const;

/**
 * Compact "from" price tag for treatment cards, derived from the fuller
 * `expectations.priceRange` copy. Non-dollar ranges (insurance language)
 * pass through unchanged.
 */
export function getPriceTag(service: Service): string | null {
  const range = service.expectations.priceRange;
  if (!range) return null;
  const amount = range.match(/\$[\d,]+/);
  if (!amount) return range;
  const unit = range.includes("per unit")
    ? "/unit"
    : range.includes("per syringe")
      ? "/syringe"
      : range.includes("per session")
        ? "/session"
        : range.includes("per area")
          ? "/area"
          : "";
  return `From ${amount[0]}${unit}`;
}
