import RootLayout from "@/components/layouts/RootLayout";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function BookingPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Book Your Appointment</h1>
        <p className="text-xl opacity-90">Schedule your glow-up session today!</p>
      </section>

      {/* Cal.com Embed */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Select Your Service & Time</h2>
          <div className="bg-gray-50 rounded-2xl p-8 min-h-96 flex items-center justify-center">
            <div className="text-center">
              <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-4">Booking calendar will appear here</p>
              <p className="text-gray-500">Our booking system integrates seamlessly with your calendar</p>
              <div className="mt-8">
                <Link
                  href="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true"
                  data-cal-link="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true"
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                  className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Open Booking Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
            <p className="text-gray-600">Book in minutes and get instant confirmation</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-600">123 Beauty Lane, Wellness City, ST 12345</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Need Help?</h3>
            <p className="text-gray-600">Call us at +1 (555) 123-4567</p>
          </div>
        </div>
      </section>

      {/* CTA Back */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-600 mb-6">Not sure which service is right for you?</p>
        <Link href="/services" className="inline-block bg-blue-50 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-100 transition-colors">
          View All Services
        </Link>
      </section>
    </RootLayout>
  );
}
