import AboutSection from "@/components/parts/about";
import HeroSection from "@/components/parts/hero";
import RootLayout from "@/components/layouts/RootLayout";
import ServicesSection from "@/components/parts/services";
import TreatmentFinder from "@/components/parts/TreatmentFinder";

export default function HomePage() {
  return (
    <RootLayout>
      <HeroSection />
      
      {/* Treatment Discovery - Helping users choose */}
      <section id="discovery" className="bg-[#F5F0E9] py-10">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#112250] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Not sure <span className="text-[#3C507D]/40">where to start?</span>
          </h2>
          <p className="text-[#3C507D] font-medium mt-4">Let our discovery tool guide you to the perfect treatment for your skin goals.</p>
        </div>
        <TreatmentFinder />
      </section>

      <ServicesSection />
      <AboutSection />
    </RootLayout>
  );
}
