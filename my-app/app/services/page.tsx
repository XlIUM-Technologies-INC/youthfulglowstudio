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
      "https://plus.unsplash.com/premium_photo-1661281252293-173617fdc3e9?q=80&w=2070&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1664549761426-6a1cb1032854?w=900&auto=format&fit=crop&q=60",
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
      "https://images.unsplash.com/photo-1728949202477-bad2935775cb?w=900&auto=format&fit=crop&q=60",
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
      "https://plus.unsplash.com/premium_photo-1664298510406-043afac0ac20?q=80&w=2069&auto=format&fit=crop",
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
      "https://plus.unsplash.com/premium_photo-1681873742740-9a0e9eaa4584?q=80&w=987&auto=format&fit=crop",
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
    slug: "relaxation-massage",
    title: "Relaxation Massage",
    icon: Sparkles,
    short: "Full-body aromatherapy massage for stress relief.",
    description:
      "A calming full-body massage using light to moderate pressure and soothing essential oils to relax the body and mind.",
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=900&auto=format&fit=crop&q=60",
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
    slug: "waxing",
    title: "Waxing Hair Removal",
    icon: Wand2,
    short: "Professional waxing for smooth, long-lasting results.",
    description:
      "Professional hair removal using hygienic techniques for smooth skin lasting weeks. Suitable for face and body.",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=900&auto=format&fit=crop&q=60",
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

        {/* INTRO */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Youthful Glow Studio, our mission is to help you feel confident and
            beautiful in your own skin. Every treatment is personalized and
            delivered in a calm, welcoming environment.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#5A95CD]" />
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {service.short}
                  </p>

                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-[#5A95CD]">
                      {service.price}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                  </div>

                  <a
                    href={`https://cal.com/youthfulglowstudiobookings/${service.slug}?overlayCalendar=true`}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#5A95CD] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#4A85BD]"
                  >
                    Book Your Glow Session <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOOKING INFO */}
        <div className="bg-blue-50 rounded-xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">✨ How to Book Your Appointment</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Simply click “Book Your Glow Session” under any service to choose your
            preferred date and time. You’ll receive instant confirmation by email.
          </p>
          <p className="font-semibold">
            Questions? Email:
            <a
              href="mailto:marcia@youthfulglowstudio.com"
              className="text-[#5A95CD] ml-1"
            >
              marcia@youthfulglowstudio.com
            </a>
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
