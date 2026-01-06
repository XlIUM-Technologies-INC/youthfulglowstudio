import RootLayout from '@/components/layouts/RootLayout';
import { getServiceBySlug } from '@/lib/services';
import { Clock, Check, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FAQSection from '@/components/sections/FAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import IngredientsAftercare from '@/components/sections/IngredientsAftercare';

type Props = { params: { slug: string } };

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <RootLayout>
        <main className="flex items-center justify-center px-6 py-32">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Service not found</h2>
            <p className="text-gray-600 mt-4">We couldn't find that service.</p>
            <Link href="/services" className="text-[#5A95CD] hover:underline mt-6 inline-block">
              Back to services
            </Link>
          </div>
        </main>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-r from-[#5A95CD] to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <Link href="/services" className="text-blue-200 hover:text-white mb-4 inline-block">
              ← Back to services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-blue-100">{service.short}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left: Image & Info */}
            <div className="md:col-span-1">
              <img
                src={service.image}
                alt={service.title}
                className="w-full rounded-3xl shadow-xl object-cover h-96 mb-6"
              />

              {/* Quick Info Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-3xl font-bold text-[#5A95CD]">{service.price}</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <button
                  data-cal-namespace="demo"
                  data-cal-link={`hakim-kelly-ksltrj/${params.slug}`}
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                  className="w-full bg-linear-to-r from-[#5A95CD] to-blue-700 text-white font-semibold py-4 rounded-xl mb-3 hover:shadow-lg transition-all"
                >
                  Book This Service
                </button>

                <Link
                  href="/services"
                  className="w-full block text-center py-3 border border-blue-200 text-[#5A95CD] font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  View Other Services
                </Link>
              </div>
            </div>

            {/* Right: Content */}
            <div className="md:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">What is {service.title}?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {service.fullDescription}
                </p>
              </div>

              {/* Quick Benefits Grid */}
              <div className="mb-12 bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Benefits Section */}
        <section className="max-w-6xl mx-auto px-6">
          <BenefitsSection benefits={service.detailedBenefits} />
        </section>

        {/* Process Section */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <ProcessSection steps={service.process} />
        </section>

        {/* Ingredients & Aftercare */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <IngredientsAftercare
            ingredients={service.ingredients}
            aftercare={service.aftercare}
          />
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <TestimonialsSection testimonials={service.testimonials} />
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <FAQSection faqs={service.faqs} />
        </section>

        {/* CTA Section */}
        <section className="bg-linear-to-r from-[#5A95CD] to-blue-700 text-white py-16 mt-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the transformative benefits of {service.title} today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                data-cal-namespace="demo"
                data-cal-link="hakim-kelly-ksltrj/test"
                data-cal-config='{"layout":"month_view","theme":"light"}'
                className="px-8 py-3 bg-white text-[#5A95CD] font-semibold rounded-xl hover:bg-blue-50 transition-all"
              >
                Book Now
              </button>
              <Link
                href="/services"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                View Other Services
              </Link>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-blue-400">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 mb-2" />
                <p className="text-sm text-blue-100">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 mb-2" />
                <p className="text-sm text-blue-100">info@youthfulglow.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 mb-2" />
                <p className="text-sm text-blue-100">123 Beauty Lane, Wellness City</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </RootLayout>
  );
}
