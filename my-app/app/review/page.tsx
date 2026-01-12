"use client"
import RootLayout from "@/components/layouts/RootLayout";
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Link from "next/link";

export default function ReviewPage() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Dorina Cercel",
      role: "Client",
      rating: 5,
      review: "Excellent service! I really enjoyed my facial and my massage! Highly recommended!",
      date: "Google Reviews"
    },
    {
      name: "Melissa",
      role: "Client",
      rating: 5,
      review: "I've gotten a chemical peel done here a couple of times and the results are always amazing! The service is professional and Marcia does a great job making you feel comfortable. My skin looks brand new afterwards so I look forward to coming back for more services!",
      date: "Google Reviews"
    },
    {
      name: "Donna B.",
      role: "Client",
      rating: 5,
      review: "Got microdermabrasion and dermaplaning with Marcia and all 4 times I had the treatments they were amazing experiences. Marcia is friendly and knowledgeable about the treatment she is providing and the products being used. She explains the process thoroughly and what to expect after the treatment. She treated my skin with care, with an end result of it feeling relaxed, rejuvenated and glowing. She makes you feel at home, comfortable and the whole experience was very pleasant.",
      date: "Google Reviews"
    },
    {
      name: "Claudia Koop",
      role: "Client",
      rating: 5,
      review: "I went for a facial last week and it was one of the best. My face didn't feel and look that good in years. I will be going regularly and highly recommended it to all my family and friends. Thank you so much!!",
      date: "Google Reviews"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      <RootLayout>
      <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border-4 border-[#5A95CD] opacity-5 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-[#5A95CD] opacity-5 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            What Our Clients Are <span className="text-[#5A95CD]">Saying</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              At Youthful Glow Studio, every client is treated with care, intention, and the goal of glowing from the inside out. Here's what some of our wonderful clients have shared about their experiences.
            </p>
            <p className="text-gray-600 text-base">
              Whether it's your first facial or your fifth, your feedback means the world to me — and helps others feel confident booking their own self-care journey.
            </p>
            <p className="text-gray-600 text-base italic">
              I personally respond to every review, because your glow is my passion.
            </p>
            <p className="text-gray-700 font-medium mt-6">
              We're so grateful for the kind words from our glowing clients!<br />
              <span className="text-sm text-gray-600">These reviews are real feedback from those who've experienced our treatments</span>
            </p>
            <p className="text-gray-600 text-sm">
              Reviews on Instagram @youthfulglowstudio or Google Reviews
            </p>
          </div>
        </div>

        {/* Main Featured Review */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-linear-to-br from-gray-50 to-[#5A95CD]/5 rounded-3xl p-8 md:p-12 shadow-xl relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-20 h-20 text-[#5A95CD]" fill="currentColor" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 relative z-10">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#5A95CD] fill-blue-600" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-800 text-xl md:text-2xl text-center leading-relaxed mb-8 relative z-10 italic">
              "{reviews[currentReview].review}"
            </p>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-4 relative z-10">
              <div>
                <h4 className="font-bold text-gray-900 text-lg text-center">{reviews[currentReview].name}</h4>
                <p className="text-gray-600 text-sm text-center">{reviews[currentReview].role}</p>
                <p className="text-gray-500 text-xs mt-1 text-center">{reviews[currentReview].date}</p>
              </div>
            </div>            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevReview}
                className="w-12 h-12 rounded-full bg-white hover:bg-[#5A95CD] text-gray-900 hover:text-white shadow-lg transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextReview}
                className="w-12 h-12 rounded-full bg-white hover:bg-[#5A95CD] text-gray-900 hover:text-white shadow-lg transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? 'bg-[#5A95CD] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>


       {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join hundreds of satisfied clients</p>
          <Link href="/services">
            <button className="bg-linear-to-r from-[#5A95CD] to-[#4A85BD] hover:from-[#4A85BD] hover:to-[#3A75AD] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
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