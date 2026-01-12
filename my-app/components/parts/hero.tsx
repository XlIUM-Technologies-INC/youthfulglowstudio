"use client"
import { useState, useEffect } from 'react';
import { Play, Star } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-scroll through reviews every 4 seconds
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>

      <div className="relative min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100 overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          {/* Location Badge */}
          <div className={`transition-all duration-1000 mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-blue-100">
              <div className="w-2 h-2 bg-[#5A95CD] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700" style={{fontFamily: 'Montserrat, sans-serif'}}>
                PERSONALIZED SKINCARE BY MARCIA
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                  <span className="text-[#5A95CD] block mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                    Glowing Skin,
                  </span>
                  <span className="text-slate-900 block" style={{fontFamily: 'Playfair Display, serif'}}>
                    Graceful Aging
                  </span>
                </h1>
              </div>

              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-l-4 border-[#5A95CD]">
                  <p className="text-gray-700 text-lg leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem'}}>
                    At Youthful Glow Studio, we believe in nurturing your skin and spirit. Our personalized treatments are designed to target concerns like hyperpigmentation, acne, and collagen loss—helping you achieve visibly healthier, radiant skin. From expert hair removal and soothing relaxation massage to advanced skincare solutions, each visit is a step toward glowing confidence and true self-care.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true"
                    data-cal-link="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true"
                    data-cal-config='{"layout":"month_view","theme":"light"}'
                    className="group relative inline-flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-[#5A95CD] to-[#4A85BD] rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <button className="relative bg-linear-to-r from-[#5A95CD] to-[#4A85BD] text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{fontFamily: 'Montserrat, sans-serif'}}>
                      BOOK NOW
                    </button>
                  </a>
                  
                  <a href="/contact" className="inline-flex items-center justify-center">
                    <button className="bg-white border-2 border-[#5A95CD] text-[#5A95CD] hover:bg-[#5A95CD] hover:text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{fontFamily: 'Montserrat, sans-serif'}}>
                      Get In Touch
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Instagram Story/Reel Style */}
            <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                {/* Phone-like Container with Gold Border */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-gradient-to-b from-amber-400 via-amber-500 to-amber-600" style={{
                  background: 'linear-gradient(145deg, #d4a574 0%, #b8860b 100%)',
                  padding: '6px'
                }}>
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-black">
                    {/* Main Image */}
                    <img
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=900&fit=crop"
                      alt="Beautiful woman with clear, glowing skin"
                      className="w-full h-175 object-cover"
                    />
                    
                    {/* Top Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60"></div>
                    
                    {/* Top Bar - X and Camera Icons */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                      <button className="w-10 h-10 flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>

                    {/* Instagram Reels Style - Auto-scrolling Reviews */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="relative h-48 mb-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ${
                              index === currentReview
                                ? 'opacity-100 translate-y-0'
                                : index < currentReview
                                  ? 'opacity-0 -translate-y-full'
                                  : 'opacity-0 translate-y-full'
                            }`}
                          >
                            {/* Profile Section */}
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#5A95CD] to-[#4A85BD] flex items-center justify-center shrink-0 border-2 border-white">
                                <span className="text-white font-bold text-lg">{review.name.charAt(0)}</span>
                              </div>
                              <span className="font-semibold text-white text-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
                                {review.name}
                              </span>
                            </div>

                            {/* Review Card */}
                            <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-5">
                              <div className="flex gap-1 mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                                ))}
                              </div>
                              <p className="text-white text-base leading-relaxed line-clamp-3" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 400}}>
                                {review.review}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Action Buttons - Instagram Style */}
                      <div className="flex items-center justify-start gap-6 mt-4">
                        <button className="transform hover:scale-110 transition-transform">
                          <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="transform hover:scale-110 transition-transform">
                          <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </button>
                        <button className="transform hover:scale-110 transition-transform">
                          <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-br from-amber-400 to-amber-600 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}