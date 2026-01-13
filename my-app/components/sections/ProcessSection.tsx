import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-2 text-center text-[#112250]" style={{fontFamily: 'Playfair Display, serif'}}>How It Works</h2>
        <p className="text-[#3C507D] text-center mb-12 font-medium">
          A step-by-step breakdown of your treatment experience
        </p>

        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-2 w-4 h-0.5 bg-[#E0C58F]"></div>
              )}

              {/* Step card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-[#E0C58F]/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#112250] text-[#E0C58F] flex items-center justify-center font-bold border border-[#E0C58F]/30 shadow-md">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-[#112250]">{step.title}</h3>
                </div>
                <p className="text-sm text-[#3C507D] font-medium leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline for mobile */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#112250] text-[#E0C58F] flex items-center justify-center font-bold shrink-0 border border-[#E0C58F]/30">
                  {step.step}
                </div>
                {index < steps.length - 1 && <div className="w-0.5 h-12 bg-[#E0C58F]/50 mt-2"></div>}
              </div>
              <div className="pb-4">
                <h3 className="font-bold text-[#112250]">{step.title}</h3>
                <p className="text-sm text-[#3C507D] mt-1 font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
