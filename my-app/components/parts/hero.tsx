"use client"
import { useState, useEffect } from 'react';
import { Play, Star } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Dialog>
      <div className="pt-24 md:pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Decorative Elements */}
        <div className="absolute top-40 right-20 w-32 h-32 border-4 border-[#5A95CD] opacity-10 rotate-45"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 border-4 border-[#5A95CD] opacity-10 rotate-12"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4">
                  Glowing Skin,<br />
                  <span className="text-[#5A95CD]">Graceful Aging</span><br />
                  Personalized Skincare by Marcia
                </h1>
              </div>

              <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#5A95CD]">
                  <div className="text-6xl text-[#5A95CD] leading-none">"</div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      At Youthful Glow Studio, we believe in nurturing your skin and spirit. Our personalized treatments are designed to target concerns like hyperpigmentation, acne, and collagen loss—helping you achieve visibly healthier, radiant skin. From expert hair removal and soothing relaxation massage to advanced skincare solutions, each visit is a step toward glowing confidence and true self-care.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-[#5A95CD] to-[#4A85BD] hover:from-[#4A85BD] hover:to-[#3A75AD] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                    Get In Touch
                    <span className="text-xl">→</span>
                  </button>
                </Link>
              </div>

              <div className={`flex items-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-blue-200 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-blue-300 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-blue-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                    +
                  </div>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">500+ Happy Clients</p>
                  <p className="text-gray-600 text-sm">Trust our expertise</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop" 
                  alt="Beautiful woman with clear, glowing skin" 
                  className="w-full h-[600px] object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Floating Play Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <DialogTrigger asChild>
                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-[#5A95CD] ml-1" fill="currentColor" />
                    </button>
                  </DialogTrigger>
                </div>

                {/* Decorative Stars */}
                <div className="absolute top-8 right-8">
                  <Star className="w-12 h-12 text-white fill-white" />
                </div>
                <div className="absolute bottom-1/3 right-12">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogContent className="max-w-3xl bg-black border-none p-0">
        <div className="aspect-video">
          {/* Replace this with your video embed */}
          <div className="w-full h-full flex items-center justify-center bg-black">
            <p className="text-white">Video coming soon...</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}