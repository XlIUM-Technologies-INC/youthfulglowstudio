// app/about/page.tsx
"use client"
import RootLayout from "@/components/layouts/RootLayout";
import { Heart, Sparkles, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
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
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=600&fit=crop"
              alt="Youthful Glow Studio"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Youthful Glow Studio, we believe that skincare is more than just a routine—it's a form of self-love. 
              Founded by certified medical esthetician <span className="font-semibold text-blue-600">Marcia Edmondson</span>, 
              our studio is a cozy, professional space dedicated to helping you feel confident, radiant, and truly cared for.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We specialize in personalized skincare treatments that bring out your natural glow, using professional 
              products and techniques tailored to your unique needs. Whether you're here for a relaxing facial, 
              a deep-cleansing back treatment, or expert advice, you'll always be treated with kindness, respect, 
              and genuine passion for your skin's health.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl">
              <p className="text-gray-800 text-lg italic font-medium">
                Come as you are, and leave feeling your absolute best—because you deserve it.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-20 text-center">
          <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Helping you glow with confidence, one facial at a time.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Certified medical esthetician with expertise in advanced skincare treatments and techniques.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Care</h3>
            <p className="text-gray-600 leading-relaxed">
              Every treatment is customized to your unique skin needs, ensuring the best results for you.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcoming Environment</h3>
            <p className="text-gray-600 leading-relaxed">
              A cozy, professional space where you're treated with kindness, respect, and genuine care.
            </p>
          </div>
        </div>

        {/* Meet Marcia Section */}
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">Meet Marcia Edmondson</h2>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                As a certified medical esthetician, Marcia brings professional expertise and a genuine passion 
                for skincare to every treatment. Her goal is simple: to help you feel confident, beautiful, 
                and truly cared for in your own skin.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                With a focus on personalized care and using only professional-grade products, Marcia creates 
                a welcoming experience where your comfort and skin health always come first.
              </p>
            </div>
            <div className="h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1559599746-900c5e2b5fbb?w=800&h=800&fit=crop"
                alt="Marcia Edmondson - Certified Medical Esthetician"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience the Glow?</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why our clients love their experience at Youthful Glow Studio.
          </p>
          <button className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            Book Your Glow Session
          </button>
        </div>
      </div>
    </RootLayout>
  );
}
