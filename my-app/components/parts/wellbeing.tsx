"use client"
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function BlogInsightsSection() {
  interface Article {
    id: number;
    size: 'large' | 'small';
    title: string;
    description: string;
    image: string;
    category: string;
    content: string;
  }

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleOpenArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const articles = [
    {
      id: 1,
      size: 'large',
      title: "Facial Rejuvenation: The Ultimate Guide to Face Massages and Eye Masks",
      description: "Dive into the world of facial massages and the rejuvenating effects of eye masks. Discover how these skincare rituals can enhance your natural beauty, reduce puffiness, and promote a radiant complexion.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=800&fit=crop",
      category: "Facial Care",
      content: `
        <p>Facial rejuvenation is an essential part of any skincare routine. It's not just about looking good; it's about feeling refreshed and revitalized. One of the most effective methods for facial rejuvenation is a regular face massage. A good massage can improve blood circulation, which helps deliver oxygen and nutrients to your skin cells, resulting in a brighter, more youthful complexion. It also helps to stimulate the lymphatic system, which is crucial for removing toxins and reducing puffiness.</p>
        <p>When it comes to eye masks, they are a fantastic tool for targeting the delicate skin around your eyes. This area is often the first to show signs of aging, stress, and fatigue. Eye masks are infused with powerful ingredients like hyaluronic acid, collagen, and antioxidants, which help to hydrate, firm, and brighten the under-eye area. Regular use can significantly reduce the appearance of dark circles, fine lines, and crow's feet, leaving you with a more awake and vibrant look.</p>
        <p>For a complete facial rejuvenation experience, combine face massages with your favorite eye masks. Start with a gentle massage to prepare your skin, then apply the eye mask and relax for 15-20 minutes. This combination will not only enhance the physical benefits but also provide a calming and meditative experience, reducing stress and promoting overall well-being.</p>
      `
    },
    {
      id: 2,
      size: 'small',
      title: "Pamper Your Hands: The Art of Relaxing Hand Massages",
      description: "Explore the therapeutic benefits of hand massages and how they can alleviate tension and stress. Learn simple techniques to treat your hands to some well-deserved TLC.",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&h=400&fit=crop",
      category: "Hand Care",
      content: `
        <p>Our hands are one of the hardest working parts of our body, yet they are often neglected in our self-care routines. A relaxing hand massage is a simple yet profound way to show them some love. The benefits go beyond just feeling good; regular hand massages can improve flexibility and range of motion in the wrists and fingers, which is especially beneficial for those who spend long hours typing or doing manual work.</p>
        <p>The art of a good hand massage lies in the technique. Start by applying a nourishing lotion or oil to your hands. Use gentle, circular motions to massage the palm of your hand, then move to each finger, gently pulling and squeezing from the base to the tip. Don't forget to massage the back of your hand and your wrist area. This process helps to relieve muscle tension, reduce pain from conditions like arthritis, and promote relaxation.</p>
        <p>Incorporating hand massages into your daily routine can be a wonderful way to de-stress. You can do it while watching TV, listening to music, or as a calming ritual before bed. It's a small act of self-care that can make a big difference in your overall sense of well-being.</p>
      `
    },
    {
      id: 3,
      size: 'small',
      title: "Hair Rejuvenation: Unlock the Secrets to Lustrous Locks",
      description: "Dive into the world of hair treatment and discover effective ways to revitalize and maintain your hair's natural beauty. From deep conditioning to scalp massage, we'll guide you to the perfect hair care routine.",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop",
      category: "Hair Care",
      content: `
        <p>Beautiful, healthy hair starts with a healthy scalp. A regular scalp massage is one of the best-kept secrets to lustrous locks. It increases blood flow to the hair follicles, which promotes hair growth and strengthens the hair shaft. You can perform a scalp massage with your fingertips or use a specialized scalp massaging tool. For an extra treat, use a few drops of a nourishing oil like coconut or argan oil.</p>
        <p>Deep conditioning is another cornerstone of hair rejuvenation. Unlike regular conditioners, deep conditioners are formulated with more concentrated ingredients that penetrate the hair shaft to provide intense hydration and repair damage. For best results, apply a deep conditioner to your hair once a week. Leave it on for at least 20-30 minutes before rinsing. For even deeper penetration, you can cover your hair with a shower cap and apply gentle heat.</p>
        <p>Your hair care routine should be tailored to your specific hair type and concerns. Whether you have dry, oily, fine, or thick hair, there are products and treatments designed for you. Don't be afraid to experiment to find what works best. A consistent and thoughtful hair care routine will reward you with hair that is not only beautiful but also strong and healthy.</p>
      `
    },
    {
      id: 4,
      size: 'small',
      title: "Total Body Bliss: The Healing Power of Body Massages",
      description: "Embark on a journey of relaxation and rejuvenation with body massages. Uncover the physical and mental benefits of this timeless practice, from relieving muscle tension to reducing stress.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
      category: "Body Care",
      content: `
        <p>Body massage is a powerful practice that has been used for centuries to heal the body and soothe the mind. The physical benefits are numerous: it can relieve muscle soreness and tension, improve circulation, and increase flexibility. It's a wonderful way to recover after a strenuous workout or to simply unwind after a long day.</p>
        <p>But the benefits of body massage are not just skin deep. It has a profound impact on our mental and emotional well-being. A good massage can reduce stress and anxiety by lowering cortisol levels and increasing the production of endorphins, the body's natural feel-good chemicals. It can also improve sleep quality, leaving you feeling more rested and energized.</p>
        <p>There are many different types of body massages to choose from, each with its own unique benefits. From the gentle, flowing strokes of a Swedish massage to the deep, targeted pressure of a deep tissue massage, there is a massage style to suit every need and preference. Explore the different options and find the one that resonates with you. Your body and mind will thank you for it.</p>
      `
    }
  ];

  return (
    <Dialog>
      <div id="blog" className="py-20 bg-linear-to-br from-gray-50 via-white to-blue-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Beauty and Wellness <span className="text-blue-600">Insights</span>
            </h2>
          § ~§90-=-0987654wq    457
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
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
                  <DialogTrigger asChild onClick={() => handleOpenArticle(articles[0])}>
                    <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors group">
                      Continue Reading
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </DialogTrigger>
                </div>
              </div>
            </div>

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
                      <DialogTrigger asChild onClick={() => handleOpenArticle(article)}>
                        <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors text-sm group self-start">
                          Continue Reading
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                      </DialogTrigger>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex md:hidden justify-center mt-8">
            <Link href="/blog">
              <button className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
                See All
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <DialogContent className="max-w-3xl bg-white rounded-2xl shadow-2xl p-0">
        {selectedArticle && (
          <>
            <DialogHeader className="p-8 pb-0">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block self-start">
                {selectedArticle.category}
              </span>
              <DialogTitle className="text-3xl font-bold text-gray-900 leading-tight">
                  {selectedArticle.title}
                </DialogTitle>
                <DialogClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogHeader>
              <div 
                className="prose max-w-none p-8 pt-4 text-gray-700 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }} 
              />
            </>
          )}
        </DialogContent>
    </Dialog>
  );
}
