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
              className="text-4xl md:text-5xl font-black mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              About Youthful Glow Studio
            </h1>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto text-[#E0C58F] font-medium"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Skincare is more than a routine it's an act of self-care,
              confidence, and connection
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Main Feature: Meet Marcia & Our Story */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E0C58F]/20 mb-20 p-6 lg:p-10">
            {/* Image */}
            <div className="lg:float-left lg:w-[40%] lg:mr-8 mb-6 lg:mb-0">
              <div className="relative bg-[#FBF9F6] p-4 lg:p-6 rounded-2xl">
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-[#112250]/5 transform transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="/marcia.webp"
                    alt="Marcia Edmondson - Youthful Glow Studio"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#112250] mb-6 font-serif">
                Meet Marcia <br />
                <span className="text-[#E0C58F]">
                  The Heart of Youthful Glow
                </span>
              </h2>

              <div className="space-y-4 text-[#3C507D] text-sm lg:text-base leading-relaxed">
                <p>
                  At Youthful Glow Studio, skincare is more than a routine it's
                  an act of self-care, confidence, and connection. Founded by{" "}
                  <strong className="text-[#112250]">Marcia Edmondson</strong>,
                  a double-certified medical skincare esthetician, the studio
                  was created from a genuine love for working with people and
                  helping them feel confident in their skin.
                </p>

                <p>
                  After years in an administrative role that required long hours
                  behind a computer, Marcia realized she was truly a people
                  person energized by interaction, conversation, and hands-on
                  care. She began seeking a career that would allow her to
                  connect with others in a meaningful way. An unexpected
                  encounter with the world of non-surgical aesthetic treatments
                  sparked her interest in esthetics and set her on a new path.
                </p>

                <p>
                  Drawn to the science of skin and the confidence that comes
                  from caring for it, Marcia pursued formal esthetics training
                  in 2022, completing her studies in 2023. Wanting a stronger
                  clinical foundation and hands-on experience, she continued her
                  education at a medical esthetics college, completing extensive
                  in-class and clinical training by March 2024. This advanced
                  training gave her the confidence and expertise to open
                  Youthful Glow Studio.
                </p>

                <p>
                  Today, Marcia specializes in personalized, results-focused
                  skincare treatments, combining professional-grade products
                  with thoughtful, individualized care. Every treatment is
                  guided by education, safety, and genuine care ensuring clients
                  feel heard, respected, and supported throughout their skincare
                  journey.
                </p>

                <div className="bg-[#F5F0E9] text-[#112250] p-6 rounded-xl italic border-l-4 border-[#E0C58F] font-medium text-base text-center">
                  "Come as you are, and leave feeling your absolute best because
                  you deserve it."
                </div>
              </div>
            </div>

            <div className="clear-both"></div>
          </div>

          {/* Mission Statement */}
          <div className="bg-[#F5F0E9] rounded-3xl shadow-xl p-12 mb-20 text-center border border-[#E0C58F]/20 relative overflow-hidden">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#112250] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Mission
            </h2>
            <p className="text-xl text-[#3C507D] font-black max-w-3xl mx-auto leading-relaxed italic">
              "Helping you glow with confidence, one facial at a time."
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E0C58F]/10">
              <div className="bg-[#112250] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md border border-[#E0C58F]/30">
                <Award className="w-8 h-8 text-[#E0C58F]" />
              </div>
              <h3 className="text-xl font-bold text-[#112250] mb-4">
                Double-Certified Excellence
              </h3>
              <p className="text-[#3C507D] font-medium leading-relaxed">
                Medical skincare esthetician with extensive clinical training
                and expertise in advanced, results-focused treatments.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E0C58F]/10">
              <div className="bg-[#112250] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md border border-[#E0C58F]/30">
                <Heart className="w-8 h-8 text-[#E0C58F]" />
              </div>
              <h3 className="text-xl font-bold text-[#112250] mb-4">
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
              <h3 className="text-xl font-bold text-[#112250] mb-4">
                Welcoming Environment
              </h3>
              <p className="text-[#3C507D] font-medium leading-relaxed">
                A cozy, professional space where you're treated with kindness,
                respect, and genuine care.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h3
              className="text-2xl font-bold text-[#112250] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Ready to Experience the Glow?
            </h3>
            <p className="text-[#3C507D] font-medium text-base mb-8 max-w-2xl mx-auto">
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
