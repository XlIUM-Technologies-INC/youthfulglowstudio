import React from 'react';
import { Check } from 'lucide-react';

interface BenefitsSectionProps {
  benefits: string[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Key Benefits</h2>
        <p className="text-gray-600 text-center mb-10">
          Everything you'll gain from this treatment
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
              <Check className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
