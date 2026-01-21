"use client";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { X, Camera, Heart, MessageCircle, Send } from "lucide-react";
import { reviews } from "@/lib/reviews";

export default function PhoneReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  // Use only first 3 reviews for phone mockup
  const heroReviews = reviews.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % heroReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
  );
}
