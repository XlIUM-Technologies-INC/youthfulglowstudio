"use client"
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { SERVICES } from '@/lib/services';

export default function ServicesSection() {
  // Keep this section a short, visual summary. Each card links to its detail page.
  return (
    <div id="services" className="py-20 bg-linear-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Special <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A quick snapshot of what we offer — click any card to learn more and book.
          </p>
        </div>

        {/* Summary Grid (short descriptions, click-through) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.short}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/services" className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}