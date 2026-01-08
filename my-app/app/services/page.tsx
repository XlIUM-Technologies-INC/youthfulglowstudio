"use client";

import RootLayout from "@/components/layouts/RootLayout";
import { Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/services";

interface ServiceCardProps {
  slug: string;
  title: string;
  price: string;
  description: string;
  duration?: string;
  benefits?: string[];
  fullDescription?: string;
}

const ServiceCard = ({ slug, title, price, description, duration, benefits, fullDescription }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={slug} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 border border-gray-100 hover:shadow-xl transition-shadow">
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
            <p className="text-gray-700 leading-relaxed">{fullDescription || description}</p>
          </div>

          {duration && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
              <p className="text-gray-600">{duration}</p>
            </div>
          )}

          {benefits && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Why Clients Love It</h4>
              <ul className="space-y-2">
                {benefits.map((reason, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="text-[#5A95CD] font-bold shrink-0">✓</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            href={`/contact`}
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#5A95CD] to-[#4A85BD] hover:from-[#4A85BD] hover:to-[#3A75AD] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
          >
            Learn More & Book
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
  const facialServices = SERVICES.filter(s => s.slug !== 'waxing-hair-removal' && s.slug !== 'relaxation-massage');
  const massageServices = SERVICES.filter(s => s.slug === 'relaxation-massage');
  
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
        
        {facialServices.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Massage</h2>
        </div>
        {massageServices.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hair Removal</h2>
        </div>
        <WaxingTable />
      </section>
    </RootLayout>
  );
}
