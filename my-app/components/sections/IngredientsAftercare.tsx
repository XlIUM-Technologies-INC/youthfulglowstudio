import React from 'react';
import { Zap } from 'lucide-react';

interface IngredientsAfterCareProps {
  ingredients: string[];
  aftercare: string;
}

export default function IngredientsAftercare({ ingredients, aftercare }: IngredientsAfterCareProps) {
  return (
    <section className="py-16 bg-white rounded-3xl border border-[#E0C58F]/20 shadow-xl">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ingredients */}
          <div>
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#112250]" style={{fontFamily: 'Playfair Display, serif'}}>
              <Zap className="w-6 h-6 text-[#E0C58F]" />
              Premium Ingredients
            </h3>
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="bg-[#F5F0E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-[#D9CBC2]/50 hover:border-[#E0C58F]/50"
                >
                  <p className="font-bold text-[#112250]">{ingredient}</p>
                  <p className="text-sm text-[#3C507D] mt-1 font-medium">
                    Carefully selected for maximum efficacy
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Aftercare */}
          <div>
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#112250]" style={{fontFamily: 'Playfair Display, serif'}}>
              <Zap className="w-6 h-6 text-[#3C507D]" />
              Aftercare Instructions
            </h3>
            <div className="bg-[#F5F0E9] rounded-xl p-8 shadow-md border border-[#D9CBC2]">
              <p className="text-[#112250] leading-relaxed whitespace-pre-line font-medium">
                {aftercare}
              </p>
              <div className="mt-6 p-4 bg-[#112250] rounded-lg border border-[#E0C58F]/20">
                <p className="text-sm text-[#E0C58F] font-bold">
                  <span className="uppercase tracking-widest text-[10px]">Pro Tip:</span> Follow these instructions for best results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
