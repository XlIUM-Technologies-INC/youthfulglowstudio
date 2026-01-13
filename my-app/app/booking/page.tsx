import RootLayout from "@/components/layouts/RootLayout";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function BookingPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="bg-[#112250] text-[#F5F0E9] py-24 text-center relative overflow-hidden border-b border-[#E0C58F]/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E0C58F] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#3C507D] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-6" style={{fontFamily: 'Playfair Display, serif'}}>Book Your Appointment</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#E0C58F] font-medium" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Schedule your glow-up session today!
          </p>
        </div>
      </section>

      {/* Cal.com Embed */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-[#E0C58F]/10">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#112250]" style={{fontFamily: 'Playfair Display, serif'}}>Select Your Service & Time</h2>
          <div className="bg-[#F5F0E9] rounded-2xl p-8 min-h-96 flex items-center justify-center border border-[#D9CBC2]">
            <div className="text-center">
              <Calendar className="w-16 h-16 text-[#E0C58F] mx-auto mb-4" />
              <p className="text-[#112250] text-xl mb-4 font-bold">Booking calendar will appear here</p>
              <p className="text-[#3C507D] font-medium">Our booking system integrates seamlessly with your calendar</p>
              <div className="mt-8">
                <Link
                  href="https://cal.com/youthfulglowstudiobookings?overlayCalendar=true"
                  className="bg-[#112250] text-[#F5F0E9] px-10 py-5 rounded-full font-bold hover:shadow-2xl transition-all inline-block hover:scale-105 transform border border-[#E0C58F]/30"
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
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-[#E0C58F]/10">
            <Clock className="w-12 h-12 text-[#E0C58F] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#112250]">Quick & Easy</h3>
            <p className="text-[#3C507D] font-medium">Book in minutes and get instant confirmation</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-[#E0C58F]/10">
            <MapPin className="w-12 h-12 text-[#E0C58F] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#112250]">Our Location</h3>
            <p className="text-[#3C507D] font-medium">1425A Block Line Road, Kitchener, Ontario</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-[#E0C58F]/10">
            <Phone className="w-12 h-12 text-[#E0C58F] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#112250]">Need Help?</h3>
            <p className="text-[#3C507D] font-medium">Call/Text us at (416) 577-6409</p>
          </div>
        </div>
      </section>

      {/* CTA Back */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-[#3C507D] mb-6 font-bold uppercase tracking-widest text-sm">Not sure which service is right for you?</p>
        <Link href="/services" className="inline-block bg-[#112250] text-[#F5F0E9] px-10 py-4 rounded-full font-bold hover:bg-[#3C507D] transition-all border border-[#E0C58F]/30 hover:scale-105 transform">
          View All Services
        </Link>
      </section>
    </RootLayout>
  );
}
