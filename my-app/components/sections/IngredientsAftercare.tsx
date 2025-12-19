import React from 'react';
import { Zap } from 'lucide-react';

interface IngredientsAfterCareProps {
  ingredients: string[];
  aftercare: string;
}

export default function IngredientsAftercare({ ingredients, aftercare }: IngredientsAfterCareProps) {
  return (
    <section className="py-16 bg-blue-50 rounded-3xl">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ingredients */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-600" />
              Premium Ingredients
            </h3>
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-gray-900">{ingredient}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Carefully selected for maximum efficacy
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Aftercare */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-green-600" />
              Aftercare Instructions
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {aftercare}
              </p>
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  💡 <span className="font-semibold">Pro Tip:</span> Follow these instructions for best results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
