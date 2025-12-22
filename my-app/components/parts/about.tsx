"use client"
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="relative rounded-full overflow-hidden w-full aspect-square shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop" 
                alt="Skincare professional" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Journey at<br />
              <span className="text-blue-600">Youthful Glow Studio</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              At Youthful Glow Studio, we're dedicated to enhancing your natural beauty and boosting self-confidence. Founded by experienced professionals, our commitment to excellence has made us a trusted destination for skincare and wellness.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Years of Experience</h3>
                  <p className="text-gray-600">Benefit from over years of industry experience.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Commitment to Excellence</h3>
                  <p className="text-gray-600">We provide top-quality services.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Personalized Beauty Experiences</h3>
                  <p className="text-gray-600">Empowering beauty tailored just for you.</p>
                </div>
              </div>
            </div>

            <Link href="/contact">
              <button className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-4">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}