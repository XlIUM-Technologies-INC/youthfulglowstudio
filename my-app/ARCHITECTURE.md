# Component Hierarchy & Data Flow

## 🏗️ Component Tree

```
app/layout.tsx (Root HTML/SEO)
  ├── app/page.tsx (Home)
  │   └── RootLayout
  │       ├── Nav
  │       │   └── Links (Home, About, Services, Contact, Reviews)
  │       ├── main (pt-20)
  │       │   ├── HeroSection
  │       │   ├── ServicesSection
  │       │   │   └── SERVICES.map() → Links to /services/[slug]
  │       │   ├── AboutSection
  │       │   ├── BlogInsightsSection
  │       │   └── ClientReviewsSection
  │       └── Footer
  │           ├── Brand info
  │           ├── Quick Links
  │           ├── SERVICES.map() → Links to /services/[slug]
  │           └── Social media
  │
  ├── app/services/page.tsx (Services List)
  │   └── RootLayout
  │       ├── Nav
  │       ├── main (pt-20)
  │       │   ├── Hero section
  │       │   └── SERVICES.map() → Cards with:
  │       │       ├── Image
  │       │       ├── Title & Price
  │       │       ├── "View Details" Link → /services/[slug]
  │       │       └── "Book" Button
  │       └── Footer
  │
  └── app/services/[slug]/page.tsx (Service Detail)
      └── RootLayout
          ├── Nav
          ├── main (pt-20)
          │   ├── Service image
          │   ├── Title, price, duration
          │   ├── Full description
          │   ├── Benefits list
          │   └── "Book service" Button
          │       "Back to services" Link
          └── Footer
```

---

## 📊 Data Sources

### **lib/services.ts**
Single source of truth for all services:
```typescript
export const SERVICES = [
  {
    slug: "facial-massage",
    title: "Facial Massage",
    short: "Short summary for cards",
    description: "Full description for detail pages",
    image: "https://...",
    price: "$80",
    duration: "45 minutes",
    benefits: ["Benefit 1", "Benefit 2"],
  },
  // ... more services
]

export function getServiceBySlug(slug: string) {
  return SERVICES.find(s => s.slug === slug);
}
```

### **Used By:**
1. `components/parts/services.tsx` (home grid — shows `title`, `short`, `image`)
2. `app/services/page.tsx` (list — shows `title`, `price`, `duration`, `short`)
3. `app/services/[slug]/page.tsx` (detail — shows all fields)
4. `components/parts/footer.tsx` (dynamic links to each service)

---

## 🔌 Import Map

### **RootLayout (Central Hub)**
```tsx
import Nav from '@/components/parts/nav';
import Footer from '@/components/parts/footer';

// Wraps all pages
```

### **Pages (Use RootLayout)**
```tsx
// app/page.tsx
import RootLayout from '@/components/layouts/RootLayout';
<RootLayout><Content /></RootLayout>

// app/services/page.tsx
import RootLayout from '@/components/layouts/RootLayout';
import { SERVICES } from '@/lib/services';
<RootLayout><Content /></RootLayout>

// app/services/[slug]/page.tsx
import RootLayout from '@/components/layouts/RootLayout';
import { getServiceBySlug } from '@/lib/services';
<RootLayout><Content /></RootLayout>
```

### **Components (Use Data & Navigation)**
```tsx
// components/parts/services.tsx
import { SERVICES } from '@/lib/services';
import Link from 'next/link';
{SERVICES.map(s => <Link href={`/services/${s.slug}`}>...

// components/parts/footer.tsx
import { SERVICES } from '@/lib/services';
import Link from 'next/link';
{SERVICES.map(s => <Link href={`/services/${s.slug}`}>...
```

---

## 🔄 Request Flow Examples

### **Example 1: User visits home**
```
1. Request: GET /
2. Render: app/page.tsx
3. Uses: RootLayout
4. Components:
   - Nav (logo, menu links)
   - HeroSection (main image/text)
   - ServicesSection (imports SERVICES)
     - Maps SERVICES → Cards
     - Each card → Link to /services/[slug]
   - AboutSection (text + images)
   - ReviewsSection (testimonials)
   - Footer (imports SERVICES → Dynamic links)
```

### **Example 2: User clicks "Facial Massage" service**
```
1. Request: GET /services/facial-massage
2. Render: app/services/[slug]/page.tsx
3. Slug: "facial-massage"
4. Lookup: getServiceBySlug("facial-massage")
5. Found: Service object from lib/services.ts
6. Render:
   - RootLayout
     - Nav (same as home)
     - Full service details (description, benefits)
     - "Book" button → Cal booking
     - "Back" link → /services
     - Footer (same as home)
```

### **Example 3: User visits services list**
```
1. Request: GET /services
2. Render: app/services/page.tsx
3. Imports: SERVICES from lib/services.ts
4. Maps: SERVICES → Card grid
5. Each card shows:
   - Image, title, price, duration
   - "View Details" → Link to /services/[slug]
   - "Book" → Booking button
6. Footer has dynamic service links (also from SERVICES)
```

---

## 🎯 Routing Summary

| Path | Component | Data Source | Features |
|------|-----------|-------------|----------|
| `/` | page.tsx | lib/services.ts | Home, services grid, all sections |
| `/services` | services/page.tsx | lib/services.ts | Services list with cards |
| `/services/facial-massage` | services/[slug]/page.tsx | lib/services.ts + getServiceBySlug() | Full details + booking |
| `/services/hair-treatment` | services/[slug]/page.tsx | lib/services.ts + getServiceBySlug() | Full details + booking |
| `/services/under-eye-treatment` | services/[slug]/page.tsx | lib/services.ts + getServiceBySlug() | Full details + booking |
| `/services/hand-massage` | services/[slug]/page.tsx | lib/services.ts + getServiceBySlug() | Full details + booking |

---

## 🔐 Type Safety

### **Service Type**
```typescript
interface Service {
  slug: string;           // URL-safe identifier
  title: string;          // Display name
  short: string;          // Summary for cards
  description: string;    // Full description
  image: string;          // Image URL
  price: string;          // "$XX"
  duration: string;       // "XX minutes"
  benefits: string[];     // List of benefits
}
```

### **Slugs Available**
```typescript
// These slugs auto-generate /services/[slug] pages
"facial-massage"
"hair-treatment"
"under-eye-treatment"
"hand-massage"
```

---

## 🚀 Performance Metrics

### **Navigation**
- All links use Next.js `Link` (client-side routing)
- No full page reloads
- Fast transitions between pages

### **Data**
- Services data cached in `lib/services.ts`
- No API calls needed (static data)
- Single source of truth (no duplication)

### **Rendering**
- RootLayout prevents re-renders of Nav/Footer
- Efficient map() for service lists
- Minimal re-renders on navigation

---

## 📝 Key Files

| File | Purpose | Imports |
|------|---------|---------|
| `lib/services.ts` | Data layer | None (exports only) |
| `components/layouts/RootLayout.tsx` | Layout wrapper | Nav, Footer, React |
| `app/page.tsx` | Home | RootLayout, sections |
| `app/services/page.tsx` | Services list | RootLayout, SERVICES |
| `app/services/[slug]/page.tsx` | Service detail | RootLayout, getServiceBySlug |
| `components/parts/nav.tsx` | Navigation | Link, icons |
| `components/parts/footer.tsx` | Footer | Link, SERVICES, icons |

---

## 🎨 Styling Strategy

### **Root Colors**
- Primary: Blue (#2563eb, #1e40af)
- Background: Gradient (gray-50 → white → blue-50)
- Text: Gray-700 (dark), gray-400 (light on dark bg)

### **Classes Used**
- `bg-linear-to-br` (backgrounds)
- `bg-linear-to-r` (button accents)
- `text-blue-600` (primary text)
- `hover:text-blue-600` (interactive)
- `shadow-xl`, `shadow-2xl` (depth)
- `rounded-3xl` (modern cards)

---

This architecture ensures:
✅ Single source of truth (lib/services.ts)
✅ DRY principle (RootLayout for nav/footer)
✅ Fast navigation (Next.js Link)
✅ Easy maintenance (centralized updates)
✅ Type safety (TypeScript)
✅ Scalability (easy to add more services/pages)
