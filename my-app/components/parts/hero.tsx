"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from "framer-motion";
import {
  Play,
  ArrowRight,
  X,
  Camera,
  Heart,
  MessageCircle,
  Send,
  Info,
} from "lucide-react";
import Link from "next/link";
import { reviews } from "@/lib/reviews";

export default function HeroSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  // Use only first 3 reviews for hero section
  const heroReviews = reviews.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % heroReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textRevealVariants: Variants = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      opacity: 0,
      y: 20,
    },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "circOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex items-start lg:items-center bg-white overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E0C58F]/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#3C507D]/10 rounded-full blur-[150px]"
      />

      <div className="max-w-7xl mx-auto px-6 pt-5 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content: Typography Focused */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-[#E0C58F]/30 shadow-lg group">
                <div className="w-2 h-2 bg-[#E0C58F] rounded-full animate-ping" />
                <span className="text-[10px] md:text-sm font-black tracking-[0.4em] text-[#112250] uppercase">
                  PERSONALIZED SKINCARE BY MARCIA
                </span>
              </div>
            </motion.div>

            {/* Main Title with Invisible to Visible Reveal */}
            <div className="space-y-4">
              <motion.h1
                variants={textRevealVariants}
                className="text-6xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-[#112250] tracking-tighter pb-4"
                style={{
                  fontFamily: "Playfair Display, serif",
                  letterSpacing: "1px",
                }}
              >
                Glowing Skin,
                <span className="block pt-3 pb-3 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-[#3C507D] to-[#E0C58F]">
                  Graceful Aging
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-[#3C507D] font-medium leading-relaxed max-w-xl italic"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                "At Youthful Glow Studio, we believe in nurturing your skin and
                spirit."
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E0C58F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="relative z-10 text-[#112250] text-lg leading-relaxed font-medium">
                Our personalized treatments are designed to target concerns like
                hyperpigmentation, acne, and collagen loss—helping you achieve
                visibly healthier, radiant skin. From expert hair removal and
                soothing relaxation massage to advanced skincare solutions, each
                visit is a step toward glowing confidence and true self-care.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5"
            >
              <Link
                href="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true"
                target="_blank"
              >
                <button className="relative px-12 py-6 rounded-full font-black text-white tracking-[0.2em] uppercase text-xs overflow-hidden shadow-2xl group transition-transform active:scale-95">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#112250] to-[#3C507D] group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#E0C58F] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 group-hover:text-[#112250] transition-colors duration-500">
                    BOOK NOW
                  </span>
                </button>
              </Link>

              <Link href="/contact">
                <button className="relative px-12 py-6 rounded-full font-black text-[#112250] bg-white border-2 border-[#112250] tracking-[0.2em] uppercase text-xs overflow-hidden shadow-2xl group transition-transform active:scale-95 flex items-center gap-3">
                  <div className="absolute inset-0 bg-[#E0C58F] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 group-hover:text-[#112250] transition-colors duration-500 flex items-center gap-3">
                    GET IN TOUCH
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>

              <div className="w-full flex justify-center lg:justify-start pt-2">
                <Link
                  href="#discovery"
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#3C507D] hover:text-[#112250] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#E0C58F] transition-colors">
                    <Info className="w-4 h-4" />
                  </div>
                  Not sure which service? Use our Treatment Assistant
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content: Parallax Depth Card */}
          <motion.div
            style={{ scale, opacity }}
            className="relative h-full flex items-center justify-center lg:justify-end"
          >
            {/* Phone Mockup with 3D Effect */}
            <motion.div
              initial={{ rotateY: 20, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
              className="relative w-full max-w-[400px] aspect-[9/16] rounded-[3.5rem] p-4 bg-gradient-to-br from-[#E0C58F] to-[#D9CBC2] shadow-[0_50px_100px_-20px_rgba(17,34,80,0.5)] border-[8px] border-white/20"
            >
              <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-black relative">
                {/* Main Visual */}
                <motion.img
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity }}
                  src="/home/home-banner.jpg"
                  alt="Radiant Skin"
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Instagram Style Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

                {/* Top UI */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
                  <X className="text-white w-6 h-6 opacity-60" />
                  <div className="flex gap-2">
                    <Camera className="text-white w-6 h-6 opacity-60" />
                    <div className="w-1.5 h-1.5 bg-[#E0C58F] rounded-full" />
                  </div>
                </div>

                {/* Bottom Reviews Overlay */}
                <div className="absolute bottom-8 left-6 right-6 space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E0C58F] to-[#112250] flex items-center justify-center font-bold text-[#F5F0E9] text-xs">
                          {heroReviews[currentReview].name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white text-sm font-bold">
                            {heroReviews[currentReview].name}
                          </p>
                          <p className="text-[#E0C58F] text-[10px] uppercase tracking-widest font-black">
                            Verified Review
                          </p>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed italic">
                        "{heroReviews[currentReview].review}"
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Reaction Buttons */}
                  <div className="flex gap-6 pb-2 pl-2">
                    <Heart className="text-white w-7 h-7 hover:text-red-400 transition-colors cursor-pointer" />
                    <MessageCircle className="text-white w-7 h-7 hover:text-[#E0C58F] transition-colors cursor-pointer" />
                    <Send className="text-white w-7 h-7 hover:text-blue-400 transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Depth Decors */}
            <motion.div
              style={{ y: y1 }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#E0C58F] to-transparent rounded-full blur-2xl opacity-40"
            />
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-[#3C507D] to-transparent rounded-full blur-3xl opacity-30"
            />
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#112250] to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#112250]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
