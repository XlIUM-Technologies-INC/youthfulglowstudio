"use client"
import RootLayout from "@/components/layouts/RootLayout";
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Link from "next/link";

export default function ReviewPage() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      review: "Absolutely transformative experience! The personalized facial treatment has given me the confidence I needed. My skin has never looked better, and the team is so professional and caring.",
      date: "2 weeks ago"
    },
    {
      name: "Emily Martinez",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      review: "I've tried many skincare studios, but Youthful Glow is exceptional. The under-eye treatment worked wonders, and I love how they customize everything to my specific needs. Highly recommend!",
      date: "1 month ago"
    },
    {
      name: "Jessica Chen",
      role: "Fashion Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      rating: 5,
      review: "The hair treatment and facial massage combo is pure bliss! Not only did my skin glow, but I felt completely relaxed. This is my go-to place for self-care now.",
      date: "3 weeks ago"
    },
    {
      name: "Amanda Williams",
      role: "Real Estate Agent",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
      rating: 5,
      review: "Professional, clean, and results-driven. Marcia truly understands skin care and takes time to explain every step. I've seen amazing improvements in my hyperpigmentation issues.",
      date: "2 months ago"
    },
    {
      name: "Rebecca Thompson",
      role: "Healthcare Professional",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      rating: 5,
      review: "The attention to detail and genuine care for clients sets this studio apart. Every visit feels like a retreat. My skin has never been healthier, and I always leave feeling rejuvenated.",
      date: "1 week ago"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <RootLayout>
      <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border-4 border-[#5A95CD] opacity-5 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-[#5A95CD] opacity-5 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-[#5A95CD]">Reviews</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from real people who trusted us with their skincare journey
          </p>
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
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={reviews[currentReview].image}
                  alt={reviews[currentReview].name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">{reviews[currentReview].name}</h4>
                <p className="text-gray-600 text-sm">{reviews[currentReview].role}</p>
                <p className="text-gray-500 text-xs mt-1">{reviews[currentReview].date}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
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

        {/* Review Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#5A95CD] hover:shadow-xl transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#5A95CD] fill-blue-600" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "{review.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[#5A95CD] transition-colors">
                  <img 
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-gray-600 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
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
  );
}