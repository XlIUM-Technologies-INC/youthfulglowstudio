// app/about/page.tsx
"use client";
import RootLayout from "@/components/layouts/RootLayout";
import { Heart, Award, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <RootLayout>
        {/* Hero Section */}
        <div className="bg-[#112250] text-[#F5F0E9] py-24 relative overflow-hidden border-b border-[#E0C58F]/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E0C58F] rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#3C507D] rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1
              className="text-5xl md:text-6xl font-black mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Who We Are
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-[#E0C58F] font-medium"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Welcome to Youthful Glow Studio
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/WhatsApp Image 2026-01-11 at 22.18.00.jpeg"
                alt="Youthful Glow Studio"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-[#E0C58F]" />
                <h2
                  className="text-4xl font-bold text-[#112250]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Our Story
                </h2>
              </div>
              <p className="text-[#3C507D] text-lg leading-relaxed mb-6 font-medium">
                At Youthful Glow Studio, we believe that skincare is more than
                just a routine—it's a form of self-love. Founded by certified
                medical esthetician{" "}
                <span className="font-bold text-[#112250]">
                  Marcia Edmondson
                </span>
                , our studio is a cozy, professional space dedicated to helping
                you feel confident, radiant, and truly cared for.
              </p>
              <p className="text-[#3C507D] text-lg leading-relaxed mb-6 font-medium">
                We specialize in personalized skincare treatments that bring out
                your natural glow, using professional products and techniques
                tailored to your unique needs. Whether you're here for a
                relaxing facial, a deep-cleansing back treatment, or expert
                advice, you'll always be treated with kindness, respect, and
                genuine passion for your skin's health.
              </p>
              <div className="bg-[#112250] border-l-4 border-[#E0C58F] p-8 rounded-r-2xl shadow-lg">
                <p className="text-[#F5F0E9] text-xl italic font-bold">
                  "Come as you are, and leave feeling your absolute best—because
                  you deserve it."
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-[#F5F0E9] rounded-3xl shadow-xl p-12 mb-20 text-center border border-[#E0C58F]/20 relative overflow-hidden">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#112250] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Mission
            </h2>
            <p className="text-2xl text-[#3C507D] font-black max-w-3xl mx-auto leading-relaxed italic">
              "Helping you glow with confidence, one facial at a time."
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E0C58F]/10">
              <div className="bg-[#112250] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md border border-[#E0C58F]/30">
                <Award className="w-8 h-8 text-[#E0C58F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#112250] mb-4">
                Professional Excellence
              </h3>
              <p className="text-[#3C507D] font-medium leading-relaxed">
                Certified medical esthetician with expertise in advanced
                skincare treatments and techniques.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E0C58F]/10">
              <div className="bg-[#112250] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md border border-[#E0C58F]/30">
                <Heart className="w-8 h-8 text-[#E0C58F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#112250] mb-4">
                Personalized Care
              </h3>
              <p className="text-[#3C507D] font-medium leading-relaxed">
                Every treatment is customized to your unique skin needs,
                ensuring the best results for you.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E0C58F]/10">
              <div className="bg-[#112250] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md border border-[#E0C58F]/30">
                <Users className="w-8 h-8 text-[#E0C58F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#112250] mb-4">
                Welcoming Environment
              </h3>
              <p className="text-[#3C507D] font-medium leading-relaxed">
                A cozy, professional space where you're treated with kindness,
                respect, and genuine care.
              </p>
            </div>
          </div>

          {/* Meet Marcia Section */}
          <div className="bg-[#112250] rounded-3xl shadow-2xl overflow-hidden border border-[#E0C58F]/20 relative">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 text-[#F5F0E9] flex flex-col justify-center relative z-10">
                <h2
                  className="text-4xl font-bold mb-6 text-[#E0C58F]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Meet Marcia Edmondson
                </h2>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  As a certified medical esthetician, Marcia brings professional
                  expertise and a genuine passion for skincare to every
                  treatment. Her goal is simple: to help you feel confident,
                  beautiful, and truly cared for in your own skin.
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  With a focus on personalized care and using only
                  professional-grade products, Marcia creates a welcoming
                  experience where your comfort and skin health always come
                  first.
                </p>
              </div>
              <div className="h-full min-h-[400px]">
                <img
                  src="/facials-skincare-kitchener-waterloo.webp"
                  alt="Marcia Edmondson - Certified Medical Esthetician"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h3
              className="text-3xl font-bold text-[#112250] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Ready to Experience the Glow?
            </h3>
            <p className="text-[#3C507D] font-medium text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment today and discover why our clients love
              their experience at Youthful Glow Studio.
            </p>
            <Link href="/services">
              <button className="bg-[#112250] text-[#F5F0E9] px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3 border border-[#E0C58F]/30 hover:bg-[#3C507D]">
                Book Your Glow Session
              </button>
            </Link>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
