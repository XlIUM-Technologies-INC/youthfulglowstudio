"use client";

import RootLayout from "@/components/layouts/RootLayout";
import { Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ServiceCardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  duration?: string;
  bestFor?: string;
  reasons?: string[];
}

const ServiceCard = ({ id, title, price, description, duration, bestFor, reasons }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={id} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 border border-gray-100 hover:shadow-xl transition-shadow">
      {/* Surface Level - Always Visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-gray-50/50 transition-colors text-left"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-[#5A95CD] font-semibold mt-2">{price}</p>
        </div>
        <ChevronDown 
          className={`w-6 h-6 text-[#5A95CD] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expandable Details */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-gray-50/30 p-6 md:p-8 space-y-6 animate-in fade-in duration-200">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">What to Expect</h4>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {duration && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
              <p className="text-gray-600">{duration}</p>
            </div>
          )}

          {bestFor && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Best For</h4>
              <p className="text-gray-600">{bestFor}</p>
            </div>
          )}

          {reasons && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Why Clients Love It</h4>
              <ul className="space-y-2">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="text-[#5A95CD] font-bold shrink-0">✓</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            href={`https://cal.com/youthfulglowstudiobookings/${id}?overlayCalendar=true`}
            data-cal-link={`https://cal.com/youthfulglowstudiobookings/${id}?overlayCalendar=true`}
            data-cal-config='{"layout":"month_view","theme":"light"}'
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#5A95CD] to-[#4A85BD] hover:from-[#4A85BD] hover:to-[#3A75AD] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
          >
            <Sparkles className="w-4 h-4" /> BOOK Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

const WaxingTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const waxingServices = [
    { name: "Brows", price: "$10" },
    { name: "Brows & Upper Lip", price: "$15" },
    { name: "Lip & Chin", price: "$15" },
    { name: "Full Face", price: "$40" },
    { name: "Under Arms", price: "$20" },
    { name: "Half Arms", price: "$30" },
    { name: "Full Arms", price: "$45" },
    { name: "Lower Legs", price: "$35" },
    { name: "Upper Legs", price: "$40" },
    { name: "Full Legs", price: "$65" },
    { name: "Full Legs with Bikini", price: "$70" },
    { name: "Bikini Line", price: "$20" },
    { name: "Belly Line", price: "$20" },
    { name: "Brazilian", price: "$50" },
    { name: "Back & Chest", price: "$80" },
    { name: "Back & Shoulders", price: "$70" },
    { name: "Chest & Abdomen", price: "$60" },
  ];

  return (
    <div id="waxing" className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
      {/* Surface Level */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-gray-50/50 transition-colors text-left"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900">Waxing Hair Removal</h3>
          <p className="text-[#5A95CD] font-semibold mt-2">Starting from $10</p>
        </div>
        <ChevronDown 
          className={`w-6 h-6 text-[#5A95CD] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expandable Details */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-gray-50/30 p-6 md:p-8 space-y-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Pricing</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {waxingServices.map((service, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <p className="text-gray-700">{service.name}</p>
                  <p className="font-semibold text-gray-900">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Best For</h4>
            <p className="text-gray-600">Anyone looking for smooth, hair-free skin with longer-lasting results than shaving.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Why Clients Love It</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-600">
                <span className="text-[#5A95CD] font-bold shrink-0">✓</span>
                <span>Smooth results that last for weeks</span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <span className="text-[#5A95CD] font-bold shrink-0">✓</span>
                <span>Professional, hygienic, and gentle technique</span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <span className="text-[#5A95CD] font-bold shrink-0">✓</span>
                <span>Helps reduce hair regrowth over time</span>
              </li>
            </ul>
          </div>

          <Link
            href="https://cal.com/youthfulglowstudiobookings/waxing?overlayCalendar=true"
            data-cal-link="https://cal.com/youthfulglowstudiobookings/waxing?overlayCalendar=true"
            data-cal-config='{"layout":"month_view","theme":"light"}'
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#5A95CD] to-[#4A85BD] hover:from-[#4A85BD] hover:to-[#3A75AD] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
          >
            <Sparkles className="w-4 h-4" /> BOOK Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      id: "dermaplaning",
      title: "Dermaplaning",
      price: "$130 (Package of 6 - $660 Save $120)",
      description: "Manual exfoliation using a sterile blade to remove dead skin and peach fuzz. Includes full facial with a mask, serum, and SPF.",
      duration: "60 minutes",
      bestFor: "Anyone looking for ultra-smooth, glowing skin — especially before an event or makeup application.",
      reasons: [
        "Makeup applies flawlessly afterward",
        "Skin feels baby-soft instantly",
        "Non-invasive and relaxing",
        "Immediate glow and smoothness",
      ],
    },
    {
      id: "zena-algae-peel",
      title: "Zena Algae Peel",
      price: "Face - $180 | Arms/Belly/Half Leg - $250 | Back - $280",
      description: "A natural, mechanical resurfacing peel that uses marine algae crystals to exfoliate and stimulate collagen. This facial/body treatment lifts pigmentation, smooths texture, reduces acne, stretchmarks, and improves skin tone — all with minimal downtime.",
      duration: "40 minutes",
      bestFor: "Great for clients dealing with acne, scarring, dull skin, or uneven tone who want a gentle yet powerful alternative to traditional chemical peels.",
      reasons: [
        "Natural, non-invasive alternative to microneedling or harsh peels",
        "Improves overall skin clarity and smoothness",
        "Safe for sensitive skin with minimal downtime",
      ],
    },
    {
      id: "microdermabrasion",
      title: "Microdermabrasion",
      price: "$120 (Package of 6 - $600 Save $120)",
      description: "A gentle yet effective exfoliation treatment using a diamond-tipped wand to buff away dead skin cells. Followed by masks, hydrating serums, moisturizer and SPF.",
      duration: "60 minutes",
      bestFor: "Clients with dull, rough, or uneven skin tone, fine lines, or mild acne scars.",
      reasons: [
        "Smooths and brightens complexion",
        "Non-invasive and zero downtime",
        "Enhances skincare product absorption",
        "Immediate, visible results",
      ],
    },
    {
      id: "signature-facial",
      title: "Made for You Facial",
      price: "$110 (Package of 6 - $570 Save $90)",
      description: "A customized deep-cleansing facial tailored to your skin's needs. Includes double cleanse, exfoliation, steam, extractions (if needed), facial massage, mask, serum, moisturizer, and SPF.",
      duration: "60 minutes",
      bestFor: "All skin types — perfect for first-timers or those looking for regular maintenance.",
      reasons: [
        "Personalized to your unique skin needs",
        "Leaves skin instantly refreshed",
        "Relaxing facial massage included",
        "Visible glow after just one session",
      ],
    },
    {
      id: "chemical-peels",
      title: "Dermalogica Lactic Acid Brightening Peels",
      price: "$115",
      description: "A gentle, hydrating peel that instantly brightens, smooths, and refreshes the skin with no downtime.",
      duration: "60 minutes",
      bestFor: "Clients dealing with dull, dry skin, pigmentation, or aging concerns who want deeper exfoliation.",
      reasons: [
        "Gentle, hydrating peel with no downtime",
        "Instant brightening and smoother skin",
        "Reduces dullness, uneven tone, and fine lines",
        "Safe for sensitive skin and all skin tones",
        "Perfect for first-time peel clients",
      ],
    },
    {
      id: "back-facial",
      title: "Back Facial",
      price: "$120",
      description: "A deep-cleansing facial for your back, including exfoliation, steam, extractions (if needed), a purifying mask, and hydration. It's designed to clarify, soften, and smooth hard-to-reach skin.",
      duration: "60 minutes",
      bestFor: "Ideal for anyone with back acne, clogged pores, dry skin, or preparing for special events like weddings or vacations.",
      reasons: [
        "Treats acne and congestion on the back",
        "Leaves skin soft, clear, and glowing",
        "A relaxing experience that often gets overlooked",
      ],
    },
    {
      id: "aromatherapy-massage",
      title: "Relaxation Massage",
      price: "$85",
      description: "A full-body massage using light to moderate pressure, soothing essential oils, and flowing strokes to release tension, improve circulation, and calm the nervous system.",
      duration: "60 minutes",
      bestFor: "Perfect for anyone seeking stress relief, better sleep, or a gentle wellness reset without deep pressure or pain.",
      reasons: [
        "Helps relieve stress, anxiety, and fatigue",
        "Enhances circulation and promotes deep relaxation",
        "Leaves you feeling refreshed, balanced, and renewed",
      ],
    },
  ];
  
  return (
    <RootLayout>
      {/* Hero */}
      <section className="bg-linear-to-r from-[#5A95CD] to-[#3A75AD] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Personalized skincare treatments designed to help you feel confident and beautiful in your own skin.
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Facial & Skincare Treatments</h2>
          <p className="text-gray-600">All facials include a customized treatment with a professional-grade mask selected for your skin's unique needs.</p>
        </div>
        
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hair Removal</h2>
        </div>
        <WaxingTable />
      </section>
    </RootLayout>
  );
}
