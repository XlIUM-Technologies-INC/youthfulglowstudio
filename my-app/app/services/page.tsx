"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Nav from "@/components/parts/nav";
import Footer from "@/components/parts/footer";
import {
  Sparkles,
  Clock,
  Check,
  Scissors,
  Waves,
} from "lucide-react";

export default function ServicesPage() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "demo" });

      cal("ui", {
        theme: "light",
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#2563eb" },
          dark: { "cal-brand": "#144bde" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  const services = [
    {
      icon: Scissors,
      title: "Dermaplaning",
      price: "$130",
      duration: "60 minutes",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
      benefits: ["Instant smooth skin", "No downtime", "Great before events"],
    },
    {
      icon: Waves,
      title: "Zena Algae Peel",
      price: "$180",
      duration: "40 minutes",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
      benefits: ["Brightens skin", "Reduces acne", "Gentle resurfacing"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl opacity-90">
          Book your glow session instantly
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-blue-600" />
                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-blue-600 text-2xl font-bold mb-2">
                  {service.price}
                </p>

                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Clock size={16} />
                  {service.duration}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.benefits.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-gray-600"
                    >
                      <Check className="text-green-500" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* ✅ OFFICIAL CAL EMBED BUTTON */}
                <button
                  data-cal-namespace="demo"
                  data-cal-link="hakim-kelly-ksltrj/test"
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold transition hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Sparkles />
                  Book Your Glow Session
                </button>
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
