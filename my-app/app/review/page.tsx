"use client";
import RootLayout from "@/components/layouts/RootLayout";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import { reviews } from "@/lib/reviews";

export default function ReviewPage() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      <RootLayout>
        <section
          id="reviews"
          className="py-24 bg-[#F5F0E9] relative overflow-hidden"
        >
          {/* Decorative Background Elements */}

          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-black text-[#112250] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                What Our Clients Are{" "}
                <span className="text-[#3C507D]">Saying</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-[#112250] text-lg leading-relaxed font-medium">
                  At Youthful Glow Studio, every client is treated with care,
                  intention, and the goal of glowing from the inside out. Here's
                  what some of our wonderful clients have shared about their
                  experiences.
                </p>
                <p className="text-[#3C507D] text-base font-medium">
                  Whether it's your first facial or your fifth, your feedback
                  means the world to me — and helps others feel confident
                  booking their own self-care journey.
                </p>
                <p className="text-[#3C507D] text-base italic font-bold">
                  "I personally respond to every review, because your glow is my
                  passion."
                </p>
                <p className="text-[#112250] font-black mt-6">
                  We're so grateful for the kind words from our glowing clients!
                  <br />
                  <span className="text-sm text-[#3C507D]">
                    These reviews are real feedback from those who've
                    experienced our treatments
                  </span>
                </p>
                <p className="text-[#E0C58F] text-sm font-bold uppercase tracking-widest mt-2">
                  Reviews on Instagram @youthfulglowstudio or Google Reviews
                </p>
              </div>
            </div>

            {/* Main Featured Review */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative border border-[#E0C58F]/20">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 opacity-10">
                  <Quote
                    className="w-20 h-20 text-[#112250]"
                    fill="currentColor"
                  />
                </div>

                {/* Rating Indicator */}
                <div className="flex justify-center mb-6 relative z-10">
                  <span className="text-[#E0C58F] text-sm font-bold uppercase tracking-[0.2em] bg-[#112250]/10 px-4 py-1.5 rounded-full border border-[#E0C58F]/30">
                    Verified Experience
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[#112250] text-xl md:text-xl text-center leading-relaxed mb-8 relative z-10 italic font-medium">
                  "{reviews[currentReview].review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4 relative z-10">
                  <div>
                    <h4 className="font-bold text-[#112250] text-xl text-center uppercase tracking-tight">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="text-[#E0C58F] text-sm text-center font-bold tracking-widest uppercase">
                      {reviews[currentReview].role}
                    </p>
                    <p className="text-[#3C507D] text-xs mt-2 text-center font-medium">
                      {reviews[currentReview].date}
                    </p>
                  </div>
                </div>
                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prevReview}
                    className="w-14 h-14 rounded-full bg-[#112250] hover:bg-[#E0C58F] text-[#E0C58F] hover:text-[#112250] shadow-xl transition-all duration-300 flex items-center justify-center border border-[#E0C58F]/20"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-14 h-14 rounded-full bg-[#112250] hover:bg-[#E0C58F] text-[#E0C58F] hover:text-[#112250] shadow-xl transition-all duration-300 flex items-center justify-center border border-[#E0C58F]/20"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentReview
                          ? "bg-[#112250] w-10"
                          : "bg-[#D9CBC2] hover:bg-[#E0C58F]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-[#3C507D] mb-6 font-bold uppercase tracking-widest text-sm">
                Join hundreds of satisfied clients
              </p>
              <Link href="/services">
                <button className="bg-[#112250] text-[#F5F0E9] px-12 py-5 rounded-full font-bold transition-all duration-300 shadow-2xl hover:shadow-[#112250]/20 transform hover:scale-105 border border-[#E0C58F]/30 hover:bg-[#3C507D]">
                  Book Your Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>
      </RootLayout>
    </>
  );
}
