"use client";
import { useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const SERVICES = [
  {
    slug: "zena-facial",
    title: "Zena Facial",
    short: "Rejuvenating treatment",
    description:
      "Experience the premium Zena Facial, a luxurious 60-minute treatment that combines advanced techniques with premium skincare products. This rejuvenating facial deeply cleanses, exfoliates, and hydrates your skin, leaving you with a radiant, youthful glow.",
    duration: "60 mins",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80",
  },

  {
    slug: "diamond-peel",
    title: "Diamond Microdermabrasion",
    short: "Exfoliation perfection",
    description:
      "Reveal smoother, brighter skin with our Diamond Microdermabrasion treatment. This non-invasive procedure gently removes dead skin cells, minimizes pores, and reduces the appearance of fine lines and sun damage for a flawless complexion.",
    duration: "50 mins",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80",
  },
];

export default function ParallaxServices() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative bg-[#F5F0E9] py-32 overflow-hidden"
    >
      {/* Parallax Background Blobs */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-20 right-[-10%] w-[40%] h-[40%] bg-[#E0C58F]/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-xl px-6 py-2 rounded-full border border-[#E0C58F]/20"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3C507D]">
              Curation
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-[#112250] tracking-tighter"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Luxury <span className="text-[#3C507D]/40">Treatments</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link
              href="#discovery"
              className="inline-flex items-center gap-2 bg-[#112250]/5 hover:bg-[#112250]/10 px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-[#3C507D] transition-colors border border-[#E0C58F]/10"
            >
              Personalized Help Finding Your Treatment
            </Link>
          </motion.div>
        </div>

        <div className="space-y-64">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [50, 0, 0, -50]
  );

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-20`}
    >
      {/* Image Side with Parallax */}
      <div className="w-full lg:w-3/5 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(17,34,80,0.4)] border-[12px] border-white/40"
        >
          <motion.img
            style={{ scale: 1.2, y: imgY }}
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/40 to-transparent" />
        </motion.div>

        {/* Floating Stat Badge */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className={`absolute ${
            isEven ? "-right-10" : "-left-10"
          } top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/50 hidden lg:block`}
        >
          <p className="text-[#E0C58F] font-black text-xs uppercase tracking-[0.2em] mb-2">
            Duration
          </p>
          <p className="text-[#112250] text-3xl font-black">
            {service.duration}
          </p>
        </motion.div>
      </div>

      {/* Text Side with Scroll-Triggered Invisible/Visible Effect */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="w-full lg:w-2/5 space-y-8"
      >
        <div className="space-y-4">
          <p className="text-[#E0C58F] font-black text-sm uppercase tracking-[0.3em]">
            0{index + 1}.
          </p>
          <h3
            className="text-5xl md:text-6xl font-black text-[#112250] leading-none"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {service.title}
          </h3>
        </div>

        <p
          className="text-xl text-[#3C507D] font-medium leading-relaxed italic"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          "{service.description}"
        </p>

        <Link href={`/services/${service.slug}`}>
          <button className="group relative px-10 py-4 rounded-full font-black text-[#112250] uppercase tracking-[0.2em] text-[10px] overflow-hidden border-2 border-[#112250]/20 hover:border-[#112250] transition-colors duration-500">
            <span className="relative z-10 flex items-center gap-3">
              Explore Detail{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
