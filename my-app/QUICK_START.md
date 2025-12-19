# Youthful Glow Studio — Quick Start Guide

## ✅ Setup (One Time)

```bash
# Navigate to project
cd /Users/m1/work/Skincare/my-app

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:3000**

---

## 🗂️ File Organization

### **Core Structure**
```
my-app/
├── app/
│   ├── layout.tsx              ← Root layout with SEO metadata
│   ├── page.tsx                ← Home page (uses RootLayout)
│   ├── globals.css             ← Global styles
│   └── services/
│       ├── page.tsx            ← Services list
│       └── [slug]/
│           └── page.tsx        ← Individual service detail
├── components/
│   ├── layouts/
│   │   └── RootLayout.tsx      ← Nav + Footer wrapper (NEW)
│   ├── parts/
│   │   ├── nav.tsx             ← Navigation
│   │   ├── footer.tsx          ← Footer with dynamic services
│   │   ├── hero.tsx            ← Hero section
│   │   ├── services.tsx        ← Services summary grid
│   │   ├── about.tsx           ← About section
│   │   ├── review.tsx          ← Reviews section
│   │   └── wellbeing.tsx       ← Blog/insights section
│   └── ui/                     ← Shadcn UI components
├── lib/
│   ├── services.ts             ← Service data (NEW - single source of truth)
│   └── utils.ts                ← Utilities
└── public/                     ← Static assets
```

---

## 🚀 Usage Examples

### **Add a New Service**

Edit `lib/services.ts`:
```typescript
export const SERVICES = [
  // ... existing services
  {
    slug: "new-service",
    title: "New Service Name",
    short: "Short description",
    description: "Full description here.",
    image: "https://...",
    price: "$XX",
    duration: "XX minutes",
    benefits: ["Benefit 1", "Benefit 2"],
  },
];
```

The service will automatically appear in:
- ✅ Home page services grid
- ✅ Services listing page
- ✅ Footer services list
- ✅ Accessible at `/services/new-service`

### **Create a New Page with Layout**

```tsx
import RootLayout from "@/components/layouts/RootLayout";

export default function NewPage() {
  return (
    <RootLayout>
      {/* Your page content here */}
    </RootLayout>
  );
}
```

The RootLayout automatically includes:
- ✅ Fixed navigation at top
- ✅ Proper padding/spacing (pt-20)
- ✅ Footer at bottom
- ✅ Background gradient

---

## 📋 Navigation Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page with full site overview |
| `/services` | All services list |
| `/services/facial-massage` | Facial massage details |
| `/services/hair-treatment` | Hair treatment details |
| `/services/under-eye-treatment` | Under-eye treatment details |
| `/services/hand-massage` | Hand massage details |
| `/#services` | Jump to services section on home |
| `/#about` | Jump to about section on home |
| `/#reviews` | Jump to reviews section on home |
| `/#contact` | Jump to contact section on home |

---

## 🎨 Styling

All pages use:
- **Tailwind CSS** with `bg-linear-to-br` gradients
- **Responsive design** (mobile-first with md/lg breakpoints)
- **Dark footer** with contrast colors
- **Blue accent color** (#2563eb / #1e40af)

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🔍 Verification Checklist

- [ ] Home page loads with service summary cards
- [ ] Services cards link to `/services/[slug]` pages
- [ ] Navigation links work on all pages
- [ ] Footer appears on all pages
- [ ] Services list shows all 4 services
- [ ] Footer services list is dynamic (pulls from lib/services.ts)
- [ ] Mobile menu works on smaller screens
- [ ] Fixed nav doesn't overlap page content (pt-20 spacing)
- [ ] Service detail pages show full descriptions
- [ ] Booking button on all service pages

---

## 🐛 Troubleshooting

**Services not showing in footer?**
- Ensure `SERVICES` is exported from `lib/services.ts`
- Check footer imports `SERVICES` correctly

**Page content hidden under nav?**
- RootLayout adds `pt-20` — if not working, check the class is applied
- Or manually add `pt-24` to page `<main>` element

**Links not navigating?**
- Ensure all links use `href` (for Next.js `Link`)
- Check paths are correct (e.g., `/services/facial-massage`)

---

## 💡 Tips

1. **Update services centrally** — Edit `lib/services.ts` once, changes appear everywhere
2. **Consistent routing** — All `<a>` tags converted to Next.js `Link`
3. **Responsive by default** — RootLayout uses flexbox to handle footer positioning
4. **Type-safe** — Full TypeScript support for better development experience

Enjoy building! 🎉
