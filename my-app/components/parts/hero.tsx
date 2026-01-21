"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
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
              <Link href="/services">
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
            {/* Main Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] p-4 bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_30px_60px_-15px_rgba(17,34,80,0.1)]"
            >
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/home/main-banner.webp"
                  alt="Glowing, gracefully aging skin treatment"
                  className="w-full h-full object-cover"
                />

                {/* Soft Overlay for "Glow" effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E0C58F]/10 to-transparent mix-blend-overlay" />
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
