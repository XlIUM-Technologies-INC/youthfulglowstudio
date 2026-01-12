"use client"
import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    slug: 'zena-facial',
    title: 'Zena Facial',
    short: 'Rejuvenating treatment',
    description: 'Experience our signature Zena Facial, a luxurious 60-minute treatment that combines advanced techniques with premium skincare products. This rejuvenating facial deeply cleanses, exfoliates, and hydrates your skin, leaving you with a radiant, youthful glow.',
    duration: '60 mins',
    image: 'https://plus.unsplash.com/premium_photo-1661281252293-173617fdc3e9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    slug: 'hydra-glow',
    title: 'HydraGlow Therapy',
    short: 'Deep hydration boost',
    description: 'Our HydraGlow Therapy delivers intense moisture deep into your skin layers. Using cutting-edge hydration technology, this treatment plumps fine lines, restores elasticity, and gives your complexion an enviable dewy finish that lasts for days.',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1728949202477-bad2935775cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEZhY2lhbCUyMHNraW5jYXJlfGVufDB8fDB8fHww'
  },
  {
    slug: 'diamond-peel',
    title: 'Diamond Microdermabrasion',
    short: 'Exfoliation perfection',
    description: 'Reveal smoother, brighter skin with our Diamond Microdermabrasion treatment. This non-invasive procedure gently removes dead skin cells, minimizes pores, and reduces the appearance of fine lines and sun damage for a flawless complexion.',
    duration: '50 mins',
    image: 'https://images.unsplash.com/photo-1664549761426-6a1cb1032854?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNraW5jYXJlJTIwc3R1ZGlvJTIwdHJlYXRtZW50fGVufDB8fDB8fHww'
  }

];

export default function ParallaxServices() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="services" className="relative bg-gradient-to-b from-rose-50/30 via-white to-blue-50/30 overflow-hidden pt-20">
      {/* Animated Artistic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Beauty Elements */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200/40 to-rose-300/40 blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
          }}
        />
        <div 
          className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200/40 to-cyan-300/40 blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.15}px) rotate(${-scrollY * 0.05}deg)`
          }}
        />
        <div 
          className="absolute top-96 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-300/30 blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.08}px) translateX(${scrollY * 0.05}px)`
          }}
        />
        <div 
          className="absolute bottom-96 right-1/3 w-56 h-56 rounded-full bg-gradient-to-br from-amber-200/30 to-rose-300/30 blur-3xl"
          style={{
            transform: `translateY(${-scrollY * 0.12}px) translateX(${-scrollY * 0.05}px)`
          }}
        />
        
        {/* Organic Shapes */}
        <div 
          className="absolute top-1/4 right-10 w-64 h-64 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
            background: 'radial-gradient(ellipse at center, rgba(244, 114, 182, 0.3) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-20 w-72 h-72 opacity-20"
          style={{
            transform: `translateY(${-scrollY * 0.18}px) rotate(${-scrollY * 0.08}deg)`,
            background: 'radial-gradient(ellipse at center, rgba(147, 197, 253, 0.3) 0%, transparent 70%)'
          }}
        />
        
        {/* Decorative Dots Pattern */}
        <div 
          className="absolute top-60 left-1/2 grid grid-cols-6 gap-4 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          {[...Array(24)].map((_, i) => (
            <div 
              key={i}
              className="w-1 h-1 rounded-full bg-gradient-to-br from-pink-400 to-purple-400"
              style={{
                animationDelay: `${i * 0.1}s`,
                animation: 'pulse 3s ease-in-out infinite'
              }}
            />
          ))}
        </div>
        
        {/* Floating Sparkles */}
        <div 
          className="absolute top-1/3 right-1/4"
          style={{
            transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.15}deg)`
          }}
        >
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-ping opacity-75" />
            <div className="absolute inset-0 bg-white rounded-full" />
          </div>
        </div>
        <div 
          className="absolute bottom-1/3 left-1/3"
          style={{
            transform: `translateY(${-scrollY * 0.22}px) rotate(${-scrollY * 0.12}deg)`
          }}
        >
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-75" />
            <div className="absolute inset-0 bg-white rounded-full" />
          </div>
        </div>
        
        {/* Soft Gradient Waves */}
        <svg 
          className="absolute top-0 left-0 w-full h-96 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`
          }}
          viewBox="0 0 1440 320"
        >
          <path 
            fill="url(#wave-gradient)" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(251, 207, 232, 0.3)" />
              <stop offset="50%" stopColor="rgba(191, 219, 254, 0.3)" />
              <stop offset="100%" stopColor="rgba(224, 231, 255, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg 
          className="absolute bottom-0 left-0 w-full h-96 opacity-30"
          style={{
            transform: `translateY(${-scrollY * 0.12}px) scaleY(-1)`
          }}
          viewBox="0 0 1440 320"
        >
          <path 
            fill="url(#wave-gradient-2)" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(254, 202, 202, 0.3)" />
              <stop offset="50%" stopColor="rgba(253, 230, 138, 0.3)" />
              <stop offset="100%" stopColor="rgba(252, 231, 243, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floral Accent Shapes */}
        <div 
          className="absolute top-1/2 left-5 w-20 h-20 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.18}px) rotate(${scrollY * 0.2}deg)`,
            background: 'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.2) 25%, transparent 50%)',
            borderRadius: '50% 70% 60% 40% / 40% 50% 60% 50%'
          }}
        />
        <div 
          className="absolute top-2/3 right-16 w-24 h-24 opacity-20"
          style={{
            transform: `translateY(${-scrollY * 0.16}px) rotate(${-scrollY * 0.15}deg)`,
            background: 'radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 25%, transparent 50%)',
            borderRadius: '60% 40% 50% 70% / 50% 60% 40% 50%'
          }}
        />
      </div>

      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-full mb-4">
            
            <span className="text-sm font-semibold text-[#5A95CD] uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Luxury <span className="text-[#5A95CD]">Treatments</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Indulge in our exclusive collection of premium beauty services, each crafted to perfection
          </p>
        </div>
      </div>

  {/* Services with Parallax */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          const isHovered = hoveredIndex === index;
          const parallaxSpeed = 0.05 + (index * 0.02);

          return (
            <div
              key={service.slug}
              className="relative mb-40 last:mb-20"
              style={{
                transform: `translateY(${scrollY * parallaxSpeed}px)`
              }}
            >
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div 
                  className="lg:w-1/2 relative group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    {/* Main Image */}
                    <div className="relative h-[500px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out"
                        style={{
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                        }}
                      />
                      
                      {/* Overlay */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-transparent transition-opacity duration-500"
                        style={{
                          opacity: isHovered ? 0.95 : 0.3
                        }}
                      />
                      
                      {/* Hover Content */}
                      <div 
                        className="absolute inset-0 flex flex-col justify-center p-12 transition-all duration-500"
                        style={{
                          transform: isHovered ? 'translateX(0)' : isEven ? 'translateX(-100%)' : 'translateX(100%)',
                          opacity: isHovered ? 1 : 0
                        }}
                      >
                        <div className="text-white">
                          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                            <span className="text-sm font-medium">{service.duration}</span>
                          </div>
                          <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
                          <p className="text-lg leading-relaxed opacity-90">{service.short}</p>
                        </div>
                      </div>

                      {/* Always Visible Label (when not hovered) */}
                      <div 
                        className="absolute bottom-8 left-8 transition-all duration-500"
                        style={{
                          opacity: isHovered ? 0 : 1,
                          transform: isHovered ? 'translateY(20px)' : 'translateY(0)'
                        }}
                      >
                        <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                        <div className="flex items-center gap-2 text-white/80">
                          <span className="text-sm">{service.duration}</span>
                          <span className="text-white/60">•</span>
                          <span className="text-sm flex items-center gap-1">
                            Hover to explore <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div 
                    className={`absolute -z-10 w-full h-full rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 transition-all duration-500 ${
                      isEven ? '-right-8 -bottom-8' : '-left-8 -bottom-8'
                    }`}
                    style={{
                      opacity: isHovered ? 0.2 : 0.1,
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>

                {/* Text Side */}
                <div className="lg:w-1/2">
                  <div className="opacity-100">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full mb-6">
                      <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      <span className="text-sm font-medium text-blue-700">Service {String(index + 1).padStart(2, '0')}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="bg-white border-2 border-gray-100 rounded-2xl px-6 py-3 shadow-sm">
                        <div className="text-sm text-gray-500 mb-1">Duration</div>
                        <div className="font-semibold text-gray-900">{service.duration}</div>
                      </div>
                      <div className="bg-white border-2 border-gray-100 rounded-2xl px-6 py-3 shadow-sm">
                        <div className="text-sm text-gray-500 mb-1">Experience</div>
                        <div className="font-semibold text-gray-900">Premium</div>
                      </div>
                    </div>

                    <Link
                      href="/services"
                      className="group inline-flex items-center gap-3 bg-[#5A95CD] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <span>Explore all services</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>



      {/* Bottom CTA */}
      <div className="relative py-32 px-6 mt-50 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Begin Your Transformation?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a consultation and let our experts create a personalized treatment plan just for you
              </p>
            <Link href="/services">
                          <button className="inline-flex items-center gap-2 bg-[#5A95CD] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
               <span>Explore all services</span>
               <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}