"use client";

import { use, useState } from "react";
import { getServiceBySlug } from "@/lib/services";
import RootLayout from "@/components/layouts/RootLayout";
import { notFound } from "next/navigation";
import {
  Check,
  Clock,
  DollarSign,
  Sparkles,
  ChevronDown,
  Info,
  ShieldCheck,
  Star,
  List,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BookingModal from "@/components/ui/BookingModal";

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState("overview");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Handle potential missing bookingSlug property safely
  const bookingSlug = (service as any).bookingSlug || service.slug;

  return (
    <RootLayout>
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        bookingSlug={bookingSlug}
      />
      <div className="bg-[#F5F0E9] min-h-screen">
        {/* Artistic Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#112250]/60 via-[#112250]/80 to-[#112250]"></div>
          </div>

          <div className="relative z-10 text-center text-white px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#E0C58F]/30">
                <Sparkles className="w-4 h-4 text-[#E0C58F]" />
                <span className="text-sm font-bold tracking-wider uppercase text-[#F5F0E9]">
                  Our Services
                </span>
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 break-words hyphens-auto max-w-4xl mx-auto leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {service.title}
              </h1>
              <p
                className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {service.short}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#E0C58F]" />
                  <span className="font-bold text-[#F5F0E9]">
                    {service.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#E0C58F]" />
                  <span className="font-bold text-[#F5F0E9]">
                    Starting at {service.price}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </section>

        {/* Content Navigation */}
        <div className="bg-[#F5F0E9] backdrop-blur-md transition-all duration-300 mt-10 sticky top-0 z-20 border-b border-[#E0C58F]/10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 py-4">
              {[
                { id: "overview", label: "Overview", icon: Info },
                { id: "benefits", label: "Benefits", icon: ShieldCheck },
                { id: "process", label: "Process", icon: List },
                { id: "faq", label: "FAQ", icon: HelpCircle },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-1.5 transition-all duration-300 outline-none group ${
                      isActive
                        ? "text-[#F5F0E9]"
                        : "text-[#3C507D] hover:text-[#112250]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#112250] rounded-full shadow-lg"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide">
                      <Icon
                        className={`w-3.5 h-3.5 md:w-4 md:h-4 ${
                          isActive ? "text-[#E0C58F]" : "opacity-70"
                        }`}
                      />
                      <span className="whitespace-nowrap">{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid lg:grid-cols-2 gap-16 items-start"
              >
                <div className="space-y-8">
                  <h2
                    className="text-4xl font-bold text-[#112250]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Description
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <div className="bg-[#112250] p-8 rounded-3xl border border-[#E0C58F]/20 shadow-xl">
                    <h3 className="text-xl font-bold text-[#E0C58F] mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-[#F5F0E9]/90 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:translate-x-2"
                        >
                          <Check className="w-5 h-5 text-[#E0C58F] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E0C58F]/20 to-[#112250]/10 rounded-3xl blur-3xl -z-10"></div>
                  <img
                    src={service.image}
                    className="rounded-3xl shadow-2xl w-full aspect-square object-cover"
                    alt="Service feature"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block max-w-xs">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "I could see immediate results. My skin has never looked
                      more radiant!"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "benefits" && (
              <motion.div
                key="benefits"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {service.detailedBenefits.map((detail, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-[#E0C58F]/10 hover:border-[#E0C58F] group"
                  >
                    <div className="w-12 h-12 bg-[#112250] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#E0C58F] group-hover:text-[#112250] text-[#E0C58F] transition-colors duration-300">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <p className="text-[#112250] font-bold text-lg leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "process" && (
              <motion.div
                key="process"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl mx-auto"
              >
                <div className="space-y-12">
                  {service.process.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-8 items-start relative group"
                    >
                      {i !== service.process.length - 1 && (
                        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-[#E0C58F]/30 -translate-x-1/2"></div>
                      )}
                      <div className="w-12 h-12 rounded-full bg-[#112250] text-[#E0C58F] flex items-center justify-center shrink-0 font-bold text-xl shadow-lg shadow-[#112250]/20 z-10 border border-[#E0C58F]/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E0C58F] group-hover:text-[#112250]">
                        {step.step}
                      </div>
                      <div className="pt-2 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg border border-transparent hover:border-[#E0C58F]/20 flex-1">
                        <h3 className="text-2xl font-bold text-[#112250] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[#3C507D] text-lg font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "faq" && (
              <motion.div
                key="faq"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="max-w-3xl mx-auto space-y-6"
              >
                {service.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E0C58F]/20 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-[#E0C58F] hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <h3 className="text-xl font-bold text-[#112250] mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-[#3C507D] text-lg font-medium">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic CTA Section */}
        <section className="bg-[#F5F0E9] py-24 relative overflow-hidden border-t border-white/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F5F0E9] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#112250] mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Ready for your {service.title}?
            </h2>
            <p className="text-[#112250]/80 text-xl mb-12 font-medium">
              Transform your skin and experience the glow you've always wanted.
              Our appointments fill up fast—secure your spot today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto bg-[#112250] text-[#E0C58F] px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#112250]/20 transition-all transform hover:-translate-y-1"
              >
                Book Now
              </button>
              <Link
                href="/services"
                className="w-full sm:w-auto text-[#112250] border border-[#112250]/30 hover:bg-[#112250]/5 px-10 py-5 rounded-full font-bold text-lg transition-all"
              >
                View Other Treatments
              </Link>
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
