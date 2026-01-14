"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#112250] text-[#F5F0E9] pt-16 pb-8 border-t border-[#E0C58F]/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 border border-[#E0C58F]/30 shadow-sm">
                <Image
                  src="/favicon.webp"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3
                className="text-xl font-black text-[#E0C58F] tracking-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Youthful Glow Studio
              </h3>
            </div>
            <p className="text-[#D9CBC2] text-sm mb-4">
              Certified Medical Skincare Esthetician <br />
              Kitchener, ON
            </p>
            <p className="text-[#D9CBC2]/80 leading-relaxed italic">
              "Personalized medical-grade skincare treatments designed to help
              you feel confident, radiant, and cared for — delivered in a calm,
              welcoming environment."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#E0C58F]/30 pb-2 inline-block text-[#E0C58F]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
                { href: "/review", label: "Reviews" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#D9CBC2] hover:text-[#E0C58F] transition-all duration-300 flex items-center group font-medium"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E0C58F]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 border-b border-[#E0C58F]/30 pb-2 inline-block text-[#E0C58F]">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#D9CBC2] hover:text-[#E0C58F] transition-all duration-300 flex items-center group text-sm font-medium"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E0C58F]" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#E0C58F]/30 pb-2 inline-block text-[#E0C58F]">
              Connect With Us
            </h4>
            <ul className="space-y-3 text-[#D9CBC2]">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#E0C58F]" />
                <a
                  href="mailto:marcia@youthfulglowstudio.com"
                  className="hover:text-[#E0C58F] transition"
                >
                  marcia@youthfulglowstudio.com
                </a>
              </li>

              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#E0C58F]" />
                <a
                  href="tel:4165776409"
                  className="hover:text-[#E0C58F] transition"
                >
                  (416) 577-6409
                </a>
              </li>

              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#E0C58F]" />
                <span>1425A Block Line Road, Kitchener, Ontario</span>
              </li>

              <li className="text-sm leading-relaxed pt-2">
                <strong>Business Hours</strong> <br />
                Monday – Friday: 10:00 AM – 7:00 PM <br />
                Saturday: 10:00 AM – 6:00 PM <br />
                Sunday: Closed <br />
                <span className="italic">By Appointment Only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Youthful Glow Studio | All Rights Reserved
          </p>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/youthfulglowstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#3C507D] hover:bg-[#E0C58F] rounded-full flex items-center justify-center transition group"
              aria-label="Youthful Glow Studio Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:text-[#112250]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
