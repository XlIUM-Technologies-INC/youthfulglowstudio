"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Target,
  Zap,
  Waves,
  User,
  ArrowRight,
  RefreshCcw,
  Check,
  Info,
  Feather,
} from "lucide-react";
import Link from "next/link";

const CONCERNS = [
  {
    id: "glow",
    label: "Glow & Brighten",
    icon: Sparkles,
    color: "from-amber-200 to-yellow-400",
    description: "Instant radiance boost",
  },
  {
    id: "acne",
    label: "Blemish Control",
    icon: Target,
    color: "from-blue-200 to-cyan-400",
    description: "Clarify & rebalance skin",
  },
  {
    id: "restore",
    label: "Relax & Restore",
    icon: Waves,
    color: "from-purple-200 to-pink-400",
    description: "Deep relaxation experience",
  },
  {
    id: "waxing",
    label: "Comfort Waxing",
    icon: Feather, // Light, smooth
    color: "from-rose-200 to-red-300",
    description: "Gentle hair removal",
  },
  {
    id: "new",
    label: "New Here?",
    icon: User,
    color: "from-emerald-200 to-teal-400",
    description: "Skin analysis–based facial",
  },
];

const RECOMMENDATIONS: Record<string, any> = {
  glow: {
    title: "Dermaplaning",
    slug: "dermaplaning",
    image: "/images/dermaplaning.webp",
    reason:
      "Perfect for instant brightness and removing 'peach fuzz'. It creates a smooth canvas for your glow.",
    match: "98% Match",
  },
  acne: {
    title: "Zena Algae Peel",
    slug: "zena-algae-peel",
    image: "/images/Zena_Algae_Peel.webp",
    reason:
      "A natural, mechanical resurfacing peel that uses marine algae crystals to exfoliate and stimulate collagen—helping reduce acne, smooth texture, and improve overall skin clarity and tone, with minimal downtime.",
    match: "95% Match",
  },
  restore: {
    title: "Relaxation Massage",
    slug: "aromatherapy-massage",
    image: "/images/Massage.webp",
    reason:
      "A gentle, soothing massage that promotes deep relaxation, relieves muscle tension, and improves circulation.",
    match: "96% Match",
  },
  waxing: {
    title: "Waxing Hair Removal",
    slug: "waxing",
    image: "/images/Hair_Removal.webp",
    reason:
      "Professional hair removal for smooth, long-lasting results. Customized for your comfort.",
    match: "100% Match",
  },
  new: {
    title: "Made for You Facial",
    slug: "made-for-you-facial",
    image: "/images/Made_for_You_Facial.webp",
    reason:
      "Our Made For You Facial is ideal for first-timers. We assess your skin, tailor every step to your needs, and create a treatment that delivers visible results while keeping your skin calm, balanced, and healthy.",
    match: "100% Match",
  },
};

export default function TreatmentFinder() {
  const [step, setStep] = useState(1);
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);

  const handleConcernSelect = (id: string) => {
    setSelectedConcern(id);
    setStep(2);
  };

  const reset = () => {
    setStep(1);
    setSelectedConcern(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 border border-white shadow-[0_50px_100px_-20px_rgba(17,34,80,0.1)] overflow-hidden">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#112250] flex items-center justify-center">
                  <User className="text-[#E0C58F] w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3C507D]">
                  Step 01
                </span>
              </div>

              <h3
                className="text-4xl md:text-5xl font-black text-[#112250] tracking-tight leading-none"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                What's your primary <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C507D] to-[#E0C58F]">
                  skin goal
                </span>{" "}
                today?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CONCERNS.map((concern) => (
                  <motion.button
                    key={concern.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleConcernSelect(concern.id)}
                    className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-[#E0C58F]/10 hover:border-[#E0C58F]/50 shadow-sm hover:shadow-xl transition-all group text-left"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${concern.color} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}
                    >
                      <concern.icon className="text-[#112250] w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xl font-black text-[#112250]">
                        {concern.label}
                      </span>
                      <span className="text-sm text-[#3C507D] font-medium opacity-60">
                        {concern.description}
                      </span>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-[#E0C58F] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E0C58F] flex items-center justify-center">
                    <Check className="text-[#112250] w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3C507D]">
                    Discovery Complete
                  </span>
                </div>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#3C507D] hover:text-[#112250] transition-colors"
                >
                  <RefreshCcw className="w-4 h-4" /> Start Over
                </button>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#E0C58F]/20 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white rounded-[2.5rem] p-10 border border-[#E0C58F]/10 shadow-2xl flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src={
                        selectedConcern && RECOMMENDATIONS[selectedConcern]
                          ? RECOMMENDATIONS[selectedConcern].image
                          : "/images/Made_for_You_Facial.webp"
                      }
                      className="w-full h-full object-cover"
                      alt="Recommended Treatment"
                    />
                  </div>
                  <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
                    <div className="inline-block bg-[#112250] text-[#E0C58F] px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                      Best Match: {RECOMMENDATIONS[selectedConcern!].match}
                    </div>
                    <h4
                      className="text-3xl md:text-4xl font-black text-[#112250] leading-tight"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {RECOMMENDATIONS[selectedConcern!].title}
                    </h4>
                    <p className="text-[#3C507D] font-medium text-lg leading-relaxed italic">
                      "{RECOMMENDATIONS[selectedConcern!].reason}"
                    </p>
                    <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                      <Link
                        href={`/services/${
                          RECOMMENDATIONS[selectedConcern!].slug
                        }`}
                      >
                        <button className="bg-[#112250] text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
                          View Treatment
                        </button>
                      </Link>
                      <Link
                        href="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true"
                        target="_blank"
                      >
                        <button className="border-2 border-[#112250] text-[#112250] px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#112250] hover:text-white transition-all">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#E0C58F]/10 rounded-2xl border border-[#E0C58F]/20">
                <Info className="text-[#112250] w-5 h-5 mt-1 shrink-0" />
                <p className="text-[#3C507D] text-sm font-medium">
                  <strong>Still not sure?</strong> We recommend the{" "}
                  <strong>'Made for You' Facial</strong>. It begins with a
                  professional skin analysis where we decide the best approach
                  together.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
