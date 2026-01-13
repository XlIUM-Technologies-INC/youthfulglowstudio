"use client";

import { useState } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import {
  Sparkles,
  ArrowRight,
  Check,
  Star,
  Clock,
  DollarSign,
  Scissors,
  Waves,
  Gem,
  Heart,
  Droplets,
  Sun,
  UserCheck,
  Wand2,
} from "lucide-react";

/* -------------------- SERVICES DATA -------------------- */

const SERVICES = [
  {
    slug: "dermaplaning",
    title: "Dermaplaning",
    icon: Scissors,
    short: "Manual exfoliation to remove dead skin and peach fuzz for instant glow.",
    description:
      "Manual exfoliation using a sterile blade to remove dead skin and peach fuzz. Includes a full facial with customized mask, serum, moisturizer, and SPF for immediate smoothness and radiance.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80",
    price: "$130",
    packagePrice: "Package of 6 – $660 (Save $120)",
    duration: "60 minutes",
    bestFor:
      "Anyone looking for ultra-smooth, glowing skin — especially before events or makeup application.",
    whyLoveIt: [
      "Makeup applies flawlessly",
      "Baby-soft skin instantly",
      "Non-invasive & relaxing",
      "Immediate glow",
    ],
    concerns: ["dull-skin", "texture", "event-prep"],
    areas: ["face"],
  },

  {
    slug: "zena-algae-peel",
    title: "Zena Algae Peel",
    icon: Waves,
    short: "Natural marine algae peel for resurfacing and collagen stimulation.",
    description:
      "A natural mechanical resurfacing peel using marine algae crystals. Lifts pigmentation, smooths texture, reduces acne, stretch marks, and improves overall skin tone with minimal downtime.",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80",
    price: "From $180",
    duration: "40 minutes",
    bestFor:
      "Clients with acne, scarring, dull skin, or uneven tone seeking a gentle yet powerful peel.",
    whyLoveIt: [
      "Natural alternative to harsh peels",
      "Improves clarity and smoothness",
      "Minimal downtime",
      "Safe for sensitive skin",
    ],
    concerns: ["acne", "pigmentation", "dull-skin"],
    areas: ["face", "body", "back"],
  },

  {
    slug: "microdermabrasion",
    title: "Microdermabrasion",
    icon: Gem,
    short: "Diamond-tip exfoliation for smoother, brighter skin.",
    description:
      "A gentle yet effective exfoliation using a diamond-tipped wand to remove dead skin cells, followed by hydrating serums, mask, moisturizer, and SPF.",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80",
    price: "$120",
    packagePrice: "Package of 6 – $600 (Save $120)",
    duration: "60 minutes",
    bestFor:
      "Clients with dull, rough, uneven skin tone, fine lines, or mild acne scars.",
    whyLoveIt: [
      "Instant visible results",
      "No downtime",
      "Boosts product absorption",
    ],
    concerns: ["dull-skin", "texture"],
    areas: ["face"],
  },

  {
    slug: "made-for-you-facial",
    title: "Made For You Facial",
    icon: Heart,
    short: "Fully customized deep-cleansing facial.",
    description:
      "A personalized facial tailored to your skin needs. Includes double cleanse, exfoliation, steam, extractions (if needed), facial massage, mask, serum, moisturizer, and SPF.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
    price: "$110",
    packagePrice: "Package of 6 – $570 (Save $90)",
    duration: "60 minutes",
    bestFor:
      "All skin types — ideal for first-timers or regular skincare maintenance.",
    whyLoveIt: [
      "Fully personalized",
      "Relaxing massage included",
      "Instant refreshed glow",
    ],
    concerns: ["first-time", "general"],
    areas: ["face"],
  },

  {
    slug: "back-facial",
    title: "Back Facial",
    icon: Droplets,
    short: "Deep-cleansing treatment for back acne and texture.",
    description:
      "A deep-cleansing facial for the back including exfoliation, steam, extractions (if needed), purifying mask, and hydration.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80",
    price: "$120",
    duration: "60 minutes",
    bestFor:
      "Back acne, clogged pores, dry skin, or preparing for special events.",
    whyLoveIt: [
      "Clears congestion",
      "Smooths skin",
      "Often overlooked self-care",
    ],
    concerns: ["acne", "texture"],
    areas: ["back"],
  },

  {
    slug: "aromatherapy-massage",
    title: "Relaxation Massage",
    icon: Sparkles,
    short: "Full-body aromatherapy massage for stress relief.",
    description:
      "A calming full-body massage using light to moderate pressure and soothing essential oils to relax the body and mind.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80",
    price: "$85",
    duration: "60 minutes",
    bestFor:
      "Stress relief, better sleep, and gentle wellness reset.",
    whyLoveIt: [
      "Relieves stress & anxiety",
      "Improves circulation",
      "Deep relaxation",
    ],
    concerns: ["relaxation", "stress"],
    areas: ["body"],
  },

  {
    slug: "chemical-peels",
    title: "Dermalogica Brightening Peel",
    icon: Sun,
    short: "30% Lactic acid peel for intense brightening and hydration.",
    description:
      "A professional-grade brightening peel with 30% lactic acid. Ideal for hyperpigmentation and uneven skin tone, leaving your skin with a healthy, radiant glow.",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80",
    price: "$115",
    duration: "60 minutes",
    bestFor: "Clients with hyperpigmentation, uneven skin tone, or signs of aging.",
    whyLoveIt: ["Intense hydration", "Evens out skin tone", "No significant downtime"],
    concerns: ["pigmentation", "aging", "dull-skin"],
    areas: ["face"],
  },
  {
    slug: "waxing",
    title: "Waxing Hair Removal",
    icon: Wand2,
    short: "Professional waxing for smooth, long-lasting results.",
    description:
      "Professional hair removal using hygienic techniques for smooth skin lasting weeks. Suitable for face and body.",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80",
    price: "From $10",
    duration: "Varies",
    bestFor:
      "Anyone wanting longer-lasting smoothness than shaving.",
    whyLoveIt: [
      "Smooth results for weeks",
      "Gentle & hygienic",
      "Reduces regrowth over time",
    ],
    concerns: ["hair-removal"],
    areas: ["face", "body"],
  },
];

/* -------------------- COMPONENT -------------------- */

export default function ServiceFinder() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <RootLayout>
      <div className="max-w-6xl mx-auto p-6 space-y-12">

        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#112250]" style={{fontFamily: 'Playfair Display, serif'}}>Our Services</h1>
          <p className="text-xl text-[#3C507D] max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Step into a world of personalized care where your skin's health is our top priority. 
            Discover our curated collection of medical-grade treatments designed to reveal your most radiant self.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#E0C58F] to-transparent mx-auto rounded-full mt-6"></div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500 border border-[#E0C58F]/10 hover:border-[#E0C58F]/40 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/40 to-transparent"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-[#112250]">
                    <Icon className="w-5 h-5 text-[#E0C58F]" />
                    {service.title}
                  </h3>

                  <p className="text-[#3C507D] text-sm leading-relaxed">
                    {service.short}
                  </p>

                  <div className="flex justify-between items-center text-sm border-t border-[#F5F0E9] pt-4">
                    <span className="font-bold text-[#112250]">
                      {service.price}
                    </span>
                    <span className="text-[#3C507D] flex items-center gap-1 font-medium">
                      <Clock className="w-4 h-4 text-[#E0C58F]" />
                      {service.duration}
                    </span>
                  </div>

                  <a
                    href={`https://cal.com/youthfulglowstudiobookings/${service.slug}?overlayCalendar=true`}
                    target="_blank"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#112250] text-[#F5F0E9] px-4 py-3 rounded-lg font-bold text-sm hover:bg-[#3C507D] transition-all border border-[#E0C58F]/20 hover:border-[#E0C58F]/50 shadow-lg shadow-[#112250]/10"
                  >
                    Book Your Glow Session <ArrowRight className="w-4 h-4 text-[#E0C58F]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOOKING INFO */}
        <div className="bg-[#112250] rounded-2xl p-10 text-center space-y-6 border border-[#E0C58F]/30 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#E0C58F]">✨ How to Book Your Appointment</h2>
          <p className="text-[#F5F0E9]/90 max-w-2xl mx-auto text-lg leading-relaxed">
            Simply click “Book Your Glow Session” under any service to choose your
            preferred date and time. You’ll receive instant confirmation by email.
          </p>
          <div className="pt-4 flex flex-col items-center gap-2">
            <span className="text-[#D9CBC2] text-sm font-medium tracking-wider uppercase">Questions? Reach out to us:</span>
            <a
              href="mailto:marcia@youthfulglowstudio.com"
              className="text-[#E0C58F] text-xl font-bold hover:text-[#F5F0E9] transition-colors border-b-2 border-[#E0C58F]/30 hover:border-[#F5F0E9]"
            >
              marcia@youthfulglowstudio.com
            </a>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
