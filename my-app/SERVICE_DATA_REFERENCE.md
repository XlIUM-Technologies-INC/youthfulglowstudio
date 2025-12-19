# Service Data Structure Reference

## Complete Service Object Example

```typescript
{
  // ✅ BASIC INFO (shown on home & services list)
  slug: "facial-massage",                    // URL identifier
  title: "Facial Massage",                   // Service name
  short: "Relaxing facial massage...",       // One-liner for cards
  description: "A deeply relaxing...",       // Paragraph for list
  image: "https://...",                      // Card image
  price: "$80",                              // Service cost
  duration: "45 minutes",                    // Service length
  benefits: ["Improves circulation", ...],   // 3 quick benefits

  // ✅ NEW - DETAIL PAGE CONTENT
  fullDescription: "A deeply relaxing facial massage that improves...",
  // Full 300+ word description for the detail page overview

  detailedBenefits: [
    "Increases blood circulation to facial skin",
    "Promotes natural collagen production",
    "Reduces puffiness and facial tension",
    "Improves skin elasticity and firmness",
    "Enhances product absorption",
    "Releases facial and neck tension",
    "Promotes lymphatic drainage for detoxification",
    "Gives an instant radiant glow",
    "Reduces appearance of fine lines",
    "Deeply relaxing and stress-relieving"
  ],
  // 10+ detailed benefits shown in benefits grid

  process: [
    {
      step: 1,
      title: "Cleansing",
      description: "We start with a gentle cleanser..."
    },
    {
      step: 2,
      title: "Warm-up",
      description: "Application of a luxurious massage oil..."
    },
    {
      step: 3,
      title: "Massage",
      description: "Expert hand techniques focusing on face..."
    },
    {
      step: 4,
      title: "Serums & Masks",
      description: "Application of hydrating serums..."
    },
    {
      step: 5,
      title: "Cooling & Finishing",
      description: "Cool jade roller treatment..."
    }
  ],
  // 5-step process shown in visual workflow

  faqs: [
    {
      question: "Is facial massage safe for sensitive skin?",
      answer: "Yes! We use gentle techniques and can customize..."
    },
    {
      question: "How often should I get a facial massage?",
      answer: "For best results, we recommend monthly treatments..."
    },
    {
      question: "Will I see immediate results?",
      answer: "Absolutely! You'll notice improvements in glow..."
    },
    {
      question: "Can I wear makeup after?",
      answer: "We recommend waiting 2-3 hours before applying..."
    }
  ],
  // 4 FAQ pairs shown in accordion format

  aftercare: "Avoid sun exposure for 24 hours. Stay hydrated and use a gentle cleanser. Apply moisturizer morning and night. Avoid exfoliants for 48 hours.",
  // Aftercare instructions in dedicated section

  ingredients: [
    "Hyaluronic Acid",
    "Vitamin C",
    "Rose Hip Oil",
    "Aloe Vera",
    "Green Tea Extract"
  ],
  // Premium ingredients displayed

  testimonials: [
    {
      name: "Sarah M.",
      text: "My skin has never looked better! The glow lasted for days. I'm hooked!",
      rating: 5
    },
    {
      name: "Jessica T.",
      text: "So relaxing and my fine lines look visibly reduced. Worth every penny!",
      rating: 5
    }
  ]
  // Customer testimonials with star ratings
}
```

---

## Data by Service

### 1️⃣ Facial Massage

**Basic Info:**
- Slug: `facial-massage`
- Price: `$80`
- Duration: `45 minutes`
- Image: Facial treatment photo

**Details:**
- Full description: 300+ words on circulation, lymphatic drainage, glow
- Benefits: 10 detailed benefits
- Process: 5 steps from cleansing to finishing
- FAQs: 4 questions answered
- Ingredients: 5 premium items
- Aftercare: Sun protection, hydration, moisturizing routine
- Testimonials: 2 customer reviews

---

### 2️⃣ Hair Treatment

**Basic Info:**
- Slug: `hair-treatment`
- Price: `$60`
- Duration: `30 minutes`
- Image: Hair care photo

**Details:**
- Full description: 250+ words on shine, strength, scalp health
- Benefits: 10 detailed benefits
- Process: 5 steps from consultation to styling
- FAQs: 4 questions answered
- Ingredients: 5 premium items (Argan Oil, Keratin, etc.)
- Aftercare: Sulfate-free shampoo, minimize heat, avoid chlorine
- Testimonials: 2 customer reviews

---

### 3️⃣ Under Eye Treatment

**Basic Info:**
- Slug: `under-eye-treatment`
- Price: `$40`
- Duration: `25 minutes`
- Image: Eye area treatment photo

**Details:**
- Full description: 250+ words on dark circles, puffiness, brightness
- Benefits: 10 detailed benefits
- Process: 5 steps from cleansing to SPF
- FAQs: 4 questions answered
- Ingredients: 5 premium items (Vitamin C, Coffee Extract, etc.)
- Aftercare: Avoid touching, use SPF, stay hydrated, avoid alcohol
- Testimonials: 2 customer reviews

---

### 4️⃣ Hand Massage

**Basic Info:**
- Slug: `hand-massage`
- Price: `$35`
- Duration: `20 minutes`
- Image: Hand massage photo

**Details:**
- Full description: 250+ words on tension relief, hydration, flexibility
- Benefits: 10 detailed benefits
- Process: 5 steps from soaking to protection
- FAQs: 4 questions answered
- Ingredients: 5 premium items (Shea Butter, Jojoba Oil, etc.)
- Aftercare: Gentle soaps, frequent moisturizing, wear gloves, SPF
- Testimonials: 2 customer reviews

---

## Data Types

```typescript
interface Service {
  // Basic (required for all pages)
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  benefits: string[];

  // Detailed (for /services/[slug] pages)
  fullDescription: string;
  detailedBenefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  aftercare: string;
  ingredients: string[];
  testimonials: Testimonial[];
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;  // 1-5 stars
}
```

---

## Content Distribution

### Home Page Uses
- `title`
- `short`
- `image`
- `benefits` (3 items)
- Links to `/services/[slug]`

### Services List Page Uses
- `title`
- `short`
- `price`
- `duration`
- `image`
- `benefits` (3 items)
- Links to `/services/[slug]`

### Service Detail Page Uses
- **Everything** ⭐
- `title` (header)
- `short` (subtitle)
- `image` (hero)
- `price` (sidebar)
- `duration` (sidebar)
- `description` (overview)
- `benefits` (quick benefits grid)
- `fullDescription` (detailed overview)
- `detailedBenefits` (benefits section)
- `process` (process steps)
- `ingredients` (ingredient section)
- `aftercare` (aftercare section)
- `testimonials` (testimonials section)
- `faqs` (FAQ accordion)

### Footer Uses
- `title`
- `slug` (links to `/services/[slug]`)

---

## How to Update Service Content

### Update Pricing
```typescript
// In lib/services.ts
{
  slug: "facial-massage",
  price: "$90",  // ← Changed from $80
  // ...
}
```
✅ Updates everywhere (home, services list, detail page, footer)

### Add New Service
```typescript
// In lib/services.ts
export const SERVICES = [
  // ... existing services
  {
    slug: "new-service",
    title: "New Service Name",
    short: "Short description",
    description: "Paragraph description",
    image: "https://...",
    price: "$XX",
    duration: "XX minutes",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    fullDescription: "Long description...",
    detailedBenefits: ["Benefit 1", "Benefit 2", ...],
    process: [...],
    faqs: [...],
    aftercare: "...",
    ingredients: [...],
    testimonials: [...]
  }
];
```

✅ New service automatically:
- Appears on home
- Appears on /services
- Gets its own /services/[slug] page
- Appears in footer
- Has full detail page

---

## Page Content Summary

| Page | Sections | Data Used |
|------|----------|-----------|
| Home | Services Summary Grid | title, short, image, benefits |
| /services | Service Cards + List | title, price, duration, short, image, benefits |
| /services/[slug] | Hero + Content + CTA | ALL fields |
| Footer | Service Links | title, slug |

---

## Word Counts

| Field | Min | Actual |
|-------|-----|--------|
| fullDescription | 250 | 300+ |
| detailedBenefits | 10 | 10 |
| aftercare | - | ~30 words |
| faqs | 4 pairs | 4-5 pairs |
| testimonials | 2 | 2 |

---

This structure ensures:
✅ **Consistency** — Data defined once
✅ **Completeness** — All services have all fields
✅ **Maintainability** — Easy to update
✅ **Scalability** — Easy to add new services
✅ **SEO** — Rich content on each page
