"use client"
import { ArrowRight } from 'lucide-react';

export default function BlogInsightsSection() {
  const articles = [
    {
      id: 1,
      size: 'large',
      title: "Facial Rejuvenation: The Ultimate Guide to Face Massages and Eye Masks",
      description: "Dive into the world of facial massages and the rejuvenating effects of eye masks. Discover how these skincare rituals can enhance your natural beauty, reduce puffiness, and promote a radiant complexion",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=800&fit=crop",
      category: "Facial Care"
    },
    {
      id: 2,
      size: 'small',
      title: "Pamper Your Hands: The Art of Relaxing Hand Massages",
      description: "Explore the therapeutic benefits of hand massages and how they can alleviate tension and stress. Learn simple techniques to treat your hands to some well-deserved TLC.",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&h=400&fit=crop",
      category: "Hand Care"
    },
    {
      id: 3,
      size: 'small',
      title: "Hair Rejuvenation: Unlock the Secrets to Lustrous Locks",
      description: "Dive into the world of hair treatment and discover effective ways to revitalize and maintain your hair's natural beauty. From deep conditioning to scalp massage, we'll guide you to the perfect hair care routine.",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop",
      category: "Hair Care"
    },
    {
      id: 4,
      size: 'small',
      title: "Total Body Bliss: The Healing Power of Body Massages",
      description: "Embark on a journey of relaxation and rejuvenation with body massages. Uncover the physical and mental benefits of this timeless practice, from relieving muscle tension to reducing stress.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
      category: "Body Care"
    }
  ];

  return (
    <div id="blog" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
      {/* Decorative border lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Beauty and Wellness <span className="text-blue-600">Insights</span>
          </h2>
          <button className="hidden md:flex items-center gap-2 px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
            See All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Large Featured Article */}
          <div className="lg:row-span-2">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border-2 border-gray-900 hover:border-blue-600">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {articles[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {articles[0].title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {articles[0].description}
                </p>
                <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors group">
                  Continue Reading
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Small Articles */}
          <div className="space-y-6">
            {articles.slice(1).map((article) => (
              <div 
                key={article.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-900 hover:border-blue-600"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="relative md:col-span-2 h-48 md:h-full overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20"></div>
                  </div>
                  <div className="md:col-span-3 p-6 flex flex-col justify-between">
                    <div>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                        {article.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {article.description}
                      </p>
                    </div>
                    <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors text-sm group self-start">
                      Continue Reading
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile See All Button */}
        <div className="flex md:hidden justify-center mt-8">
          <button className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
            See All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}