"use client"
import { Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Facial Massage",
      description: "Relaxing facial massage to improve circulation and promote healthy, glowing skin.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=500&fit=crop"
    },
    {
      title: "Hair Treatment",
      description: "Nourishing treatments to restore shine and vitality to your hair.",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=500&fit=crop"
    },
    {
      title: "Under Eye Treatment",
      description: "Specialized care to reduce dark circles and puffiness around the eyes.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=500&fit=crop"
    },
    {
      title: "Hand Massage",
      description: "Soothing hand massage to relieve tension and moisturize your skin.",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=500&fit=crop"
    }
  ];

  return (
    <div id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Special <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant confidence. Explore now.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
}