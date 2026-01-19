"use client";

import { useState } from "react";
import Link from "next/link";
import RootLayout from "@/components/layouts/RootLayout";
import { SERVICES } from "@/lib/services";
import { ArrowRight, Clock } from "lucide-react";

/* -------------------- COMPONENT -------------------- */

export default function ServiceFinder() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <RootLayout>
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        <div className="text-center space-y-4 mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#112250]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Services
          </h1>
          <p
            className="text-xl text-[#3C507D] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Step into a world of personalized care where your skin's health is
            our top priority. Discover our curated collection of medical-grade
            treatments designed to reveal your most radiant self.
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
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500 border border-[#E0C58F]/10 hover:border-[#E0C58F]/40 group flex flex-col h-full"
              >
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/40 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <h3 className="text-xl font-bold flex items-start gap-2 text-[#112250] min-h-[3.5rem]">
                    <Icon className="w-5 h-5 text-[#E0C58F] mt-1 shrink-0" />
                    {service.title}
                  </h3>

                  <p className="text-[#3C507D] text-sm leading-relaxed line-clamp-3">
                    {service.short}
                  </p>

                  <div className="mt-auto space-y-4 pt-4 border-t border-[#F5F0E9]">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-[#112250]">
                        {service.price}
                      </span>
                      <span className="text-[#3C507D] flex items-center gap-1 font-medium">
                        <Clock className="w-4 h-4 text-[#E0C58F]" />
                        {service.duration}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-center gap-2 bg-white text-[#112250] px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#F5F0E9] transition-all border border-[#112250]/20"
                      >
                        Details
                      </Link>
                      <a
                        href={`https://cal.com/youthfulglowstudiobookings/${service.slug}?overlayCalendar=true`}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 bg-[#112250] text-[#F5F0E9] px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#3C507D] transition-all border border-[#E0C58F]/20 hover:border-[#E0C58F]/50 shadow-lg shadow-[#112250]/10"
                      >
                        Book
                        <ArrowRight className="w-3 h-3 text-[#E0C58F]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOOKING INFO */}
        <div className="bg-[#112250] rounded-2xl p-10 text-center space-y-6 border border-[#E0C58F]/30 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#E0C58F]">
            ✨ How to Book Your Appointment
          </h2>
          <p className="text-[#F5F0E9]/90 max-w-2xl mx-auto text-lg leading-relaxed">
            Simply click “Book Your Glow Session” under any service to choose
            your preferred date and time. You’ll receive instant confirmation by
            email.
          </p>
          <div className="pt-4 flex flex-col items-center gap-2">
            <span className="text-[#D9CBC2] text-sm font-medium tracking-wider uppercase">
              Questions? Reach out to us:
            </span>
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
