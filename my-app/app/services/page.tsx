"use client";

import RootLayout from "@/components/layouts/RootLayout";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ id, title, price, description, duration, bestFor, reasons, image }) => (
  <div id={id} className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
    {image && <img src={image} alt={title} className="w-full h-64 object-cover" />}
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-2 md:mb-0">{title}</h3>
        <p className="text-blue-600 text-2xl font-bold">{price}</p>
      </div>
      <p className="text-gray-700 text-lg mb-6">{description}</p>
      
      {duration && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">How Long it Lasts:</h4>
          <p className="text-gray-600">{duration}</p>
        </div>
      )}
      
      {bestFor && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Who It’s Best For:</h4>
          <p className="text-gray-600">{bestFor}</p>
        </div>
      )}

      {reasons && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Why Clients Love This Treatment:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {reasons.map((reason, i) => <li key={i}>{reason}</li>)}
          </ul>
        </div>
      )}

      <Link
        href={`https://cal.com/youthfulglowstudiobookings/${id}?overlayCalendar=true`}
        data-cal-link={`https://cal.com/youthfulglowstudiobookings/${id}?overlayCalendar=true`}
        data-cal-config='{"layout":"month_view","theme":"light"}'
        className="mt-4 bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
      >
        <Sparkles /> BOOK Your Glow Session
      </Link>
    </div>
  </div>
);

const WaxingTable = () => (
  <div id="waxing" className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
    <div className="p-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">Waxing Hair Removal</h3>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
        <div className="flex justify-between border-b pb-2"><p>Brows</p><p className="font-semibold">$10</p></div>
        <div className="flex justify-between border-b pb-2"><p>Brows & Upper Lip</p><p className="font-semibold">$15</p></div>
        <div className="flex justify-between border-b pb-2"><p>Lip & Chin</p><p className="font-semibold">$15</p></div>
        <div className="flex justify-between border-b pb-2"><p>Full Face</p><p className="font-semibold">$40</p></div>
        <div className="flex justify-between border-b pb-2"><p>Under Arms</p><p className="font-semibold">$20</p></div>
        <div className="flex justify-between border-b pb-2"><p>Half Arms</p><p className="font-semibold">$30</p></div>
        <div className="flex justify-between border-b pb-2"><p>Full Arms</p><p className="font-semibold">$45</p></div>
        <div className="flex justify-between border-b pb-2"><p>Lower Legs</p><p className="font-semibold">$35</p></div>
        <div className="flex justify-between border-b pb-2"><p>Upper Legs</p><p className="font-semibold">$40</p></div>
        <div className="flex justify-between border-b pb-2"><p>Full Legs</p><p className="font-semibold">$65</p></div>
        <div className="flex justify-between border-b pb-2"><p>Full Legs with Bikini</p><p className="font-semibold">$70</p></div>
        <div className="flex justify-between border-b pb-2"><p>Bikini Line</p><p className="font-semibold">$20</p></div>
        <div className="flex justify-between border-b pb-2"><p>Belly Line</p><p className="font-semibold">$20</p></div>
        <div className="flex justify-between border-b pb-2"><p>Brazilian</p><p className="font-semibold">$50</p></div>
        <div className="flex justify-between border-b pb-2"><p>Back & Chest</p><p className="font-semibold">$80</p></div>
        <div className="flex justify-between border-b pb-2"><p>Back & Shoulders</p><p className="font-semibold">$70</p></div>
        <div className="flex justify-between border-b pb-2"><p>Chest & Abdomen</p><p className="font-semibold">$60</p></div>
      </div>
       <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-2">Who It’s Best For:</h4>
          <p className="text-gray-600">Anyone looking for smooth, hair-free skin with longer-lasting results than shaving.</p>
        </div>
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-2">Why Clients Love This Treatment:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Smooth results that last for weeks</li>
            <li>Professional, hygienic, and gentle technique</li>
            <li>Helps reduce hair regrowth over time</li>
          </ul>
        </div>
      <Link
        href="https://cal.com/youthfulglowstudiobookings/waxing?overlayCalendar=true"
        data-cal-link="https://cal.com/youthfulglowstudiobookings/waxing?overlayCalendar=true"
        data-cal-config='{"layout":"month_view","theme":"light"}'
        className="mt-6 bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
      >
        <Sparkles /> BOOK Your Glow Session
      </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  const services = [
    {
      id: "dermaplaning",
      title: "🪞 Dermaplaning",
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
      price: "Face - $180 *Arms/Belly/Half Leg $250 *Back $280",
      description: "A natural, mechanical resurfacing peel that uses marine algae crystals to exfoliate and stimulate collagen. This facial/body treatment lifts pigmentation, smooths texture, reduces acne, stretchmarks, and improves skin tone — all with minimal downtime.",
      duration: "40 minutes",
      bestFor: "Great for clients dealing with acne, scarring, dull skin, or uneven tone who want a gentle yet powerful alternative to traditional chemical peels.",
      reasons: [
        "Natural, non-invasive alternative to micro needling or harsh peels",
        "Improves overall skin clarity and smoothness",
        "Safe for sensitive skin with minimal downtime",
      ],
    },
    {
      id: "microdermabrasion",
      title: "💎 Microdermabrasion",
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
      title: "💆‍♀️ Made for You Facial",
      price: "$110 (Package of 6 - $570 Save $90)",
      description: "A customized deep-cleansing facial tailored to your skin's needs. Includes double cleanse, exfoliation, steam, extractions (if needed), facial massage, mask, serum, moisturizer, and SPF.",
      duration: "60 minutes",
      bestFor: "All skin types — perfect for first-timers or those looking for regular maintenance.",
      reasons: [
        "Personalized to their skin",
        "Leaves skin instantly refreshed",
        "Relaxing facial massage included",
        "Visible glow after just one session.",
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
      description: "A deep-cleansing facial for your back, including exfoliation, steam, extractions (if needed), a purifying mask, and hydration. It’s designed to clarify, soften, and smooth hard-to-reach skin.",
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
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl opacity-90 mb-8">
              At Youthful Glow Studio, our mission is to help you feel confident and beautiful in your own skin. We provide personalized skincare treatments in a calm, welcoming environment where your comfort and well-being come first. Every service is delivered with care, professionalism, and a genuine passion for helping you achieve a healthy, radiant glow.
            </p>
            <p className="text-lg opacity-80">
              All facials include a fully customized treatment followed by a professional-grade mask selected to suit your skin’s unique needs. Whether hydrating, calming, brightening, or firming, each mask is chosen to enhance your glow and deliver visible results. Perfect before special occasions or anytime your skin needs a boost.
            </p>
        </div>
      </section>

      {/* Booking Info */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">✨ How to Book Your Appointment</h2>
            <p className="text-gray-700 text-lg mb-4">
              Booking your facial or skincare is simple and secure. Just scroll down the pages and click the “Book Your Glow Session” button under any service listed on the page. You’ll be directed to my online calendar to select your preferred date and time.
            </p>
            <p className="text-gray-600">
              Once booked, you’ll receive an instant confirmation email with the full details of your appointment. If you have any questions or special requests before booking, feel free to reach out to me at <a href="mailto:marcia@youthfulglowstudio.com" className="text-blue-600 hover:underline">marcia@youthfulglowstudio.com</a>.
            </p>
            <p className="mt-4 text-lg font-semibold">I look forward to help you glow with confidence and grace!</p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
        <WaxingTable />
      </section>
    </RootLayout>
  );
}