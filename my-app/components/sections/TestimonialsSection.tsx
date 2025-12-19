import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-linear-to-br from-gray-50 to-blue-50 rounded-3xl">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">What Clients Say</h2>
        <p className="text-gray-600 text-center mb-12">
          Real feedback from our happy customers
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
