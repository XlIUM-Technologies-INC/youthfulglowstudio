"use client";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      id="about"
      className="py-24 bg-gradient-to-b from-white to-[#F5F0E9] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Parallax & Motion */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-x-[-10%] inset-y-[-10%] bg-gradient-to-tr from-[#E0C58F]/20 to-transparent rounded-full blur-[80px]"></div>
            <div className="relative rounded-[3rem] overflow-hidden w-full aspect-square shadow-[0_50px_100px_-20px_rgba(17,34,80,0.3)] border-[12px] border-white/50 group">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src="/home/studio.png"
                alt="Skincare professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            {/* Decorative Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 hidden md:flex items-center justify-center p-6 text-center"
            >
              <p className="text-[#112250] font-black text-sm uppercase tracking-widest leading-tight">
                Authentic <br />{" "}
                <span className="text-[#E0C58F]">Expertise</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2
                className="text-5xl md:text-6xl font-black text-[#112250] leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Elevating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C507D] to-[#E0C58F]">
                  Natural Beauty
                </span>
              </h2>
              <div className="w-20 h-1 bg-[#E0C58F] rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#3C507D] text-lg md:text-xl leading-relaxed font-medium italic"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              At Youthful Glow Studio, every treatment is an intentional step
              toward self-love. We combine clinical precision with holistic care
              to reveal your most vibrant self.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "Years of Expert Care",
                  desc: "Certified knowledge in advanced medical esthetics.",
                },
                {
                  title: "Commitment to Results",
                  desc: "Tailored protocols for hyperpigmentation, acne, and aging.",
                },
                {
                  title: "Personalized Glow",
                  desc: "Every session is uniquely crafted for your skin's biography.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center shrink-0 border border-[#E0C58F]/10 group-hover:bg-[#112250] transition-colors duration-500">
                    <Check className="w-6 h-6 text-[#E0C58F]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#112250] mb-1 group-hover:text-[#3C507D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#3C507D] font-medium opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <Link href="/contact">
                <button className="relative px-12 py-5 rounded-full font-black text-[#F5F0E9] uppercase tracking-[0.2em] text-xs shadow-2xl group overflow-hidden border border-[#E0C58F]/30 bg-[#112250]">
                  <div className="absolute inset-0 bg-[#3C507D] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                  <span className="relative z-10">Get In Touch</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
